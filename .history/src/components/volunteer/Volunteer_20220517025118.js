import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import  {useState} from "react";

import {API_BASE_URL, ACCESS_TOKEN_NAME} from '../../constants/apiConstants';
import axios from 'axios';

import styles from "../../assets/jss/material-kit-react/views/componentsSections/voluntStyle.js";


import classNames from "classnames";



const useStyles = makeStyles(styles);

export default function Volunt(props) {
  const classes = useStyles();
 
  React.useEffect(() => {
    
    return function cleanup() {};
  });

  // 
  const [state , setState] = useState({
    email : "",
    password : ""
})

const [errorMessage, updateErrorMessage] = useState(null);
const [token, setToken] = useState(null);
const [signUpState , setSignUpState] = useState(null);
const redirectToHome = () => {
    // props.updateTitle('Home')
    props.history.push('/home');
}
const redirectToSignup = () => {
    // props.updateTitle('Signup')
    props.history.push('/signup'); 
}
const handleChange = (e) => {
    const {id , value} = e.target;
    console.log("handleChange", id,"--", value,"-----", e.target);
    setState(prevState => ({
        ...prevState,
        [id] : value
    }))
}


const handleSubmitClick = (e) => {
    e.preventDefault();
    console.log("handleSubmitClick", e, state, state.password, state.confirmPassword, props);
    if(state.password && state?.email) {
        sendDetailsToServer();
    }
    else{
        // props.showError('Email or Passwords not found.');
        alert("Email or Passwords not found.");
    }
}


const sendDetailsToServer = () => {
    if(state.email.length && state.password.length) {
        // props.showError(null);
        const payload={
            "email":state.email,
            "password":state.password,
        }
        axios.post(API_BASE_URL+'auth/login', payload)
            .then(function (response) {
                if(response.status === 200){
                    // setState(prevState => ({
                        //     ...prevState,
                        //     'successMessage' : 'Registration successful. Redirecting to home page..'
                        // }))
                        console.log("sendDetailsToServer_2", response, response?.data?.jwt_token);
                        if(response?.data?.data?.jwt_token){
                            localStorage.setItem("token", response?.data?.data?.jwt_token);
                            setToken(prevState => ({
                                ...prevState,
                                token : response?.data?.jwt_token
                            }));
                        }
                        // alert("User logged in");
                    redirectToHome();
                    // props.showError(null)
                } 
                else{
                    // props.showError("Some error ocurred");
                    console.log("sendDetailsToServer_api_res", response);
                    if(response.status == 401){
                        alert(`${response.message}`);
                    }
                }
            })
            .catch(function (error) {
                console.log(error);
                if(error?.response?.status == 401){
                    alert(`Invalid email or password`);
                }
            });    
    } else {
        props.showError('Please enter valid username and password')    
    }
    
}
  // 
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
     <input type="text" placeholder="John Amendo" id="name"/>
</div>
<br/>
<div class="input-group">
     <label>Address</label>
     <input type="text" placeholder="Delhi, India" id="address"/>
</div>
<br/>
<div class="input-group">
     <label>email</label>
     <input type="email" placeholder="john@abc.com" id="email"/>
</div>
<br/>
<div class="input-group">
     <label>Contact number</label>
     <input type="int" placeholder="9999-xxx-yyy" id="contactNumber"/>
</div>
<br/>
<div class="input-group">
     <label>Age</label>
     <input type="int" placeholder="" id="age"/>
     </div>
<br/>
<div class="input-group">
     <label>Volunteer for</label>
     <input type="varchar" placeholder="30 days" id="voluteerForDays"/>
</div>

<br/>


<br/>
<button className={classes.btn} type="submit" onClick={handleSubmitClick}>
  Apply
  </button>
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
