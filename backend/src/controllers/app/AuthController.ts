import * as Bcrypt from 'bcrypt';
import * as formidable from "formidable";
/**Load Services */
import _RS from '../../services/ResponseService';
/**Load Helpers */
import { GlobalHelper } from '../../helpers/GlobalHelper';
/**Load Models */
import User from '../../models/User';
import UserRouter from '../../routers/app/UserRouter';

export class AuthController {   
	
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

		static async login(req,res){
			try{
				// console.log(req);
				const email = req.body.email;
				const password = req.body.password;
				if(!email || !password){
					return _RS.unauthorized(res,'Email or Password .')
				}
				// check email is valid
				let user: any = await User.findOne({ email: email });
				console.log("login", user);
				if (!user){
					return _RS.unauthorized(res,'Invalid email address.')
				}

				let payLoad = {
					_id: user._id,
					email: user.email            
				}
			 
				let token=GlobalHelper.generateJwtToken(payLoad);
				Bcrypt.compare(password, user.password, (async (err, same) => {
				if (same) {
					user.last_login = Math.round(new Date().getTime());                
					user.save();
					user=JSON.parse(JSON.stringify(user));
					delete user.password;  
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

		static async signUp(req,res){
			try{     
				if(!req?.body?.email){
					return _RS.notFound(res,'Email not found',{status: false});
				}
				let user:any = await User.findOne({email: req.body.email});
				if(user){
					return _RS.existConflict(res,'Email already exist',{status: false});
				}
				else{  
					let data = {
						email: req.body.email ? req.body.email : "",
						password: await Bcrypt.hash(req.body.password,10),
					}

					const userSaveRes = await new User(data);
					let userCreated  = await userSaveRes.save();
					// console.log("checkEmail_else", userSaveRes);
					if(userCreated){
						return _RS.recordCreated(res,'New User',{is_new_user:'1', email:req.body.email});
					}
					else{
						return _RS.ok(res,'New User',{status: false});
					}
				}
			}
			catch (e) {
				console.log(e);
				return _RS.serverError(res);
			}
		}

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


		static async resendOtp(req,res){
			try{
				let user:any= await User.findOne({ _id: req.body._id});
				if(user){
					// generete OTP
					const otp = await GlobalHelper.generateOtp();	

					if(req.body.type=="email"){										
						user.email_otp_code=otp;
						await user.save();
						return _RS.ok(res,'Mail sent.',{_id:user._id,email_otp_code:otp});
					}
					else {
						user.mobile_otp_code=otp;
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

					await user.save();
					return _RS.ok(res,'We have send the OTP verification code on your given mobile number.',{_id:user._id}); // , mobile_otp_code:otp
					// else{
						// return _RS.ok(res,'OTP failed for your mobile number.',{_id:user._id}); // , mobile_otp_code:otp
					// }
				}
				else
					return _RS.notFound(res,'Account does not exist.',{});
			}
			catch(e){
				return _RS.serverError(res,e,e._message);
			}
		}		


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


					return _RS.ok(res,'Mail sent.',{_id:user._id,email_otp_code:user.email_otp_code,type:user.type,email:req.body.email,jwt_token:jwt_token});
				}
			}
			catch (e) {
				console.log(e);
				return _RS.serverError(res);
			}
		}


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
						return _RS.ok(res,'New Password has been set.',{user});			
						
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



	static async resendMail(req, res){ // after account creation if user try to resend verification link on mail !!
		try{
			const emailId = req.body.email;
			const userExist = await User.findOne({email: emailId});
			if(emailId){
				let jwt_token = await GlobalHelper.generateJwtToken({ _id: userExist._id, email: userExist.email }, "15m", userExist?.account_status);
				return _RS.ok(res, "Email sent.",{status: true});
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
						return _RS.ok(res,'New Password has been set.',{user});
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