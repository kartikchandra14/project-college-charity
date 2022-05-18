/*eslint-disable*/
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useLocation  } from 'react-router-dom';

import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
// import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/icons
import { Apps, CloudDownload, Home } from "@material-ui/icons";

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown.js";
import Button from "../CustomButtons/Button.js";

import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  let isLoggedIn = (props.token || ( localStorage.getItem('token')) ) ? true : false;

  const classes = useStyles();
  var [activeTabValue, setActiveTabValue] = useState("home");
  useEffect(() => {
    console.log(
      "This only happens ONCE.  But it happens AFTER the initial render."
      );
      getActiveTab;
  }, []);
  const activeTab = ((param) => {
    console.log("activeTab", param);
    if(param){
      setActiveTabValue(param);
    }
  });

  const logout = (() => {
    localStorage.clear();
    isLoggedIn = false;
  })
  const getActiveTab = (() => {
    const location = useLocation();
    console.log("useLocation", location.pathname?.split("/")[1] );
    if(location.pathname?.split("/") && location.pathname?.split("/")[1]){
      activeTab(location.pathname?.split("/")[1])
    }
    else{
      activeTab("home");
    }
  })

  


  
  
  return (
    let { isLoggedIn2 } = this.state;

    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          // href="#"
          color="transparent"
          // target="_blank"
          className={classes.navLink}
        >
          <Link to={'/'}  
            // className={ this.state.activeId === list.id && 'is-active' }
            // onClick={ this.activeTab.bind(this, "home") }           
            onClick={ () => activeTab("home") } 
            className={classNames(classes.aDefaultRemove)}  >
          <Home className={classes.icons} /> 
          <span className={classNames(  activeTabValue == 'home' ? classes.aDefaultDesign  : '' )}>
            Home
          </span>
          </Link>
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
      <Link to={'/donate'} onClick={ () => activeTab("donate") } 
      className={classNames(classes.aDefaultRemove)}>
        <Button
          // href="#"
          color="transparent"
          // target="_blank"
          className={classes.navLink}
        >
          <span className={classNames(  activeTabValue == 'donate' ? classes.aDefaultDesign  : '' )}>
            donate
          </span>
        </Button>
      </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
      <Link to={'/volunteer'} onClick={ () => activeTab("volunteer") } 
      className={classNames(classes.aDefaultRemove)}>
        <Button
          // href="#"
          color="transparent"
          // target="_blank"
          className={classes.navLink}
        >
          <span className={classNames(  activeTabValue == 'volunteer' ? classes.aDefaultDesign  : '' )}>
            volunteer
          </span>
        </Button>
      </Link>
      </ListItem>
      
      <ListItem className={classes.listItem}>
      <Link to={'/shop'} onClick={ () => activeTab("shop") } 
      className={classNames(classes.aDefaultRemove)}>
        <Button
          // href="#"
          color="transparent"
          // target="_blank"
          className={classes.navLink}
        >
          <span className={classNames(  activeTabValue == 'shop' ? classes.aDefaultDesign  : '' )}>
            Shop
          </span>
        </Button>
      </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
      <Link to={'/about'} onClick={ () => activeTab("about") } 
      className={classNames(classes.aDefaultRemove)}>
        <Button
          // href="#"
          color="transparent"
          // target="_blank"
          className={classes.navLink}
        >
          <span className={classNames(  activeTabValue == 'about' ? classes.aDefaultDesign  : '' )}>
            About us
          </span>
        </Button>
      </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
      <Link to={'/contact'} onClick={ () => activeTab("contact")} 
      className={classNames(classes.aDefaultRemove)} >
        <Button
          // href="#"
          color="transparent"
          // target="_blank"
          className={classes.navLink}
        >
          <span className={classNames(  activeTabValue == 'contact' ? classes.aDefaultDesign  : '' )}>
            Contact us
          </span>
        </Button>
      </Link>
      </ListItem>
      {
        (!isLoggedIn)  ? 
        <ListItem className={classes.listItem}>
        <Link to={'/login'} onClick={ () => activeTab("login")} 
          className={classNames(classes.aDefaultRemove)} >
          <Button
            color="transparent"
            className={classes.navLink}
          >
          <span className={classNames(  activeTabValue == 'login' ? classes.aDefaultDesign  : '' )}>
            Login
          </span>
          </Button>
        </Link>
        </ListItem> :
        <ListItem className={classes.listItem}>
        <Link to={'/home'} onClick={ () => activeTab("home")} 
          className={classNames(classes.aDefaultRemove)} >
          <Button onClick={ () => logout()}
            color="transparent"
            className={classes.navLink}
          >
          <span className={classNames(  activeTabValue == 'logout' ? classes.aDefaultDesign  : '' )}>
            Logout
          </span>
          </Button>
        </Link>
        </ListItem>
      }
    </List>
  );
}
