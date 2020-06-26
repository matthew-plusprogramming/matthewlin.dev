import React from 'react';
import './styles/page.scss';
import './styles/about.scss';

import ImageSection from './components/About/ImageSection';

import mbhs from './res/about/mbhs.jpg';
import sdccd from './res/about/sdccd.png';
import matthew from './res/about/matthew.jpg';
import berkeley from './res/about/berkeley.png';
import cc from './res/about/cc.png';
import first from './res/about/first.png';
import music from './res/about/music.png';

const About = () => {
  return (
    <>
      <main id="about">
        <div className="main-div">
          <div className="flex-row center large-bottom-margin">
            <h4 className="no-margin medium-text page-title">
              Some Things About Me
            </h4>
          </div>
          <div
            id="about-pictures"
            className="flex-row center fade-in-after-page-title-load">
            <img src={matthew} />
          </div>

          <div className="flex-row center fade-in-after-page-title-load">
            <ImageSection
              title="My current (and future) schools"
              images={[mbhs, sdccd, berkeley]}
            />
            <ImageSection title="My groups" images={[cc, first, music]} />
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
