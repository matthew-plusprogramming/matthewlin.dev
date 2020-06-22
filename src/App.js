import React from 'react';
import {Switch, Route} from 'react-router-dom';

// Style imports
import './materialize.scss';
import './styles/app.scss';

// Page imports
import Portfolio from './Portfolio';

// Component imports
import Header from './components/HeaderContainer';

// On component did mount m init
import M from 'materialize-css';

const App = () => {
  M.AutoInit();
  return (
    <>
      <Header />
      <Switch>
        <Route path="/about">
          <h1>About</h1>
        </Route>
        <Route exact path="/">
          <Portfolio />
        </Route>
        <Route path="/testimonials">
          <h1>Testimonials</h1>
        </Route>
        <Route path="/contact">
          <h1>Contact</h1>
        </Route>
      </Switch>
    </>
  );
};
export default App;
