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
    onNavLinkClicked,
    setSidenavShowing,
  } = props.data;

  return (
    <header className="navbar-fixed">
      <nav className="z-depth-0 nav-wrapper">
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
              onClick={() => onNavLinkClicked(portfolioLinkRef)}>
              Matthew Lin
            </Link>
          </li>
          <li id="invisible-item"></li>
          <li>
            <Link
              to={routes.about}
              onClick={() => onNavLinkClicked(aboutLinkRef)}
              ref={aboutLinkRef}>
              About
            </Link>
          </li>
          <li>
            <Link
              to={routes.portfolio}
              onClick={() => onNavLinkClicked(portfolioLinkRef)}
              ref={portfolioLinkRef}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to={routes.testimonials}
              onClick={() => onNavLinkClicked(testimonialsLinkRef)}
              ref={testimonialsLinkRef}>
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to={routes.contact}
              onClick={() => onNavLinkClicked(contactLinkRef)}
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
