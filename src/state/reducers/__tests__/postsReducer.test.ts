import { Post } from 'models';

import { postsActionTypes } from '../../actionTypes';
import { PostsState, postsReducer } from '../postsReducer';

const initialState: PostsState = {
  error: null,
  loading: false,
  data: [
    { username: 'John', id: 1, title: 'First post', body: 'test1' },
    { username: 'Patrick', id: 2, title: 'Second post', body: 'test2' },
    { username: 'Sarah', id: 3, title: 'Third post', body: 'test3' }
  ] as Post[]
};

describe('Given the postsReducer', () => {
  describe('When the action is get', () => {
    test('then users fetching should be started', () => {
      const newState = postsReducer(initialState, {
        type: postsActionTypes.GET_POSTS
      });

      expect(newState.data).toHaveLength(0);
      expect(newState.loading).toBe(true);
      expect(newState.error).toBe(null);
    });
  });
  describe('When the action is get error', () => {
    test('then an error message should be added', () => {
      const newState = postsReducer(initialState, {
        type: postsActionTypes.GET_POSTS_ERROR,
        payload: 'There was an error'
      });

      expect(newState.data).toHaveLength(0);
      expect(newState.loading).toBe(false);
      expect(newState.error).toBe('There was an error');
    });
  });
  describe('When the action is get success', () => {
    test('then all users should be loaded', () => {
      const newState = postsReducer(initialState, {
        type: postsActionTypes.GET_POSTS_SUCCESS,
        payload: [
          { username: 'John', id: 1, title: 'First post', body: 'test1' },
          { username: 'Patrick', id: 2, title: 'Second post', body: 'test2' }
        ] as Post[]
      });

      expect(newState.data).toHaveLength(2);
      expect(newState.data.at(-1)?.username).toBe('Patrick');
      expect(newState.loading).toBe(false);
      expect(newState.error).toBe(null);
    });
  });
  describe('When the action is edit', () => {
    test('then user editing should be started', () => {
      const newState = postsReducer(initialState, {
        type: postsActionTypes.EDIT_POST
      });

      expect(newState.data).toHaveLength(3);
      expect(newState.loading).toBe(false);
      expect(newState.error).toBe(null);
    });
  });
  describe('When the action is edit error', () => {
    test('then an error message should be added', () => {
      const newState = postsReducer(initialState, {
        type: postsActionTypes.EDIT_POST_ERROR,
        payload: 'There was an error'
      });

      expect(newState.data).toHaveLength(3);
      expect(newState.loading).toBe(false);
      expect(newState.error).toBe('There was an error');
    });
  });
  describe('When the action is edit success', () => {
    test('then user should be edited', () => {
      const newState = postsReducer(initialState, {
        type: postsActionTypes.EDIT_POST_SUCCESS,
        payload: {
          username: 'Frederick',
          id: 1,
          title: 'First post',
          body: 'Another test'
        } as Post
      });

      expect(newState.data).toHaveLength(3);
      expect(newState.data[0].username).toBe('Frederick');
      expect(newState.data[0].body).toBe('Another test');
      expect(newState.loading).toBe(false);
      expect(newState.error).toBe(null);
    });
  });
  describe('When the action is delete', () => {
    test('then user deleting should be started', () => {
      const newState = postsReducer(initialState, {
        type: postsActionTypes.DELETE_POST
      });

      expect(newState.data).toHaveLength(3);
      expect(newState.loading).toBe(false);
      expect(newState.error).toBe(null);
    });
  });
  describe('When the action is delete error', () => {
    test('then an error message should be added', () => {
      const newState = postsReducer(initialState, {
        type: postsActionTypes.DELETE_POST_ERROR,
        payload: 'There was an error'
      });

      expect(newState.data).toHaveLength(3);
      expect(newState.loading).toBe(false);
      expect(newState.error).toBe('There was an error');
    });
  });
  describe('When the action is delete success', () => {
    test('then user should be deleted', () => {
      const newState = postsReducer(initialState, {
        type: postsActionTypes.DELETE_POST_SUCCESS,
        payload: 1
      });

      expect(newState.data).toHaveLength(2);
      expect(newState.data[0].username).toBe('Patrick');
      expect(newState.loading).toBe(false);
      expect(newState.error).toBe(null);
    });
  });
});
