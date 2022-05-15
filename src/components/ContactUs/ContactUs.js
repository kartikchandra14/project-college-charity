import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
const useStyles = makeStyles(styles);

export default function ContactUs() {
  const classes = useStyles();

  React.useEffect(() => {
    setTimeout(() => {
      let display = document.querySelector("[data-display]");
      let imgs = document.querySelectorAll("[data-img]");
      let leftBtn = document.querySelector("[data-btn-left]");
      let rightBtn = document.querySelector("[data-btn-right]");
      let nextBtn = document.querySelector("[data-btn-left]");
      let imgSlider = document.querySelector("[data-img-container ]");
      
      let new_img = document.createElement("img");
      new_img.src = imgs[0].src;
      display.append(new_img);
      if (new_img.src === "") {
        new_img.src = imgs[0].src;
      }
      
      let left = 0;
      let right = 0;
      
      rightBtn.addEventListener("click", function next() {
        if (left <= imgs.length - 2) {
          left++;
          imgSlider.style.transform = `translatex(calc(( ${left} * (-80px - 1.6rem)))`;
        } else {
          left = 0;
          imgSlider.style.transform = `translatex(0)`;
        }
      });
      
      leftBtn.addEventListener("click", function before() {
        if (left > 0) {
          left--;
          imgSlider.style.transform = `translatex(calc(( -${left} * (80px + 1.6rem)))`;
        }
        if (left == 0) {
          imgSlider.style.transform = `translatex(0)`;
        }
      });
      
      imgs.forEach((img) => {
        img.addEventListener("click", function (e) {
          if (new_img.src == undefined) {
            new_img.src = imgs[0].src;
          }
          new_img.src = this.getAttribute("src");
          display.append(new_img);
        });
      });
      
    }, 1000);
    return function cleanup() {};
  });

  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        Contact Us
      </div>
    </div>
  );
}
