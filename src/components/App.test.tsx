import { screen } from '@testing-library/dom';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';

import { LangSwitcherProvider } from 'contexts/LangSwitcherContext';
import { messages } from 'lang/languages';
import { Post, User } from 'models';
import { getAllPosts } from 'services/posts';
import { getAllUsers } from 'services/users';
import { RootState } from 'state';
import { renderStoreProvider } from 'tests/test-utils';

import { App } from './App';

jest.mock('services/posts');
jest.mock('services/users');

const mockedGetAllPosts = jest.mocked(getAllPosts);
const mockedGetAllUsers = jest.mocked(getAllUsers);

const mockState: RootState = {
  users: {
    error: null,
    loading: false,
    data: [] as User[]
  },
  posts: {
    error: null,
    loading: false,
    data: [] as Post[]
  }
};

describe('App component', () => {
  beforeEach(() => {
    mockedGetAllPosts.mockImplementation(() =>
      Promise.resolve([
        {
          userId: 1,
          id: 1,
          title: 'Post 1',
          body: 'test 1'
        },
        {
          userId: 2,
          id: 2,
          title: 'Post 2',
          body: 'test 2'
        }
      ])
    );
    mockedGetAllUsers.mockImplementation(() =>
      Promise.resolve([
        {
          id: 1,
          name: 'John',
          username: 'Bret',
          userAvatar: ''
        },
        {
          id: 2,
          name: 'Leanne Graham',
          username: 'Bret',
          userAvatar: ''
        }
      ] as User[])
    );
  });

  describe('When the component is instantiated', () => {
    beforeEach(() => {
      renderStoreProvider(
        <BrowserRouter>
          <LangSwitcherProvider>
            <IntlProvider locale={'en-US'} messages={messages['en']}>
              <App />
            </IntlProvider>
          </LangSwitcherProvider>
        </BrowserRouter>,
        { preloadedState: mockState }
      );
    });
    test('component is rendered', async () => {
      expect(await screen.findByText(/cleverpost/i)).toBeInTheDocument();
    });

    test('getAllPosts is called', () => {
      expect(mockedGetAllPosts).toHaveBeenCalledTimes(1);
    });

    test('getAllUsers is called', () => {
      expect(mockedGetAllUsers).toHaveBeenCalledTimes(1);
    });

    test('spinner is rendered', async () => {
      expect(
        await screen.findByAltText(/loading spinner/i)
      ).toBeInTheDocument();
    });
  });

  describe('When there are already users in the store', () => {
    beforeEach(() => {
      const mockStateWithUsers: RootState = {
        users: {
          error: null,
          loading: false,
          data: [
            { username: 'John', id: 1 },
            { username: 'Patrick', id: 2 },
            { username: 'Sarah', id: 3 }
          ] as User[]
        },
        posts: {
          error: null,
          loading: false,
          data: [] as Post[]
        }
      };
      renderStoreProvider(
        <BrowserRouter>
          <LangSwitcherProvider>
            <IntlProvider locale={'en-US'} messages={messages['en']}>
              <App />
            </IntlProvider>
          </LangSwitcherProvider>
        </BrowserRouter>,
        { preloadedState: mockStateWithUsers }
      );
    });
    test('getAllUsers is not called ', () => {
      expect(mockedGetAllUsers).not.toHaveBeenCalled();
    });
  });

  describe('When there are already users and posts in the store', () => {
    beforeEach(() => {
      const mockStateWithPosts: RootState = {
        users: {
          error: null,
          loading: false,
          data: [
            { username: 'John', id: 1 },
            { username: 'Patrick', id: 2 },
            { username: 'Sarah', id: 3 }
          ] as User[]
        },
        posts: {
          error: null,
          loading: false,
          data: [
            { username: 'John', id: 1, title: 'First post', body: 'test1' },
            { username: 'Patrick', id: 2, title: 'Second post', body: 'test2' },
            { username: 'Sarah', id: 3, title: 'Third post', body: 'test3' }
          ] as Post[]
        }
      };
      renderStoreProvider(
        <BrowserRouter>
          <LangSwitcherProvider>
            <IntlProvider locale={'en-US'} messages={messages['en']}>
              <App />
            </IntlProvider>
          </LangSwitcherProvider>
        </BrowserRouter>,
        { preloadedState: mockStateWithPosts }
      );
    });
    test('getAllUsers is not called ', () => {
      expect(mockedGetAllUsers).not.toHaveBeenCalled();
    });
    test('getAllPosts is not called ', () => {
      expect(mockedGetAllPosts).not.toHaveBeenCalled();
    });
  });
});
