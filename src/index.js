import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {NavigationContextProvider} from './contexts/NavigationContext';
import {MaterializeCssContextProvider} from './contexts/MaterializeCssContext';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MaterializeCssContextProvider>
        <NavigationContextProvider>
          <App />
        </NavigationContextProvider>
      </MaterializeCssContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();
