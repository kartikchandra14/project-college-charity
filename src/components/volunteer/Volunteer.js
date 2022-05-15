import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";



import styles from "../../assets/jss/material-kit-react/views/componentsSections/voluntStyle.js";


import classNames from "classnames";



const useStyles = makeStyles(styles);

export default function Volunt() {
  const classes = useStyles();
 
  React.useEffect(() => {
    
    return function cleanup() {};
  });
  return (
    <div className={classes.sections}>

          <div className={classes.texthome}>
           <h2 >
            Read the description carefully
             </h2>
            </div>
            <br/>
            <br/>
            <br/>
           
          <div className={classNames(classes.container, classes.displayFlex, classes.bg)}>
                <img className={  classes.web}  src= "../images/volunteer.jpg"  alt="" />
 
                <p className={ classes.topleft}>
 
                Volunteering can help you make friends, learn new skills, advance your career, and even feel happier and healthier. Learn how to find the right volunteer opportunity for you.<br/>
                Benefits you get when you apply from here.<br/>
                We are providing "Certificates" and much more, to the Candidates who wants to apply for Volunteer.<br/>
                there are two ways to Volunteer: <br/>
                1. One Time :- In which You can Volunteer for one day.<br/>
                2. 30 days:- In this Category you can apply as an part-time Intern for a minimum amount of 30 days for which you get a certificate. and if you exceed more than 40 days then we will plant a tree on your name.</p>

          </div>
    </div>



);
}
