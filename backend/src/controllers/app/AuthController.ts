import * as Bcrypt from 'bcrypt';
import * as formidable from "formidable";
/**Load Services */
import _RS from '../../services/ResponseService';
import sendGrid from '../../services/sendGridMailService';
/**Load Helpers */
import { GlobalHelper } from '../../helpers/GlobalHelper';
/**Load Models */
import User from '../../models/User';
import twilioMessageService from '../../services/twilioMessagService';
import UserRouter from '../../routers/app/UserRouter';

export class AuthController {   
	
	/**
	* @api {post} /auth/check-email Check Email
	* @apiVersion 1.0.0 
	* @apiGroup Auth
	* @apiParamExample {json} Request
	* {"email":"example@gmail.com"}
	* @apiSuccessExample {json} Success-Response:
	* {
	*	"status": 200,
	*	"message": "New User",
	*	"data": {
	*		"is_new_user": "1",
			"email": "example@gmail.com"
	*	}
	*}
	**/
		static async checkEmail(req,res){
			try{
				let user:any = await User.findOne({email: req.body.email});
				// console.log("checkEmail_1", req.body.email,  typeof user?.password, user?.password, user?.password?.length, user?.password != null);
				if(user?.email && user?.password?.length > 0 && user?.password != "null"){
					return _RS.ok(res,'Existing User',{is_new_user:'0', email: user.email});
				}
				if(user && user?.password == "null"){
					return _RS.ok(res,'Create account first',{is_new_user:'1', email:req.body.email});
				}
				// if(user){
				// 	console.log("checkEmail_2",user);
				// }
				else{
					const userSaveRes = await new User({email: req.body.email});
					await userSaveRes.save();
					// console.log("checkEmail_else", userSaveRes);
					return _RS.ok(res,'New User',{is_new_user:'1', email:req.body.email});
				}
			}
			catch (e) {
				console.log("checkEmail_catch_error", e);
				return _RS.serverError(res);
			}
		}

		/**
		* @api {post} /auth/login Login   
		* @apiVersion 1.0.0 
		* @apiGroup Auth
		* @apiParamExample {json} Request
		* {
		*"email":"example@gmail.com",
		*"password":"example@123"
		*}
		* @apiSuccessExample {json} Success-Response:
		* {
		*	"status": 200,
		*	"message": "Login Successfully.",
		*	"data": {
		*		"user": {
		*			"user_name": null,
		*			"email": "example@gmail.com",
		*			"dob": null,
		*			"profile_pic": null,
		*			"current_login_device": null,
		*			"muted_user": [],
		*			"address": null,
		*			"notification_status": true,
		*			"is_account_active": true,
		*			"last_login": "1643961239281",
		*			"account_status": "PENDING",
		*			"email_otp_code": null,
		*			"time_stamp": "1643961239281",
		*			"_id": "61fcdcc059eb653fa8241e76",
		*			"device_info": [],
		*			"created_at": "2022-02-04T07:58:56.879Z",
		*			"updatedAt": "2022-02-04T07:58:56.879Z",
		*			"__v": 0
		*		},
		*		"jwt_token": "ey"
		*	}
		*	}
		**/
		static async login(req,res){
			try{
				// console.log(req);
				const email = req.body.email;
				const password = req.body.password;
				// check email is valid
				let user: any = await User.findOne({ email: email });
				if (!user)
					return _RS.unauthorized(res,'Invalid email address.')

				else if(user.email_verify==false){

					return _RS.ok(res,'Email not verified.',{status : false});
				}
				else if (!user.is_account_active && user.account_status == "SUSPENDED") {            
					// === ACCOUNT SUSPEND CASE ================
					return _RS.unauthorized(res, "Your Account is Suspended. Please contact to Admin", {});
				} 
				else if (!user.is_account_active) {            
					// return _RS.unauthorized(res, "Your Account is Suspended. Please contact to Admin", {});
					// =======Account Blocke case =========================
					return _RS.unauthorized(res, "Your account has been locked. Please reset your password to login again.", {});
				} 
				const currentTimeStamp = Math.round(new Date().getTime());
				const differnceOfTimestamp = ((currentTimeStamp - user.last_login_try)/1000/60);
				if(differnceOfTimestamp  > 15){
					console.log("if_if", differnceOfTimestamp, user.last_login_try);
					user.login_try_count = 0;
					user.last_login_try = Math.round(new Date().getTime());
					await user.save();
				}
				else{
					console.log("if_else", user.login_try_count);
					user.login_try_count = user.login_try_count+1;
					await user.save();
				}
				if(user.login_try_count == 5){
					console.log("if_if_if");
					user.is_account_active = false;
					// user.account_status = "SUSPENDED";
					await user.save();
					return _RS.ok(res, 'Your account has been locked. Please reset your password to login again.', {status: false});

				}

				let payLoad = {
					_id: user._id,
					email: user.email            
				}
			 
				let token=GlobalHelper.generateJwtToken(payLoad);
				// const resOfMessage = await twilioMessageService?.sendMessage("hello", "+919716693838");
				// console.log("login_2", token);
				Bcrypt.compare(password, user.password, (async (err, same) => {
				if (same) {
					user.last_login = Math.round(new Date().getTime());                
					user.save();
					user=JSON.parse(JSON.stringify(user));
					delete user.password;  
					if(user?.current_avatar){
						// const avatar = await AvatarPic?.findOne({_id: user?.current_avatar});
						// if(avatar?.pic){
							user.current_avatar = await GlobalHelper?.getSignedS3Urls(user?.current_avatar);
						// }
					}
					if(user?.current_frame){
						// const frame = await Frame?.findOne({_id: user?.current_frame});
						// if(frame?.frame_img){
							user.current_frame = await GlobalHelper?.getSignedS3Urls(user?.current_frame);
						// }
					}
					let data = {
						user: user,
						jwt_token:token 
					}

					
					return _RS.ok(res, 'Login Successfully.', data);
				}
				else {
					return _RS.unauthorized(res, 'You have entered a wrong password.');
				}
			}));
		}
		catch (e) {
			console.log(e);
			return _RS.serverError(res);
		}
	}

