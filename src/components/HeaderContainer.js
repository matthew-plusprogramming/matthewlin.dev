import React, {useContext, useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';

import HeaderComponent from './HeaderComponent';
import Sidenav from './Sidenav';

import {NavigationContext} from '../contexts/NavigationContext';

import '../styles/nav.scss';

import {routes} from './constants';

const Header = () => {
  const [sidenavShowing, setSidenavShowing] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [mounted, setMounted] = useState(false);

  const navContext = useContext(NavigationContext);

  const location = useLocation();

  // Update nav shadow when scrolling
  document.onscroll = () => {
    let scrollTop = document.documentElement.scrollTop;
    if (scrollTop === 0) {
      setAtTop(true);
    } else if (atTop) {
      setAtTop(false);
    }
  };
  // Sets the underline to the portfolio link by default
  useEffect(() => {
    if (navContext.portfolioLinkRef != null) {
      navContext.updateNavLocation(navContext.portfolioLinkRef, true);
    }
  }, [navContext]);

  // When window resized
  useEffect(() => {
    // Handles window resizes
    const onResizeWindow = () => {
      navContext.updateNavLocation(location.pathname);
    };

    window.addEventListener('resize', onResizeWindow);
    return () => window.removeEventListener('resize', onResizeWindow);
  }, [location, navContext]);

  // When component mounts (runs only once)
  useEffect(() => {
    if (!mounted) {
      navContext.updateNavLocation(location.pathname, true);
      navContext.updateNavLocation(null, true, true);
      setTimeout(
        () => navContext.updateNavLocation(location.pathname, false),
        500,
      );
      setMounted(true);
    }
    const id = setInterval(
      () => navContext.updateNavLocation(location.pathname, false),
      100,
    );
    return () => clearInterval(id);
  }, [navContext, mounted, location.pathname]);

  return (
    <>
      <HeaderComponent
        data={{
          routes: routes,
          underlineRef: navContext.underlineRef,
          aboutLinkRef: navContext.aboutLinkRef,
          portfolioLinkRef: navContext.portfolioLinkRef,
          testimonialsLinkRef: navContext.testimonialsLinkRef,
          contactLinkRef: navContext.contactLinkRef,
          atTop: atTop,
          updateNavLocation: navContext.updateNavLocation,
          setSidenavShowing: setSidenavShowing,
        }}
      />
      <Sidenav
        data={{
          routes: routes,
          sidenavShowing: sidenavShowing,
          setSidenavShowing: setSidenavShowing,
        }}
      />
    </>
  );
};

export default Header;
