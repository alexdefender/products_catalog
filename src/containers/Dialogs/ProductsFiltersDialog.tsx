import React, { FC, Fragment, JSX } from 'react';
import DialogContent from '@mui/material/DialogContent';

import { DialogTitle } from '@components';
import CategoriesFilter from '../Products/CategoriesFilter';

export type ProductsFiltersDialogProps = {
  onClose: VoidFunction;
};

const ProductsFiltersDialog: FC<ProductsFiltersDialogProps> = ({ onClose }): JSX.Element => (
  <Fragment>
    <DialogTitle title="FILTER_BY" onClose={onClose} />
    <DialogContent>
      <CategoriesFilter />
    </DialogContent>
  </Fragment>
);

export default ProductsFiltersDialog;
