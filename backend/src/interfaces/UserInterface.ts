
export interface UserInterface{
    _id: string;
    full_name: string;
    email:string;
    password:string;
    gender:string;
    phone_number:string;    
    otp_code:number;
    country_code:string;
    voip_token:string;
    last_login:string;
    notification_status:string;
    is_account_active:boolean;
    account_status:string;
    address:string;
    profile_pic:string;
}