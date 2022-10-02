import { Post } from 'models';

import { postsActionTypes } from '../actionTypes';

// GET POSTS
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

// EDIT POST
interface EditPostAction {
  type: postsActionTypes.EDIT_POST;
}

interface EditPostSuccessAction {
  type: postsActionTypes.EDIT_POST_SUCCESS;
  payload: Post;
}

interface EditPostErrorAction {
  type: postsActionTypes.EDIT_POST_ERROR;
  payload: string;
}

export type EditPostActions =
  | EditPostAction
  | EditPostSuccessAction
  | EditPostErrorAction;

// DELETE POST
interface DeletePostAction {
  type: postsActionTypes.DELETE_POST;
}

interface DeletePostSuccessAction {
  type: postsActionTypes.DELETE_POST_SUCCESS;
  payload: number;
}

interface DeletePostErrorAction {
  type: postsActionTypes.DELETE_POST_ERROR;
  payload: string;
}

export type DeletePostActions =
  | DeletePostAction
  | DeletePostSuccessAction
  | DeletePostErrorAction;

// GENERAL
export type PostsActions =
  | GetPostsActions
  | EditPostActions
  | DeletePostActions;
