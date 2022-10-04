import { createMemoryHistory } from '@remix-run/router';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IntlProvider } from 'react-intl';
import { BrowserRouter, Router } from 'react-router-dom';

import { messages } from 'lang/languages';

import { Sidebar } from './Sidebar';

describe('Sidebar Component', () => {
  test('renders footer text', () => {
    render(
      <BrowserRouter>
        <IntlProvider locale={'en-US'} messages={messages['en']}>
          <Sidebar />
        </IntlProvider>
      </BrowserRouter>
    );

    expect(screen.getByText(/Álvaro Serrano/)).toBeInTheDocument();
  });

  test('renders link list', () => {
    render(
      <BrowserRouter>
        <IntlProvider locale={'en-US'} messages={messages['en']}>
          <Sidebar />
        </IntlProvider>
      </BrowserRouter>
    );

    expect(screen.getByText(/posts/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(2);
  });

  test('navigates on link click', () => {
    const history = createMemoryHistory();
    render(
      <Router location={''} navigator={history}>
        <IntlProvider locale={'en-US'} messages={messages['en']}>
          <Sidebar />
        </IntlProvider>
      </Router>
    );

    userEvent.click(screen.getByText(/users/i));
    expect(history.location.pathname).toBe('/users');
  });

  test('renders links according to locale', () => {
    render(
      <BrowserRouter>
        <IntlProvider locale={'es-ES'} messages={messages['es']}>
          <Sidebar />
        </IntlProvider>
      </BrowserRouter>
    );

    expect(screen.getByText(/publicaciones/i)).toBeInTheDocument();
  });
});
