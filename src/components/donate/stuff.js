import React from "react"
import { makeStyles } from "@material-ui/core/styles";
import  {useState} from "react";

import {API_BASE_URL, ACCESS_TOKEN_NAME} from '../../constants/apiConstants';
import axios from 'axios';

import styles from "../../assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

export default function Stuff(props) {
  const classes = useStyles();
  React.useEffect(() => {
    
    return function cleanup() {};
  });
    // 
    const [state , setState] = useState({
        name:"",
        email : "",
        contactNumber:"",
        address:"",
      

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
        console.log("handleSubmitClick_2", state.name, state?.email, state?.address, state?.contactNumber);
        
        if(state.name && state?.email  && state?.address && state?.contactNumber ) {
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
                "contactNumber": state.contactNumber,
                "address": state.address,
              
              
            }
            if(!(localStorage.getItem("token"))){
              return alert("Please login first");
            }
            const headers = {
              'Content-Type': 'application/json',
              'Authorization': `${localStorage.getItem("token")}`
            }
            
            axios.post(API_BASE_URL+'donate', payload, {headers: headers})
                .then(function (response) {
                    if(response.status === 201){
                            console.log("sendDetailsToServer_2", response,);
                      alert("Donate details submitted.")
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
  return (


<div>

<div className={classes.sections}>
    <div className={classes.texthome}>
      <h2>
        Donation Alert !
        </h2>
      </div>
        <br/>
        <br/>
        <br/>

        <div class={classes.container}>
<hl></hl>
<div class={classes.displayFlex}>
<div class={classes.contact_left}>
  <h3>Recycle Time</h3>
<form>

  <div class="input-row">
<div class="input-group">
     <label>Name</label>
     <input type="text" placeholder="John Amendo" id="name" required onChange={handleChange}/>
</div>
<br/>
<div class="input-group">
     <label>email</label>
     <input type="email" placeholder="john@abc.com" id="email" required onChange={handleChange}/>
     </div>
     <br/>
<div class="input-group">
     <label>Contact number</label>
     <input type="int" placeholder="9999-xxx-yyy" id="contactNumber" required onChange={handleChange}/>
</div>
<br/>

<div class="input-group">
     <label>Address</label>
     <input type="varchar" placeholder="chawdi baazar" id="address" required onChange={handleChange}/>
</div>

<br/>

<button className={classes.btn} type="submit" onClick={handleSubmitClick}>Send</button>
</div>
</form>

</div>
<div class={classes.contact_right}>
  <h3>Time to Donate some Stuff!</h3>
<p>Sometimes "people" have something stored in their home which is useless for them but can be reuse like Clothes, shoes, Blankets and etc. they don't know what to do with them, In case you are those "people" this Section is for you here you can donate those stuff while sitting in your home. You just need to click on the Donate button given below and fill the information like your Email, Contact Number, Address(where to collect goods) and etc. <br/>
Our Volunteer will collect them for you and delivered them to an NGO that need it.</p> <br/>


</div>
</div>
</div>
      </div>


</div>

   
);
}

