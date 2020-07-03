import React from 'react';

import HoverTile from './HoverTile';

import robolink from '../../res/robolink.png';
import programination from '../../res/programination.png';

const CompaniesTiles = () => (
  <div className="companies-section">
    <div className="flex-row center">
      <h4 className="large-bottom-margin">Companies I've Worked With</h4>
    </div>
    <div className="tiles">
      <HoverTile
        data={{
          img: robolink,
          title: 'Robolink',
          path: '/work-experience/robolink',
        }}>
        Teaching STEM to kids of all ages. Holds year around robotics camps &
        produces educational STEM materials.
      </HoverTile>

      <HoverTile
        data={{
          img: programination,
          title: 'Programination',
          path: '/work-experience/programination',
        }}>
        Creating high quality web and mobile applications of all kinds for
        clients.
      </HoverTile>
    </div>
  </div>
);

export default CompaniesTiles;
