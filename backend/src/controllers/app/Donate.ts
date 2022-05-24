import * as Bcrypt from 'bcrypt';
import * as formidable from "formidable";
/**Load Services */
import _RS from '../../services/ResponseService';
/**Load Helpers */
// import { GlobalHelper } from '../../helpers/GlobalHelper';
/**Load Models */
import DonateSchema from "../../models/Donate";
import * as mongoose from "mongoose";

export class DonateController {
  
    static async addDonateData(req,res){
        try{     
            if(!req?.body?.email){
                return _RS.notFound(res,'Email not found',{status: false});
            }
            let donateInfoFound:any = await DonateSchema.findOne({email: req.body.email});
            if(donateInfoFound){
                return _RS.existConflict(res,'donate info found.',{status: false});
            }
            else{  
                let data = {
                    name: req.body.name ? req.body.name : "",
                    email: req.body.email ? req.body.email : "",
                    contactNumber: req.body.contactNumber ? req.body.contactNumber : "",
                    address: req.body.address ? req.body.address : "",
        
                }

                const donateSaveRes = await new DonateSchema(data);
                let donateDataCreated  = await donateSaveRes.save();
                // console.log("addVolunteerData", volunteerDataCreated);
                if(donateDataCreated){
                    return _RS.recordCreated(res,'New donate data created.',{ email:req.body.email});
                }
                else{
                    return _RS.ok(res,'Not saved',{status: false});
                }
            }
        }
        catch (e) {
            console.log(e);
            return _RS.serverError(res);
        }
    }

}
