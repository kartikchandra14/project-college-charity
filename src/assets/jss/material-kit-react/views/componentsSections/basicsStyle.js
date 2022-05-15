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
    marginRight: "10px"
  },
  texthome:{
    textAlign: "center"
  },
  gallerybg:{
    backgroundColor: "#c0c1c4",
    padding: "10px",
    boxShadow: "5px 10px 10px #888888"
  },

    ...customCheckboxRadioSwitch,
  };

export default basicsStyle;
