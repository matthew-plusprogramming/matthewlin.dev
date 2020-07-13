import React, {useContext} from 'react';
import {Link, useLocation} from 'react-router-dom';

import {NavigationContext} from '../contexts/NavigationContext';

import '../styles/footer.scss';

import {routes} from './constants';

const Footer = () => {
  const navContext = useContext(NavigationContext);

  const location = useLocation();

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
      <div className="flex-row large-bottom-margin">
        <div id="footer-left">
          <div className="flex-row">
            <div className="flex-col">
              <h5 className="light-text">Pages</h5>
              <h6>
                <Link
                  to={routes.about}
                  onClick={() =>
                    navContext.updateNavLocation(
                      routes.about,
                      false,
                      true,
                      location.pathname,
                    )
                  }
                  className={
                    location.pathname === routes.about
                      ? 'footer-selected'
                      : undefined
                  }>
                  About
                </Link>
              </h6>
              <h6>
                <Link
                  to={routes.portfolio}
                  onClick={() =>
                    navContext.updateNavLocation(
                      routes.portfolio,
                      false,
                      true,
                      location.pathname,
                    )
                  }
                  className={
                    location.pathname === routes.portfolio
                      ? 'footer-selected'
                      : undefined
                  }>
                  Portfolio
                </Link>
              </h6>
              <h6>
                <Link
                  to={routes.testimonials}
                  onClick={() =>
                    navContext.updateNavLocation(
                      routes.testimonials,
                      false,
                      true,
                      location.pathname,
                    )
                  }
                  className={
                    location.pathname === routes.testimonials
                      ? 'footer-selected'
                      : undefined
                  }>
                  Testimonials
                </Link>
              </h6>
              <h6>
                <Link
                  to={routes.contact}
                  onClick={() =>
                    navContext.updateNavLocation(
                      routes.contact,
                      false,
                      true,
                      location.pathname,
                    )
                  }
                  className={
                    location.pathname === routes.contact
                      ? 'footer-selected'
                      : undefined
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
              <h6>
                <a
                  href="https://github.com/matthew-plusprogramming"
                  target="_blank"
                  rel="noopener noreferrer">
                  Github
                </a>
              </h6>
              <h6>
                <a
                  href="https://linkedin.com/in/matthewlin-sd"
                  target="_blank"
                  rel="noopener noreferrer">
                  LinkedIn
                </a>
              </h6>
              <h6>
                <a
                  href="https://www.youtube.com/channel/UCqVIqm9pT-4lH8v2UzkfxIA/"
                  target="_blank"
                  rel="noopener noreferrer">
                  YouTube
                </a>
              </h6>
              <h6>
                <a
                  href="https://instagram.com/matthew.plusprogramming"
                  target="_blank"
                  rel="noopener noreferrer">
                  Instagram
                </a>
              </h6>
              <h6>
                <a
                  href="https://twitter.com/mat_thewlin"
                  target="_blank"
                  rel="noopener noreferrer">
                  Twitter
                </a>
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-row">
        <h6 className="light-text">Copyright &copy; 2019 - 2020 Matthew Lin</h6>
      </div>
    </footer>
  );
};

export default Footer;