	/**
		* @api {post} /auth/signup Sign Up    
		* @apiVersion 1.0.0 
		* @apiGroup Auth
		* @apiParamExample {json} Request
		* {
			"email":"example@gmail.com",
			"password":"example@1234",
			"nick_name":"cool",
			"refferal_code":"xyz123"
		*}
		* @apiSuccessExample {json} Success-Response:
		* {
		*	"status": 201,
		*	"message": "Otp generated",
		*	"data": {
		*	"user": {
            "nick_name": "cool",
            "refferal_code": "xyz123",
            "email": "example@gmail.com",
            "dob": null,
            "profile_pic": null,
            "current_login_device": null,
            "muted_user": [],
            "address": null,
            "notification_status": true,
            "is_account_active": true,
            "last_login": "1644226109853",
            "account_status": "PENDING",
            "email_otp_code": 6831,
            "email_verify": 0,
            "mobile_otp_code": null,
            "mobile_verify": 0,
            "time_stamp": "1644226109853",
            "_id": "6200e642f622d827ec524019",
            "device_info": [],
            "created_at": "2022-02-07T09:28:34.731Z",
            "updatedAt": "2022-02-07T09:31:59.447Z",
            "__v": 0
        *}
		*	}
		*}
		**/
		static async signUp(req,res){
			try{      
				let user:any = await User.findOne({email: req.body.email});
				// console.log("signUp_1", req.body.email, user, req.body.socialLogin, req.body?.platform);
				if(user){
					
					let data = {
						nick_name: req.body.nick_name ? req.body.nick_name : "",
						refferal_code: req.body.refferal_code ? req.body.refferal_code : "",
						country_code: req.body.country_code ? req.body.country_code : "",
						phone_number: req.body.phone_number ? req.body.phone_number : "",
						password: await Bcrypt.hash(req.body.password,10),
						platform: req.body.platform ? req.body.platform : "",
						socialLogin: req.body.socialLogin ? req.body.socialLogin : false
					}
					let user = await User.findOneAndUpdate(
						{
							email: req.body.email							
						},
						{
						$set: data
						}, { new: true });

						// console.log("signUp_1_if", resOfMail);
						// const resOfMail = await twilioMessageService?.sendMessage("hello second", "+91 9716693838");
						// console.log("signUp_1_if", resOfMail);
					if(req.body?.socialLogin){
						let jwt_token = await GlobalHelper.generateJwtToken({ _id: user._id, email: user.email });
						user.account_status='VERIFIED';
						user.email_verify=true;
						await user.save();
						user = JSON.parse(JSON.stringify(user));
						delete user.password;
						return _RS.recordCreated(res, 'User Successfully created', { user: user, token : jwt_token });
					}
					else{
						let jwt_token = await GlobalHelper.generateJwtToken({ _id: user._id, email: user.email }, "15m", user.account_status);
						// send verification mail
						const resOfMail = await sendGrid.sendOtpMail(user.email, jwt_token, user.nick_name); // 18 feb changes !!
						user = JSON.parse(JSON.stringify(user));
						delete user.password;
						return _RS.recordCreated(res, 'User Successfully created', { user: user });
					}
				}
				else{  
					return _RS.ok(res,'User Not Exist',{is_new_user:'0', email:req.body.email});
				}
			}
			catch (e) {
				console.log(e);
				return _RS.serverError(res);
			}
		}

