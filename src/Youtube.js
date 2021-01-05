import React from 'react';

const Youtube = () => {
  return (
    <div className="main-div">
      <div className="flex-row center" style={{ padding: '2rem; 2rem' }}>
        <h4>You have reached my YouTube page!</h4>
      </div>
      <div
        className="flex-row center"
        style={{ margin: '2rem 2rem 0', padding: '2rem; 2rem' }}
      >
        <a
          href="https://www.youtube.com/channel/UCqVIqm9pT-4lH8v2UzkfxIA"
          className="button waves-effect waves-light z-depth-1 fixed-width-button"
        >
          To Channel
        </a>
      </div>
      <div
        className="flex-row center"
        style={{ margin: '1rem', padding: '2rem; 2rem' }}
      >
        <a
          href="https://github.com/matthew-plusprogramming/MatthewLinYT"
          className="button waves-effect waves-light z-depth-1 fixed-width-button"
        >
          All of My Code
        </a>
      </div>
    </div>
  );
};

export default Youtube;
