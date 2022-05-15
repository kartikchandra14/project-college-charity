import { CenterFocusStrong } from "@material-ui/icons";
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

  marginall:{
    marginRight: "20px"
  },
  bgcard:{
    width: "360px",
    height: "500px",
    backgroundColor: "#15104f"
},
  colorcard:{
    color: "white"
},
texthome:{
  textAlign: "center"
},
colortil:{
  fontSize: "20px",
  color: "#ff4800",
},
marginbtn:{
  marginLeft: "45px"
},

web:{
  borderRadius: "10px",
  height:"400px",
  width: "1500px",
  padding: "5px",
    boxShadow: "5px 10px 10px #2e36ab"
},
topleft: {
  position: "absolute",
  width: "700px",
  paddingTop: "40px",
  paddingLeft: "29px",
  color: "",
  fontSize: "20px"
},

  ...customCheckboxRadioSwitch,
};

export default shopStyle;