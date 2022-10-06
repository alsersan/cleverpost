import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
      { username: 'John', id: 1, title: 'First post', body: 'test1' },
      { username: 'Patrick', id: 2, title: 'Second post', body: 'test2' },
      { username: 'Sarah', id: 3, title: 'Third post', body: 'test3' }
    ] as Post[]
  }
};

const baseApiURL = 'http://jsonplaceholder.typicode.com';

describe('PostsPage component', () => {
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

    test('modal is not visible', () => {
      expect(screen.queryByText(/edit post/i)).not.toBeInTheDocument();
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

  describe('When edit button is clicked', () => {
    beforeEach(() => {
      renderStoreProvider(
        <BrowserRouter>
          <IntlProvider locale={'en-US'} messages={messages['en']}>
            <PostsPage />
          </IntlProvider>
        </BrowserRouter>,
        { preloadedState: mockState }
      );
      const editButtons = screen.getAllByRole('button', {
        name: /edit icon/i
      });
      userEvent.click(editButtons[0]);
    });

    test('the modal opens', () => {
      expect(screen.getByText(/edit post/i)).toBeInTheDocument();
    });

    test('text is edited and card is updated', () => {
      const titleInput = screen.getByLabelText(/edit title/i);
      userEvent.type(titleInput, ' edited');
      expect(titleInput).toHaveValue('First post edited');

      userEvent.click(screen.getByRole('button', { name: 'Submit' }));
      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(
        `${baseApiURL}/posts/1`,
        expect.objectContaining({
          method: 'PATCH',
          body: JSON.stringify({
            title: 'First post edited',
            body: 'test1'
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        })
      );
      expect(screen.getByText('First post edited')).toBeInTheDocument();
    });
  });

  describe('When delete button is clicked', () => {
    beforeEach(() => {
      renderStoreProvider(
        <BrowserRouter>
          <IntlProvider locale={'en-US'} messages={messages['en']}>
            <PostsPage />
          </IntlProvider>
        </BrowserRouter>,
        { preloadedState: mockState }
      );
      const deleteButtons = screen.getAllByRole('button', {
        name: /delete icon/i
      });
      userEvent.click(deleteButtons[0]);
    });

    test('fetch is called', () => {
      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(
        `${baseApiURL}/posts/1`,
        expect.objectContaining({
          method: 'DELETE'
        })
      );
    });

    test('the post is deleted', () => {
      expect(screen.queryByText(/first post/i)).not.toBeInTheDocument();
      expect(screen.getAllByRole('listitem')).toHaveLength(2);
    });
  });
});
