import React, {useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';

import '../styles/sidenav.scss';

// Icon imports
import {PermContactCalendar, Info, Description, Chat} from '@material-ui/icons';

const Sidenav = (props) => {
  const sidenavRef = useRef(null);

  const {sidenavShowing, setSidenavShowing} = props.data;

  // Hide sidenav if outside click is detected
  const handleClick = (e) => {
    if (
      sidenavRef.current.classList.contains('hide') ||
      sidenavRef.current.contains(e.target)
    )
      return;

    setSidenavShowing(false);
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <div id="sidenavWrapper" className={sidenavShowing ? undefined : 'hide'}>
      <div
        id="sidenav"
        ref={sidenavRef}
        className={sidenavShowing ? undefined : 'hide'}>
        <ul>
          <li>
            <Link to="" className="waves-effect waves-dark">
              <Info /> &nbsp; About
            </Link>
          </li>
          <li>
            <Link to="" className="waves-effect waves-dark">
              <Description /> &nbsp; Portfolio
            </Link>
          </li>
          <li>
            <Link to="" className="waves-effect waves-dark">
              <Chat /> &nbsp; Testimonials
            </Link>
          </li>
          <li>
            <Link to="" className="waves-effect waves-dark">
              <PermContactCalendar /> &nbsp; Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidenav;
