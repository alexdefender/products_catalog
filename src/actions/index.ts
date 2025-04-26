import { layoutActions } from '@reducers/layoutReducer';

import * as productsActions from './productsActions';
import * as productActions from './productActions';

const actionCreators = {
  ...layoutActions,
  ...productsActions,
  ...productActions,
};

export default actionCreators;
