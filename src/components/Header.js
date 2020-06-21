import React from 'react';
import {Link} from 'react-router-dom';

// Icon imports
import {Menu} from '@material-ui/icons';

const Header = () => {
  return (
    <header className="navbar-fixed">
      <nav className="z-depth-0 nav-wrapper">
        {/* Main navbar list */}
        <ul>
          <li id="sidenav-trigger">
            <a href="#!">
              <Menu />
            </a>
          </li>
          <li id="brand-logo">
            <Link to="">Matthew Lin</Link>
          </li>
          <li id="invisible-item"></li>
          <li>
            <Link to="">About</Link>
          </li>
          <li>
            <Link to="">Portfolio</Link>
          </li>
          <li>
            <Link to="">Testimonials</Link>
          </li>
          <li>
            <Link to="">Contact</Link>
          </li>
        </ul>
      </nav>
      <i className="material-icons">menu</i>
    </header>
  );
};

export default Header;
