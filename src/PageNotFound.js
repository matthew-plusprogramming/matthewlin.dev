import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

const PageNotFound = () => {
  const [secondsLeft, setSecondsLeft] = useState(3);

  const history = useHistory();

  useEffect(() => {
    const id = setTimeout(() => {
      setSecondsLeft(secondsLeft - 1);
      if (secondsLeft <= 1) {
        history.push('/');
      }
    }, 1000);

    return () => clearTimeout(id);
  }, [secondsLeft, history]);

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
