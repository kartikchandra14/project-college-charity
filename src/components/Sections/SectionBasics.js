import React from "react";

// plugin that creates slider
// import Slider from "nouislider";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
// import GridContainer from "components/Grid/GridContainer.js";
// import GridItem from "components/Grid/GridItem.js";
// import Button from "components/CustomButtons/Button.js";
// import CustomInput from "components/CustomInput/CustomInput.js";
// import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";
// import Paginations from "components/Pagination/Pagination.js";
// import Badge from "components/Badge/Badge.js";

import styles from "../../assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from "../CustomButtons/Button.js";
import Typography from '@material-ui/core/Typography';
// import Button from "@material-ui/core/Button";

// nodejs library that concatenates classes
import classNames from "classnames";

import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const useStyles = makeStyles(styles);

export default function SectionBasics() {
  const classes = useStyles();
 
  // gallery

  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
  ];



  React.useEffect(() => {
    
    return function cleanup() {};
  });
  return (
    <div className={classes.sections}>
      <div className={classes.texthome}>
        <h2 >
         HOME page
        </h2>
      </div>
      <br/>
      <br/>
      <br/>
      <div className={classNames(classes.container, classes.gallerybg)}>
      <h2 className={classes.texthome}>Gallery</h2>
      <br/>
        <ImageList className={classes.paddingall} sx={{ width: 300, height: 250 }} cols={3} rowHeight={164}>
        {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      
        ))}
        </ImageList>
      </div>
      <br/>
      <br/>
      <br/>


{/* why do charity? */}

<h2  className={classes.texthome}>Testimonials</h2>
<br/>
      <div className={classNames(classes.container, classes.displayFlex,)}>
        <div className={( classes.marginall)}>
          
         <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        component="img"
        height="140"
        image={require("../../assets/img/banner2.jpg").default}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
    </div>
    <div className={( classes.marginall)}>
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        component="img"
        height="140"
        image={require("../../assets/img/banner2.jpg").default}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
    </div>        
     <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        component="img"
        height="140"
        image={require("../../assets/img/banner2.jpg").default}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>    
      
      </div>
    </div>




    
  );
}

