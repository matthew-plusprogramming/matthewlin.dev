import React from 'react';
import {Link} from 'react-router-dom';

// Icon imports
import {Menu} from '@material-ui/icons';

const HeaderComponent = (props) => {
  const {
    routes,
    underlineRef,
    aboutLinkRef,
    portfolioLinkRef,
    testimonialsLinkRef,
    contactLinkRef,
    atTop,
    updateNavLocation,
    setSidenavShowing,
  } = props.data;

  return (
    <header className="navbar-fixed">
      <nav className={'nav-wrapper ' + (atTop ? '' : 'shadow')}>
        {/* Main navbar list */}
        <ul>
          <li id="sidenav-trigger">
            <a href="#!" onClick={() => setSidenavShowing(true)}>
              <Menu />
            </a>
          </li>
          <li id="brand-logo">
            <Link
              to={routes.portfolio}
              onClick={() => updateNavLocation(portfolioLinkRef, false, true)}>
              Matthew Lin
            </Link>
          </li>
          <li id="invisible-item"></li>
          <li>
            <Link
              to={routes.about}
              onClick={() => updateNavLocation(aboutLinkRef, false, true)}
              ref={aboutLinkRef}>
              About
            </Link>
          </li>
          <li>
            <Link
              to={routes.portfolio}
              onClick={() => updateNavLocation(portfolioLinkRef, false, true)}
              ref={portfolioLinkRef}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to={routes.testimonials}
              onClick={() =>
                updateNavLocation(testimonialsLinkRef, false, true)
              }
              ref={testimonialsLinkRef}>
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to={routes.contact}
              onClick={() => updateNavLocation(contactLinkRef, false, true)}
              ref={contactLinkRef}>
              Contact
            </Link>
          </li>
        </ul>
        <span id="underline" ref={underlineRef} />
      </nav>
    </header>
  );
};

export default HeaderComponent;
