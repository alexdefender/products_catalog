import { RootState, AppDispatch } from '@services/store';
import api from '@services/request';
import { productActions } from '@reducers/productReducer';
import { ProductDto } from '@models/api/product';
import { API_URLS } from '@constants/api';

const { getProductStart, getProductSuccess, getProductError, resetProductState } = productActions;

export { resetProductState };

export const getProduct = (id: string) => async (dispatch: AppDispatch, getState: () => RootState) => {
  const { isLoading } = getState().product;

  if (isLoading) return Promise.resolve();
  dispatch(getProductStart());
  const url = API_URLS.PRODUCTS_DETAILS(id);

  return api
    .get<ProductDto>(url)
    .then(({ data }) => dispatch(getProductSuccess(data)))
    .catch((data) => dispatch(getProductError(data.message)));
};
