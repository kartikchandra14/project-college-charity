
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Donate from './components/donate/list.js';
import Volunt from './components/volunteer/Volunteer.js';
import Prod from './components/shop/product.js';
import AboutUs from './components/AboutUs/AboutUs.js';
import ContactUs from './components/ContactUs/ContactUs.js';
import './App.css';

// nodejs library that concatenates classes
import classNames from "classnames";

// 
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import GridContainer from "./components/Grid/GridContainer.js";
import GridItem from "./components/Grid/GridItem.js";
import Parallax from "./components/Parallax/Parallax.js";
// 
import SectionBasics from "./components/Sections/SectionBasics.js";
// sections from the page
import HeaderLinks from "./components/Header/HeaderLinks.js";

import styles from "./assets/jss/material-kit-react/views/components.js";
import { Shop } from '@material-ui/icons';
import { List } from '@material-ui/core';
import volunt from './components/volunteer/Volunteer.js';
import list from './components/donate/list.js';

const useStyles = makeStyles(styles);

function App() {
  const classes = useStyles();
  return (
  <>
  <Router>
    <Header
        brand="Charity"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
      />
      <Parallax image={require("./assets/img/banner2.jpg").default}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>
                  Charity foundation
                </h1>
                <h3 className={classes.subtitle}>
                  We trust in humanity first !!
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
      
      <Switch>
          <Route exact path='/' component={SectionBasics} />
          
          <Route path='/donate' component={Donate} />
          <Route path='/volunteer' component={Volunt} />
          <Route path='/Shop' component={Prod} />
          <Route path='/contact' component={ContactUs} />
          <Route path='/about' component={AboutUs} />
      </Switch>
      {/* <Switch>
          <Route exact path="/">
            <SectionBasics />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
      </Switch> */}
      </div>
      <Footer />
    </Router>
  </>
  );
}

export default App;
