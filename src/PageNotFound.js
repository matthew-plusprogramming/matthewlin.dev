import React, {useState, useEffect, useContext} from 'react';
import {useHistory} from 'react-router-dom';

import {NavigationContext} from './contexts/NavigationContext';

import {routes} from './components/constants';

const PageNotFound = () => {
  const [secondsLeft, setSecondsLeft] = useState(3);

  const navContext = useContext(NavigationContext);

  const history = useHistory();

  useEffect(() => {
    const id = setTimeout(() => {
      setSecondsLeft(secondsLeft - 1);
      if (secondsLeft <= 1) {
        history.push(routes.portfolio);
        setTimeout(
          () =>
            navContext.updateNavLocation(
              navContext.portfolioLinkRef,
              false,
              true,
            ),
          500,
        );
      }
    }, 1000);

    return () => clearTimeout(id);
  }, [secondsLeft, history, navContext]);

  return (
    <div className="main-div">
      <div className="flex-row center" style={{padding: '2rem; 2rem'}}>
        <h4>404 Page Not Found...</h4>
      </div>
      <div className="flex-row center" style={{padding: '2rem; 2rem'}}>
        <h6>
          Dont worry I'll redirect you back home in {secondsLeft} seconds.
        </h6>
      </div>
    </div>
  );
};

export default PageNotFound;
