import React, {useContext} from 'react';
import {Link} from 'react-router-dom';

import {NavigationContext} from '../contexts/NavigationContext';

import '../styles/footer.scss';

import {routes} from './constants';

const Footer = () => {
  const navContext = useContext(NavigationContext);

  return (
    <footer>
      <div className="flex-row">
        <h5 className="light-text">Matthew Lin</h5>
      </div>
      <div className="flex-row large-bottom-margin">
        <h5 className="light-text">
          <a href="mailto:matthewlinplusprogramming@gmail.com">
            matthewlinplusprogramming@gmail.com
          </a>
        </h5>
      </div>
      <div className="flex-row">
        <div id="footer-left">
          <div className="flex-row">
            <div className="flex-col">
              <h5 className="light-text">Pages</h5>

              <h6>
                <Link
                  to={routes.about}
                  onClick={() =>
                    navContext.updateNavLocation(navContext.aboutLinkRef)
                  }>
                  About
                </Link>
              </h6>
              <h6>
                <Link
                  to={routes.portfolio}
                  onClick={() =>
                    navContext.updateNavLocation(navContext.portfolioLinkRef)
                  }>
                  Portfolio
                </Link>
              </h6>
              <h6>
                <Link
                  to={routes.testimonials}
                  onClick={() =>
                    navContext.updateNavLocation(navContext.testimonialsLinkRef)
                  }>
                  Testimonials
                </Link>
              </h6>
              <h6>
                <Link
                  to={routes.contact}
                  onClick={() =>
                    navContext.updateNavLocation(navContext.contactLinkRef)
                  }>
                  Contact
                </Link>
              </h6>
            </div>
          </div>
        </div>
        <div id="footer-right">
          <div className="flex-row">
            <div className="flex-col">
              <h5 className="light-text">Find me Online</h5>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
