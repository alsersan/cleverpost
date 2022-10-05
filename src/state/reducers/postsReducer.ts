import { Post } from 'models';

import { PostsActions } from '../actions/postsActions';
import { postsActionTypes } from '../actionTypes';

export interface PostsState {
  loading: boolean;
  error: string | null;
  data: Post[];
}

export const postsReducer = (
  state: PostsState = { loading: false, error: null, data: [] },
  action: PostsActions
): PostsState => {
  switch (action.type) {
    // GET POSTS
    case postsActionTypes.GET_POSTS:
      return { loading: true, error: null, data: [] };
    case postsActionTypes.GET_POSTS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case postsActionTypes.GET_POSTS_ERROR:
      return { loading: false, error: action.payload, data: [] };

    // UPDATE POST
    case postsActionTypes.EDIT_POST:
      // No loading. Switch to true if necessary
      return { loading: false, error: null, data: state.data };
    case postsActionTypes.EDIT_POST_SUCCESS:
      return {
        loading: false,
        error: null,
        data: state.data.map((el) =>
          el.id === action.payload.id ? action.payload : el
        )
      };
    case postsActionTypes.EDIT_POST_ERROR:
      return { loading: false, error: action.payload, data: state.data };

    // DELETE POST
    case postsActionTypes.DELETE_POST:
      // No loading. Switch to true if necessary
      return { loading: false, error: null, data: state.data };
    case postsActionTypes.DELETE_POST_SUCCESS:
      return {
        loading: false,
        error: null,
        data: state.data.filter((el) => el.id !== action.payload)
      };
    case postsActionTypes.DELETE_POST_ERROR:
      return { loading: false, error: action.payload, data: state.data };

    // FALLBACK
    default:
      return state;
  }
};
