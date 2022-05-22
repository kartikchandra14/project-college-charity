import React from 'react';
import  {useState} from "react";

import {API_BASE_URL, ACCESS_TOKEN_NAME} from '../../constants/apiConstants';
import axios from 'axios';

import AlertComponent from '../AlertComponent/AlertComponent';  

import {ReactComponent as Logo} from '../../assets/instagram.svg'
import HeaderLinks from "../Header/HeaderLinks"
import { BrowserRouter as Link  } from 'react-router-dom';

import './login.css';

import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
const useStyles = makeStyles(styles);

export default function Login(props) {
    const classes = useStyles();
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

const moveToSignUp = (event) => {
    event.preventDefault();
    setSignUpState(prevState => ({
        ...prevState,
        signUpState : true
    }));
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
                            window?.location?.reload();

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
        <div className={classes.container}>
          Login
        </div>
        <div className='div-login'>
                 <div className='div-login-logo'>
                     <Logo/>
                 </div>
                 <div>
                     <form onSubmit = {handleSubmitClick}>
                         <input type='email' id='email' name='email' placeholder='email...' required onChange={handleChange}/>
                         <input type='password' id='password' name='pwd' placeholder='password...' required onChange={handleChange}/>
                         <button onClick={handleSubmitClick} >
                             Log In
                         </button>
                     </form>
                 </div>
                 <div>
                     <Link to={'/signup'}>
                        <button onClick={redirectToSignup} > 
                        {/* moveToSignUp */}
                             Create an account
                        </button>
                     </Link>
                 </div>
        </div>
        {/* <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage} showError={updateErrorMessage} /> */}
        <HeaderLinks token={setToken}></HeaderLinks>
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