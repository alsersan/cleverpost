import { Post } from 'models';
import { actionTypes } from '../actionTypes';

interface GetPostsAction {
  type: actionTypes.GET_POSTS;
}

interface GetPostsSuccessAction {
  type: actionTypes.GET_POSTS_SUCCESS;
  payload: Post[];
}

interface GetPostsErrorAction {
  type: actionTypes.GET_POSTS_ERROR;
  payload: string;
}

export type GetPostsActions =
  | GetPostsAction
  | GetPostsSuccessAction
  | GetPostsErrorAction;

export type PostsActions = GetPostsActions;
