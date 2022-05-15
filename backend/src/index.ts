import { body } from 'express-validator';
import { Server } from './server';
const app = new Server().app;
//require('dotenv').config()
const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`server is started on port ${port}`);
});

app.use(function (req, res){
    console.log('called');
});






