		/**
		* @api {post} /auth/verify-otp Verify Email / Mobile number  
		* @apiVersion 1.0.0 
		* @apiGroup Auth		
		* @apiParamExample {json} Request
		* {"_id": "61adb4b179ef8e58aaafdfdb","otp_code": 6719, "type":"mobile"}
		* @apiSuccessExample {json} Success-Response:
		* {"status":200,"message":"Mobile number successfully verified.","data":{"user":{"first_name":null,"last_name":null,"nick_name":"kcm","refferal_code":"kcm_refer","email":"chandra.kartik01@gmail.com","dob":null,"address1":null,"address2":null,"city":null,"zip":null,"state":null,"profile_pic":null,"current_login_device":null,"muted_user":[],"address":null,"notification_status":true,"is_account_active":true,"last_login":"1644848704389","account_status":"VERIFIED","email_otp_code":null,"email_verify":0,"mobile_otp_code":5097,"mobile_verify":1,"socialLogin":true,"time_stamp":"1644843577981","_id":"620a5251ba3c3c83a96d9012","device_info":[],"created_at":"2022-02-14T13:00:01.402Z","updatedAt":"2022-02-14T14:25:04.390Z","__v":0,"country_code":"+91","phone_number":"9716693838","platform":"google"},"jwt_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjBhNTI1MWJhM2MzYzgzYTk2ZDkwMTIiLCJlbWFpbCI6ImNoYW5kcmEua2FydGlrMDFAZ21haWwuY29tIiwiaWF0IjoxNjQ0ODQ4NzA0LCJleHAiOjYwNjQ0NDg0ODcwNH0.jzF6ohIMavCZKVkmWrVcyEPv8TdGW2FgpVsd-Q1Yqk0"}}
		* @apiSuccessExample {json} Invalid Otp Response
		* {"status":400,"message":"Invalid otp","data":{}}
		* @apiSuccessExample {json} Failure Response
		* {"status":400,"message":"Invalid request.","data":{}}
		**/
		static async verifyOtp(req,res){
			try{
				let user:any= await User.findOne({ _id: req.data._id });
				// console.log("verifyOtp", user, req.data._id, req.body.type);
				if(user){

					// verify email address
					if(req.body.type=='email'){
						if(user.phone_otp_code==req.body.otp_code){

							user.account_status='VERIFIED';
							user.email_verify=true;
							user.is_account_active=true;
	
							user.last_login=Math.round(new Date().getTime());                          
							await user.save();
							// console.log(user);
							let jwt_token=await GlobalHelper.generateJwtToken({ _id: user._id, email: user.email });
							user=JSON.parse(JSON.stringify(user));


							delete user.password;
							return _RS.ok(res,'Email address successfully verified.',{user,jwt_token:jwt_token});   
						}
						else{
							return _RS.apiBadRequest(res,'Invalid otp',{});
						}

					}
					// verify mobile number
					else if(req.body.type=='mobile'){
						if(user.mobile_otp_code==req.body.otp_code){
							user.account_status='VERIFIED';
							user.mobile_verify=true;
							user.is_account_active=true;
	
							user.last_login=Math.round(new Date().getTime());                          
							await user.save();
							// console.log(user);
							let jwt_token=await GlobalHelper.generateJwtToken({ _id: user._id, email: user.email });
							user=JSON.parse(JSON.stringify(user));
							delete user.password;
							return _RS.ok(res,'Mobile number successfully verified.',{user,jwt_token:jwt_token});   
						}
						else{
							return _RS.apiBadRequest(res,'Invalid otp',{});
						}
					}
					else{
						return _RS.notFound(res,'Invalid type.',{})
					}					
				}
				else{
					return _RS.notFound(res,'User not found',{}); 
				}	           
			}
			catch (e) {
				console.log(e);
				return _RS.serverError(res);
			}
		}

