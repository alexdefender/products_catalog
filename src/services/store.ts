import { configureStore } from '@reduxjs/toolkit';

import { layoutReducer } from '@reducers/layoutReducer';

export const makeStore = () => {
  return configureStore({
    reducer: {
      layout: layoutReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
