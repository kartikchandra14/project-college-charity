import * as express from 'express';
import * as mongoose from 'mongoose';
import * as cors from 'cors';
import { Router } from "express";
import * as dotenv from 'dotenv';
dotenv.config({ path: './.env' });
import { getEnvironmentVariable } from './environments/env';
import Routes from './routers/Routes';

const rateLimit = require('express-rate-limit')

export class Server {
    public app: express.Application = express();

    apiRequestLimiter = rateLimit({
        windowMs: 1 * 60 * 1000, // 1 minute
        max: 20, // limit each IP to 20 requests per windowMs
        handler: function (req, res, /*next*/) {
            return res.status(429).json({
              error: 'You sent too many requests. Please wait a while then try again'
            })
        }
    })

    // Use the limit rule as an application middleware
    
    constructor() {
        this.setConfigurations();
        this.setRoutes();
        this.error404Handler();
        this.handleErrors();
        this.app.use(this.apiRequestLimiter);
    }

    setConfigurations() {
        this.enableCors();
        this.setMongodb();
        this.configBodyParser();
    }

    setMongodb() {
        mongoose.connect(getEnvironmentVariable().db_url, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log("Database connected");
        }).catch((e) => {
            console.log('failed');
        })
    }

    setRoutes() {
        this.app.use('/api', Routes);
    }

    enableCors() {
        this.app.use(
            cors({
                origin: true,
                credentials: true
            })
        );
    }

    configBodyParser() {
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
        this.app.use('/',express.static('./public-frontend/'));
    }

    error404Handler() {
        this.app.use((req, res) => {
            res.status(404).json({
                message: 'Route Not found',
                status_code: 404
            });
        })
    }

    handleErrors() {
        this.app.use((error, req, res, next) => {
            const errorStatus = req.errorStatus;
            res.status(errorStatus).json({
                message: error.message || 'Something went wrong!!',
                status_code: errorStatus
            })
        })
    }
}