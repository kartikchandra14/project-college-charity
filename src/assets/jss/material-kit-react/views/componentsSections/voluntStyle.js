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
  displayFlex:{
    display: "flex",
  },

  texthome:{
    textAlign: "center"
  },
  box:{
    color:"Black",
    backgroundColor:"#a59aa6",
    borderRadius: "10px",
    padding: "20px",
    position: "relative",
    left: "28%",
    width: "500px",
    height: "500px",
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
      backgroundColor: "#0f8704",
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
