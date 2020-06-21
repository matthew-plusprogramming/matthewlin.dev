import React, {useRef, useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import HeaderComponent from './HeaderComponent';
import Sidenav from './Sidenav';

import '../styles/nav.scss';

const Header = () => {
  const underlineRef = useRef(null);
  const aboutLinkRef = useRef(null);
  const portfolioLinkRef = useRef(null);
  const testimonialsLinkRef = useRef(null);
  const contactLinkRef = useRef(null);

  const [sidenavShowing, setSidenavShowing] = useState(false);

  const location = useLocation();

  // Routes object
  const routes = {
    about: '/about',
    portfolio: '/',
    testimonials: '/testimonials',
    contact: '/contact',
  };

  // Handles moving the underline when a link is clicked
  const onNavLinkClicked = (linkRef, instant = false) => {
    const boundingRect = linkRef.current.getBoundingClientRect();

    const width = boundingRect.width;
    const height = boundingRect.height;
    const left = boundingRect.left;
    const top = boundingRect.top;

    instant && (underlineRef.current.style.transition = 'none');
    underlineRef.current.style.width = `${width}px`;
    underlineRef.current.style.height = `3px`;
    underlineRef.current.style.left = `${left}px`;
    underlineRef.current.style.top = `${top + height - 10}px`;
    underlineRef.current.style.transform = 'none';
    instant &&
      setTimeout(
        () => (underlineRef.current.style.transition = 'all 0.35s ease-in-out'),
        10,
      );
  };
  // Sets the underline to the portfolio link by default
  useEffect(() => {
    if (portfolioLinkRef != null) {
      onNavLinkClicked(portfolioLinkRef, true);
    }
  }, [portfolioLinkRef]);
  // On component did mount
  useEffect(() => {
    // Handles window resizes
    const onResizeWindow = () => {
      onNavLinkClicked(
        (() => {
          switch (location.pathname) {
            case '/':
              return portfolioLinkRef;
            case '/about':
              return aboutLinkRef;
            case '/testimonials':
              return testimonialsLinkRef;
            case '/contact':
              return contactLinkRef;
            default:
              return portfolioLinkRef;
          }
        })(),
        true,
      );
    };

    window.addEventListener('resize', onResizeWindow);
    return () => window.removeEventListener('resize', onResizeWindow);
  }, [location]);

  return (
    <>
      <HeaderComponent
        data={{
          routes: routes,
          underlineRef: underlineRef,
          aboutLinkRef: aboutLinkRef,
          portfolioLinkRef: portfolioLinkRef,
          testimonialsLinkRef: testimonialsLinkRef,
          contactLinkRef: contactLinkRef,
          onNavLinkClicked: onNavLinkClicked,
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
