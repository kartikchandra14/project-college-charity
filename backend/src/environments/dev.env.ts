import { Environment } from "./env";

export const DevEnvironment: any = {
    node_env: process.env.NODE_ENV,
    db_url:  process.env.DB_URL,    
    access_key: process.env.ACCESS_KEY,
    secret_key: process.env.SECRET_KEY,
    bucket_name: process.env.BUCKET_NAME,
    jwt_key: process.env.JWT_KEY,
    accountSid: process.env.TWILIO_ACCOUNT_SID, // Your Account SID from www.twilio.com/console
    authToken: process.env.TWILIO_AUTH_TOKEN,   // Your Auth Token from www.twilio.com/console
}