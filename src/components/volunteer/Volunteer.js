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
      <h2>
        Volunteer
        </h2>
      </div>
        <br/>
        <br/>
        <br/>

        <div class={classes.container}>
<hl></hl>
<div class={classes.displayFlex}>
<div class={classes.contact_left}>
  <h3>Apply Here</h3>
<form>

  <div class="input-row">
<div class="input-group">
     <label>Name</label>
     <input type="text" placeholder="John Amendo"/>
</div>
<br/>
<div class="input-group">
     <label>email</label>
     <input type="email" placeholder="john@abc.com"/>
</div>
<br/>
<div class="input-group">
     <label>Contact number</label>
     <input type="int" placeholder="9999-xxx-yyy"/>
</div>
<br/>
<div class="input-group">
     <label>Age</label>
     <input type="int" placeholder=""/>
     </div>
<br/>
<div class="input-group">
     <label>Volunteer for</label>
     <input type="varchar" placeholder="30 days"/>
</div>

<br/>


<br/>
<button className={classes.btn} type="submit">Apply</button>
</div>
</form>

</div>
<div class={classes.contact_right}>
  <h3>Read the description carefully</h3>
<p>Volunteering can help you make friends, learn new skills, advance your career, and even feel happier and healthier. Learn how to find the right volunteer opportunity for you.<br/>
                 Benefits you get when you apply from here.<br/>
                 We are providing "Certificates" and much more, to the Candidates who wants to apply for Volunteer.<br/>
                 there are two ways to Volunteer: <br/>
                1. One Time :- In which You can Volunteer for one day.<br/>
                2. 30 days:- In this Category you can apply as an part-time Intern for a minimum amount of 30 days for which you get a certificate. and if you exceed more than 40 days then we will plant a tree on your name.</p> <br/>


</div>
</div>
</div>
      </div>

);
}
//     <div className={classes.sections}>

//           <div className={classes.texthome}>
//            <h2 >
//             Read the description carefully
//              </h2>
//             </div>
//             <br/>
//             <br/>
//             <br/>
           
//           <div className={classNames(classes.container, classes.displayFlex, classes.bg)}>
//                 <img className={  classes.web}  src= "../images/volunteer.jpg"  alt="" />
 
//                 <p className={ classes.topleft}>
 
//                 Volunteering can help you make friends, learn new skills, advance your career, and even feel happier and healthier. Learn how to find the right volunteer opportunity for you.<br/>
//                 Benefits you get when you apply from here.<br/>
//                 We are providing "Certificates" and much more, to the Candidates who wants to apply for Volunteer.<br/>
//                 there are two ways to Volunteer: <br/>
//                 1. One Time :- In which You can Volunteer for one day.<br/>
//                 2. 30 days:- In this Category you can apply as an part-time Intern for a minimum amount of 30 days for which you get a certificate. and if you exceed more than 40 days then we will plant a tree on your name.</p>

//           </div>
//     </div>



// );
// }
