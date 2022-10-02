import { configureStore } from '@reduxjs/toolkit';

import { postsReducer } from './reducers/postsReducer';
import { usersReducer } from './reducers/usersReducer';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
