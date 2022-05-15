import React from "react";
// Dialog

import Button from '@material-ui/core/Button';

// dialog end 

// card
import { styled } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


// card end 

import { makeStyles } from "@material-ui/core/styles";



import styles from "../../assets/jss/material-kit-react/views/componentsSections/listStyle.js";

import classNames from "classnames";



const useStyles = makeStyles(styles);

// card


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  color: "white",
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

// card


export default function Donate() {

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  const [expanded1, setExpanded1] = React.useState(false);

  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };
  const [expanded2, setExpanded2] = React.useState(false);

  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };
  const [expanded3, setExpanded3] = React.useState(false);

  const handleExpandClick3 = () => {
    setExpanded3(!expanded3)
  };
  const [expanded4, setExpanded4] = React.useState(false);

  const handleExpandClick4 = () => {
    setExpanded4(!expanded4);
  };
  const [expanded5, setExpanded5] = React.useState(false);

  const handleExpandClick5 = () => {
    setExpanded5(!expanded5);
  };

 
   
  const classes = useStyles();
 
  React.useEffect(() => {
    
    return function cleanup() {};
  });
  return (
    

  
<div className={classes.sections}>

    <div className={classes.texthome}>
    
     <h2 >
      Donate Here
       </h2>
       <br/>

       <br/>
       <br/>
       <br/>
      </div>
      <div className={classes.container}>
      <Card sx={{ maxWidth: 345 }} className={classes.listbg}>
      
      <div className={classes.displayFlex}>
      <img className={  classes.web}  src= "../Ngo img/ngo1.png"  alt="" />
      <p  className={classes.colorcard}><b>Parkshala</b></p>
      </div>
      <CardContent>
        <Typography variant="body2" color="text.secondary" className={ classes.list}>
        Parkshala is a Noida-based NGO dedicated to transforming lives of children who hail from the lower strata of the society.
        </Typography>
      </CardContent>
      <CardActions disableSpacing >
       
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          
          >
          <ExpandMoreIcon />
        </ExpandMore>
         
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph className={ classes.list}>Description:</Typography>
          <Typography paragraph className={ classes.list}>
          We work as an after-school support group to bridge the educational and moral gap between these children and their affluent peers.
 Further, we are trying to utilize already available resources for this purpose. So our lessons take place in community parks and halls. 
 <br/>
 Alongwith academics, Parkshala also focuses on value education and character-building. The environment at most of these children's homes is not conducive for learning and they lack good role-models in their lives. These kids will soon be the youth of India and it is immensely crucial to have compassionate, well-behaved, diligent and honest souls on the streets.
 <br/>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 <spam>vist our website :  </spam> &nbsp; <Button className={classes.btn1} href="https://www.parkshala.com/">Vist</Button>
 &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 <spam>Click here for donation :  </spam> &nbsp; <Button  className={classes.btn1}> Donate </Button>
          </Typography>
    
        </CardContent>

      </Collapse>
    </Card>
    <br/>
    <br/>
    <br/>
      <Card sx={{ maxWidth: 345 }} className={classes.listbg}>
      
      <div className={classes.displayFlex}>
      <img className={  classes.web}  src= "../Ngo img/ngo2.png"  alt="" />
      <p  className={classes.colorcard}><b>Smile Foundation</b></p>
      </div>
      <CardContent>
        <Typography variant="body2" color="text.secondary" className={ classes.list}>
        Inspired by Senge's philosophy, a group of young corporate professionals came together in 2002 to set up Smile Foundation.
        </Typography>
      </CardContent>
      <CardActions disableSpacing >
       
        <ExpandMore
          expand={expanded1}
          onClick={handleExpandClick1}
          aria-expanded={expanded1}
          aria-label="show more"
          
          >
          <ExpandMoreIcon />
        </ExpandMore>
         
      </CardActions>
      <Collapse in={expanded1} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph className={ classes.list}>Description:</Typography>
          <Typography paragraph className={ classes.list}>

 Work as a catalyst in bringing sustainable change in the lives of underprivileged children, youth and women, with a life-cycle approach of development.
<br/>
 Enable the civil society across the world to engage proactively in the change process through the philosophy of civic driven change.
 <br/>
 Adopt highest standards of governance to emerge as a leading knowledge and technology driven, innovative and scalable international development organisation. <br/>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

 <spam>vist our website :  </spam> &nbsp; <Button className={classes.btn1} href="https://www.smilefoundationindia.org/">Vist</Button>

 &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

 <spam>Click here for donation :  </spam> &nbsp; <Button  className={classes.btn1}> Donate </Button>
          </Typography>
    
        </CardContent>

      </Collapse>
    </Card>
    <br/>
    <br/>
    <br/>

      <Card sx={{ maxWidth: 345 }} className={classes.listbg}>
      
      <div className={classes.displayFlex}>
      <img className={  classes.web}  src= "../Ngo img/ngo3.png"  alt="" />
      <p  className={classes.colorcard}><b>Genesis Foundation</b></p>
      </div>
      <CardContent>
        <Typography variant="body2" color="text.secondary" className={ classes.list}>
        We are a Foundation working for children who are diagnosed with a Congenital Heart Defect.
        </Typography>
      </CardContent>
      <CardActions disableSpacing >
       
        <ExpandMore
          expand={expanded3}
          onClick={handleExpandClick3}
          aria-expanded={expanded3}
          aria-label="show more"
          
          >
          <ExpandMoreIcon />
        </ExpandMore>
         
      </CardActions>
      <Collapse in={expanded3} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph className={ classes.list}>Description:</Typography>
          <Typography paragraph className={ classes.list}>
          We provide financial resources for heart treatment for underprivileged children within the age group of 0-18 years and from families with a monthly income that does not exceed Rs 20,000 ($262) 
 <br/>
 Being a foundation working for children, we continue to build a repository of valuable information on Congenital Heart Defects for awareness on heart disorder treatment in India. It helps us in staying current and aware. Along with being a glossary on the situation of this life-threatening ailment in India, our reports also outline our landmark achievements with treatment of critically ill children diagnosed with CHD.
 <br/>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 <spam>vist our website :  </spam> &nbsp; <Button className={classes.btn1} href="https://www.parkshala.com/">Vist</Button>
 &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 <spam>Click here for donation :  </spam> &nbsp; <Button  className={classes.btn1}> Donate </Button>
          </Typography>
    
        </CardContent>

      </Collapse>
    </Card>
    <br/>
    <br/>
    <br/>

      <Card sx={{ maxWidth: 345 }} className={classes.listbg}>
      
      <div className={classes.displayFlex}>
      <img className={  classes.web}  src= "../Ngo img/ngo5.png"  alt="" />
      <p  className={classes.colorcard}><b>Teach for India</b></p>
      </div>
      <CardContent>
        <Typography variant="body2" color="text.secondary" className={ classes.list}>
        Teach For India is a part of the Teach For All Network, a growing group of independent organizations that are working to expand educational opportunity in their nations.
        </Typography>
      </CardContent>
      <CardActions disableSpacing >
       
        <ExpandMore
          expand={expanded4}
          onClick={handleExpandClick4}
          aria-expanded={expanded4}
          aria-label="show more"
          
          >
          <ExpandMoreIcon />
        </ExpandMore>
         
      </CardActions>
      <Collapse in={expanded4} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph className={ classes.list}>Description:</Typography>
          <Typography paragraph className={ classes.list}>
          In 2007, Shaheen met with Wendy Kopp, the Founder of Teach For America and was struck by the idea of leadership being at the core of the solution. In 2009, Teach For India welcomed our first cohort, the Class of 2009, to the Fellowship. The 87 “niners” formed the beginning of what Shaheen hoped would become a nationwide movement of diverse leaders. Two years later, our Niners graduated from the Fellowship and became the first cohort in our Alumni movement. 
 <br/>
 To read more about Teach For India's story, read Redrawing India written by Shaheen Mistri and Kovid Gupta and Sandeep Rai's Grey Sunshine.
 <br/>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 <spam>vist our website :  </spam> &nbsp; <Button className={classes.btn1} href="https://www.teachforindia.org/">Vist</Button>
 &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 <spam>Click here for donation :  </spam> &nbsp; <Button  className={classes.btn1}> Donate </Button>
          </Typography>
    
        </CardContent>

      </Collapse>
    </Card>
    <br/>
    <br/>
    <br/>
      <Card sx={{ maxWidth: 345 }} className={classes.listbg}>
      
      <div className={classes.displayFlex}>
      <img className={  classes.web}  src= "../Ngo img/ngo8.png"  alt="" />
      <p  className={classes.colorcard}><b>I.W.C.W.T.</b></p>
      </div>
      <CardContent>
        <Typography variant="body2" color="text.secondary" className={ classes.list}>
        Indian Women And Child Welfare Trust is a social, educational and community development organisation registered in New Delhi as a charitable trust under the Indian Trust Act.
        </Typography>
      </CardContent>
      <CardActions disableSpacing >
       
        <ExpandMore
          expand={expanded5}
          onClick={handleExpandClick5}
          aria-expanded={expanded5}
          aria-label="show more"
          
          >
          <ExpandMoreIcon />
        </ExpandMore>
         
      </CardActions>
      <Collapse in={expanded5} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph className={ classes.list}>Description:</Typography>
          <Typography paragraph className={ classes.list}>
          It is registered with the Darpan Portal of the Government of India. It is also registered with the Home Ministry of the Government of India to receive foreign funds under the appropriate Foreign Contribution (Regulation) Act.<br/> 
          The Income Tax department of the Government of India and is allotted a Permanent Account Number (PAN) and is exempted from paying tax on the funds received by them. We are committed to the Millennium development goals. Our priorities and objectives are to carry out charitable, holistic and sustainable development work among the poor, marginalized, downtrodden, illiterate, vulnerable and exploited ones, irrespective of their caste, creed, colour, sex or religion. Our main focus is on Women's Welfare and Child Welfare development projects in various states of India.
 <br/>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 <spam>vist our website :  </spam> &nbsp; <Button className={classes.btn1} href="https://www.parkshala.com/">Vist</Button>
 &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 <spam>Click here for donation :  </spam> &nbsp; <Button  className={classes.btn1}> Donate </Button>
          </Typography>
    
        </CardContent>

      </Collapse>
    </Card>
    <br/>
    <br/>
    <br/>
      <Card sx={{ maxWidth: 345 }} className={classes.listbg}>
      
      <div className={classes.displayFlex}>
      <img className={  classes.web}  src= "../Ngo img/ngo9.png"  alt="" />
      <p  className={classes.colorcard}><b>SEWA Bharat</b></p>
      </div>
      <CardContent>
        <Typography variant="body2" color="text.secondary" className={ classes.list}>
        SEWA Bharat is part of the national SEWA movement. Organize workers to achieve their goals of full employment and self-reliance through the strategy of struggle and development. </Typography>
      </CardContent>
      <CardActions disableSpacing >
       
        <ExpandMore
          expand={expanded2}
          onClick={handleExpandClick2}
          aria-expanded={expanded2}
          aria-label="show more"
          
          >
          <ExpandMoreIcon />
        </ExpandMore>
         
      </CardActions>
      <Collapse in={expanded2} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph className={ classes.list}>Description:</Typography>
          <Typography paragraph className={ classes.list}>
          The Self Employed Women's Association (SEWA) is a wome's trade union that was started by women workers in Gujarat under the guidance of Smt. Ela Bhatt in 1972. Originally born out of the Textile Labor Association (TLA), India's oldest and largest union of textile workers, SEWA is now a globally recognized trade union of women workers in the informal economy. In order to secure economic, social, and legal rights for women workers, SEWA supports the formation of member-based organizations of poor working women. The first such organization was the SEWA Bank, followed by diverse cooperatives and producer groups of women with livelihoods as artisans, milk producers, and farmers. Later on, women formed similar cooperatives around health and child-care.
 <br/>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 <spam>vist our website :  </spam> &nbsp; <Button className={classes.btn1} href="https://sewabharat.org/">Vist</Button>
 &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 <spam>Click here for donation :  </spam> &nbsp; <Button  className={classes.btn1}> Donate </Button>
          </Typography>
    
        </CardContent>

      </Collapse>
    </Card>
    <br/>
    <br/>
    <br/>

</div>
</div>


);
}
