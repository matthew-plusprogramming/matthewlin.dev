import React, {createContext} from 'react';

// On component did mount m init
import M from 'materialize-css';

const MaterializeCssContext = createContext();

const MaterializeCssContextProvider = (props) => {
  const materializeReinit = () => {
    setTimeout(() => {
      M.AutoInit();
      M.Collapsible.init(document.querySelectorAll('.collapsible'), {
        inDuration: 400,
        outDuration: 400,
      });
      M.Collapsible.init(document.querySelectorAll('.collapsible.expandable'), {
        accordion: false,
      });
    }, 100);
  };

  return (
    <MaterializeCssContext.Provider
      value={{
        materializeReinit: materializeReinit,
        M: M,
      }}>
      {props.children}
    </MaterializeCssContext.Provider>
  );
};

export {MaterializeCssContextProvider, MaterializeCssContext};
