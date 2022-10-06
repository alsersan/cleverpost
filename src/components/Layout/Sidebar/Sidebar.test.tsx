import { Auth0ContextInterface, User, useAuth0 } from '@auth0/auth0-react';
import { createMemoryHistory } from '@remix-run/router';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IntlProvider } from 'react-intl';
import { BrowserRouter, Router } from 'react-router-dom';

import { messages } from 'lang/languages';

import { Sidebar } from './Sidebar';

const SidebarProps = {
  isSidebarOpen: true,
  toggleSidebar: jest.fn()
};

jest.mock('@auth0/auth0-react');
const mockedUseAuth0 = jest.mocked(useAuth0);

describe('Sidebar Component', () => {
  beforeEach(() => {
    mockedUseAuth0.mockReturnValue({
      isAuthenticated: true
    } as Auth0ContextInterface<User>);
  });
  describe('When the component is instantiated', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <IntlProvider locale={'en-US'} messages={messages['en']}>
            <Sidebar {...SidebarProps} />
          </IntlProvider>
        </BrowserRouter>
      );
    });
    test('renders footer text', () => {
      expect(screen.getByText(/Álvaro Serrano/)).toBeInTheDocument();
    });

    test('renders link list', () => {
      expect(screen.getByText(/posts/i)).toBeInTheDocument();
      expect(screen.getAllByRole('link')).toHaveLength(2);
    });
  });

  describe('when locale changes', () => {
    test('renders links according to locale', () => {
      render(
        <BrowserRouter>
          <IntlProvider locale={'es-ES'} messages={messages['es']}>
            <Sidebar {...SidebarProps} />
          </IntlProvider>
        </BrowserRouter>
      );

      expect(screen.getByText(/publicaciones/i)).toBeInTheDocument();
    });
  });

  describe('on link click', () => {
    test('navigates', () => {
      const history = createMemoryHistory();
      render(
        <Router location={''} navigator={history}>
          <IntlProvider locale={'en-US'} messages={messages['en']}>
            <Sidebar {...SidebarProps} />
          </IntlProvider>
        </Router>
      );

      userEvent.click(screen.getByText(/users/i));
      expect(history.location.pathname).toBe('/users');
    });
  });

  describe('when user is not authenticated', () => {
    beforeEach(() => {
      mockedUseAuth0.mockReturnValueOnce({
        isAuthenticated: false
      } as Auth0ContextInterface<User>);
    });
    test('sidebar is not rendered', () => {
      render(
        <BrowserRouter>
          <IntlProvider locale={'en-US'} messages={messages['en']}>
            <Sidebar {...SidebarProps} />
          </IntlProvider>
        </BrowserRouter>
      );

      expect(screen.queryByText(/Álvaro Serrano/)).not.toBeInTheDocument();
    });
  });
});
