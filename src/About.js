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
            id="about-picture"
            className="flex-row center fade-in-after-page-title-load">
            <img src={matthew} alt="" />
          </div>

          <div className="flex-row center fade-in-after-page-title-load">
            <ImageSection
              title="My current (and future) schools"
              images={[mbhs, sdccd, berkeley]}>
              <span>
                <bold is="custom">MBHS</bold> <br />I am currently a Junior at
                Mission Bay High School. I currently take part in many
                extracurriculars that I love doing (most listed to the right). I
                am a co-founder of the Mission Bay High School Entrepreneurship
                Club and academically, I currently hold a{' '}
                <emphasize is="custom">cumulative 4.84 GPA.</emphasize>
              </span>
              <span>
                <bold is="custom">SDCCD</bold> <br />I am currently a student in
                the San Diego Community College District pursuing an{' '}
                <emphasize is="custom">
                  Associate Degree of Science in Computer Science.
                </emphasize>{' '}
                I currently hold a <emphasize is="custom">4.0 GPA</emphasize>{' '}
                and have completed/am in the process of completing{' '}
                <emphasize is="custom">34/60</emphasize> of my required credits.
              </span>
              <span>
                <bold is="custom">Berkeley</bold> <br />
                Berkeley is my "dream school." I wish to attend Berkeley
                studying computer science. I love the school for many reasons
                including its amazing (and practical) computer science program,
                its location in my home state (California), and its proximity to
                Silicon Valley which may bring many opportunities for
                internships.
              </span>
            </ImageSection>
            <ImageSection title="My groups" images={[cc, music, first]}>
              <span>
                <bold is="custom">Cross Country/Track & Field</bold> <br /> I am
                currently a member of my school's Track & Field and Cross
                Country teams. I enjoy running as a sport and to stay healthy!
              </span>
              <span>
                <bold is="custom">Music</bold> <br /> I am currently a violinist
                in{' '}
                <a
                  href="https://missionbaymusic.com/"
                  target="_blank"
                  rel="noopener noreferrer">
                  my school's symphony orchestra.
                </a>{' '}
                Outside of school, I enjoy playing the violin and piano which I
                have been learning for three and five years respectively. I also
                played the violin in my district's honor ensemble for one year
                in middle school and one year in high school so far.
              </span>
              <span>
                <bold is="custom">Robotics</bold> <br /> I am one of the student
                leaders on{' '}
                <a
                  href="https://team4160.com/"
                  target="_blank"
                  rel="noopener noreferrer">
                  my school's robotics team.
                </a>{' '}
                We compete annually in FRC (First Robotics Competition) and my
                job is to oversee most of the programming on our team. In the
                past, I have implemented vision processing code that used
                cameras and algorithms to calculate and attempt to align our
                robot properly. In addition to robot related code, I also
                created our team's daily attendance system using node + Google
                Sheets API and wrote most of the code for our website.
              </span>
            </ImageSection>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
