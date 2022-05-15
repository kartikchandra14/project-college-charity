import { Router } from "express";
import { AuthController } from "../../controllers/app/AuthController";
import { UserController } from "../../controllers/app/UserController";
import {UserValidators} from "../../validators/UserValidation";
import { AuthMiddleWare } from "../../middleware/AuthMiddleware";

export class AuthRouter {
    public router: Router;
    constructor() {
        this.router = Router();
        this.getRoutes();
        this.postRoutes();
        // this.patchRoutes();
        // this.deleteRoutes();
        this.putRoutes();
    }
    getRoutes() {     
    }
    
    postRoutes() {
        this.router.post('/check-email',AuthController.checkEmail);
        this.router.post('/login',AuthMiddleWare.checkUser,AuthController.login);
        this.router.post('/signup',AuthMiddleWare.checkUser,AuthController.signUp);
        this.router.post('/verify-otp',AuthMiddleWare.authenticate,AuthController.verifyOtp); 
        this.router.post('/resend-otp',AuthController.resendOtp);

       
        this.router.post('/verification',AuthMiddleWare.authenticateForVerifcation,AuthController.verification); 
        this.router.get('/get-user-info',AuthMiddleWare.authenticate,AuthController.geUserInfo); 
        
        // Routes after login
        this.router.post('/mobile-check',AuthMiddleWare.authenticate,AuthController.mobileCheck);
        this.router.post('/basic-info',AuthMiddleWare.authenticate,AuthController.basicInfo);        

        this.router.post('/forget-password',AuthMiddleWare.checkUser,AuthController.forgetPassword);
        this.router.post('/reset-password',AuthMiddleWare.authenticateForVerifcationOfResetPassword,AuthController.resetPassword);
        
        this.router.post('/resend-mail',AuthMiddleWare.checkUser, AuthController.resendMail);

        this.router.post("/change-password", AuthMiddleWare?.authenticate, AuthController?.changePassword); // 16 feb
       this.router.post("/account-suspend", AuthMiddleWare?.authenticateForVerifcation, AuthController?.accountSuspend); // 22 feb
    //  validate token on changing password at web
        this.router.post('/reset-password-token-check',AuthMiddleWare.authenticateForVerifcationOfResetPasswordWithResponse);

        

    }

    // patchRoutes() {
    // }

    putRoutes() {
        // this.router.put('/change-phonenumber',AuthMiddleWare.authenticate,AuthMiddleWare.checkPhoneNumber,AuthController.changePhoneNumber);      
    }
    // deleteRoutes() {
    // }
}
export default new AuthRouter().router;