// *{
//     margin: "0",
//     padding: "0",
//     boxSizing: "border-box",
//     fontFamily: 'Poppins', 'sans-serif',
// }

// body:{
//     width: 100%;
//     height: 100vh;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color: azure;
// }
import { CenterFocusStrong } from "@material-ui/icons";
import { container, title } from "../../../material-kit-react.js";
import customCheckboxRadioSwitch from "../../customCheckboxRadioSwitch.js";


const basicStyle = {
    sections: {
      padding: "70px 0",
    },
    container,
    title: {
      ...title,
    width: "750px",
    height: "500px",
    border: "1px solid",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    padding: "40px",
    justifyContent: "space-around",
},



first_row:{
     display: "flex",
},

owner:{
    width: "100%",
    marginRight: "40px"
},

input_field: {
    border: "1px solid #999",
},

input_field,input: {
    width: "100%",
    border: "none",
    outline: "none",
    padding: "10px"
},

selection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
},

selection,select: {
    padding: "10px 20px",
},

img: {
    width: "100px",
},
...customCheckboxRadioSwitch,
};

export default basicStyle;