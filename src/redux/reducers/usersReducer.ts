import { User } from 'models';
import { UsersActions } from '../actions';
import { actionTypes } from '../actionTypes';

interface usersState {
  loading: boolean;
  error: string | null;
  data: User[];
}

export const usersReducer = (
  state: usersState = { loading: false, error: null, data: [] },
  action: UsersActions
) => {
  switch (action.type) {
    case actionTypes.GET_USERS:
      return { loading: true, error: null, data: [] };
    case actionTypes.GET_USERS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case actionTypes.GET_USERS_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};
