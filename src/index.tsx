import React from 'react';
import { createRoot } from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from 'components/App';
import messages_en from 'lang/en.json';
import messages_es from 'lang/es.json';
import { store } from 'state';

interface MessageOptions {
  en: typeof messages_en;
  es: typeof messages_es;
}

const messageOptions: MessageOptions = {
  en: messages_en,
  es: messages_es
};

const locale = navigator.language || 'en-US';
const language = (locale.split(/[-_]/)[0] ||
  'en') as keyof typeof messageOptions;
const message = messageOptions[language] || messageOptions['en'];

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <IntlProvider locale={locale} messages={message}>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </IntlProvider>
  </React.StrictMode>
);
