import { ApiPost, Post, User } from 'models';
import * as postsService from 'services/posts';
import { getAllUsers } from 'services/users';

import {
  DeletePostActions,
  EditPostActions,
  GetPostsActions
} from '../actions/postsActions';
import { GetUsersActions } from '../actions/usersActions';
import { postsActionTypes, usersActionTypes } from '../actionTypes';
import { AppThunk } from './appThunk';

export const getPostsWithUsers = (): AppThunk<
  GetPostsActions | GetUsersActions
> => {
  return async (dispatch, getState) => {
    const usersState = getState().users.data;
    const hasPrevUsersState = !!usersState.length;
    const postsState = getState().posts.data;
    const hasPrevPostsState = !!postsState.length;

    if (hasPrevPostsState) return;
    if (!hasPrevUsersState) dispatch({ type: usersActionTypes.GET_USERS });
    dispatch({ type: postsActionTypes.GET_POSTS });

    try {
      const posts = postsService.getAllPosts();
      let users: Promise<User[]> | User[];
      if (hasPrevUsersState) {
        users = usersState;
      } else {
        users = getAllUsers();
      }

      const requests: [Promise<ApiPost[]>, Promise<User[]> | User[]] = [
        posts,
        users
      ];
      Promise.all(requests).then(([posts, users]) => {
        const processedPosts = postsService.processPosts(posts, users);
        dispatch({
          type: postsActionTypes.GET_POSTS_SUCCESS,
          payload: processedPosts
        });
        if (!hasPrevUsersState) {
          dispatch({
            type: usersActionTypes.GET_USERS_SUCCESS,
            payload: users
          });
        }
      });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: postsActionTypes.GET_POSTS_ERROR,
          payload: err.message
        });
        if (!hasPrevUsersState) {
          dispatch({
            type: usersActionTypes.GET_USERS_ERROR,
            payload: err.message
          });
        }
      }
    }
  };
};

export const editPost = (
  post: Post,
  title: string,
  body: string
): AppThunk<EditPostActions> => {
  return async (dispatch) => {
    dispatch({ type: postsActionTypes.EDIT_POST });
    try {
      postsService.editPost(post.id, title, body);
      const updatedPost: Post = { ...post, title, body };
      dispatch({
        type: postsActionTypes.EDIT_POST_SUCCESS,
        payload: updatedPost
      });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: postsActionTypes.EDIT_POST_ERROR,
          payload: err.message
        });
      }
    }
  };
};

export const deletePost = (postId: number): AppThunk<DeletePostActions> => {
  return async (dispatch) => {
    dispatch({ type: postsActionTypes.DELETE_POST });
    try {
      postsService.deletePost(postId);
      dispatch({
        type: postsActionTypes.DELETE_POST_SUCCESS,
        payload: postId
      });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: postsActionTypes.DELETE_POST_ERROR,
          payload: err.message
        });
      }
    }
  };
};
