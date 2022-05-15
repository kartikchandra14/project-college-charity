import { Router } from "express";
import { ContactUsController } from "../../controllers/app/ContactUs";
import { AuthMiddleWare } from "../../middleware/AuthMiddleware";

export class ContactUsRouter {
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
        this.router.post('/',AuthMiddleWare.authenticate, ContactUsController.addContactUsData);
    }
    
    patchRoutes() {
    }

    putRoutes() {
    }
    deleteRoutes() {
    }
}
export default new ContactUsRouter().router;