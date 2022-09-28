import { User } from 'models';
import { actionTypes } from '../actionTypes';

interface GetUsersAction {
  type: actionTypes.GET_USERS;
}

interface GetUsersSuccessAction {
  type: actionTypes.GET_USERS_SUCCESS;
  payload: User[];
}

interface GetUsersErrorAction {
  type: actionTypes.GET_USERS_ERROR;
  payload: string;
}

export type UsersActions =
  | GetUsersAction
  | GetUsersSuccessAction
  | GetUsersErrorAction;
