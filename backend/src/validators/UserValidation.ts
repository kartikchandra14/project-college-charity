import { body, validationResult } from 'express-validator';
import User from '../models/User';
import ResponseService from '../services/ResponseService';
import _RS from '../services/ResponseService';

export class UserValidators {
    constructor() {

    }

    static signUp() {
        return [body('email_id', 'Email is required.').isEmail().custom(async (result, { req }) => {

            const user = await User.findOne({ email_id: result });
            if (user) {
                req.errorStatus = 409; // 409 Unprocessable Entity
                throw new Error('This email is already registered.');
            } else {
                return true;
            }
        }),
        body('mobile', 'Mobile No. is required.').isMobilePhone('any').custom(async (result, { req }) => {
            const mob = await User.findOne({ mobile: result });
            if (mob) {
                req.errorStatus = 409; // 409 Unprocessable Entity
                throw new Error('This mobile is already registered.');
            } else {
                return true;
            }
        }),
        body('password', 'Password is required.').notEmpty().isLength({ min: 8 }).isStrongPassword()
        .withMessage('Password must contain at least 1 Number, 1 Special Character, 1 Lowercase, and 1 Uppercase Letter and Minmum length is 8.')
        ]
    }

    static login() {
        console.log('login validation....');
        return [body('password', 'Password is required.').exists().isLength({min:8}).isStrongPassword()
            .withMessage('Password must contain at least 1 Number, 1 Special Character, 1 Lowercase, and 1 Uppercase Letter and Minmum length is 8.'),
        body('email_id', 'Email is required').isEmail().custom(async (result, { req }) => {
            const response = await User.find({ email_id: result });
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

    static loginSignUp() {
        console.log('login validation....');
        return [body('password', 'Password is required.').exists().isLength({min:8}).isStrongPassword()
            .withMessage('Password must contain at least 1 Number, 1 Special Character, 1 Lowercase, and 1 Uppercase Letter and Minmum length is 8.'),
        body('email_id', 'Email is required').isEmail().custom(async (result, { req }) => {
            const response = await User.find({ email_id: result });
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

    static userLoginAccountStatus(){
        return [body('email_id','Email is Required').custom(async(result,{req})=>{
            const response = await User.findOne({email_id: result});
            if (response.is_account_active == true) {
                return true;
            } else {
                req.errorStatus = 401;
                throw new Error("Your account is inActive please contact to Admin.");
            }
        })
        ]
    }
    static userAccountStatus(){
        return [body('email_id','Email is Required').custom(async(result,{req})=>{
            const response = await User.findOne({_id:req.userData._id});
            if (response.is_account_active == true) {
                return true;
            } else {
                req.errorStatus = 401;
                throw new Error("Your account is inActive please contact to Admin.");
            }
        })
        ]
    }

    static userLoginAccountBanType(){
        return [body('email_id','Email is Required').custom(async(result,{req})=>{
            const response = await User.findOne({email_id: result});
            let currentDate = new Date().getDate()
            let startDate = response.startDate;
            let endDate = response.endDate;
            let difference = endDate - startDate;
            let banUser = "";
            if (currentDate > difference) {
                await User.updateOne({email:result},{banType:banUser});
                return true;
            }else{
                if (response.banType == 'temporarily') {
                    req.errorStatus = 401;
                    throw new Error("Your account is Temporarily Ban please contact to Admin.");
                }else if (response.banType == 'permanently') {
                    req.errorStatus = 401;
                    throw new Error("Your account is Permanently Ban please contact to Admin.");
                } else {
                    return true;
                }
            }
        })
    ]
    }
    static userAccountBanType(){
        return [body('email_id','Email is Required').custom(async(result,{req})=>{
            const response = await User.findOne({_id:req.userData._id});
            let currentDate = new Date().getDate()
            let startDate = response.startDate;
            let endDate = response.endDate;
            let difference = endDate - startDate;
            let banUser = "";
            if (currentDate > difference) {
                await User.updateOne({email:result},{banType:banUser});
                return true;
            }else{
                if (response.banType == 'temporarily') {
                    req.errorStatus = 401;
                    throw new Error("Your account is Temporarily Ban please contact to Admin.");
                }else if (response.banType == 'permanently') {
                    req.errorStatus = 401;
                    throw new Error("Your account is Permanently Ban please contact to Admin.");
                } else {
                    return true;
                }
            }
        })
    ]
    }

    static forgot() {
        return [body('email_id', 'Email is required.').isEmail().custom(async (result, { req }) => {
            const response = await User.find({ email_id: result });
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
            const response = await User.find({ email_id: result });
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
                const response = await User.find({ email_id: result });
                if (Boolean(response.length)) {
                    req.userData = response[0]
                    return true
                } else {
                    req.errorStatus = 400; // 400 Unprocessable Entity
                    throw new Error('The above email address does not exist in our system.')
                }
            })]
    }

    static verifypro() {
        return [body('email_id', 'Email is required.').isEmail()
            .custom(async (result, { req }: any) => {
                const response = await User.find({ email_id: result });
                if (Boolean(response.length)) {
                    req.errorStatus = 409; // 409 Unprocessable Entity
                throw new Error('This email is already registered.');
                } else {
                    return true;
                }
            })]
    }



    static createNewPassword() {
        return [body('password','Password is required').notEmpty().isLength({ min: 8 }).isStrongPassword().custom((result, { req }) => {
                console.log('password', result);
                if (result == null){
                    console.log('pwd', result);
                    req.errorStatus = 400;
                    throw new Error('Password is required.')
                }else if(result.length < 8){
                    console.log('strong',result);
                    req.errorStatus = 400;
                    throw new Error('Password must contain at least 1 Number, 1 Special Character, 1 Lowercase, and 1 Uppercase Letter and Minmum length is 8.')
                } else {
                    console.log('elsepwd', result);
                    return true
                }
            }),
        body('email_id', 'Email is required.').isEmail()
            .custom(async (result, { req }) => {
                const response = await User.find({ email_id: result });
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
    static editProfile() {
        return [
            body('email_id', 'Email is required').isEmail().custom(async (result, { req }) => {
                const response = await User.find({ email_id: result });
                if (!Boolean(response.length)) {
                    return true
                } else {
                    req.errorStatus = 400; // 400 Unprocessable Entity
                    throw new Error('The above email address already exist in our system.')
                }
            })
        ]
    }

}