import * as mongoose from 'mongoose';
import { model } from 'mongoose';

const VolunteerSchema = new mongoose.Schema({

      // name
    // email
    // address
    //  age
    // contactNumber
    // voluteerFor

    email: {
        type: String,
        lowercase: true,
        trim: true,
        default: null,
        unique:true
    },
    address:{
        type: String,
        trim: true
    },
    name:{
        type: String,
        trim: true
    },
    age:{
        type: Number
    },
    contactNumber:{
        type: String,
        trim: true
    },
    voluteerForDays:{
        type: String
    }
});

export default model(<any>'Volunteer', VolunteerSchema);
