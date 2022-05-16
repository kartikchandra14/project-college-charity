import { container, title } from "../../../material-kit-react.js";
import customCheckboxRadioSwitch from "../../customCheckboxRadioSwitch.js";

const basicsStyle = {
  sections: {
    padding: "70px 0",
  },
  container,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
   
  },
  space50: {
    height: "50px",
    display: "block",
  },
  space70: {
    height: "70px",
    display: "block",
  },
  icons: {
    width: "17px",
    height: "17px",
    color: "#FFFFFF",
  },
  displayFlex:{
    display: "flex",
  },

  texthome:{
    textAlign: "center"
  },

  marginall:{
    marginRight: "20px"
  },
  bgcard:{
    width: "360px",
    height: "500px",
    backgroundColor: "#15104f"
},
  colorcard:{
    color: "white",
    fontSize: "50px",
    textAlign: "right",
    paddingLeft:"10px"
},
  spam:{
    paddingTop:"20px",
    color: "#fcae26",
    fontSize: "15px"
},
  listbg:{

    borderRadius: "10px",
    backgroundColor: "#15104f",
    paddingBottom: "5px",
  boxShadow: "5px 10px 10px #2e36ab"

    
},
  list:{
    color: "white",
    fontSize: "20px"
    
},
web:{
  borderRadius: "10px",
  height: "150px",
  width: "350px",
  
},

btn:{
  backgroundColor: "#18a808",
  color: "white",
  fontSize: "17px",
  marginTop: "120px",
  marginRight: "20px",
  height: "40px",
  width: "100px",
},
but:{
  paddingRight: "60px",
 

},
btn1:{
  marginRight: "20px",
  paddingRight: "15px",
  paddingLeft: "15px",
  backgroundColor: "#18a808",
  color: "white",
  

},
dialog:{
  backgroundColor: "rgb(0,0,0)", /* Fallback color */
  backgroundColor: "rgba(0,0,0, 0.2)"  /* Black w/opacity/see-through */
},
readmore:{
  backgroundColor: "#ed6707",
  height: "590px",
  width: "600px"
},

desc:{
  BackgroundColor: "white",
  fontSize: "20px"
},

    ...customCheckboxRadioSwitch,
  };

export default basicsStyle;
// body{
//   background: #55ffe5;
//   font-size: 14px;
// .container{
//   width: 80%;
//   margin: 50px auto;
// 7.contact-box{
//   background: #fff;
//   display: flex;
// .contact-left{
//   flex-basis: 60%;
//   padding: 40px 60px;
// .contact-right{
//   flex-basis: 40%;
//   padding: 40px: