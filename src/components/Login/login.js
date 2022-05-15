import React from 'react';
import  {useState} from "react";

import {API_BASE_URL, ACCESS_TOKEN_NAME} from '../../constants/apiConstants';
import axios from 'axios';

import {ReactComponent as Logo} from '../../assets/instagram.svg'
import './login.css';

import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
const useStyles = makeStyles(styles);


export default function Login(props) {
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
          } 
          else {
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
// 
const [state , setState] = useState({
    email : "",
    password : ""
})

const redirectToHome = () => {
    props.updateTitle('Home')
    props.history.push('/home');
}
const redirectToLogin = () => {
    props.updateTitle('Login')
    props.history.push('/login'); 
}
const handleChange = (e) => {
    const {id , value} = e.target   
    setState(prevState => ({
        ...prevState,
        [id] : value
    }))
}


const handleSubmitClick = (e) => {
    e.preventDefault();
    if(state.password === state.confirmPassword) {
        sendDetailsToServer()    
    } else {
        props.showError('Passwords do not match');
    }
}

const sendDetailsToServer = () => {
    if(state.email.length && state.password.length) {
        props.showError(null);
        const payload={
            "email":state.email,
            "password":state.password,
        }
        axios.post(API_BASE_URL+'/auth/signup', payload)
            .then(function (response) {
                if(response.status === 200){
                    setState(prevState => ({
                        ...prevState,
                        'successMessage' : 'Registration successful. Redirecting to home page..'
                    }))
                    redirectToHome();
                    props.showError(null)
                } else{
                    props.showError("Some error ocurred");
                }
            })
            .catch(function (error) {
                console.log(error);
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
                         <input type='email' name='email' placeholder='email...' required onChange={handleChange}/>
                         <input type='password' name='pwd' placeholder='password...' required onChange={handleChange}/>
                         <button onClick={handleSubmitClick}>
                             Log In
                         </button>
                     </form>
                 </div>
             </div>
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