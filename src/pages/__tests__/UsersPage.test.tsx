import { screen } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';

import { messages } from 'lang/languages';
import { User } from 'models';
import { PostsState, RootState } from 'state';
import { renderStoreProvider } from 'tests/test-utils';

import { UsersPage } from '../UsersPage';

const mockState: RootState = {
  users: {
    error: null,
    loading: false,
    data: [
      { username: 'John', id: 1 },
      { username: 'Patrick', id: 2 },
      { username: 'Sarah', id: 3 }
    ] as User[]
  },
  posts: {} as PostsState
};

describe('UsersPage component', () => {
  beforeEach(() => {
    jest
      .spyOn(global, 'fetch')
      .mockImplementation(
        jest.fn(() =>
          Promise.resolve({ json: () => Promise.resolve({}) })
        ) as jest.Mock
      );
  });
  describe('When the component is instantiated', () => {
    beforeEach(() => {
      renderStoreProvider(
        <BrowserRouter>
          <IntlProvider locale={'en-US'} messages={messages['en']}>
            <UsersPage />
          </IntlProvider>
        </BrowserRouter>,
        { preloadedState: mockState }
      );
    });

    test('renders header', () => {
      expect(screen.getByText(/users/i)).toBeInTheDocument();
    });

    test('renders users', () => {
      expect(screen.getByText(/john/i)).toBeInTheDocument();
    });

    test('renders list of users', () => {
      expect(screen.getAllByRole('listitem')).toHaveLength(3);
    });
  });

  describe('When locale changes', () => {
    beforeEach(() => {
      renderStoreProvider(
        <BrowserRouter>
          <IntlProvider locale={'es-ES'} messages={messages['es']}>
            <UsersPage />
          </IntlProvider>
        </BrowserRouter>,
        { preloadedState: mockState }
      );
    });

    test('renders the correct message', () => {
      expect(screen.getByText(/usuarios/i)).toBeInTheDocument();
    });
  });
});
