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
        this.router.post('/login',AuthController.login);
        this.router.post('/signup',AuthMiddleWare.checkUser,AuthController.signUp);
    }

    // patchRoutes() {
    // }

    putRoutes() {
    }
    // deleteRoutes() {
    // }
}
export default new AuthRouter().router;