import { configureStore } from '@reduxjs/toolkit';

import { layoutReducer } from '@reducers/layoutReducer';
import { productsReducer } from '@reducers/productsReducer';
import { productReducer } from '@reducers/productReducer';

export const makeStore = () => {
  return configureStore({
    reducer: {
      layout: layoutReducer,
      products: productsReducer,
      product: productReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
