import React from 'react';
import '../styles/wkexp-proj-page.scss';
import { useLocation } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import data from '../work-experience-projects-data';

const WorkExperienceOrProjectPage = () => {
  const location = useLocation();
  const paths = location.pathname.split('/');
  const { image, title, time, sections, links } = data[paths[1]][paths[2]];

  const notesDisplay = sections.map((section) => {
    const notes = section.notes.map((note) => {
      return <li key={uuid()}>{note}</li>;
    });
    return (
      <div key={uuid()}>
        <h5 style={{ marginBottom: 0 }}>{section.title}</h5>
        <ul style={{ marginTop: '0.5rem' }} className="browser-default">
          {notes}
        </ul>
      </div>
    );
  });

  let linksDisplay = [];
  for (let i = 0; i < links.length; i += 2) {
    linksDisplay.push(
      <span key={uuid()}>
        <a href={links[i + 1]} target="_blank" rel="noopener noreferrer">
          {links[i]}
        </a>
        <br />
      </span>,
    );
  }

  return (
    <>
      <div className="main-div flex-row center center-v">
        <div className="wkexp-project-card z-depth-5">
          <div className="wxpjcard-header flex-row">
            <img src={image} alt="" />
            <div className="flex-col center flex-1">
              <h5 className="medium-text no-margin">{title}</h5>
              <h6 className="no-margin">{time}</h6>
            </div>
          </div>
          <div className="wxpjcard-body">{notesDisplay}</div>
          <div className="wxpjcard-footer">
            <p>
              Links:
              <br />
              {linksDisplay}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkExperienceOrProjectPage;
