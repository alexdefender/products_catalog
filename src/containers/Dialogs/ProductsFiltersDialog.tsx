import React, { FC, Fragment, JSX } from 'react';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import { DialogTitle, Button } from '@components';
import CategoriesFilter from '../Products/CategoriesFilter';
import PricesFilter from '../Products/PricesFilter';

export type ProductsFiltersDialogProps = {
  onClose: VoidFunction;
};

const ProductsFiltersDialog: FC<ProductsFiltersDialogProps> = ({ onClose }): JSX.Element => (
  <Fragment>
    <DialogTitle title="FILTER_BY" onClose={onClose} />
    <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <CategoriesFilter />
      <PricesFilter />
    </DialogContent>
    <DialogActions>
      <Button text="OK" onClick={onClose} />
    </DialogActions>
  </Fragment>
);

export default ProductsFiltersDialog;
