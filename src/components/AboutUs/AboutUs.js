import React from "react";


// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


import styles from "../../assets/jss/material-kit-react/views/componentsSections/aboutStyle.js";

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from "../CustomButtons/Button.js";

// icon 
import icons from "@material-ui/icons";




import classNames from "classnames";



const useStyles = makeStyles(styles);

export default function AboutUs() {
  const classes = useStyles();

// image

  React.useEffect(() => {
    
    return function cleanup() {};
  });
  return (
    <div className={classes.sections}>

          <div className={classes.texthome}>
           <h2 >
            About Us
             </h2>
            </div>
            <br/>
            <br/>
            <br/>
            <h2 className={classes.texthome}>
                About website
             </h2> 
             <br/>
          <div className={classNames(classes.container, classes.displayFlex)}>
                <img className={  classes.web}  src= "../images/ballon1.jpg"  alt="" />
 
                <p className={ classes.topleft}>
 
           <b className={classes.colorcard}>Club Care</b> will help User(Donors and Volunteer) to find NGOs easily. Donor can simply register and login using credentials and they can access suitable NGOs for them and they can donate easily. People need to fill the details regarding Volunteer on approval of request. and people who are Volunteering are provided Certificate from the NGO.</p>

          </div>
            
             <br/>
            <br/>
            <br/>
             <h2 className={classes.texthome}>
                Our Team
             </h2>  
              <br/>
              <br/>
         <div className={classes.container}>
        <div className={ classes.displayFlex}>
        <div className={( classes.marginall)}>
           
         <Card className={classes.bgcard}>

      <CardMedia 
         component="img"

         height="200"
         image={require("../../assets/img/satoru-gojo.jpg").default}
        alt="appearing"
         
      />
      
      <CardContent>
        <h2 className={classNames(classes.colorcard,classes.texthome)}>JATIN SHARMA</h2>
        <h5  className={classNames(classes.colortil,classes.texthome)}>Full Stack Developer</h5>
        <p className={classes.colorcard}>Worked on HTML, CSS, Bootstrap, JavaScript, React.js, Node.js and MongoDB.</p>
      </CardContent>
      <CardActions>
        <div className={classes.colorcard}>
      <Button className={classes.marginbtn}
            href="#"
            // target="_blank"
            color="transparent"
            
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>

        <Button 
            href="#"
            // target="_blank"
            color="transparent"
            
          >
            <i className={classes.socialIcons + " fab fa-linkedin-in"} />
          </Button>

          <Button
            color="transparent"
            href="#"
            // target="_blank"
            >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
          </div>
      </CardActions>
        </Card>
        </div>

        <div className={( classes.marginall)}>
        <Card className={classes.bgcard}>
        <CardMedia
             
             component="img"
             height="200"
             image={require("../../assets/img/satoru-gojo.jpg").default}
            alt="appearing"
             
          
        />
        <CardContent>
        <h2 className={classNames(classes.colorcard,classes.texthome)}>RIA VIJAN</h2>
        <h5  className={classNames(classes.colortil,classes.texthome)}>Front-End Developer</h5>
        <p className={classes.colorcard}>Worked on HTML, CSS, Bootstrap and JavaScript.</p>
        </CardContent>
        <CardActions>
        <div className={classes.colorcard}>
        <Button className={classes.marginbtn}
            href="#"
            // target="_blank"
            color="transparent"
            
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
          
        <Button
            href="#"
            // target="_blank"
            color="transparent"
            
          >
            <i className={classes.socialIcons + " fab fa-linkedin-in"} />
          </Button>

          <Button
            color="transparent"
            href="#"
            // target="_blank"
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
          </div>  
        </CardActions>
        </Card>
        </div>  

          <div>
        <Card className={classes.bgcard}>
         <CardMedia
        
        component="img"
        height="200"
        image={require("../../assets/img/satoru-gojo.jpg").default}
       alt="appearing"

        />
        <CardContent>
        <h2 className={classNames(classes.colorcard,classes.texthome)}>BHAVYA GANDHI</h2>
        <h5  className={classNames(classes.colortil,classes.texthome)}>Front-End Developer</h5>
        <p className={classes.colorcard}>Worked on HTML, CSS, Bootstrap and JavaScript.</p>
        </CardContent>
        <CardActions >
        <div className={classes.colorcard}>
        <Button className={classes.marginbtn}
            href="#"
            // target="_blank"
            color="transparent"
            
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        <Button
            href="#"
            // target="_blank"
            color="transparent"
            
          >
            <i className={classes.socialIcons + " fab fa-linkedin-in"} />
          </Button>

          <Button
            color="transparent"
            href="#"
            // target="_blank"
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
          </div>  
        </CardActions>
        </Card>    
        </div>
  </div>
  </div>
  </div>

    
  );
}
