import { Router } from "express";
import { VolunteerController } from "../../controllers/app/Volunteer";
import { AuthMiddleWare } from "../../middleware/AuthMiddleware";

export class VolunteerRouter {
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
        this.router.post('/',AuthMiddleWare.authenticate, VolunteerController?.addVolunteerData);
    }
    
    patchRoutes() {
    }

    putRoutes() {
    }
    deleteRoutes() {
    }
}
export default new VolunteerRouter().router;