import * as Bcrypt from 'bcrypt';
import * as formidable from "formidable";
/**Load Services */
import _RS from '../../services/ResponseService';
/**Load Helpers */
import { GlobalHelper } from '../../helpers/GlobalHelper';
/**Load Models */
import ContactSchema from '../../models/Contact.model';
import * as mongoose from "mongoose";

export class ContactUsController {
  
    static async addContactUsData(req,res){
        try{     
            if(!req?.body?.email){
                return _RS.notFound(res,'Email not found',{status: false});
            }
            let contactUsInfoFound:any = await ContactSchema.findOne({email: req.body.email});
            if(contactUsInfoFound){
                return _RS.existConflict(res,'contact us info found.',{status: false});
            }
            else{  
                let data = {
                    email: req.body.email ? req.body.email : "",
                    message: req.body.message ? req.body.message : "",
                    name: req.body.name ? req.body.name : "",
                }

                const contactSaveRes = await new ContactSchema(data);
                let contactUsDataCreated  = await contactSaveRes.save();
                // console.log("addContactUsData", contactUsDataCreated);
                if(contactUsDataCreated){
                    return _RS.recordCreated(res,'New contact us data created.',{ email:req.body.email});
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
