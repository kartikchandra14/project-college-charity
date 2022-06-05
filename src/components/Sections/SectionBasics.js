import React from "react";

// import Stuff from "../../components/donate/Stuff.js";



import { makeStyles } from "@material-ui/core/styles";


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
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ9sv6mBY8zX-0dXOa670JG4R9vh1Nh9QjVNH9gVePNKduVRgNVyaj6auppvBse9Td0A8&usqp=CAU',
      title: 'Breakfast',
    },
    {
      img: 'https://ak.picdn.net/shutterstock/videos/5074706/thumb/1.jpg',
      title: 'Burger',
    },
    {
      img: 'https://static.toiimg.com/thumb/msid-77028037,width-1200,height-900,resizemode-4/.jpg',
      title: 'Camera',
    },
    {
      img: 'https://static.toiimg.com/thumb/msid-70186418,width-1200,height-900,resizemode-4/.jpg',
      title: 'Coffee',
    },
    {
      img: 'https://oi-files-d8-prod.s3.eu-west-2.amazonaws.com/s3fs-public/styles/hero_image_extra_large/public/ogb_115272_india_chhatiya_main_picture.jpg?itok=5ioCgsJD',
      title: 'Hats',
    },
    {
      img: 'https://www.livemint.com/rf/Image-621x414/LiveMint/Period1/2013/07/25/Photos/poverty_2--621x414.jpg',
      title: 'Honey',
    },
    {
      img: 'https://www.financialexpress.com/wp-content/uploads/2018/06/poverty-1.jpg',
      title: 'Basketball',
    },
    {
      img: 'https://thumbnails.yayimages.com/1600/0/4c2/4c2ff2.jpg',
      title: 'Fern',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdh52yoEllZNvfq74sABED42YYhPHEjYzRfw&usqp=CAU',
      title: 'Mushrooms',
    },
    {
      img: 'https://www.soschildrensvillages.ca/sites/default/files/mother-child-chinnakalepet-india-18091-800x533.jpg',
      title: 'Tomato basil',
    },
    {
      img: 'http://1.bp.blogspot.com/-HNmEFyCmfbQ/T0Pe6ucROjI/AAAAAAAAAA4/xcxEtEA9cdY/s1600/poor-people-India-school-girl.jpg',
      title: 'Sea star',
    },
    {
      img: 'https://static2.bigstockphoto.com/5/3/2/large1500/235411654.jpg',
      title: 'Bike',
    },
  ];



  React.useEffect(() => {
    
    return function cleanup() {};
  });
  return (
    <div className={classes.sections}>
      <div className={classes.texthome}>
        
      </div>
  
      <br/>
      <h2  className={classes.texthome}>Why Support NGOs</h2>
<br/>
      <div className={classNames(classes.container, classes.displayFlex,)}>
        <div className={( classes.marginall)}>
          
         <Card className={classes.card}>
      <CardMedia
        component="img"
        height="140"
        image={require("../../assets/img/home/21.jpg").default}
        alt="loading"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          
        </Typography>
        <Typography variant="body2"  className={classes.typo}>
        NGOs have been a crucial part in the working of a country.We make it easier for people to donate for the people in need.
        <br/>Our website here is going to help the unforunate in their time of need with the help of your donations.
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
    </div>
    <div className={( classes.marginall)}>
    <Card className={classes.card}>
      <CardMedia
        component="img"
        height="140"
        image={require("../../assets/img/home/20.jpg").default}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         
        </Typography>
        <Typography variant="body2"  className={classes.typo}>
        The more you donate the more smiles you see.spread smiles not sorrows.<br/>There are children who have never been able to play with toys so with any kind of donations you spread happiness to all children.
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
    </div>        
    <div className={( classes.marginall)}>
     <Card className={classes.card}>
      <CardMedia
        component="img"
        height="140"
        image={require("../../assets/img/home/22.jpg").default}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          
        </Typography>
        <Typography variant="body2"  className={classes.typo}>
        Donate to make someone else's furture.<br/>Let's make living together easier.We will plant a tree each and everytime you make a Donation in any of the NGO.
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>    
      
      </div>
      </div>
 

      <br/>
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

      <br/>
      <br/>
      <br/>


<div>

<br/>
          

</div>


<br/>
<br/>
<br/>



{/* why do charity? */}

<h2  className={classes.texthome}>Testimonials</h2>
<br/>
      <div className={classNames(classes.container, classes.displayFlex,)}>
        <div className={( classes.marginall)}>
          
         <Card className={classes.card1}>
      <CardMedia
        component="img"
        height="140"
        image={require("../../assets/img/home/elon.jpg").default}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className={classes.typo1}>
          Bheem
        </Typography>
        <Typography variant="body2"  className={classes.typo}>
        After having the opportunity to work with the Seruds team and Mr.Mallikarjuna, I would like to express what a great job they are doing. From the orphanage to the mid day meals to the old age persons, the Seruds team is definitely a blessing for the people of Kurnool. I wish the team all the best and success in their future endeavours.
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
    </div>
    <div className={( classes.marginall)}>
    <Card className={classes.card1}>
      <CardMedia
        component="img"
        height="140"
        image={require("../../assets/img/home/elon.jpg").default}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className={classes.typo1}>
          Indumati
        </Typography>
        <Typography variant="body2"  className={classes.typo}>
        It has always been pleasure to work with SERUDS. I have been working with SERUDS from past 2 years and I can tell that Mr.Mallikarjuna has dedication towards his work and tries to help the society in best possible way. Be it children,or women, Mr Mallikarjuna aims to help them in best possible way.
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
    </div>        
     <Card className={classes.card1}>
      <CardMedia
        component="img"
        height="140"
        image={require("../../assets/img/home/elon.jpg").default}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className={classes.typo1}>
          Raju
        </Typography>
        <Typography variant="body2" className={classes.typo}>
        It was pleasure thing for me to work for SERUDS to generate funds and managing social media, NGO is growing rapidly and the profit of this growth can be seen on orphanage where they help. women empowerment where they support every women. midday meal programs organized by NGO.
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>    
      
      </div>
    </div>




    
  );
}

