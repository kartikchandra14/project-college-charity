import { Router } from "express";

//App routes
import Authrouter from '../routers/app/AuthRouter';
import UserRouter from "./app/UserRouter";

export class Routes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.app();
    }

    app() {
        this.router.use('/app/auth', Authrouter);
        this.router.use('/app/user',UserRouter);        
    }

}
export default new Routes().router;