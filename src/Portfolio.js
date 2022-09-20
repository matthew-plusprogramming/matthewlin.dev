import React, { useContext } from 'react';
import './styles/portfolio.scss';
import './styles/sections.scss';

import hero from './res/hero.png';
import resume from './res/Matthew_Lin_Resume.pdf';

import CompaniesTiles from './components/TileSections/CompaniesTiles';
import ProjectsTiles from './components/TileSections/ProjectsTiles';
import SkillsSection from './components/SkillsSection';

import { ThemeContext } from './contexts/ThemeContext';

const Portfolio = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <>
      <main id="portfolio">
        <div id="landing-page" className="main-div">
          <div className="flex-row center">
            <h3 className="no-margin medium-text">
              Full Stack Software Developer & Content Creator
            </h3>
          </div>
          <div className="flex-row center bottom-margin">
            <h5 className="light-text">
              I create high quality web/desktop/mobile apps and more!
              <br />
              Disclaimer: this site has not been substantially updated in 2 years, all of my time coding currently goes into my job as a software engineer 
            </h5>
          </div>
          <div className="flex-row center bottom-margin">
            <a
              href="https://github.com/matthew-plusprogramming"
              target="_blank"
              rel="noopener noreferrer"
              className="button waves-effect waves-light z-depth-1 fixed-width-button"
            >
              View Github
            </a>
            <a
              href={'https://linkedin.com/in/matthewlin-sd'}
              target="_blank"
              rel="noopener noreferrer"
              className="button waves-effect waves-light z-depth-1 fixed-width-button"
            >
              View LinkedIn
            </a>
          </div>
          <div className="flex-row center">
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="button waves-effect waves-light z-depth-1 fixed-width-button"
            >
              View Resume
            </a>
            <a
              href={'https://www.youtube.com/channel/UCqVIqm9pT-4lH8v2UzkfxIA'}
              target="_blank"
              rel="noopener noreferrer"
              className="button waves-effect waves-light z-depth-1 fixed-width-button"
            >
              View YouTube
            </a>
          </div>

          <div className="flex-row center">
            <img
              id="hero"
              className={themeContext.darkMode && 'dark-mode'}
              src={hero}
              alt=""
            />
          </div>
        </div>
        <div
          id="about-me-section"
          className={themeContext.darkMode ? 'dark-mode' : 'invert-colors'}
        >
          <div className="flex-row center">
            <h4 className="large-bottom-margin medium-text">
              Hi, I'm Matthew, a passionate software developer.
            </h4>
          </div>
          <div className="flex-row center large-bottom-margin">
            <p className="flow-text">
              Since beginning my journey as a budding programmer almost five
              years ago, I've explored a wide range of computer science related
              fields, studied many of them, and worked on various personal and
              freelance programming projects. In addition to theoretical and
              personal practical knowledge, I also have two summers of
              professional work experience as a software engineer.
            </p>
          </div>
          <div className="flex-row center large-bottom-margin">
            <p className="flow-text">
              I try my best to take initiative, be a natural leader, and
              communicate with teammates & clients to get the job done. I may
              not know everything yet, but I'm constantly working to improve and
              expand my skillset!
            </p>
          </div>
        </div>
        <SkillsSection />
        <CompaniesTiles />
        <ProjectsTiles />
      </main>
    </>
  );
};

export default Portfolio;