		/**
		* @api {post} /auth/resend-otp Resend OTP / email Verification link   
		* @apiVersion 1.0.0 
		* @apiGroup Auth
		* @apiParamExample {json} Request
		* {"_id":"61fcdaa198a2c044288ccb7d", "type":"mobile"}
		* @apiSuccessExample {json} Success-Response:
		* {"status":200,"message":"Otp sent.","data":{ "_id": "61fcdaa198a2c044288ccb7d","mobile_otp_code":1491}}
		* @apiSuccessExample {json} Invalid Account
		* {"status":404,"message":"Account not found.","data":{}}
		**/
		static async resendOtp(req,res){
			try{
				let user:any= await User.findOne({ _id: req.body._id});
				if(user){
					// generete OTP
					const otp = await GlobalHelper.generateOtp();	

					if(req.body.type=="email"){										
						user.email_otp_code=otp;

						// send OTP to mail
						const resOfMail = await sendGrid.sendOtpMail(user.email, "otp", user.first_name);
						
						await user.save();
						return _RS.ok(res,'Mail sent.',{_id:user._id,email_otp_code:otp});
					}
					else {
						user.mobile_otp_code=otp;

						// send OTP to SMS
						// const resOfMail = await sendGrid.sendOtpMail(user.email, otp, user.first_name);
						
						await user.save();
						return _RS.ok(res,'OTP send on Mobile number.',{_id:user._id,mobile_otp_code:otp});
					}					
				}
				else
					return _RS.notFound(res,'Account does not exist.',{})
			}
			catch(e){
				return _RS.serverError(res,e,e._message);
			}
		}

		/**
		* @api {post} /auth/mobile-check Check Mobile   
		* @apiVersion 1.0.0 
		* @apiGroup Auth
		* @apiParamExample {json} Request
		* {"_id":"61fcdaa198a2c044288ccb7d"}
		* @apiSuccessExample {json} Success-Response:
		* {"status":200,"message":"Otp sent.","data":{ "_id": "61fcdaa198a2c044288ccb7d","otp_code":1491}}
		* @apiSuccessExample {json} Invalid Account
		* {"status":404,"message":"Account not found.","data":{}}
		**/
		static async mobileCheck(req,res){
			try{
				console.log("mobileCheck", req.data._id);
				let user:any= await User.findOne({ _id: req.data._id});
				if(user){
					if(req.body?.changeNumberFlag){
						user.country_code = req.body?.country_code;
						user.phone_number = req.body?.phone_number;
						// await user.save();
					}
					const otp = await GlobalHelper.generateOtp();					
					user.mobile_otp_code=otp;

					// send OTP to mobile number
					const resOfMessage = await twilioMessageService.sendMessage(otp?.toString(), user.country_code+user.phone_number);
					// console.log("mobileCheck_resOfMessage", resOfMessage);
					if(resOfMessage){
						await user.save();
						return _RS.ok(res,'We have send the OTP verification code on your given mobile number.',{_id:user._id}); // , mobile_otp_code:otp
					}
					else{
						return _RS.ok(res,'OTP failed for your mobile number.',{_id:user._id}); // , mobile_otp_code:otp
					}
				}
				else
					return _RS.notFound(res,'Account does not exist.',{});
			}
			catch(e){
				return _RS.serverError(res,e,e._message);
			}
		}		

		/**
		* @api {post} /auth/forget-password Forget Password   
		* @apiVersion 1.0.0 
		* @apiGroup Auth
		* @apiParamExample {json} Request
		* {"email":"example@gmail.com"}
		* @apiSuccessExample {json} Success-Response:
		* {"status":200,"message":"Mail sent.","data":{"_id":"61f0fb0a8a2c3136e8b5c492","otp_code":3962,"email":"example@gmail.com","jwt_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWYwZmIwYThhMmMzMTM2ZThiNWM0OTIiLCJpYXQiOjE2NDMxODQzOTAsImV4cCI6NjA2NDQzMTg0MzkwfQ.RJYwtK9Jns9U6wUTcz7EjhXZmUo8W1d8gFD50v13yGI"}}
		* @apiSuccessExample {json} Invalid login
		* {"status":404,"message":"Account not found.","data":{}}
		**/
		static async forgetPassword(req,res){
			try{
				let user:any=await User.findOne({email:req.body.email});
				if (!user)
					return _RS.notFound(res, 'Account not found.')
				else{
					// user.email_otp_code=await GlobalHelper.generateOtp();
					// await user.save();

					// console.log(user.email);
					// console.log(user.nick_name);
					
					// send Reset password link over mail
					let jwt_token = await GlobalHelper.generateJwtToken({ _id: user._id, email: user.email }, "15m" ,user?.password);

					const resOfMail = await sendGrid.sendResetPasswordLink(user.email, jwt_token, user.nick_name, 'user');
					// console.log("forgetPassword_1", resOfMail);

					return _RS.ok(res,'Mail sent.',{_id:user._id,email_otp_code:user.email_otp_code,type:user.type,email:req.body.email,jwt_token:jwt_token});
				}
			}
			catch (e) {
				console.log(e);
				return _RS.serverError(res);
			}
		}

