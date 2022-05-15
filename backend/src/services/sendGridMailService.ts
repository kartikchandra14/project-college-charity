import * as sgMail from '@sendgrid/mail';
// const sgMail = require('@sendgrid/mail')
import * as handlebars from "handlebars";
import * as path from 'path';
import { getEnvironmentVariable } from '../environments/env';
import * as fs from 'fs';

class SendGridLibraray{
    constructor(){
        sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    }

    

    async sendPasswordMail(mailTo:string, randomPassword: string, name:string){
      try{
        
        // console.log("sendOtpMail_1", process.env.NODE_ENV);
        // http://54.255.38.217:3000/verify-email
        let mailToUrl = process.env.NODE_ENV == "prod" ? "https://beatuptribe.com/#/auth/verify-email?token=" : "http://localhost:4200/#/auth/verify-email?token=";

        const node_env = getEnvironmentVariable().node_env;
        const templateHtml = fs.readFileSync(path.join(process.cwd(), (node_env === 'dev' ? 'src/services/email_templates/password_send.html' : 'src/services/email_templates/password_send.html')), 'utf8');
        const template = handlebars.compile(templateHtml);
        const html = template({ mailToUrl: mailToUrl, password: randomPassword, name: name });

        let msg = {
             to: mailTo, // Change to your recipient
             from: 'Support@beatup.app', // Change to your verified sender // noreply@beatuptribe.com
             subject: 'One Time Password Mail | Greetings From BEAT UP GAMING !!',
             text: 'Your one time password is:',
            //  html: `<div><strong>From ❤ with Mobilecoderz.</strong></div><br/><br/><br/><br/><div><h3>Your OTP is ${otp}</h3></div>`,
             html: html,
           }
           
        let res = await sgMail.send(msg);
        // console.log("sgMail_1", res);
        if(res && res[0]?.statusCode == 202){
            return true;
        }
        else{
            return false;
        }
           //   .then((response) => {
           //     console.log("sgMail_1", response[0].statusCode)
           //     console.log("sgMail_2",response[0].headers)
           //     return true;
           //   })
        }
      catch(error){
        console.error("sendOtpMail_catch_error", error);
        return false;
      };
  }

    
    async sendOtpMail(mailTo:string, token: string, name:string){
        try{
            // console.log("sendOtpMail_1", process.env.NODE_ENV);
            // http://54.255.38.217:3000/verify-email
            let mailToUrl = process.env.NODE_ENV == "prod" ? "https://beatuptribe.com/#/auth/verify-email?token=" : "http://localhost:4200/#/auth/verify-email?token=";

            const node_env = getEnvironmentVariable().node_env;
            const templateHtml = fs.readFileSync(path.join(process.cwd(), (node_env === 'dev' ? 'src/services/email_templates/send_email_verification.html' : 'src/services/email_templates/send_email_verification.html')), 'utf8');
            const template = handlebars.compile(templateHtml);
            const html = template({ mailToUrl: mailToUrl, token: token, name: name });

            let msg = {
                 to: mailTo, // Change to your recipient
                 from: 'Support@beatup.app', // Change to your verified sender // noreply@beatuptribe.com
                 subject: 'Verification Mail | Greetings From BEAT UP GAMING !!',
                 text: 'Your verification link is:',
                //  html: `<div><strong>From ❤ with Mobilecoderz.</strong></div><br/><br/><br/><br/><div><h3>Your OTP is ${otp}</h3></div>`,
                 html: html,
               }
               
            let res = await sgMail.send(msg);
            // console.log("sgMail_1", res);
            if(res && res[0]?.statusCode == 202){
                return true;
            }
            else{
                return false;
            }
               //   .then((response) => {
               //     console.log("sgMail_1", response[0].statusCode)
               //     console.log("sgMail_2",response[0].headers)
               //     return true;
               //   })
            }
          catch(error){
            console.error("sendOtpMail_catch_error", error);
            return false;
          };
    }

