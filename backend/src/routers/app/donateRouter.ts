// import { Router } from "express";
// import { DonateController } from "../../controllers/app/Donate";
// import { AuthMiddleWare } from "../../middleware/AuthMiddleware";

// export class DonateRouter {
//     public router: Router;
//     constructor() {
//         this.router = Router();
//         this.getRoutes();
//         this.postRoutes();
//         this.patchRoutes();
//         this.deleteRoutes();
//         this.putRoutes();
//     }
//     getRoutes() {
//     }

//     postRoutes(){
//         this.router.post('/',AuthMiddleWare.authenticate, DonateController?.addDonateData);
//     }
    
//     patchRoutes() {
//     }

//     putRoutes() {
//     }
//     deleteRoutes() {
//     }
// }
// export default new DonateRouter().router;