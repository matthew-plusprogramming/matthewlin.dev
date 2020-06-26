import React from 'react';
import {Switch, Route} from 'react-router-dom';

// Style imports
import './materialize.scss';
import './styles/animations.scss';
import './styles/app.scss';

// Page imports
import PageNotFound from './PageNotFound';
import Portfolio from './Portfolio';

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
          <div className="main-div"></div>
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
        <Route path="/">
          <PageNotFound />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
