import React from 'react';

import './styles/portfolio.scss';

import hero from './res/hero.png';
import resume from './res/Matthew_Lin_Resume.pdf';

const Portfolio = () => {
  return (
    <>
      <main id="portfolio">
        <div className="main-div">
          <div className="flex-row center">
            <h3 className="no-margin medium-text">
              Full Stack Software Developer
            </h3>
          </div>
          <div className="flex-row center bottom-margin">
            <h5 className="light-text">
              I create high quality web/desktop/mobile apps and more!
            </h5>
          </div>
          <div className="flex-row center">
            <a
              href="#!"
              className="button waves-effect waves-light z-depth-1 fixed-width-button">
              To Portfolio
            </a>
            <a
              href={resume}
              target="_blank"
              className="button waves-effect waves-light z-depth-1 fixed-width-button">
              View Resume
            </a>
          </div>

          <div className="flex-row center">
            <img id="hero" src={hero} alt="" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Portfolio;
