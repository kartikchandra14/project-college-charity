import React from "react";

// Dialog

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// dialog end 

import { makeStyles } from "@material-ui/core/styles";



import styles from "../../assets/jss/material-kit-react/views/componentsSections/listStyle.js";

import classNames from "classnames";



const useStyles = makeStyles(styles);

// Dialog




// Dialogend


export default function Donate() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
      
      
      
      <div>

          <div className={classNames(classes.container, classes.listbg, classes.displayFlex)}>
                <img className={  classes.web}  src= "../Ngo img/ngo1.png"  alt="" />
 
                <p className={ classes.list}>
           <b className={classes.colorcard}>Parkshala</b> <br/>Parkshala is a Noida-based NGO dedicated to transforming lives of children who hail from the lower strata of the society. <br/>
           <spam className={classes.spam}>Speacilly for Children</spam>
           </p>
           
              <br/> 
              <br/> 
              <br/> 
              <br/> 
              <br/>
              <div > 
              <Button variant="outlined" onClick={handleClickOpen} className={classes.btn}>
        >>>
      </Button> </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={classes.dialog}
      >
        <div className={classes.readmore}>
        <DialogTitle id="alert-dialog-title" className={classes.desc}>
        <h3>Welcome to Parkshala</h3>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" className={classes.desc}>
            
We work as an after-school support group to bridge the educational and moral gap between these children and their affluent peers.
Further, we are trying to utilize already available resources for this purpose. So our lessons take place in community parks and halls. 
<br/>
Alongwith academics, Parkshala also focuses on value education and character-building. The environment at most of these children's homes is not conducive for learning and they lack good role-models in their lives. These kids will soon be the youth of India and it is immensely crucial to have compassionate, well-behaved, diligent and honest souls on the streets.
<br/>
<spam>vist our website :</spam>
          </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.but}>
          <Button onClick={handleClose} className={classes.btn1}>Vist</Button>
          <Button onClick={handleClose} autoFocus className={classes.btn1}>
            Donate
          </Button>
        </DialogActions>
        </div>
      </Dialog>
      </div>
      <br/>
          <div className={classNames(classes.container, classes.listbg, classes.displayFlex)}>
                <img className={  classes.web}  src= "../Ngo img/ngo2.png"  alt="" />
 
                <p className={ classes.list}>
           <b className={classes.colorcard}>Smile</b> <br/>Inspired by Senge's philosophy, a group of young corporate professionals came together in 2002 to help underprivileged children, their families and communities. <br/>
           <spam className={classes.spam}>Speacilly for Children</spam>
           </p>
           
              <br/> 
              <br/> 
              <br/> 
              <br/> 
              <br/>
              <div > 
              <Button variant="outlined" onClick={handleClickOpen} className={classes.btn}>
        >>>
      </Button> </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={classes.dialog}
      >
        <div className={classes.readmore}>
        <DialogTitle id="alert-dialog-title" className={classes.desc}>
        <h3>Welcome to Smile Foundation</h3>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" className={classes.desc}>
            
Work as a catalyst in bringing sustainable change in the lives of underprivileged children, youth and women, with a life-cycle approach of development.
<br/>
 Enable the civil society across the world to engage proactively in the change process through the philosophy of civic driven change.
<br/>
 Adopt highest standards of governance to emerge as a leading knowledge and technology driven, innovative and scalable international development organisation.
<br/>
<spam>vist our website :</spam>
          </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.but}>
          <Button onClick={handleClose} className={classes.btn1}>Vist</Button>
          <Button onClick={handleClose} autoFocus className={classes.btn1}>
            Donate
          </Button>
        </DialogActions>
        </div>
      </Dialog>
      </div>

      <br/>

          <div className={classNames(classes.container, classes.listbg, classes.displayFlex)}>
                <img className={  classes.web}  src= "../Ngo img/ngo1.png"  alt="" />
 
                <p className={ classes.list}>
           <b className={classes.colorcard}>Parkshala</b> <br/>Parkshala is a Noida-based NGO dedicated to transforming lives of children who hail from the lower strata of the society. <br/>
           <spam className={classes.spam}>Speacilly for Children</spam>
           </p>
           
              <br/> 
              <br/> 
              <br/> 
              <br/> 
              <br/>
              <div > 
              <Button variant="outlined" onClick={handleClickOpen} className={classes.btn}>
        >>>
      </Button> </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={classes.dialog}
      >
        <div className={classes.readmore}>
        <DialogTitle id="alert-dialog-title" className={classes.desc}>
        <h3>Welcome to Parkshala</h3>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" className={classes.desc}>
            
          We work as an after-school support group to bridge the educational and moral gap between these children and their affluent peers.
