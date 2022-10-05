import { PreloadedState, configureStore } from '@reduxjs/toolkit';
import { RenderOptions, render as rtlRender } from '@testing-library/react';
import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';

import { RootState, postsReducer, usersReducer } from 'state';

type CustomRenderOptions = {
  preloadedState: PreloadedState<RootState>;
} & Omit<RenderOptions, 'wrapper'>;

export function renderStoreProvider(
  ui: ReactElement,
  options?: CustomRenderOptions
) {
  const { preloadedState } = options || {};

  const store = configureStore({
    reducer: {
      posts: postsReducer,
      users: usersReducer
    },
    preloadedState
  });

  function Wrapper({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return rtlRender(ui, { wrapper: Wrapper, ...options });
}
