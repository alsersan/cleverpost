import { createMemoryHistory } from '@remix-run/router';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IntlProvider } from 'react-intl';
import { BrowserRouter, Router } from 'react-router-dom';

import { LangSwitcherProvider } from 'contexts/LangSwitcherContext';
import { messages } from 'lang/languages';

import { Header } from './Header';

describe('Header component', () => {
  describe('When the component is instantiated', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <LangSwitcherProvider>
            <IntlProvider locale={'en-US'} messages={messages['en']}>
              <Header />
            </IntlProvider>
          </LangSwitcherProvider>
        </BrowserRouter>
      );
    });

    test('renders app logo', () => {
      expect(screen.getByText(/cleverpost/i)).toBeInTheDocument();
    });

    test('renders language switcher', () => {
      expect(screen.getByAltText(/language icon/i)).toBeInTheDocument();
    });

    test('renders user info', () => {
      expect(screen.getByAltText(/down arrow icon/i)).toBeInTheDocument();
    });
  });

  describe('when locale changes', () => {
    test('alt text changes', () => {
      render(
        <BrowserRouter>
          <LangSwitcherProvider>
            <IntlProvider locale={'es-ES'} messages={messages['es']}>
              <Header />
            </IntlProvider>
          </LangSwitcherProvider>
        </BrowserRouter>
      );

      expect(screen.getByAltText(/icono de lenguaje/i)).toBeInTheDocument();
      expect(
        screen.getByAltText(/icono de flecha hacia abajo/i)
      ).toBeInTheDocument();
    });
  });

  describe('on logo click', () => {
    test('navigates', () => {
      const history = createMemoryHistory();
      render(
        <Router location={''} navigator={history}>
          <LangSwitcherProvider>
            <IntlProvider locale={'en-US'} messages={messages['en']}>
              <Header />
            </IntlProvider>
          </LangSwitcherProvider>
        </Router>
      );

      userEvent.click(screen.getByText(/cleverpost/i));
      expect(history.location.pathname).toBe('/');
    });
  });
});
