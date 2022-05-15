import * as mongoose from 'mongoose';
import { model } from 'mongoose';

const ContactSchema = new mongoose.Schema({
    email: {
        type: String,
        lowercase: true,
        trim: true,
        default: null,
        unique:true
    },
    message:{
        type: String,
        trim: true
    },
    name:{
        type: String,
        trim: true
    }
});

// ContactSchema.plugin(mongoosePaginate);

export default model(<any>'Contact', ContactSchema);