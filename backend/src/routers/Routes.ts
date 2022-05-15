import { Router } from "express";

//App routes
import Authrouter from '../routers/app/AuthRouter';
import  ContactUsRouter  from "./app/contactUsRouter";
import UserRouter from "./app/UserRouter";
import  VolunteerRouter  from "./app/volunteerRouter";

export class Routes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.app();
    }

    app() {
        this.router.use('/app/auth', Authrouter);
        this.router.use('/app/user',UserRouter);
        this.router.use('/app/contact', ContactUsRouter);      
        this.router.use('/app/volunteer', VolunteerRouter);
    }

}
export default new Routes().router;