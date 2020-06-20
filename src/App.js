import React from 'react';
import './materialize.scss';
import './styles/defaults.scss';
import './styles/app.scss';
import './styles/nav.scss';

// on component did mount m init
// import M from 'materialize-css';

const App = () => (
  <>
    <header>
      <nav>
        <ul>
          <li id="brand-logo">Matthew Lin</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Testimonials</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  </>
);
export default App;
