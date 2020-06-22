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
              rel="noopener noreferrer"
              className="button waves-effect waves-light z-depth-1 fixed-width-button">
              View Resume
            </a>
          </div>

          <div className="flex-row center">
            <img id="hero" src={hero} alt="" />
          </div>
        </div>
        <div id="always-learning-section" className="invert-colors">
          <div className="row center">
            <h4 className="large-bottom-margin">Always Learning!</h4>
          </div>
          <div className="row center">
            <p className="flow-text">
              Since beginning my journey as a budding programmer almost four
              years ago, I've explored a wide range of computer science related
              fields, studied many of them, and worked on various personal and
              freelance programming projects. In addition to theoretical and
              personal practical knowledge, I also have two summers of
              professional work experience as a software engineer.
            </p>
          </div>
        </div>
        <div id="companies-section">
          <div className="row center">
            <h4 className="large-bottom-margin">Companies I've Worked With</h4>
          </div>
        </div>
      </main>
    </>
  );
};

export default Portfolio;