    // Mail for resetting the password 
    async sendResetPasswordLink(mailTo:string, token: string, name:string, user_type?:string){
      try{
          // console.log("sendOtpMail_1", process.env.NODE_ENV, user_type);
          // http://54.255.38.217:3000/verify-email
          let mailToUrl;
          if(user_type=="admin"){
            mailToUrl = process.env.NODE_ENV == "prod" ? "https://admin.beatuptribe.com/admin/#/change-password?token=" : "http://localhost:4200/#/change-password?token=";

          }else{
            mailToUrl = process.env.NODE_ENV == "prod" ? "https://beatuptribe.com/#/auth/change-password?token=" : "http://localhost:4200/#/auth/change-password?token=";

          }

          const node_env = getEnvironmentVariable().node_env;
          const templateHtml = fs.readFileSync(path.join(process.cwd(), (node_env === 'dev' ? 'src/services/email_templates/reset-password_send.html' : 'src/services/email_templates/reset-password_send.html')), 'utf8');
          const template = handlebars.compile(templateHtml);
          const html = template({ mailToUrl: mailToUrl, token: token, name: name });
          console.log("link", mailToUrl+token);
          let msg = {
               to: mailTo, // Change to your recipient
               from: 'Support@beatup.app', // Change to your verified sender // noreply@beatuptribe.com
               subject: 'Reset Password Mail | Greetings From BEAT UP GAMING !!',
               text: 'Your reset password link is:',
              //  html: `<div><strong>From ❤ with Mobilecoderz.</strong></div><br/><br/><br/><br/><div><h3>Your OTP is ${otp}</h3></div>`,
               html: html
              //  `<!DOCTYPE html>
              //  <html lang="en">
              //  <head>
              //  <title>CSS Template</title>
              //  <meta charset="utf-8">
              //  <meta name="viewport" content="width=device-width, initial-scale=1">
              //  <style>
              //  * {
              //    box-sizing: border-box;
              //  }
               
              //  body {
              //    font-family: Arial, Helvetica, sans-serif;
              //  }
               
              //  /* Style the header */
              //  header {
              //    background-color: #a8a7a7;
              //    padding: 2px;
              //    text-align: center;
              //    font-size: 20px;
              //    color: white;
              //  }
               
              //  /* Style the list inside the menu */
              //  article {
              //    float: left;
              //    padding: 20px;
              //    width: 100%;
              //    background-color: #ffff;
              //    height: auto; /* only for demonstration, should be removed */
              //    text-align: center;
              //    font-weight:bold;
              //    color:grey
              //  }
               
              //  /* Clear floats after the columns */
              //  section::after {
              //    content: "";
              //    display: table;
              //    clear: both;
              //  }
               
              //  /* Style the footer */
              //  footer {
              //    line:2px solid grey;
              //    padding: 10px;
              //    text-align: center;
              //    color: grey;
              //  }
              //  .otp{
              //  font-size:40px;
              //  text-align: center;
              //  color:pink;
              //  }
              //  .txt{
              //      font-size:12px;
              //  }
              //  hr{
              //  border-top: 1px dotted black;
              //  }
               
              //  </style>
              //  </head>
              //  <body>
               
               
              //  <header>
              //    <h2>BEAT UP</h2>
              //  </header>
               
              //  <section>
              //    <nav>
                   
              //    </nav>
                 
              //    <article>
              //      <h1>Hi ${name}</h1>
              //      <p>Click below to reset your password.</p>
              //      <p class="otp">
              //       <a href="${mailToUrl}${token}">Reset Password</a>
              //      </p>
              //      <div class="txt">
              //      <p>Please use the above link to reset your password.</p>    
              //      <p>If you have any query, please email our customer support.</p>    
              //      <p style="color:blue;">
              //      Support@beatup.app
              //      </p>
              //      </div>
               
               
               
              //    </article>
              //  </section>
               
              //  <footer>
              //  <hr>
              //    <p>@2022, Beat Up Team All rights reserved.</p>
              //  </footer>
               
              //  </body>
              //  </html>
               
              //  `
              ,
             }
             
          let res = await sgMail.send(msg);
          console.log("sgMail_1", res);
          if(res && res[0]?.statusCode == 202){
              return true;
              console.log(true);
          }
          else{
              return false;
              console.log(false);

          }
             //   .then((response) => {
             //     console.log("sgMail_1", response[0].statusCode)
             //     console.log("sgMail_2",response[0].headers)
             //     return true;
             //   })
          }
        catch(error){
          console.error("sendResetPasswordLink_catch_error", error);
          return false;
        };
  }

