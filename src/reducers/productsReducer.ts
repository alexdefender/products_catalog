import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ProductsState } from '@models/state';
import { prepareProducts } from '@utils/api/product';
import { ProductsDto } from '@models/api/product';
import { ProductFilters } from '@models/product';

const initialState: ProductsState = {
  list: [],
  isLoading: false,
  hasData: false,
  error: '',
  view: 'grid',
  filters: {
    categories: [],
    prices: [],
  },
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProductsStart(state) {
      state.isLoading = true;
    },
    getProductsSuccess(state, action: PayloadAction<ProductsDto>) {
      state.list = prepareProducts(action.payload);
      state.hasData = true;
      state.error = '';
      state.isLoading = false;
    },
    getProductsError(state, action: PayloadAction<string>) {
      state.hasData = false;
      state.error = action.payload;
      state.isLoading = false;
    },
    setProductsView(state, action: PayloadAction<ProductsState['view']>) {
      state.view = action.payload;
    },
    setProductFilter(
      state,
      action: PayloadAction<{ filter: ProductFilters; value: ProductsState['filters'][ProductFilters] }>,
    ) {
      state.filters = { ...state.filters, [action.payload.filter]: action.payload.value };
    },
    resetProductsState() {
      return { ...initialState };
    },
  },
});

export const productsActions = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
