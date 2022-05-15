import { Router } from "express";
import { UserController } from "../../controllers/app/UserController";
import { AuthMiddleWare } from "../../middleware/AuthMiddleware";

export class UserRouter {
    public router: Router;
    constructor() {
        this.router = Router();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
        this.putRoutes();
    }
    getRoutes() {
    }

    postRoutes(){
    }
    
    patchRoutes() {
        this.router.patch('/',AuthMiddleWare.authenticate, UserController.updateUserDetails);
    }

    putRoutes() {
    }
    deleteRoutes() {
        this.router.delete('/delete-account',AuthMiddleWare.authenticate,UserController.deleteAccount)
    }
}
export default new UserRouter().router;