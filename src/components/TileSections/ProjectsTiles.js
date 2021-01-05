import React, { useContext } from 'react';

import HoverTile from './HoverTile';

import fastEngine from '../../res/projects/fast-engine.png';
import matthewlinDev from '../../res/projects/matthewlin-dev.png';

import { ThemeContext } from '../../contexts/ThemeContext';

const ProjectsTiles = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <div className="projects-section">
      <div className="flex-row flex-container center">
        <h4 className="large-bottom-margin">
          Some Things I've Been Working On
        </h4>
      </div>
      <div
        className={`tiles ${!themeContext.darkMode && 'invert-tile-colors'}`}
      >
        <HoverTile
          data={{
            img: fastEngine,
            title: 'Fast Engine',
            path: '/projects/fast-engine',
          }}
        >
          A simple game engine written in C++ using SDL for graphics rendering
        </HoverTile>

        <HoverTile
          data={{
            img: matthewlinDev,
            title: 'matthewlin.dev (this site)',
            path: '/projects/matthewlin-dev',
          }}
        >
          This website created with ReactJS, ExpressJS, and NodeJS
        </HoverTile>
      </div>
    </div>
  );
};

export default ProjectsTiles;
