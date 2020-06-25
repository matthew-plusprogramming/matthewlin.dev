import React from 'react';
import {Switch, Route} from 'react-router-dom';

// Style imports
import './materialize.scss';
import './styles/app.scss';

// Page imports
import Portfolio from './Portfolio';
import About from './About';

// Component imports
import Header from './components/HeaderContainer';
import Footer from './components/Footer';

// On component did mount m init
import M from 'materialize-css';

const App = () => {
  M.AutoInit();
  return (
    <>
      <Header />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Portfolio />
        </Route>
        <Route path="/testimonials">
          <div className="main-div"></div>
        </Route>
        <Route path="/contact">
          <div className="main-div"></div>
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
