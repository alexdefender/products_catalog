import { layoutActions } from '@reducers/layoutReducer';

import * as productsActions from './productsActions';

const actionCreators = {
  ...layoutActions,
  ...productsActions,
};

export default actionCreators;