  // If user click on this mail its account is suspend !!
  async sendResetPasswordVerificationToUser(mailTo:string, token: string, name:string, user_type?:string){
    try{
        // console.log("sendOtpMail_1", process.env.NODE_ENV, user_type);
        // http://54.255.38.217:3000/verify-email
        let mailToUrl;
        if(user_type=="admin"){
          mailToUrl = process.env.NODE_ENV == "prod" ? "https://admin.beatuptribe.com/admin/#/account-suspend?token=" : "http://localhost:4200/#/account-suspend?token=";

        }else{
          mailToUrl = process.env.NODE_ENV == "prod" ? "https://beatuptribe.com/#/auth/account-suspend?token=" : "http://localhost:4200/#/auth/account-suspend?token=";
        }

        const node_env = getEnvironmentVariable().node_env;
        const templateHtml = fs.readFileSync(path.join(process.cwd(), (node_env === 'dev' ? 'src/services/email_templates/change-password_send.html' : 'src/services/email_templates/change-password_send.html')), 'utf8');
        const template = handlebars.compile(templateHtml);
        const html = template({ mailTo: mailTo, mailToUrl: mailToUrl, token: token, name: name });

        let msg = {
             to: mailTo, // Change to your recipient
             from: 'Support@beatup.app', // Change to your verified sender // noreply@beatuptribe.com
             subject: 'Your Password Change Confirmation Mail | BEAT UP Gaming',
             text: 'Your reset password link is:',
            //  html: `<div><strong>From ❤ with Mobilecoderz.</strong></div><br/><br/><br/><br/><div><h3>Your OTP is ${otp}</h3></div>`,
             html: html 
            //  `<!DOCTYPE html>
            //  <html lang="en">
            //  <head>
            //  <title>CSS Template</title>
            //  <meta charset="utf-8">
            //  <meta name="viewport" content="width=device-width, initial-scale=1">
            //  <style>
            //  * {
            //    box-sizing: border-box;
            //  }
             
            //  body {
            //    font-family: Arial, Helvetica, sans-serif;
            //  }
             
            //  /* Style the header */
            //  header {
            //    background-color: #a8a7a7;
            //    padding: 2px;
            //    text-align: center;
            //    font-size: 20px;
            //    color: white;
            //  }
             
            //  /* Style the list inside the menu */
            //  article {
            //    float: left;
            //    padding: 20px;
            //    width: 100%;
            //    background-color: #ffff;
            //    height: auto; /* only for demonstration, should be removed */
            //    text-align: center;
            //    font-weight:bold;
            //    color:grey
            //  }
             
            //  /* Clear floats after the columns */
            //  section::after {
            //    content: "";
            //    display: table;
            //    clear: both;
            //  }
             
            //  /* Style the footer */
            //  footer {
            //    line:2px solid grey;
            //    padding: 10px;
            //    text-align: center;
            //    color: grey;
            //  }
            //  .otp{
            //  font-size:40px;
            //  text-align: center;
            //  color:pink;
            //  }
            //  .txt{
            //      font-size:12px;
            //  }
            //  hr{
            //  border-top: 1px dotted black;
            //  }
            //  </style>
            //  </head>
            //  <body>
            //  <header>
            //    <h2>BEAT UP</h2>
            //  </header>
             
            //  <section>
            //    <nav>
                 
            //    </nav>
               
            //    <article>
            //      <h1>Hi ${name}</h1>
            //     <p>We noticed a new password set to your BEAT UP Account. If this was you, you don’t need to do anything. If not, we’ll help you secure your account.</p>
            //      <p class="otp">
            //       <a href="${mailToUrl}${token}&email=${mailTo}">Secure Account</a>
            //      </p>
            //      <div class="txt">
            //      <p>Please use the above link to resetting up your password.</p>
            //      <p>If you have any query, please email our customer support.</p>    
            //      <p style="color:blue;">
            //      account-locked@beatuptribe.com 
            //      </p>
            //      </div>           
            //    </article>
            //  </section>
             
            //  <footer>
            //  <hr>
            //    <p>@2022, Beat Up Team All rights reserved.</p>
            //  </footer>
             
            //  </body>
            //  </html>
             
            //  `
             ,
           }
           
        let res = await sgMail.send(msg);
        console.log("sgMail_1", res);
        if(res && res[0]?.statusCode == 202){
            return true;
            console.log(true);
        }
        else{
            return false;
            console.log(false);

        }
           //   .then((response) => {
           //     console.log("sgMail_1", response[0].statusCode)
           //     console.log("sgMail_2",response[0].headers)
           //     return true;
           //   })
        }
      catch(error){
        console.error("sendResetPasswordLink_catch_error", error);
        return false;
      };
  }

