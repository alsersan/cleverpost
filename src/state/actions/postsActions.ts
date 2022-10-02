import { Post } from 'models';

import { postsActionTypes } from '../actionTypes';

interface GetPostsAction {
  type: postsActionTypes.GET_POSTS;
}

interface GetPostsSuccessAction {
  type: postsActionTypes.GET_POSTS_SUCCESS;
  payload: Post[];
}

interface GetPostsErrorAction {
  type: postsActionTypes.GET_POSTS_ERROR;
  payload: string;
}

export type GetPostsActions =
  | GetPostsAction
  | GetPostsSuccessAction
  | GetPostsErrorAction;

export type PostsActions = GetPostsActions;
