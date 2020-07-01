import React from 'react';

import HoverTile from './HoverTile';

import fastEngine from '../../res/projects/fast-engine.png';
import simpleTodos from '../../res/projects/simpletodos.png';

const ProjectsTiles = () => (
  <div className="projects-section">
    <div className="flex-row center">
      <h4 className="large-bottom-margin">Some Things I've Been Working On</h4>
    </div>
    <div className="tiles invert-tile-colors">
      <HoverTile
        data={{
          img: fastEngine,
          title: 'Fast Engine',
          path: '/projects/fast-engine',
        }}>
        A simple game engine written in C++ using SDL for graphics rendering
      </HoverTile>

      <HoverTile
        data={{
          img: simpleTodos,
          title: 'Simple Todos',
          path: '/projects/simpletodos',
        }}>
        A simple todo application written with the MERN stack (MongoDB,
        ExpressJS, ReactNative, NodeJS)
      </HoverTile>
    </div>
  </div>
);

export default ProjectsTiles;