  // Send Join Team Invitation over mail
  async sendJoinTeamInvitationLink(mailTo:string, token: string, name:string, teamName?:string){
    try{
        // console.log("sendOtpMail_1", process.env.NODE_ENV, user_type);
        // http://54.255.38.217:3000/verify-email
       
        let  mailToUrl = process.env.NODE_ENV == "prod" ? "https://beatuptribe.com/#/basic-profile/teams" : "http://localhost:4200/#/basic-profile/teams";
        // let  mailToUrl = process.env.NODE_ENV == "prod" ? "https://beatuptribe.com/#/team/team-detail?token=" : "http://localhost:4200/#/team/team-detail?token=";

        const node_env = getEnvironmentVariable().node_env;
        const templateHtml = fs.readFileSync(path.join(process.cwd(), (node_env === 'dev' ? 'src/services/email_templates/invitation_send.html' : 'src/services/email_templates/invitation_send.html')), 'utf8');
        const template = handlebars.compile(templateHtml);
        const html = template({ mailToUrl: mailToUrl, token: token, name: name, teamName: teamName });
        console.log("link", mailToUrl+token);
        let msg = {
             to: mailTo, // Change to your recipient
             from: 'Support@beatup.app', // Change to your verified sender // noreply@beatuptribe.com
             subject: 'Team Invitation Mail | Greetings From BEAT UP GAMING !!',
             text: 'Your team invitation link is:',
            //  html: `<div><strong>From ❤ with Mobilecoderz.</strong></div><br/><br/><br/><br/><div><h3>Your OTP is ${otp}</h3></div>`,
             html: html
           }
           
        let res = await sgMail.send(msg);
        console.log("sgMail_1", res);
        if(res && res[0]?.statusCode == 202){
            return true;
            console.log(true);
        }
        else{
            return false;
            console.log(false);

        }
           //   .then((response) => {
           //     console.log("sgMail_1", response[0].statusCode)
           //     console.log("sgMail_2",response[0].headers)
           //     return true;
           //   })
        }
      catch(error){
        console.error("sendResetPasswordLink_catch_error", error);
        return false;
      };
}


