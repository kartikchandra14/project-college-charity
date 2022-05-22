import React from 'react';
import  {useState} from "react";

import {API_BASE_URL, ACCESS_TOKEN_NAME} from '../../constants/apiConstants';
import axios from 'axios';

import AlertComponent from '../AlertComponent/AlertComponent';  

import {ReactComponent as Logo} from '../../assets/instagram.svg'
import './signup.css';
import { BrowserRouter as Link  } from 'react-router-dom';

import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
const useStyles = makeStyles(styles);


export default function Signup(props) {
    const classes = useStyles();
// 
const [state , setState] = useState({
    email : "",
    password : ""
})

const [errorMessage, updateErrorMessage] = useState(null);

const redirectToHome = () => {
    props.updateTitle('Home')
    props.history.push('/home');
}
const redirectToLogin = () => {
    // props.updateTitle('Login')
    props.history.push('/login'); 
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
    // console.log("handleSubmitClick", e, state, state.password, state.confirmPassword, props);
    if(state.password && state?.email){
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
        axios.post(API_BASE_URL+'auth/signup', payload)
            .then(function (response) {
                if(response.status === 201){
                    alert("User created success. You can login now.");
                    // setState(prevState => ({
                    //     ...prevState,
                    //     'successMessage' : 'Registration successful. Redirecting to home page..'
                    // }))
                    redirectToHome();
                    // props.showError(null)
                } else{
                    // props.showError("Some error ocurred");
                }
            })
            .catch(function (error) {
                console.log("sendDetailsToServer_error", error);
                if(error?.response?.data?.status == 409 && error?.response?.data?.message == "Email already exists" ){
                    alert("Email already exists");
                }
            });    
    } else {
        props.showError('Please enter valid username and password')    
    }
    
}
// 
    return (
      <div className={classes.sections}>
        <div className={classes.container}>
        <h2 className='h2'>Signup here</h2>

        </div>
        <div className='div-login'>
                 <div className='div-login-logo'>
                     <Logo/>
                 </div>
                 <div>
                     <form onSubmit = {handleSubmitClick}>
                         <input type='email' id='email' name='email' placeholder='email...' required onChange={handleChange}/>
                         <input type='password' id='password' name='pwd' placeholder='password...' required onChange={handleChange}/>
                         <button onClick={handleSubmitClick}>
                            Sign Up
                         </button>
                     </form>
                 </div>
                 <div>
                     <Link to={'/login'}>
                        <button onClick={redirectToLogin}> 
                             Log In
                        </button>
                     </Link>
                 </div>
        </div>
        {/* <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage} showError={updateErrorMessage} /> */}
      </div>
    );
}


// class Login extends React.Component{
//     state={
//         email:'',
//         pwd:''
//     }

//     handleChange = (e) =>{
//         const {name,value} = e.target
//         this.setState({[name]:value})
//     }

//     handleSubmit = (e) =>{
//         e.preventDefault()
//         this.props.isLogin(true)
//     }
//     render(){
//         return(
//             <div className='div-login'>
//                 <div className='div-login-logo'>
//                     <Logo/>
//                 </div>
//                 <div>
//                     <form onSubmit = {this.handleSubmit}>
//                         <input type='email' name='email' placeholder='email...' required onChange={this.handleChange}/>
//                         <input type='password' name='pwd' placeholder='password...' required onChange={this.handleChange}/>
//                         <button onSubmit={this.handleSubmit}>
//                             Log In
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         )
//     }
// }

// export default Login;