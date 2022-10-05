import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from 'components/App';
import { LangSwitcherProvider } from 'contexts/LangSwitcherContext';
import { store } from 'state';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH_DOMAIN}
      clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
      redirectUri={window.location.origin}>
      <LangSwitcherProvider>
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>
      </LangSwitcherProvider>
    </Auth0Provider>
  </React.StrictMode>
);
