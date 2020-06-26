import React, {createContext} from 'react';

// On component did mount m init
import M from 'materialize-css';

const MaterializeCssContext = createContext();

const MaterializeCssContextProvider = (props) => {
  const materializeReinit = () => {
    setTimeout(() => M.AutoInit(), 100);
  };

  return (
    <MaterializeCssContext.Provider
      value={{
        materializeReinit: materializeReinit,
      }}>
      {props.children}
    </MaterializeCssContext.Provider>
  );
};

export {MaterializeCssContextProvider, MaterializeCssContext};
