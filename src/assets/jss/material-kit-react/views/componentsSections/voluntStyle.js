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

  colorcard:{
    color: "white"
},
bg: {
    backgroundColor: "#0d0173",
    borderRadius: "10px",
    padding: "5px",
    boxShadow: "5px 10px 10px #2e36ab"
},

web:{
    borderRadius: "50% ",
    height:"500px",
    padding: "20px 20px 20px 50px",
    // width: "1500px",
 
  },
  topleft: {
    position: "relative",
    width: "600px",
    Top: "500px",
    Left: "500px",
    color: "white",
    fontSize: "20px",
    backgroundColor: "blue",
  },

    ...customCheckboxRadioSwitch,
  };

export default basicsStyle;
