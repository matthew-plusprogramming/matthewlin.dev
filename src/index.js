import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {NavigationContextProvider} from './contexts/NavigationContext';

ReactDOM.render(
  <React.StrictMode>
    <NavigationContextProvider>
      <Router>
        <App />
      </Router>
    </NavigationContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();
