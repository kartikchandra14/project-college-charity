import { container, title } from "../../../material-kit-react.js";
import customCheckboxRadioSwitch from "../../customCheckboxRadioSwitch.js";

const shopStyle = {
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

  card: {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    width: "17px",
   
  },
  displayFlex:{
    display: "flex",
  },
  paddingall:{
    padding:"auto"
  },
  marginall:{
    marginRight: "10px"
  },
  marginpro: {
    marginRight: "auto"
  },

  texthome:{
    textAlign: "center"
  },
  bgcard:{
      width: "auto",
      backgroundColor: "#15104f"
  },
  colorcard:{
      color: "white"
  },
  size:{
      color: "black",
      backgroundColor: "#c3c6c9",
    
  },
  colorshop:{
      color: "#0059ff",
  },
  bgpro: {
    backgroundColor: "#2b2c2e"
  },
 btn: {
    color: "white",
    backgroundColor: "Black",
    marginLeft: "100px",
    borderRadius:"10px"
 },

 bgColor2:{
   backgroundColor: "#2b2c2e"
 },
 native:{
    marginRight: "160px",
    marginLeft: "20px"
 },
teamimg: {
  borderRadius: "10px"
},

    ...customCheckboxRadioSwitch,
};

export default shopStyle;