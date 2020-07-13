import React, {useContext} from 'react';
import {Switch, Route} from 'react-router-dom';

// Style imports
import './materialize.scss';
import './styles/animations.scss';
import './styles/app.scss';

// Page imports
import PageNotFound from './PageNotFound';
import Portfolio from './Portfolio';
import About from './About';
import Testimonials from './Testimonials';
import Contact from './Contact';

// Component imports
import Header from './components/HeaderContainer';
import Footer from './components/Footer';
import WorkExperienceOrProjectPage from './components/WorkExperienceOrProjectPage';

// Context imports
import {MaterializeCssContext} from './contexts/MaterializeCssContext';

const App = () => {
  const materializeContext = useContext(MaterializeCssContext);
  materializeContext.materializeReinit();

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
          <Testimonials />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path={['/work-experience', '/projects']}>
          <WorkExperienceOrProjectPage />
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