		/**
		* @api {post} /auth/reset-password Reset password 
		* @apiVersion 1.0.0 
		* @apiGroup Auth 
		* @apiParamExample {json} Request
		* {"_id":"61f0fb0a8a2c3136e8b5c492","new_password":"example@123"}
		* @apiSuccessExample {json} Success-Response:
		* {"status":200,"message":"New Password has been set.","data":{}}
		* @apiSuccessExample {json} Invalid Account
		* {"status":404,"message":"Account not found.","data":{}}
		**/
	 
		static async resetPassword(req,res){
			try{
				const password = req.body.password;
				if(password){
					// console.log("resetPassword_1", req.data._id);
					let user:any= await User.findOne({ _id: req.data._id});
					if(user){					
						user.password=await Bcrypt.hash(password,10);
						user.is_account_active = true;
						user.save();
						user=JSON.parse(JSON.stringify(user));
						delete user.password;
						// after forgot password if user reset password then this occur
						let jwt_token = await GlobalHelper.generateJwtToken({ _id: user._id, email: user.email }, "15m", user?.account_status);
						const emailForVerifcationOfPasswordChange =  await sendGrid?.sendResetPasswordVerificationToUser(user.email, jwt_token, user.nick_name, 'user');
						if(emailForVerifcationOfPasswordChange){
							return _RS.ok(res,'New Password has been set.',{user});			
						}
						
					}
					else
						return _RS.notFound(res,'Account does not exist.',{})
				}
				else{
					return _RS.notFound(res,'Password not found.',{})
				}
			}
			catch(e){
				return _RS.serverError(res,e,e._message);
			}
		} 

	/**
	* @api {post} /auth/basic-info Basic Info   
	* @apiVersion 1.0.0 
	* @apiGroup Auth
	* @apiParamExample {json} Request
	* { "first_name":"test name", "last_name":"test last name", "gender":"MALE", "dob":"1993-04-22"}
	* @apiSuccessExample {json} Success-Response:
	* {"status": 200, "message": "Basic information submitted successfully.", "data": {} }
	* @apiSuccessExample {json} Invalid Account
	* {"status":404,"message":"Account not found.","data":{}}
	**/
	static async basicInfo(req,res){
		try{
			let user:any= await User.findOne({ _id: req.data._id});
			if(user){					
				user.first_name=req.body.first_name;
				user.last_name=req.body.last_name;
				user.gender=req.body.gender;
				user.dob=req.body.dob;
				user.save();
				return _RS.ok(res,'Basic information submitted successfully.',{});					
			}
			else
				return _RS.notFound(res,'Account does not exist.',{})
		}
		catch(e){
			return _RS.serverError(res,e,e._message);
		}
	}

	/**
	* @api {post} /auth/verification User Email Verification
	* @apiVersion 1.0.0 
	* @apiGroup Auth
	* @apiParamExample {json} Request
	* {}
	* @apiSuccessExample {json} Success-Response:
	* {"status": 200, "message": "Account email verified successfully.", "data": {} }
	* @apiSuccessExample {json} User not found
	* {"status":404,"message":"User not found","data":{}}
	**/
	static async verification(req,res){ // verification of email id with account_status only (Single time)
		try{
			if(req.body.email){
				let user:any = await User.findOne({email: req.body.email});
				// console.log("verification_1", req.body.email, user , user?.password);
				if(user && user?.password?.length > 0){
					user.account_status =  "UNVERIFIED_PHONE_NUMBER";
					user.email_verify=true;
					user.save();
					let payLoad = { _id: user._id, email: user.email };
					let token = GlobalHelper.generateJwtToken(payLoad);
					return _RS.ok(res,'Account email verified successfully.',{ email:req.body.email, account_status: user.account_status, token: token });
				}
				else{
					return _RS.ok(res,'Need to create account properly first.',{ email:req.body.email});
				}
			}
			else{
				return _RS.notFound(res,'User not found',{ email:req.body.email});
			}
		}
		catch (e) {
			console.log("checkEmail_catch_error", e);
			return _RS.serverError(res);
		}
	}

