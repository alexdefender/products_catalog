import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ProductState } from '@models/state';
import { prepareProduct } from '@utils/api/product';
import { ProductDto } from '@models/api/product';

const initialState: ProductState = {
  data: {} as ProductState['data'],
  isLoading: false,
  hasData: false,
  error: '',
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProductStart(state) {
      state.isLoading = true;
    },
    getProductSuccess(state, action: PayloadAction<ProductDto>) {
      state.data = prepareProduct(action.payload);
      state.hasData = true;
      state.error = '';
      state.isLoading = false;
    },
    getProductError(state, action: PayloadAction<string>) {
      state.hasData = false;
      state.error = action.payload;
      state.isLoading = false;
    },

    resetProductState() {
      return { ...initialState };
    },
  },
});

export const productActions = productSlice.actions;

export const productReducer = productSlice.reducer;
