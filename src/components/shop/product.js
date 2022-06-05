import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


import styles from "../../assets/jss/material-kit-react/views/componentsSections/shopStyle.js";

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from "../CustomButtons/Button.js";
// import Typography from '@material-ui/core/Typography';

// icon 
import { Apps, CloudDownload, Home } from "@material-ui/icons";

import classNames from "classnames";


import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';


const useStyles = makeStyles(styles);

export default function Prod(props) {
  const classes = useStyles();
  React.useEffect(() => {
    
    return function cleanup() {};
  });

  const redirectToPayment = () => {
    // props.updateTitle('Signup')
    props.history.push('/payment'); 
  }
  return (
    // why section
    <div className={classes.sections}>
          
             <h2 className={classes.texthome}>
                Why Shop With Us
             </h2>  
              <br/>
              <br/>
          
              
         <div className={classes.container}>
        <div className={ classes.displayFlex}>
        <div className={( classes.marginall)}>
           
         <Card className={classes.bgcard}>
      <CardMedia
        //    icon of money
      />
      <CardContent>
        <h4 className={classNames(classes.colorcard,classes.texthome)}>NON-PROFITABLE</h4>
        <p className={classes.colorcard}>The remaning profit of the product will donate to the NGO</p>
      </CardContent>
      <CardActions>
      </CardActions>
        </Card>
        </div>
        <div className={( classes.marginall)}>
        <Card className={classes.bgcard}>
        <CardMedia
        // icon of quality
        />
        <CardContent>
        <h4 className={classNames(classes.colorcard,classes.texthome)}>BEST QUALITY</h4>
        <p className={classes.colorcard}>We have genuine quality of material for our Buyers.</p>
        </CardContent>
        <CardActions>
        </CardActions>
        </Card>
        </div>        
          <div>
        <Card className={classes.bgcard}>
         <CardMedia
        //    icon of free
        />
        <CardContent>
        <h4 className={classNames(classes.colorcard,classes.texthome)}>FREE SHIPING</h4>
        <p className={classes.colorcard}>We are providing free shiping to our Costumer at their door.</p>
        </CardContent>
        <CardActions>
        </CardActions>
        </Card>    
        </div>
  </div>
  </div>
      
      
      
        <br/>
        <br/>
        <br/>


        {/* product */}

        <h1 className={classes.texthome}>Our <span className={classes.colorshop}>Product</span></h1>

        <br/>
        <br/>

{/* product start */}

        <div className={classes.container}>
        <div className={ classes.displayFlex}>

        <div className={classes.marginpro}>
        <Card className={classes.bgpro}>
      <CardMedia
        component="img"
        height="250"
        image={require("../../assets/img/tshirt1.jpg").default}
        alt="green iguana"
      />
      <CardContent>
        <h3 className={classNames(classes.texthome, classes.colorcard)}>MEN's T-Shirt</h3>
        <p className={classes.colorcard}>Athleisure Men's Round Neck Cotton T-Shirt</p>
        <h4 className={classNames(classes.marginpro, classes.colorcard)}>Rs.800</h4>
      </CardContent>
  
      <CardActions className={classes.bgColor2}>

      <FormControl className={classes.native} sx={{ m: 1, minWidth: 120 }}>
  <InputLabel className={classes.colorcard} variant="standard" htmlFor="uncontrolled-native">
    Size
  </InputLabel><br/>
  <NativeSelect
    defaultValue={30}
    className={classes.size}
    inputProps={{
      name: 'Size',
      id: 'uncontrolled-native',
    }}
  >
    <option value={10}>S</option>
    <option value={20}>M</option>
    <option value={30}>L</option>
    <option value={40}>XL</option>
  </NativeSelect>
</FormControl>
    
        <Button onClick={redirectToPayment} className={classes.btn} size="small">Buy</Button>
      
      </CardActions>
        </Card>
        </div>
        <div className={classes.marginpro}>
        <Card className={classes.bgpro}>
      <CardMedia
        component="img"
        height="250"
        image={require("../../assets/img/men jean.jpg").default}
        alt="green iguana"
      />
      <CardContent>
        <h3 className={classNames(classes.texthome, classes.colorcard)}>MEN's Slim Fit Jeans</h3>
        <p className={classes.colorcard}>Campus Sutra Cut, Sew Denim Jeans</p>
        <h4 className={classes.colorcard}>Rs.1200</h4>
      </CardContent>
    
      <CardActions className={classes.bgColor2}>

      <FormControl className={classes.native} sx={{ m: 1, minWidth: 120 }}>
  <InputLabel className={classes.colorcard} variant="standard" htmlFor="uncontrolled-native">
    Size
  </InputLabel><br/>
  <NativeSelect
    defaultValue={30}
    className={classes.size}
    inputProps={{
      name: 'Size',
      id: 'uncontrolled-native',
    }}
  >
    <option value={10}>S</option>
    <option value={20}>M</option>
    <option value={30}>L</option>
    <option value={40}>XL</option>
  </NativeSelect>
</FormControl>
    
        <Button onClick={redirectToPayment} className={classes.btn} size="small">Buy</Button>
      
      </CardActions>
         </Card>
         </div>

         <div>
         <Card className={classes.bgpro}>
      <CardMedia
        component="img"
        height="250"
        image={require("../../assets/img/polo men.jpg").default}
        alt="green iguana"
      />
      <CardContent>
        <h3 className={classNames(classes.texthome, classes.colorcard)}>MEN's Polo T-Shirt</h3>
        <p className={classes.colorcard}>Men's Regular Fit Organic Cotton T-Shirt.</p>
        <h4 className={classes.colorcard}>Rs.700</h4>
      </CardContent>
      





      <CardActions className={classes.bgColor2}>

      <FormControl className={classes.native} sx={{ m: 1, minWidth: 120 }}>
  <InputLabel className={classes.colorcard} variant="standard" htmlFor="uncontrolled-native">
    Size
  </InputLabel> <br/>
  <NativeSelect
    defaultValue={30}
    className={classes.size}
    inputProps={{
      name: 'Size',
      id: 'uncontrolled-native',
    }}
  >
    <option value={10}>S</option>
    <option value={20}>M</option>
    <option value={30}>L</option>
    <option value={40}>XL</option>
  </NativeSelect>
</FormControl>
    
        <Button onClick={redirectToPayment} className={classes.btn} size="small">Buy</Button>
      
      </CardActions>
       </Card>
        </div>
        </div>
        </div>
<br/>
<br/>

        <div className={classes.container}>
        <div className={ classes.displayFlex}>

        <div className={classes.marginpro}>
        <Card className={classes.bgpro}>
      <CardMedia
        component="img"
        height="250"
        
        image={require("../../assets/img/women1.jpg").default}
        alt="green iguana"
      />
      <CardContent>
        <h3 className={classNames(classes.texthome, classes.colorcard)}>WOMEN's LONG COAT</h3>
        <p className={classes.colorcard}>vss Women's Long Winter Woolen Coat.</p>
        <h4 className={classes.colorcard}>Rs.1700</h4>
      </CardContent>
  
      <CardActions className={classes.bgColor2}>

      <FormControl className={classes.native} sx={{ m: 1, minWidth: 120 }}>
  <InputLabel className={classes.colorcard} variant="standard" htmlFor="uncontrolled-native">
    Size
  </InputLabel><br/>
  <NativeSelect
    defaultValue={30}
    className={classes.size}
    inputProps={{
      name: 'Size',
      id: 'uncontrolled-native',
    }}
  >
    <option value={10}>S</option>
    <option value={20}>M</option>
    <option value={30}>L</option>
    <option value={40}>XL</option>
  </NativeSelect>
</FormControl>
    
        <Button onClick={redirectToPayment} className={classes.btn} size="small">Buy</Button>
      
      </CardActions>
        </Card>
        </div>
        <div className={classes.marginpro}>
        <Card className={classes.bgpro}>
      <CardMedia
        component="img"
        height="250"
        image={require("../../assets/img/women2.jpg").default}
        alt="green iguana"
      />
      <CardContent>
        <h3 className={classNames(classes.texthome, classes.colorcard)}>WOMEN's TOP</h3>
        <p className={classes.colorcard}>Women's Plain Regular fit Top (polkadots)</p>
        <h4 className={classes.colorcard}>Rs.700</h4>
      </CardContent>

      <CardActions className={classes.bgColor2}>

      <FormControl className={classes.native} sx={{ m: 1, minWidth: 120 }}>
      <InputLabel className={classes.colorcard} variant="standard" htmlFor="uncontrolled-native">
        Size
      </InputLabel><br/>
      <NativeSelect
        defaultValue={30}
        className={classes.size}
        inputProps={{
          name: 'Size',
          id: 'uncontrolled-native',
        }}
          >
    <option value={10}>S</option>
    <option value={20}>M</option>
    <option value={30}>L</option>
    <option value={40}>XL</option>
  </NativeSelect>
</FormControl>
    
        <Button onClick={redirectToPayment} className={classes.btn} size="small">Buy</Button>
      
      </CardActions>
      </Card>
         </div>

         <div>
         <Card className={classes.bgpro}>
      <CardMedia
        component="img"
        height="250"
        image={require("../../assets/img/women4.jpg").default}
        alt="green iguana"
      />
      <CardContent>
        <h3 className={classNames(classes.texthome, classes.colorcard)}>WOMEN's TROUSER</h3>
        <p className={classes.colorcard}>Women Cotton Wear Regular Fit Trouser</p>
        <h4 className={classes.colorcard}>Rs.850</h4>
      </CardContent>
      
      <CardActions className={classes.bgColor2}>

      <FormControl className={classes.native} sx={{ m: 1, minWidth: 120 }}>
  <InputLabel className={classes.colorcard} variant="standard" htmlFor="uncontrolled-native">
    Size
  </InputLabel><br/>
  <NativeSelect
    defaultValue={30}
    className={classes.size}
    inputProps={{
      name: 'Size',
      id: 'uncontrolled-native',
    }}
  >
    <option value={10}>S</option>
    <option value={20}>M</option>
    <option value={30}>L</option>
    <option value={40}>XL</option>
  </NativeSelect>
</FormControl>
    
        <Button onClick={redirectToPayment} className={classes.btn} size="small">Buy</Button>
      
      </CardActions>
       </Card>
        </div>
        </div>
        </div>

      <br/>




{/* product end */}

    </div>
  

  

   
  );
}