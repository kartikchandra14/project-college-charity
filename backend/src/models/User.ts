import * as mongoose from 'mongoose';
import { model } from 'mongoose';
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');

const UserSchema = new mongoose.Schema({

    first_name: {
        type: String,
        default:null
    },
    last_name: {
        type: String,
        default:null
    },
    nick_name: {
        type: String,
        default:null
    },

    refferal_code: {
        type: String,
        default:null
    },
   
    email: {
        type: String,
        lowercase: true,
        trim: true,
        default: null,
        unique:true
    },   
    
    password: {
        type: String,
        default: 'null'
    },
    phone_number: {
        type: String,
        // unique: true
    },
    country_code: {
        type: String,
        default: null
    },


    gender:{
        type:String,
        enum:['MALE','FEMALE','OTHER','NOT-SELECTED'],
        default: 'NOT-SELECTED'
    },

    dob:{
        type:String,
        default:null
    },
     
    profile_pic: {
        type: String,
        default: null
    },
    
    device_info: {
        type: [{
            device_type: String,
            device_token: String,
            voip_token: String,
            jwt_token: String,
            login_time: { type: Date, default: Date.now }
        },],
        default: [],
        validate: [deviceLimit, '{PATH} exceeds the limit of 4']
    },
    current_login_device: {
        type: String,
        default: null
    },
    muted_user: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
    ],
    address: {
        type: String,
        default: null
    },
    rank: {
        type: Number,
        default: null
    },
    mmr: {
        type: Number,
        default: null
    },
    // temp_number:{
    //     type:String,
    //     default:null
    // },
    notification_status: {
        type: Boolean,
        default: true
    },
    is_account_active: { // when email & mobile is verified & false it when user attemp more than 5 times in 30min span
        type: Boolean,
        default: true
    },
    last_login: {
        type: String,
        default: Math.round(new Date().getTime())
    },
   
    account_status: {
        type: String,
        enum: ['PENDING', 'UNVERIFIED_PHONE_NUMBER', 'UNVERIFIED_EMAIL','VERIFIED','SUSPENDED'],
        default: 'PENDING'
    }, 
    email_otp_code: {
        type: Number,
        default: null
    },  
    email_verify: {
        type: Number,
        default: false
    }, 
    mobile_otp_code: {
        type: Number,
        default: null
    }, 
    mobile_verify: {
        type: Number,
        default: false
    },
    // will remove in nxt sprint start
   

    // is_online: {
    //     type: Boolean,
    //     default: false
    // },
    socialLogin:{
        type: Boolean,
        default: false
    },
    platform: {
        type: String
    },
    time_stamp: {
        type: String,
        default: Math.round(new Date().getTime())
    },
    skipAtStep: {
        type:Number,
        default: 3
    },
    lastAttempOfLoginAt:{
        type:Number,
    },
    last_login_try: {
        type: String,
        default: Math.round(new Date().getTime())
    },
    login_try_count:{
        type: Number,
        default: 0
    },
    userProfile:{
        type: Schema.Types.ObjectId,
        ref: 'UserProfile'
    }
}, {
    timestamps: { createdAt: 'created_at' }
});
function deviceLimit(val) {
    if (val.length > 1) {
        this.device_info.shift();
    }
    return true;
}

UserSchema.plugin(mongoosePaginate);

export default model(<any>'User', UserSchema);