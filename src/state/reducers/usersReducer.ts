import { User } from 'models';

import { UsersActions } from '../actions/usersActions';
import { usersActionTypes } from '../actionTypes';

export interface UsersState {
  loading: boolean;
  error: string | null;
  data: User[];
}

export const usersReducer = (
  state: UsersState = { loading: false, error: null, data: [] },
  action: UsersActions
): UsersState => {
  switch (action.type) {
    case usersActionTypes.GET_USERS:
      return { loading: true, error: null, data: [] };
    case usersActionTypes.GET_USERS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case usersActionTypes.GET_USERS_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};
