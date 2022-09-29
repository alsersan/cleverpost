import { ApiPost, User } from 'models';
import { getAllPosts, processPosts } from 'services/posts';
import { getAllUsers } from 'services/users';
import { GetPostsActions } from '../actions/postsActions';
import { UsersActions } from '../actions/usersActions';
import { postsActionTypes, usersActionTypes } from '../actionTypes';
import { AppThunk } from './appThunk';

export const getPostsWithUsers = (): AppThunk<
  GetPostsActions | UsersActions
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
      const posts = getAllPosts();
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
        const processedPosts = processPosts(posts, users);
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
