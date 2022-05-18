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
    
    
},

body: {
        
    backgroundColor: "#b1cdf2",
    border: "4px solid",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    justifyContent: "space-around",
},

text:{
    textAlign: "center",
},

first_row:{
     display: "flex",
},

owner:{
    width: "600px",
    marginRight: "40px",
    paddingLeft: "30px"
},


input_field: {
    
    width: "450px",
},
inp: {
    width: "100%",
    border: "none",
    outline: "none",
    padding: "10px"
},

selection: {
    display: "flex",
    
},

months: {
    margin: "0",
    padding: "10px 20px",
    boxSizing: "border-box",
    fontFamily: 'Poppins, sans-serif',
},

img: {
    height: "70px",
    width: "70px",
    display:  "flex",
    margin:  "10px",
    padding:  "10px",
    position: "relative",
    left: "350px"

},
btn: {
    width: "1000px",
    backgroundColor: "blueviolet",
    color: "white",
    textAlign: "center",
    textTransform: "uppercase",
    textDecoration: "none",
    padding: "10px",
    fontSize: "18px",
    position: "relative",
    left: "45px"
},
...customCheckboxRadioSwitch,
};

export default basicStyle;