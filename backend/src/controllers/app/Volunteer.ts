import * as Bcrypt from 'bcrypt';
import * as formidable from "formidable";
/**Load Services */
import _RS from '../../services/ResponseService';
/**Load Helpers */
import { GlobalHelper } from '../../helpers/GlobalHelper';
/**Load Models */
import VolunteerSchema from '../../models/Volunteer';
import * as mongoose from "mongoose";

export class VolunteerController {
  
    static async addVolunteerData(req,res){
        try{     
            if(!req?.body?.email){
                return _RS.notFound(res,'Email not found',{status: false});
            }
            let volunteerInfoFound:any = await VolunteerSchema.findOne({email: req.body.email});
            if(volunteerInfoFound){
                return _RS.existConflict(res,'volunteer info found.',{status: false});
            }
            else{  
                let data = {
                    email: req.body.email ? req.body.email : "",
                    address: req.body.address ? req.body.address : "",
                    name: req.body.name ? req.body.name : "",

                    age: req.body.age ? req.body.age : "",
                    contactNumber: req.body.contactNumber ? req.body.contactNumber : "",
                    voluteerForDays: req.body.voluteerForDays ? req.body.voluteerForDays : "",
                }

                const volunteerSaveRes = await new VolunteerSchema(data);
                let volunteerDataCreated  = await volunteerSaveRes.save();
                // console.log("addVolunteerData", volunteerDataCreated);
                if(volunteerDataCreated){
                    return _RS.recordCreated(res,'New volunteer data created.',{ email:req.body.email});
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