Further, we are trying to utilize already available resources for this purpose. So our lessons take place in community parks and halls. 
<br/>
Alongwith academics, Parkshala also focuses on value education and character-building. The environment at most of these children's homes is not conducive for learning and they lack good role-models in their lives. These kids will soon be the youth of India and it is immensely crucial to have compassionate, well-behaved, diligent and honest souls on the streets.
<br/>
<spam>vist our website :</spam>
          </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.but}>
          <Button onClick={handleClose} className={classes.btn1}>Vist</Button>
          <Button onClick={handleClose} autoFocus className={classes.btn1}>
            Donate
          </Button>
        </DialogActions>
        </div>
      </Dialog>
      </div>

      <br/>

          <div className={classNames(classes.container, classes.listbg, classes.displayFlex)}>
                <img className={  classes.web}  src= "../Ngo img/ngo1.png"  alt="" />
 
                <p className={ classes.list}>
           <b className={classes.colorcard}>Parkshala</b> <br/>Parkshala is a Noida-based NGO dedicated to transforming lives of children who hail from the lower strata of the society. <br/>
           <spam className={classes.spam}>Speacilly for Children</spam>
           </p>
           
              <br/> 
              <br/> 
              <br/> 
              <br/> 
              <br/>
              <div > 
              <Button variant="outlined" onClick={handleClickOpen} className={classes.btn}>
        >>>
      </Button> </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={classes.dialog}
      >
        <div className={classes.readmore}>
        <DialogTitle id="alert-dialog-title" className={classes.desc}>
        <h3>Welcome to Parkshala</h3>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" className={classes.desc}>
            
          We work as an after-school support group to bridge the educational and moral gap between these children and their affluent peers.
Further, we are trying to utilize already available resources for this purpose. So our lessons take place in community parks and halls. 
<br/>
Alongwith academics, Parkshala also focuses on value education and character-building. The environment at most of these children's homes is not conducive for learning and they lack good role-models in their lives. These kids will soon be the youth of India and it is immensely crucial to have compassionate, well-behaved, diligent and honest souls on the streets.
<br/>
<spam>vist our website :</spam>
          </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.but}>
          <Button onClick={handleClose} className={classes.btn1}>Vist</Button>
          <Button onClick={handleClose} autoFocus className={classes.btn1}>
            Donate
          </Button>
        </DialogActions>
        </div>
      </Dialog>
      </div>

      <br/>

          <div className={classNames(classes.container, classes.listbg, classes.displayFlex)}>
                <img className={  classes.web}  src= "../Ngo img/ngo1.png"  alt="" />
 
                <p className={ classes.list}>
           <b className={classes.colorcard}>Parkshala</b> <br/>Parkshala is a Noida-based NGO dedicated to transforming lives of children who hail from the lower strata of the society. <br/>
           <spam className={classes.spam}>Speacilly for Children</spam>
           </p>
           
              <br/> 
              <br/> 
              <br/> 
              <br/> 
              <br/>
              <div > 
              <Button variant="outlined" onClick={handleClickOpen} className={classes.btn}>
        >>>
      </Button> </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={classes.dialog}
      >
        <div className={classes.readmore}>
        <DialogTitle id="alert-dialog-title" className={classes.desc}>
        <h3>Welcome to Parkshala</h3>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" className={classes.desc}>
            
          We work as an after-school support group to bridge the educational and moral gap between these children and their affluent peers.
Further, we are trying to utilize already available resources for this purpose. So our lessons take place in community parks and halls. 
<br/>
Alongwith academics, Parkshala also focuses on value education and character-building. The environment at most of these children's homes is not conducive for learning and they lack good role-models in their lives. These kids will soon be the youth of India and it is immensely crucial to have compassionate, well-behaved, diligent and honest souls on the streets.
<br/>
<spam>vist our website :</spam>
          </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.but}>
          <Button onClick={handleClose} className={classes.btn1}>Vist</Button>
          <Button onClick={handleClose} autoFocus className={classes.btn1}>
            Donate
          </Button>
        </DialogActions>
        </div>
      </Dialog>
      <br/>

                          
                
</div>
</div>
</div>


);
}