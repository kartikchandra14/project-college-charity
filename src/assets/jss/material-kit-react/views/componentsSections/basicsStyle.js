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
  paddingall:{
    padding:"auto"
  },
  marginall:{
    marginRight: "5px",
    marginLeft: "5px"
  },
  texthome:{
    textAlign: "center"
  },
  gallerybg:{
    backgroundColor: "#c9eaff",
    padding: "10px",
    boxShadow: "5px 10px 10px #888888"
  },
  card: {
    width:"370px",
    height:"100%",
    backgroundColor: "#730511"
  },
  card1: {
    width:"370px",
    height:"480px",
    backgroundColor: "#464547"
  },
  typo: {
    fontSize: "18px",
    color: "white"
  },
  typo1: {
    fontSize: "21px",
    backgroundColor: "#9e9e9e",
    color: "Black",
    textAlign:"center"
  },
  box:{
    color:"Black",
    backgroundColor:"#a59aa6",
    borderRadius: "10px",
    padding: "20px",
    position: "relative",
    left: "28%",
    width: "500px",
    height: "400px",
    fontSize: "20px",

  },
  contact_left:{
    backgroundColor: "#d9d5d4",
      flexBasis: "60%",
      padding: "40px 60px",
  },
  contact_right:{
    fontSize: "18px",
       flexBasis: "40%",
       padding: "40px",
      backgroundColor: "#780a69",
      color: "#fff"
  },
  mssg: {
    width: "97%",
    boxSizing: "border-Box",
  },
  btn: {
    width: "30%",
    height: "35px",
    fontSize: "20px",
    borderRadius: "30px",
    backgroundColor: "#021396",
  },

    ...customCheckboxRadioSwitch,
  };

export default basicsStyle;
