import { Post } from 'models';
import { PostsActions } from '../actions';
import { actionTypes } from '../actionTypes';

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
    case actionTypes.GET_POSTS:
      return { loading: true, error: null, data: [] };
    case actionTypes.GET_POSTS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case actionTypes.GET_POSTS_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};
