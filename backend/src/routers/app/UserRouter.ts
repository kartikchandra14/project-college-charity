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
        this.router.get('/get-all-users',AuthMiddleWare.authenticate, UserController.getAllUsers);
        this.router.get('/search',AuthMiddleWare.authenticate, UserController.searchUsers);
        this.router.get('/detail/:user_id',AuthMiddleWare.authenticate, UserController.getUsersDetailByUserId);        
    }

    postRoutes(){
    }
    
    patchRoutes() {
        this.router.patch('/',AuthMiddleWare.authenticate, UserController.updateUserDetails);
    }

    putRoutes() {
        // this.router.put('/update-profile',AuthMiddleWare.authenticate,UserController.updateProfile)
        // this.router.put('/update-interests',AuthMiddleWare.authenticate,UserController.updateInterest);
    }
    deleteRoutes() {
        this.router.delete('/delete-account',AuthMiddleWare.authenticate,UserController.deleteAccount)
    }
}
export default new UserRouter().router;