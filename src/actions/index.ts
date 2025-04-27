import { layoutActions } from '@reducers/layoutReducer';
import { dialogsActions } from '@reducers/dialogsReducer';
import { basketActions } from '@reducers/basketReducer';

import * as productsActions from './productsActions';
import * as productActions from './productActions';

const actionCreators = {
  ...layoutActions,
  ...basketActions,
  ...dialogsActions,
  ...productsActions,
  ...productActions,
};

export default actionCreators;
