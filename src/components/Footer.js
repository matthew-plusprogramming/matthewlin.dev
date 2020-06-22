import React from 'react';
import {Link} from 'react-router-dom';

import '../styles/footer.scss';

import {routes} from './constants';

const Footer = () => {
  return (
    <footer>
      <div className="flex-row">
        <h5 className="light-text">Matthew Lin</h5>
      </div>
      <div className="flex-row large-bottom-margin">
        <h5 className="light-text">
          <a href="mailto:matthewlinplusprogramming@gmail.com">
            matthewlinplusprogramming@gmail.com
          </a>
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
