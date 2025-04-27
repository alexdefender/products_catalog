import React, { FC, Fragment, JSX } from 'react';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import { DialogTitle, Button } from '@components';
import Basket from '../Basket';

export type BasketDialogProps = {
  onClose: VoidFunction;
};

const BasketDialog: FC<BasketDialogProps> = ({ onClose }): JSX.Element => (
  <Fragment>
    <DialogTitle title="BASKET" onClose={onClose} />
    <DialogContent>
      <Basket />
    </DialogContent>
    <DialogActions>
      <Button text="CONTINUE_SHOPPING" onClick={onClose} />
      <Button text="PLACE_AN_ORDER" onClick={onClose} />
    </DialogActions>
  </Fragment>
);

export default BasketDialog;
