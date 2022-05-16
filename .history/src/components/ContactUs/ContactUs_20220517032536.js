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
    return function cleanup() {};
  });

    // 
    const [state , setState] = useState({
      name:"",
      email : "",
      message:""
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
      
      if(state.name && state?.email && state?.message) {
          sendDetailsToServer();
      }
      else{
          // props.showError('Email or Passwords not found.');
          alert("Please fill complete form.");
      }
  }
  
  
  const sendDetailsToServer = () => {
    console.log("sendDetailsToServer", state);
      if(state.email.length && state.name.length && state.message.length ) {
          // props.showError(null);
          const payload={
              "email":state.email,
              "name":state.name,
              "message": state.address
          }
          if(!(localStorage.getItem("token"))){
            return alert("Please login first");
          }
          const headers = {
            'Content-Type': 'application/json',
            'Authorization': `${localStorage.getItem("token")}`
          }
          
          axios.post(API_BASE_URL+'contact', payload, {headers: headers})
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
         <input type="text" placeholder="John Amendo" id="name" required onChange={handleChange}/>
    </div>
    <br/>
    <div class="input-group">
         <label>Email</label>
         <input type="email" placeholder="John@xyz.com" id="email" required onChange={handleChange}/>
</div>
<br/>

<div >
<label>Message</label>
<br/>
<textarea className={classes.mssg} rows="5" placeholder="Your Message" id="message" required onChange={handleChange}></textarea>
    </div>
    <br/>
    <button className={classes.btn} type="submit" onClick={handleSubmitClick}>
      Send
      </button>
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
