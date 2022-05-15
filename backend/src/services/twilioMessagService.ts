// const twilio = require('twilio');
import * as twilio from 'twilio';
import { getEnvironmentVariable } from '../environments/env';

class TwilioMessageService{
    accountSid:any;
    authToken:any
    client:any;
    constructor(){
        this.accountSid = getEnvironmentVariable().accountSid; // Your Account SID from www.twilio.com/console //  process.env.TWILIO_ACCOUNT_SID
        this.authToken = getEnvironmentVariable().authToken;   // Your Auth Token from www.twilio.com/console // process.env.TWILIO_AUTH_TOKEN
        if(this.accountSid && this.authToken){
            this.client = twilio(this.accountSid, this.authToken, {
                // lazyLoading: true
            });
        }
    }


    async sendMessage(msg: string, toNumber:string){
        console.log("sendMessage", msg, toNumber);

        try{
            const msgRes  = await this.client.messages.create({
                body: msg,
                to: toNumber, // Text this number
                from: '+15005550006', // From a valid Twilio number // +18596360907 // +15005550006 //  +1 812 624 6876
            });
            return msgRes;
        }
        // .then((message) => {
        //     console.log("sendMessage", message.sid);
        //     return message;
        // })
        catch(error:any){
            console.log("sendMessage_error", error);
            return false;
        };
    }
}

let respObj = new TwilioMessageService();
export default respObj;


// const client = require('twilio')(accountSid, authToken, {
//     lazyLoading: true
// });

