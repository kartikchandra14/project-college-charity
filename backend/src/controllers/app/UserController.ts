import * as Bcrypt from 'bcrypt';
import * as formidable from "formidable";
/**Load Services */
import _RS from '../../services/ResponseService';
/**Load Helpers */
import { GlobalHelper } from '../../helpers/GlobalHelper';
/**Load Models */
import User from '../../models/User';
import * as mongoose from "mongoose";

export class UserController {
    
    /**
    * @api {delete} /app/user/delete-account Delete Account
    * @apiVersion 1.0.0 
    * @apiGroup User Profile & Settings
    * @apiHeader {String} Authorization Pass jwt token.  
    * @apiSuccessExample {json} Success-Response:
    * {"status":200,"message":"Account deleted successfully.","data":{}}
    **/
   
    static async deleteAccount(req,res){
        try{
            let user=await User.findOne({_id:req.data._id});
            await user.delete();
            return _RS.ok(res,'Account deleted successfully.',{});
        }
        catch(e){
            return _RS.serverError(res, e, e._message);
        }
    }

    static async getAllUsers(req,res){
		try{ 
            console.log(req.query.page)
            let page = req.query.page ? req.query.page : 1; 
            const PAGE_SIZE = 10;                  
            const skip = (page - 1) * PAGE_SIZE;

            let queryData = {is_account_active: true};
            let userData:any = await User.aggregate([ 
                {
                    $match:queryData,
                }, 
                { $skip: (page - 1) * PAGE_SIZE },
                { $limit: PAGE_SIZE },        
                {  
                    $lookup:
                    {
                        from: 'userprofiles',                        
                        localField: '_id',
                        foreignField: 'user_id',
                        as: 'userInfo'
                    }  
                },
                { $limit: 20 },
            ]);

            if(userData){	
				return _RS.ok(res,'User list.',{userData});					
			}
           
			if(userData){
				return _RS.ok(res,'User list.',{userData});					
			}
			else
				return _RS.notFound(res,'not found.',{})
		}
		catch(e){
			return _RS.serverError(res,e,e._message);
		}
	}

    static async searchUsers(req,res){
		try{ 
            console.log(req.query.page)
            let page = req.query.page ? req.query.page : 1; 
            const PAGE_SIZE = 10;                  
            const skip = (page - 1) * PAGE_SIZE;
            let userInfo ={};
            if(req.query.search_text){
                userInfo = { $or: [ 
                    { nick_name: { $regex: req.query.search_text, $options: 'i' } }, 
                    { email: { $regex: req.query.search_text, $options: 'i' } }, 
                    { phone_number: { $regex: req.query.search_text, $options: 'i' } } 
                ]};
            }

            console.log("searchUsers_1", req?.data?._id);
            let queryData = {is_account_active: true, _id :{$ne : mongoose.Types.ObjectId(req?.data?._id) }};
            let userData:any = await User.aggregate([   
                {
                    $match:queryData,
                },
                {
                    $match:userInfo,
                },
                { $skip: (page - 1) * PAGE_SIZE },
                { $limit: PAGE_SIZE },        
                {  
                    $lookup:
                    {
                        from: 'userprofiles',                        
                        localField: '_id',
                        foreignField: 'user_id',
                        as: 'userInfo'
                    }  
                },
                // {  
                //     $lookup:
                //     {
                //         from: 'friends',                        
                //         localField: '_id',
                //         foreignField: 'user',
                //         as: 'userInfo'
                //     }  
                // },
                // {
                //     "$addFields": {
                //         "userInfo": {
                //             "$arrayElemAt": [
                //                 {
                //                     "$filter": {
                //                         "input": "$userInfo",
                //                         "as": "user",
                //                         "cond": {
                //                             "$eq": [ "$$user.status", "PENDING" ]
                //                         }
                //                     }
                //                 }, 0
                //             ]
                //         }
                //     }
                // },
                // {
                //     $lookup: {

                //     }
                // }
                { $limit: 20 },
            ]);

            if(userData){
				return _RS.ok(res,'User list.',{userData});
			}
           
			if(userData){
				return _RS.ok(res,'User list.',{userData});					
			}
			else
				return _RS.notFound(res,'not found.',{})
		}
		catch(e){
			return _RS.serverError(res,e,e._message);
		}
	}

    //  for Web ==> User Profile Page 
    static async getUsersDetailByUserId(req,res){
		try{ 
            console.log("getUsersDetailWithId_1", req.params.user_id)
            const userId = req.params.user_id;
            if(userId){
                let userData:any = await User.aggregate([
                    {
                        $match: { _id: new mongoose.Types.ObjectId(userId) }
                    }
                ]
                );
                // console.log("getUsersDetailWithId_2", userData);
                if(userData?.length > 0){
                    return _RS.ok(res,'User detailed information.',userData[0]);					
                }
                else{
                    return _RS.notFound(res,'User detailed information not found.',{})
                }
            }
            else{
                return _RS.notFound(res,'User not found.',{status: false})
            }
		}
		catch(e){
			return _RS.serverError(res,e,e._message);
		}
	}

    // update user for web ==> step 2 at first time sign up
    static async updateUserDetails(req, res){
		try{
            console.log("updateUserDetails", req.body);
			if(req?.body?.email){
				let data:any = {};
				if(req?.body?.first_name){
					data.first_name = req?.body?.first_name;
				}
				if(req?.body?.last_name){
					data.last_name = req?.body?.last_name;
				}
				if(req?.body?.dob){
					data.dob = req?.body?.dob;
				}
				if(req?.body?.gender){
					data.gender = req?.body?.gender == "MALE" ? "MALE" : "FEMALE";
				}
				let user = await User.updateOne(
					{
						email: req.body.email							
					},
					{
						$set: data
					}, { new: true });
				if(user?.nModified == 1){
                    console.log("updateUserDetails_updateOne", user);
					return _RS.ok(res, "User updated successfully.",{status: true});
				}
				else{
					return _RS.notFound(res, "User not updated.",{status: false});
				}
			}
			else{
				return _RS.notFound(res, "User not found.", {status: false});
			}
		}
		catch(error){
			console.log("sample_error", error);
			return _RS.serverError(res, error, error._message);
		}
	}

    

}