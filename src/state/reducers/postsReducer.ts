import { Post } from 'models';

import { PostsActions } from '../actions/postsActions';
import { postsActionTypes } from '../actionTypes';

interface postsState {
  loading: boolean;
  error: string | null;
  data: Post[];
}

export const postsReducer = (
  state: postsState = { loading: false, error: null, data: [] },
  action: PostsActions
) => {
  switch (action.type) {
    case postsActionTypes.GET_POSTS:
      return { loading: true, error: null, data: [] };
    case postsActionTypes.GET_POSTS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case postsActionTypes.GET_POSTS_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};
