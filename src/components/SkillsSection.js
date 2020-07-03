import React from 'react';

import ThreeArrow from '../res/three-arrow.png';
import TwoArrow from '../res/two-arrow.png';
import OneArrow from '../res/one-arrow.png';

const SkillsSection = () => {
  return (
    <div className="skills-section">
      <div className="flex-row center">
        <h4 className="bottom-margin">True Full Stack Developer</h4>
      </div>
      <div className="flex-row flex-container center">
        <h5 className="large-bottom-margin">
          I have spent 4 years and counting exploring the computer science world
          and have specialized in a few key areas!
        </h5>
      </div>
      <div className="flex-row center skills-wrapper">
        <ul className="collapsible expandable z-depth-0">
          <h4>Front-end Developer</h4>
          <li>
            <div className="collapsible-header">
              <h5>HTML/CSS</h5>
              <img src={ThreeArrow} alt="" />
            </div>
            <div className="collapsible-body">
              <strong is="custom">Years of Experience: 1.5</strong>
              <br />I have worked extensively with HTML and CSS both on personal
              and professional projects.
            </div>
          </li>
          <li>
            <div className="collapsible-header">
              <h5>ReactJS</h5>
              <img src={ThreeArrow} alt="" />
            </div>
            <div className="collapsible-body">
              <strong is="custom">Years of Experience: 0.5</strong>
              <br />I learned React originally due to the fact that it was a
              requirement for on of my summer software engineering internships.
              In the process of learning the framework I recreated my portfolio
              website (this website) and worked on various outward facing
              projects for the internship using it.
            </div>
          </li>
          <li>
            <div className="collapsible-header">
              <h5>React Native</h5>
              <img src={ThreeArrow} alt="" />
            </div>
            <div className="collapsible-body">
              <strong is="custom">Years of Experience: 0.5</strong>
              <br />I learned React Native as a requirement for one of my summer
              software engineering internships. In the process of learning the
              framework I worked on several outward facing projects for the
              internship.
            </div>
          </li>
          <li>
            <div className="collapsible-header">
              <h5>Flutter</h5>
              <img src={OneArrow} alt="" />
            </div>
            <div className="collapsible-body">
              <strong is="custom">Years of Experience: 0.5</strong>
              <br />I learned Flutter as a requirement for one of my summer
              software engineering internships. In the process of learning the
              framework I worked on a small learning project for the internship.
            </div>
          </li>
        </ul>
        <ul className="collapsible expandable z-depth-0">
          <h4>Back-end Developer</h4>
          <li>
            <div className="collapsible-header">
              <h5>JavaScript (NodeJS)</h5>
              <img src={ThreeArrow} alt="" />
            </div>
            <div className="collapsible-body">
              <strong is="custom">Years of Experience: 1.5</strong>
              <br />I have worked extensively with NodeJS both on personal and
              professional projects. I have experience implementing several
              different types of backends including REST APIs and GraphQL APIs.
              Some other experience I have with NodeJS includes the creation of
              several discord chatbots for clients on Fiverr. I've created many
              diverse bots including some which interact with APIs like the
              GoogleTranslate API in order to improve functionality.
            </div>
          </li>
          <li>
            <div className="collapsible-header">
              <h5>ExpressJS</h5>
              <img src={ThreeArrow} alt="" />
            </div>
            <div className="collapsible-body">
              <strong is="custom">Years of Experience: 1.0</strong>
              <br />I have created many webservers using the ExpressJS library
              for both personal and professional projects. I have implemented
              REST and GraphQL backends using express in conjunction with
              databases like MongoDB and Postgres to create scalable solutions.
            </div>
          </li>
          <li>
            <div className="collapsible-header">
              <h5>MongoDB</h5>
              <img src={TwoArrow} alt="" />
            </div>
            <div className="collapsible-body">
              <strong is="custom">Years of Experience: 0.5</strong>
              <br />I use MongoDB as my database of choice as my preferred tech
              stack is the MERN stack (Mongo, Express, React, NodeJs).
            </div>
          </li>
          <li>
            <div className="collapsible-header">
              <h5>Postgres</h5>
              <img src={TwoArrow} alt="" />
            </div>
            <div className="collapsible-body">
              <strong is="custom">Years of Experience: 0.5</strong>
              <br />I have used Postgres alongside GraphQL in ony of my summer
              software engineering internships.
            </div>
          </li>
        </ul>
        <ul className="collapsible expandable z-depth-0">
          <h4>Capable Developer</h4>
          <li>
            <div className="collapsible-header">
              <h5>C/C++</h5>
              <img src={ThreeArrow} alt="" />
            </div>
            <div className="collapsible-body">
              <strong is="custom">Years of Experience: 4.0</strong>
              <br />C and C++ were two of the first programming languages I
              learned, and I definitely have benefitted greatly from this
              choice. Through programming with these languages I have learned to
              think about scalability and clean code first. Some projects I have
              made with C/C++ include a bytecode programming language written in
              C (only mostly completed) and a fully functioning game engine
              written in C++ using the SDL library for graphics rendering.
            </div>
          </li>
          <li>
            <div className="collapsible-header">
              <h5>Git (GitHub & GitLab)</h5>
              <img src={ThreeArrow} alt="" />
            </div>
            <div className="collapsible-body">
              <strong is="custom">Years of Experience: 2.0</strong>
              <br />I have been using Git for the last few years in order to
              manage my personal projects. In addition to this, I got to learn
              how to use Git in a professional/large team environment during one
              of my summer software engineering internships.
            </div>
          </li>
          <li>
            <div className="collapsible-header">
              <h5>Python</h5>
              <img src={TwoArrow} alt="" />
            </div>
            <div className="collapsible-body">
              <strong is="custom">Years of Experience: 2.0</strong>
              <br />
              My experience with Python is fairly limited. I have used python in
              my STEM summer camp instruction internship for machine learning
              applications. In addition to this, I have a limited amount of
              experience creating chatbots for clients on Fiverr using python,
              however I switched to JavaScript at some point which is now my
              language of choice for most applications.
            </div>
          </li>
          <li>
            <div className="collapsible-header">
              <h5>GraphQL</h5>
              <img src={TwoArrow} alt="" />
            </div>
            <div className="collapsible-body">
              <strong is="custom">Years of Experience: 0.5</strong>
              <br />I have used GraphQL alongside Postgres in ony of my summer
              software engineering internships. By using GraphQL, I was able to
              create a scalable and adaptable API to enable flexible data
              fetching and manipulation.
            </div>
          </li>
          <li>
            <div className="collapsible-header">
              <h5>Containerization (Docker)</h5>
              <img src={OneArrow} alt="" />
            </div>
            <div className="collapsible-body">
              <strong is="custom">Years of Experience: 1.5</strong>
              <br />I have utilized containerization and more specifically
              Docker in order to create an isolated code execution environment
              for one of my personal projects.
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SkillsSection;
