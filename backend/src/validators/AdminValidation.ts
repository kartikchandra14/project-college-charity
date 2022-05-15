import { body} from 'express-validator';
import Admin from "../models/Admin";

export class AdminValidators {
    constructor() {
        
    }

    static forgot(){
        return [body('email_id', 'Email is required.').isEmail().custom(async (result, { req }) => {
            const response = await Admin.find({ email_id: result });
            if (Boolean(response.length)) {
                req.userData = response[0]
                return true
            } else {
                req.errorStatus = 400; // 400 Unprocessable Entity
                throw new Error('The above email address does not exist in our system.')
            }
        })]
    }

    static resendotp() {
        return [body('email_id', 'Email is required.').isEmail().custom(async (result, { req }) => {
            const response = await Admin.find({ email_id: result });
            if (Boolean(response.length)) {
                req.userData = response[0]
                return true
            } else {
                req.errorStatus = 400; // 400 Unprocessable Entity
                throw new Error('The above email address does not exist in our system.')
            }
        })]
    }

    static checkOtp() {
        return [body('email_id', 'Email is required.').isEmail()
            .custom(async (result, { req }: any) => {
                const response = await Admin.find({ email_id: result });
                if (Boolean(response.length)) {
                    req.userData = response[0]
                    return true
                } else {
                    req.errorStatus = 400; // 400 Unprocessable Entity
                    throw new Error('The above email address does not exist in our system.')
                }
            })]
    }

    static createNewPassword() {
        return [body('email_id', 'Email is required.').isEmail()
            .custom(async (result, { req }) => {
                const response = await Admin.find({ email_id: result });
                if (Boolean(response.length)) {
                    req.userData = response[0]
                    return true
                } else {
                    req.errorStatus = 400; // 400 Unprocessable Entity
                    throw new Error('The above email address does not exist in our system.')
                }
            })
        ]
    }
}