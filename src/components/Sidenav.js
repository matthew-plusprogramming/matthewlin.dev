import React, {useEffect, useRef, useContext} from 'react';
import {Link, useLocation} from 'react-router-dom';
import '../styles/sidenav.scss';

import {NavigationContext} from '../contexts/NavigationContext';

// Icon imports
import {PermContactCalendar, Info, Description, Chat} from '@material-ui/icons';

const Sidenav = (props) => {
  const sidenavRef = useRef(null);

  const navContext = useContext(NavigationContext);

  const location = useLocation();

  const {routes, sidenavShowing, setSidenavShowing} = props.data;

  useEffect(() => {
    // Hide sidenav if outside click is detected
    const handleClick = (e) => {
      if (
        sidenavRef.current.classList.contains('hide') ||
        sidenavRef.current.contains(e.target)
      )
        return;

      setSidenavShowing(false);
    };

    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [setSidenavShowing]);

  return (
    <div id="sidenavWrapper" className={sidenavShowing ? undefined : 'hide'}>
      <div
        id="sidenav"
        ref={sidenavRef}
        className={sidenavShowing ? undefined : 'hide'}>
        <ul>
          <li>
            <Link
              to={routes.about}
              onClick={() => {
                setSidenavShowing(false);
                navContext.updateNavLocation(routes.about, false, true);
              }}
              className={
                'waves-effect waves-dark ' +
                (location.pathname === routes.about ? 'sidenav-selected' : '')
              }>
              <Info /> &nbsp; About
            </Link>
          </li>
          <li>
            <Link
              to={routes.portfolio}
              onClick={() => {
                setSidenavShowing(false);
                navContext.updateNavLocation(routes.portfolio, false, true);
              }}
              className={
                'waves-effect waves-dark ' +
                (location.pathname === routes.portfolio
                  ? 'sidenav-selected'
                  : '')
              }>
              <Description /> &nbsp; Portfolio
            </Link>
          </li>
          <li>
            <Link
              to={routes.testimonials}
              onClick={() => {
                setSidenavShowing(false);
                navContext.updateNavLocation(routes.testimonials, false, true);
              }}
              className={
                'waves-effect waves-dark ' +
                (location.pathname === routes.testimonials
                  ? 'sidenav-selected'
                  : '')
              }>
              <Chat /> &nbsp; Testimonials
            </Link>
          </li>
          <li>
            <Link
              to={routes.contact}
              onClick={() => {
                setSidenavShowing(false);
                navContext.updateNavLocation(routes.contact, false, true);
              }}
              className={
                'waves-effect waves-dark ' +
                (location.pathname === routes.contact ? 'sidenav-selected' : '')
              }>
              <PermContactCalendar /> &nbsp; Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidenav;
