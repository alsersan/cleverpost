import { User } from 'models';

import { usersActionTypes } from '../../actionTypes';
import { UsersState, usersReducer } from '../usersReducer';

const initialState: UsersState = {
  error: null,
  loading: false,
  data: [
    { username: 'John', id: 1 },
    { username: 'Patrick', id: 2 },
    { username: 'Sarah', id: 3 }
  ] as User[]
};

describe('Given the usersReducer', () => {
  describe('When the action is get', () => {
    test('then users fetching should be started', () => {
      const newState = usersReducer(initialState, {
        type: usersActionTypes.GET_USERS
      });

      expect(newState.data).toHaveLength(0);
      expect(newState.loading).toBe(true);
      expect(newState.error).toBe(null);
    });
  });
  describe('When the action is get error', () => {
    test('then an error message should be added', () => {
      const newState = usersReducer(initialState, {
        type: usersActionTypes.GET_USERS_ERROR,
        payload: 'There was an error'
      });

      expect(newState.data).toHaveLength(0);
      expect(newState.loading).toBe(false);
      expect(newState.error).toBe('There was an error');
    });
  });
  describe('When the action is get success', () => {
    test('then all users should be loaded', () => {
      const newState = usersReducer(initialState, {
        type: usersActionTypes.GET_USERS_SUCCESS,
        payload: [
          { username: 'Patrick', id: 2 },
          { username: 'Sarah', id: 3 }
        ] as User[]
      });

      expect(newState.data).toHaveLength(2);
      expect(newState.data.at(-1)?.username).toBe('Sarah');
      expect(newState.loading).toBe(false);
      expect(newState.error).toBe(null);
    });
  });
});
