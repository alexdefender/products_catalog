import { RootState, AppDispatch } from '@services/store';
import api from '@services/request';
import { productsActions } from '@reducers/productsReducer';
import { ProductsDto } from '@models/api/product';
import { API_URLS } from '@constants/api';

const { getProductsStart, getProductsSuccess, getProductsError, setProductsView, resetProductsState } = productsActions;

export { setProductsView, resetProductsState };

export const getProducts = () => async (dispatch: AppDispatch, getState: () => RootState) => {
  const { isLoading } = getState().products;

  if (isLoading) return Promise.resolve();
  dispatch(getProductsStart());

  return api
    .get<ProductsDto>(API_URLS.PRODUCTS)
    .then(({ data }) => dispatch(getProductsSuccess(data)))
    .catch((data) => dispatch(getProductsError(data.message)));
};
