import { Auth0ContextInterface, User, useAuth0 } from '@auth0/auth0-react';
import { createMemoryHistory } from '@remix-run/router';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IntlProvider } from 'react-intl';
import { BrowserRouter, Router } from 'react-router-dom';

import { LangSwitcherProvider } from 'contexts/LangSwitcherContext';
import { messages } from 'lang/languages';

import { Header } from './Header';

const headerProps = {
  isSidebarOpen: true,
  toggleSidebar: jest.fn()
};

jest.mock('@auth0/auth0-react');
const mockedUseAuth0 = jest.mocked(useAuth0);

describe('Header component', () => {
  beforeEach(() => {
    mockedUseAuth0.mockReturnValue({
      isAuthenticated: true,
      logout: () => {
        return;
      },
      user: { name: 'John' } as User
    } as Auth0ContextInterface<User>);
  });
  describe('When the component is instantiated', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <LangSwitcherProvider>
            <IntlProvider locale={'en-US'} messages={messages['en']}>
              <Header {...headerProps} />
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
              <Header {...headerProps} />
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
              <Header {...headerProps} />
            </IntlProvider>
          </LangSwitcherProvider>
        </Router>
      );

      userEvent.click(screen.getByText(/cleverpost/i));
      expect(history.location.pathname).toBe('/');
    });
  });

  describe('When the user is no authenticated', () => {
    beforeEach(() => {
      mockedUseAuth0.mockReturnValueOnce({
        isAuthenticated: false,
        logout: () => {
          return;
        },
        user: undefined
      } as Auth0ContextInterface<User>);
      render(
        <BrowserRouter>
          <LangSwitcherProvider>
            <IntlProvider locale={'en-US'} messages={messages['en']}>
              <Header {...headerProps} />
            </IntlProvider>
          </LangSwitcherProvider>
        </BrowserRouter>
      );
    });

    test('user info component is not rendered', () => {
      expect(screen.queryByAltText(/down arrow icon/i)).not.toBeInTheDocument();
    });
  });
});
