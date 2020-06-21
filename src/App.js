import React from 'react';

// Style imports
import './materialize.scss';
import './styles/app.scss';

// Component imports
import Header from './components/HeaderContainer';

// On component did mount m init
import M from 'materialize-css';

const App = () => {
  M.AutoInit();
  return (
    <>
      <Header />
    </>
  );
};
export default App;
