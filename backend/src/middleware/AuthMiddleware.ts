import _RL from '../services/ResponseService'
import * as Jwt from 'jsonwebtoken';
import User from '../models/User';
import _RS from '../services/ResponseService';
import { GlobalHelper } from '../helpers/GlobalHelper';

export class AuthMiddleWare {  
    static token;
    static authenticate(req, res, next) {

        AuthMiddleWare.token = req.headers.authorization;        
        if (!AuthMiddleWare.token)
            return _RL.unauthorized(res, 'Invalid token. Please try login again.', {});
        AuthMiddleWare.token = AuthMiddleWare.token.replace(/^Bearer\s+/, "");
        Jwt.verify(AuthMiddleWare.token, process.env.JWT_KEY, (err, decoded) => {
            if (err) {
                console.log(err);
                return _RL.unauthorized(res, 'Failed to authenticate user.', {});
            }            
            req.data = decoded;
            console.log('decoded is', req.data);
            next();
        });
    };

    static async checkUser(req,res,next){
        let user:any=await User.findOne({
            $or:[
                { email: req.body.email},
            ]
        });
        
        if(user && user.email==req.body.email.toLowerCase() ){
            return _RS.existConflict(res,'Email already exists',{});
            next();
        }
        else{
            // return _RS.notFound(res,'User not found..',{});
            next();
        }
        // else
            // next();
    }


    static async authenticateForVerifcation(req, res, next) {

        let token = req.headers.authorization;
        let emailId = req.body.email;
        if(emailId){
            if (!token)
            return _RL.unauthorized(res, 'Invalid token. Please try login again.', {});
            let userInfo = await User.findOne({email: emailId});
            token = token.replace(/^Bearer\s+/, "");
            let key = userInfo?.account_status ? process.env.JWT_KEY + userInfo?.account_status : process.env.JWT_KEY;
            // console.log("authenticateForVerifcation", token, emailId, key, userInfo?.account_status);
            Jwt.verify(token, key , (err, decoded) => {
                if (err) {
                    console.log(err);
                    return _RL.unauthorized(res, 'Failed to authenticate user.', {});
                }            
                req.data = decoded;
                // console.log('authenticateForVerifcation_decoded_is_', req.data);
                next();
            });
        }
        else{
            return _RL.unauthorized(res, 'Failed to authenticate user.', {}); 
        }
    };

    static async authenticateForVerifcationOfResetPassword(req, res, next) {

        let token = req.headers.authorization;
        let emailId = req.body.email;
        if(emailId){
            if (!token)
            return _RL.unauthorized(res, 'Invalid token. Please try login again.', {});
            let userInfo = await User.findOne({email: emailId});
            token = token.replace(/^Bearer\s+/, "");
            let key = userInfo?.password ? process.env.JWT_KEY + userInfo?.password : process.env.JWT_KEY;
            // console.log("authenticateForVerifcationOfResetPassword", token, emailId, key, userInfo?.password);
            Jwt.verify(token, key , (err, decoded) => {
                if (err) {
                    console.log(err);
                    return _RL.unauthorized(res, 'Failed to authenticate user.', {});
                }            
                req.data = decoded;
                // console.log('authenticateForVerifcationOfResetPassword_decoded_is_', req.data);
                next();
            });
        }
        else{
            return _RL.unauthorized(res, 'Failed to authenticate user.', {}); 
        }
    };

    /**
     * Check phone number whether it's exist or not
     */
    static async checkPhoneNumber(req,res,next){
        let user:any=await User.findOne({                           
            country_code:req.body.country_code,
            phone_number:req.body.phone_number,
            _id:{$ne:req.data._id}           
        });        
        if(user)
            return _RS.existConflict(res,'Phone number already exists.',{});
        else
            next();
    }

    static async authenticateForVerifcationOfResetPasswordWithResponse(req, res, next) {

        let token = req.headers.authorization;
        let emailId = req.body.email;
        if(emailId){
            if (!token)
            return _RL.unauthorized(res, 'Invalid token. Please try login again.', {});
            let userInfo = await User.findOne({email: emailId});
            token = token.replace(/^Bearer\s+/, "");
            let key = userInfo?.password ? process.env.JWT_KEY + userInfo?.password : process.env.JWT_KEY;
            // console.log("authenticateForVerifcationOfResetPassword", token, emailId, key, userInfo?.password);
            Jwt.verify(token, key , (err, decoded) => {
                if (err) {
                    console.log(err);
                    return _RL.unauthorized(res, 'Failed to authenticate user.', {});
                }            
                req.data = decoded;
                // console.log('authenticateForVerifcationOfResetPasswordWithResponse_decoded_is', req.data);
                return _RL.ok(res, 'Valid token. Please try.', {});
            });
        }
        else{
            return _RL.unauthorized(res, 'Failed to authenticate user.', {}); 
        }
    };
    
}