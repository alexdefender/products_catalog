import { layoutActions } from '@reducers/layoutReducer';
import { dialogsActions } from '@reducers/dialogsReducer';

import * as productsActions from './productsActions';
import * as productActions from './productActions';

const actionCreators = {
  ...layoutActions,
  ...productsActions,
  ...productActions,
  ...dialogsActions,
};

export default actionCreators;
