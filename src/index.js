import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { NavigationContextProvider } from './contexts/NavigationContext';
import { MaterializeCssContextProvider } from './contexts/MaterializeCssContext';
import { ThemeContextProvider } from './contexts/ThemeContext';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeContextProvider>
        <MaterializeCssContextProvider>
          <NavigationContextProvider>
            <App />
          </NavigationContextProvider>
        </MaterializeCssContextProvider>
      </ThemeContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// We likely want to keep this unregistered due to the purpose of this site
serviceWorker.unregister();

// serviceWorker.register();
