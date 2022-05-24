import * as mongoose from 'mongoose';
import { model } from 'mongoose';

const DonateSchema = new mongoose.Schema({

      // name
    // email
    // address
    //  age
    // contactNumber
    // voluteerFor

    name:{
        type: String,
        trim: true
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        default: null,
        unique:true
    },
    
    contactNumber:{
        type: String,
        trim: true
    },

    address:{
        type: String,
        trim: true
    },


});

export default model(<any>'Donate', DonateSchema);
