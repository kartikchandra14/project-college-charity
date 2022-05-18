import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import  {useState} from "react";

import {API_BASE_URL, ACCESS_TOKEN_NAME} from '../../constants/apiConstants';
import axios from 'axios';

import styles from "../../assets/jss/material-kit-react/views/componentsSections/style.js";
// import './style.css';

import classNames from "classnames";



const useStyles = makeStyles(styles);

export default function PaymentGateway(props) {
  const classes = useStyles();
 
  React.useEffect(() => {
    
    return function cleanup() {};
  });

  // 
  const [state , setState] = useState({
    name:"",
    email : "",
    age : 0,
    address:"",
    contactNumber:"",
    voluteerForDays:""
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
    console.log("handleSubmitClick_2", state.name, state?.email, state?.age, state?.address, state?.contactNumber, state?.volunteerForDays);
    
    if(state.name && state?.email && state?.age && state?.address && state?.contactNumber && state?.volunteerForDays) {
        sendDetailsToServer();
    }
    else{
        // props.showError('Email or Passwords not found.');
        alert("Please fill complete form.");
    }
}


const sendDetailsToServer = () => {
  console.log("sendDetailsToServer", state);
    if(state.email.length && state.name.length && state.address.length && state.contactNumber.length ) {
        // props.showError(null);
        const payload={
            "email":state.email,
            "name":state.name,
            "address": state.address,
            "age": Number(state.age),
            "contactNumber": state.contactNumber,
            "volunteerForDays": state.volunteerForDays
        }
        if(!(localStorage.getItem("token"))){
          return alert("Please login first");
        }
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': `${localStorage.getItem("token")}`
        }
        
        axios.post(API_BASE_URL+'volunteer', payload, {headers: headers})
            .then(function (response) {
                if(response.status === 201){
                        console.log("sendDetailsToServer_2", response,);
                  alert("Volunteer details submitted.")
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
                    alert(`Invalid details`);
                }
            });    
    } else {
        props.showError('Please enter valid details.')    
    }
    
}
  // 
  return (
    <div className={classes.sections}>
    <div class={classes.container}>
        <div className={classes.body}>
        <h1 class={classes.text}>Confirm Your Payment</h1>
        <br/>
        <div class={classes.first_row}>
            <div class={classes.owner}>
                <h3>Owner</h3>
                <div class={classes.input_field}>
                    <input type="text" className={classes.inp} />
                </div>
            </div>
            <div class="cvv">
                <h3>CVV</h3>
                <div class={classes.cvv}>
                    <input type="password" className={classes.inp} />
                </div>
            </div>
        </div>
        <div class={classes.First_row}>
            <div class={classes.owner}>
                <h3>Card Number</h3>
                <div class={classes.input_field}>
                    <input type="text"  className={classes.inp}/>
                </div>
            </div>
        </div>
        <div class={classes.First_row}>
            <div class={classes.owner}>
            <h3>Expiry Date</h3>
            <div class={classes.selection}>
                <div >
                    <select name="months" className={classes.months}>
                        <option value="Jan">Jan</option>
                        <option value="Feb">Feb</option>
                        <option value="Mar">Mar</option>
                        <option value="Apr">Apr</option>
                        <option value="May">May</option>
                        <option value="Jun">Jun</option>
                        <option value="Jul">Jul</option>
                        <option value="Aug">Aug</option>
                        <option value="Sep">Sep</option>
                        <option value="Oct">Oct</option>
                        <option value="Nov">Nov</option>
                        <option value="Dec">Dec</option>
                      </select>
                      &nbsp;
                      &nbsp;
                      <select name="years" className={classes.months}>
                        <option value="2027">2027</option>
                        <option value="2026">2026</option>
                        <option value="2025">2025</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                      </select>
                </div>
                <div class={classes.img}>
                    <img src="../images/mc.png" alt="" />
                    <img src="../images/vi.png" alt="" />
                    <img src="../images/pp.png" alt="" />
                </div>
            </div>    
            </div>    
        </div>
    
        <br/>
        <button className={classes.btn}><a href=""></a>CONFIRM</button>
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
