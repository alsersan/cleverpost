import { getAllUsers } from 'services/users';
import { UsersActions } from '../actions/usersActions';
import { usersActionTypes } from '../actionTypes';
import { AppThunk } from './appThunk';

export const getUsers = (): AppThunk<UsersActions> => {
  return async (dispatch, getState) => {
    const usersState = getState().users.data;
    if (usersState.length) return;

    dispatch({ type: usersActionTypes.GET_USERS });
    try {
      const data = await getAllUsers();
      dispatch({
        type: usersActionTypes.GET_USERS_SUCCESS,
        payload: data
      });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: usersActionTypes.GET_USERS_ERROR,
          payload: err.message
        });
      }
    }
  };
};
