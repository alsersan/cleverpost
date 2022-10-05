import { screen } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';

import { messages } from 'lang/languages';
import { Post } from 'models';
import { RootState, UsersState } from 'state';
import { renderStoreProvider } from 'tests/test-utils';

import { PostsPage } from '../PostsPage';

const mockState: RootState = {
  users: {} as UsersState,
  posts: {
    loading: false,
    error: null,
    data: [
      { username: 'John', id: 1, title: 'First post' },
      { username: 'Patrick', id: 2, title: 'Second post' },
      { username: 'Sarah', id: 3, title: 'Third post' }
    ] as Post[]
  }
};

describe('PostsPage Component', () => {
  describe('When the component is instantiated', () => {
    beforeEach(() => {
      renderStoreProvider(
        <BrowserRouter>
          <IntlProvider locale={'en-US'} messages={messages['en']}>
            <PostsPage />
          </IntlProvider>
        </BrowserRouter>,
        { preloadedState: mockState }
      );
    });

    test('renders header', () => {
      expect(screen.getByText(/posts page/i)).toBeInTheDocument();
    });

    test('renders posts', () => {
      expect(screen.getByText(/first post/i)).toBeInTheDocument();
    });

    test('renders list of posts', () => {
      expect(screen.getAllByRole('listitem')).toHaveLength(3);
    });
  });

  describe('When locale changes', () => {
    beforeEach(() => {
      renderStoreProvider(
        <BrowserRouter>
          <IntlProvider locale={'es-ES'} messages={messages['es']}>
            <PostsPage />
          </IntlProvider>
        </BrowserRouter>,
        { preloadedState: mockState }
      );
    });

    test('renders the correct message', () => {
      expect(screen.getByText(/página de publicaciones/i)).toBeInTheDocument();
    });
  });
});
