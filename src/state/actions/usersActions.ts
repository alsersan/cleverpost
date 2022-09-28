import { User } from 'models';
import { usersActionTypes } from '../actionTypes';

interface GetUsersAction {
  type: usersActionTypes.GET_USERS;
}

interface GetUsersSuccessAction {
  type: usersActionTypes.GET_USERS_SUCCESS;
  payload: User[];
}

interface GetUsersErrorAction {
  type: usersActionTypes.GET_USERS_ERROR;
  payload: string;
}

export type UsersActions =
  | GetUsersAction
  | GetUsersSuccessAction
  | GetUsersErrorAction;