  // When User account is suspend then this mail shoot ONLY !!
  async sendAccountSuspendMail(mailTo:string, token: string, name:string, user_type?:string){
    try{
        // console.log("sendAccountSuspendMail_!", process.env.NODE_ENV, user_type);
        let mailToUrl;
        if(user_type=="admin"){
          // mailToUrl = process.env.NODE_ENV == "prod" ? "https://admin.beatuptribe.com/admin/#/account-suspend?token=" : "http://localhost:4200/#/account-suspend?token=";

        }else{
          // mailToUrl = process.env.NODE_ENV == "prod" ? "https://beatuptribe.com/#/account-suspend?token=" : "http://localhost:4200/#/account-suspend?token=";

        }

        const node_env = getEnvironmentVariable().node_env;
        const templateHtml = fs.readFileSync(path.join(process.cwd(), (node_env === 'dev' ? 'src/services/email_templates/account-suspend_send.html' : 'src/services/email_templates/account-suspend_send.html')), 'utf8');
        const template = handlebars.compile(templateHtml);
        const html = template({ name: name });

        let msg = {
             to: mailTo, // Change to your recipient
             from: 'Support@beatup.app', // Change to your verified sender // noreply@beatuptribe.com
             subject: 'Beat Up Account Locked | BEAT UP Gaming',
             text: 'Account suspended:',
             html: html
            //  `<!DOCTYPE html>
            //  <html lang="en">
            //  <head>
            //  <title>CSS Template</title>
            //  <meta charset="utf-8">
            //  <meta name="viewport" content="width=device-width, initial-scale=1">
            //  <style>
            //  * {
            //    box-sizing: border-box;
            //  }
             
            //  body {
            //    font-family: Arial, Helvetica, sans-serif;
            //  }
             
            //  /* Style the header */
            //  header {
            //    background-color: #a8a7a7;
            //    padding: 2px;
            //    text-align: center;
            //    font-size: 20px;
            //    color: white;
            //  }
             
            //  /* Style the list inside the menu */
            //  article {
            //    float: left;
            //    padding: 20px;
            //    width: 100%;
            //    background-color: #ffff;
            //    height: auto; /* only for demonstration, should be removed */
            //    text-align: center;
            //    font-weight:bold;
            //    color:grey
            //  }
             
            //  /* Clear floats after the columns */
            //  section::after {
            //    content: "";
            //    display: table;
            //    clear: both;
            //  }
             
            //  /* Style the footer */
            //  footer {
            //    line:2px solid grey;
            //    padding: 10px;
            //    text-align: center;
            //    color: grey;
            //  }
            //  .otp{
            //  font-size:40px;
            //  text-align: center;
            //  color:pink;
            //  }
            //  .txt{
            //      font-size:12px;
            //  }
            //  hr{
            //  border-top: 1px dotted black;
            //  }
            //  </style>
            //  </head>
            //  <body>
            //  <header>
            //    <h2>BEAT UP</h2>
            //  </header>
             
            //  <section>
            //    <nav>
                 
            //    </nav>
               
            //    <article>
            //      <h1>Hi ${name}</h1>
            //     <p>
            //     As per your response on password change confirmation email we have locked your account for your account’s safety. 
            //     Please write to us at account-locked@beatuptribe.com from your registered email so that we can send you 
            //     instructions to unlock your account.
            //     </p>
            //      <div class="txt">
            //      <p>If you have any query, please email our customer support.</p>    
            //      <p style="color:blue;">
            //      account-locked@beatuptribe.com 
            //      </p>
            //      </div>           
            //    </article>
            //  </section>
             
            //  <footer>
            //  <hr>
            //    <p>@2022, Beat Up Team All rights reserved.</p>
            //  </footer>
             
            //  </body>
            //  </html>
             
            //  `
             ,
           }
           
        let res = await sgMail.send(msg);
        // console.log("sendAccountSuspendMail_mail_response", res);
        if(res && res[0]?.statusCode == 202){
            return true;
            console.log(true);
        }
        else{
            return false;
            console.log(false);

        }
        }
      catch(error){
        console.error("sendResetPasswordLink_catch_error", error);
        return false;
      };
  }
}

let respObj = new SendGridLibraray();
export default respObj;
