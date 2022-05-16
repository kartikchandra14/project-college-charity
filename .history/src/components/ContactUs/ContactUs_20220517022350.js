import React from "react";
import  {useState} from "react";

import {API_BASE_URL, ACCESS_TOKEN_NAME} from '../../constants/apiConstants';
import axios from 'axios';


// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/material-kit-react/views/componentsSections/contactStyle.js";
const useStyles = makeStyles(styles);

export default function ContactUs() {
  const classes = useStyles();

  React.useEffect(() => {
    // setTimeout(() => {
    //   let display = document.querySelector("[data-display]");
    //   let imgs = document.querySelectorAll("[data-img]");
    //   let leftBtn = document.querySelector("[data-btn-left]");
    //   let rightBtn = document.querySelector("[data-btn-right]");
    //   let nextBtn = document.querySelector("[data-btn-left]");
    //   let imgSlider = document.querySelector("[data-img-container ]");
      
    //   let new_img = document.createElement("img");
    //   new_img.src = imgs[0].src;
    //   display.append(new_img);
    //   if (new_img.src === "") {
    //     new_img.src = imgs[0].src;
    //   }
      
    //   let left = 0;
    //   let right = 0;
      
    //   rightBtn.addEventListener("click", function next() {
    //     if (left <= imgs.length - 2) {
    //       left++;
    //       imgSlider.style.transform = `translatex(calc(( ${left} * (-80px - 1.6rem)))`;
    //     } else {
    //       left = 0;
    //       imgSlider.style.transform = `translatex(0)`;
    //     }
    //   });
      
    //   leftBtn.addEventListener("click", function before() {
    //     if (left > 0) {
    //       left--;
    //       imgSlider.style.transform = `translatex(calc(( -${left} * (80px + 1.6rem)))`;
    //     }
    //     if (left == 0) {
    //       imgSlider.style.transform = `translatex(0)`;
    //     }
    //   });
      
    //   imgs.forEach((img) => {
    //     img.addEventListener("click", function (e) {
    //       if (new_img.src == undefined) {
    //         new_img.src = imgs[0].src;
    //       }
    //       new_img.src = this.getAttribute("src");
    //       display.append(new_img);
    //     });
    //   });
      
    // }, 1000);
    return function cleanup() {};
  });

  return (
    <div className={classes.sections}>
        <div className={classes.texthome}>
          <h2>
            Contact Us
            </h2>
          </div>
            <br/>
            <br/>
            <br/>

            <div class={classes.container}>
    <hl></hl>
    <div class={classes.displayFlex}>
    <div class={classes.contact_left}>
      <h3>Connect With Us</h3>
<form>

      <div class="input-row">
   <div class="input-group">
         <label>Name</label>
         <input type="text" placeholder="John Amendo"/>
    </div>
    <br/>
    <div class="input-group">
         <label>Email</label>
         <input type="email" placeholder="John@xyz.com"/>
</div>
<br/>

<div >
<label>Message</label>
<br/>
<textarea className={classes.mssg} rows="5" placeholder="Your Message"></textarea>
    </div>
    <br/>
    <button className={classes.btn} type="submit">Send</button>
    </div>
</form>

    </div>
    <div class={classes.contact_right}>
      <h3>Reach Us</h3> <br/>
    <p><b>Email: </b>johnny@gmail.com</p> <br/>
    <p><b>telephone: </b>+011-3444-4546</p> <br/>
    <p><b>Address: </b>Roop Mahal, Prem Gali, Kholi number- 420</p> <br/>

    </div>
</div>
</div>
          </div>
    
  );
}
