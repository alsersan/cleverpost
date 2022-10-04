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
    <LangSwitcherProvider>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </LangSwitcherProvider>
  </React.StrictMode>
);
