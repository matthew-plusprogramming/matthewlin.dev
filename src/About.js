import React, { useContext, useRef, useEffect, useCallback } from 'react';
import './styles/page.scss';
import './styles/about.scss';
import './styles/sections.scss';

import { MaterializeCssContext } from './contexts/MaterializeCssContext';

import CompaniesTiles from './components/TileSections/CompaniesTiles';
import ProjectsTiles from './components/TileSections/ProjectsTiles';
import ImageSection from './components/About/ImageSection';
import SkillsSection from './components/SkillsSection';

import mbhs from './res/about/mbhs.jpg';
import sdccd from './res/about/sdccd.png';
import matthew from './res/about/matthew.png';
import cc from './res/about/cc.png';
import first from './res/about/first.png';
import music from './res/about/music.png';
import cp from './res/about/cp.png';

const About = () => {
  const materializeContext = useContext(MaterializeCssContext);
  materializeContext.materializeReinit();

  const schoolsRef = useRef(null);
  const groupsRef = useRef(null);

  const hoverMenu = useCallback(
    (menuRef) => {
      if (menuRef.current) {
        const openItem = (i) => {
          console.log(menuRef.current);
          let instance = materializeContext.M.Collapsible.getInstance(
            menuRef.current,
          );
          console.log(instance);
          setTimeout(() => instance.open(i), 100);
        };
        const closeItem = (i) => {
          let instance = materializeContext.M.Collapsible.getInstance(
            menuRef.current,
          );
          setTimeout(() => instance.close(i), 100);
        };

        for (let i = 0; i < menuRef.current.childNodes.length; ++i) {
          menuRef.current.childNodes[i].onmouseover = () => {
            console.log('hi');
            openItem(i);
          };
          menuRef.current.childNodes[i].onmouseleave = () => {
            closeItem(i);
          };
        }
      }
    },
    [materializeContext.M],
  );

  useEffect(() => {
    hoverMenu(schoolsRef);
  }, [schoolsRef, hoverMenu]);
  useEffect(() => {
    hoverMenu(groupsRef);
  }, [groupsRef, hoverMenu]);

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
            id="about-picture"
            className="flex-row center fade-in-after-page-title-load"
          >
            <img src={matthew} alt="" />
          </div>

          <div className="flex-row center fade-in-after-page-title-load">
            <ImageSection
              title="My current (and former) schools"
              images={[cp, sdccd, mbhs]}
            >
              <span>
                <ul className="collapsible" ref={schoolsRef}>
                  <li>
                    <div className="collapsible-header">
                      <bold is="custom">Cal Poly</bold>
                    </div>{' '}
                    <div className="collapsible-body">
                      I am a current first year (although I currently hold junior
                      status by credits) at Cal Poly SLO. I am studying Computer
                      Science!
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header">
                      <bold is="custom">SDCCD</bold>
                    </div>{' '}
                    <div className="collapsible-body">
                      I graduated with an{' '}
                      <emphasize is="custom">
                        Associate Degree of Science in Computer Science.
                      </emphasize>{' '}
                      while still a senior at MBHS
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header">
                      <bold is="custom">MBHS</bold>
                    </div>
                    <div className="collapsible-body">
                      I first made this portfolio website as a junior at Mission
                      Bay High School and for the most part, only the content of
                      the site has changed with most of the design remaining
                      true to the original made two years ago. I graduated as
                      one of the top students with a
                      <emphasize is="custom">cumulative 4.83 GPA.</emphasize>
                    </div>
                  </li>
                </ul>
              </span>
            </ImageSection>
            <ImageSection title="My current (and former) groups" images={[music, cc, first]}>
              <span>
                <ul className="collapsible" ref={groupsRef}>
                  <li>
                    <div className="collapsible-header">
                      <bold is="custom">Music</bold>
                    </div>
                    <div className="collapsible-body">
                      I am currently a violinist in{' '}
                      <a
                        href="https://symphony.calpoly.edu/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        my school's symphony orchestra.
                      </a>{' '}
                      Outside of school, I enjoy playing the violin and piano
                      which I have been learning for six and eight years
                      respectively. I also played the violin in my district's
                      honor ensemble for one year in middle school and two years
                      in high school.
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header">
                      <bold is="custom">Cross Country/Track & Field</bold>
                    </div>
                    <div className="collapsible-body">
                      I was previously a member of my school's Track & Field and
                      Cross Country teams. I enjoy running as a sport and to
                      stay healthy!
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header">
                      <bold is="custom">Robotics</bold>
                    </div>
                    <div className="collapsible-body">
                      I was previously one of the student leaders on{' '}
                      <a
                        href="https://team4160.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        my school's robotics team.
                      </a>{' '}
                      We compete annually in FRC (First Robotics Competition)
                      and my job is to oversee most of the programming on our
                      team. In the past, I have implemented vision processing
                      code that used cameras and algorithms to calculate and
                      attempt to align our robot properly. In addition to robot
                      related code, I also created our team's daily attendance
                      system using node + Google Sheets API and wrote most of
                      the code for our website.
                    </div>
                  </li>
                </ul>
              </span>
            </ImageSection>
          </div>
        </div>
        {/* <SkillsSection /> */}
        {/* <CompaniesTiles /> */}
        {/* <ProjectsTiles /> */}
      </main>
    </>
  );
};

export default About;