	/**
	* @api {post} /auth/verification User Email Verification
	* @apiVersion 1.0.0 
	* @apiGroup Auth
	* @apiParamExample {json} Request
	* {}
	* @apiSuccessExample {json} Success-Response:
	* {"status": 200, "message": "Account email verified successfully.", "data": {} }
	* @apiSuccessExample {json} User not found
	* {"status":404,"message":"User not found","data":{}}
	**/
	static async geUserInfo(req, res){
		try{
			// console.log("geUserInfo", req.data?.email);
			let user  = await User.findOne({email: req.data?.email})?.lean();
			
			if(user){
				return _RS.ok(res,'User information.',user);
			}
			else{
				return _RS.ok(res,'No user found.', {status: false});
			}
		}
		catch(error){
			return _RS.serverError(res);
		}
	}



	// {"status":200,"message":"User Not Exist","data":{"is_new_user":"0"}}
	
	static async resendMail(req, res){ // after account creation if user try to resend verification link on mail !!
		try{
			const emailId = req.body.email;
			const userExist = await User.findOne({email: emailId});
			if(emailId){
				let jwt_token = await GlobalHelper.generateJwtToken({ _id: userExist._id, email: userExist.email }, "15m", userExist?.account_status);
				const resOfMail = await sendGrid.sendOtpMail(userExist.email, jwt_token, userExist.nick_name);
				if(resOfMail){
					return _RS.ok(res, "Email sent.",{status: true});
				}
				else{
					return _RS.ok(res, "Email not sent.",{status: false});
				}
			}
			else{
				return _RS.unauthorized(res, "User not found.",{status: false});
			}
		}
		catch(error){
			console.log("resendMail_error", error);
			return _RS.serverError(res,error,error._message);
		}
	}

	
	static async changePassword(req, res){
		const password = req.body.password;
		const newPassword = req.body.newPassword;
		if(password){
			console.log("changePassword_1", req.data._id);
			let user:any = await User.findOne({ _id: req.data._id});
			if(user){
				// ==
				Bcrypt.compare(password, user.password, ( async (err, same) => {
					if (same) {
						user.last_login = Math.round(new Date().getTime());                
						user.password= await Bcrypt.hash(newPassword,10);
						user.save();
						user=JSON.parse(JSON.stringify(user));
						delete user.password; 

						// after change password ==> user reset password then this occur
						let jwt_token = await GlobalHelper.generateJwtToken({ _id: user._id, email: user.email }, "15m", user?.account_status);
						const emailForVerifcationOfPasswordChange =  await sendGrid?.sendResetPasswordVerificationToUser(user.email, jwt_token, user.nick_name, 'user');
						if(emailForVerifcationOfPasswordChange){
							return _RS.ok(res,'New Password has been set.',{user});
						}
					}
					else {
						return _RS.unauthorized(res, 'You have entered a wrong password.');
					}
				}));
				// ==
			}
			else
				return _RS.notFound(res,'Account does not exist.',{})
		}
		else{
			return _RS.notFound(res,'Password not found.',{})
		}
	}


	// To suspend a account if user request from mail to web Then web will call api for SUSPEND account !!
	
	static async accountSuspend(req, res){
		try{
			const userInfo = await User.findOne({email: req.data?.email});
			if(userInfo){
				userInfo.account_status = "SUSPENDED";
				userInfo.is_account_active = false;
				userInfo?.save();
				const accountSuspendMailConfirmationSend = await sendGrid?.sendAccountSuspendMail(userInfo.email, userInfo.nick_name, 'user');
				return _RS.ok(res, "Account suspend.",{status: true});
			}
			else{
				return _RS.ok(res, "Account not found.",{status: false});
			}
		}
		catch(error){
			console.log("accountSuspend_error", error);
			return _RS.serverError(res, error, error._message);
		}
	}



	static async sample(req, res){
		try{
			return _RS.ok(res, "sent.",{status: true});
		}
		catch(error){
			console.log("sample_error", error);
			return _RS.serverError(res, error, error._message);
		}
	}


}