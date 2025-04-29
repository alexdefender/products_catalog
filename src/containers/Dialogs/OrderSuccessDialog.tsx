import React, { FC, Fragment, JSX } from 'react';
import DialogActions from '@mui/material/DialogActions';

import { DialogTitle, Button } from '@components';
import { redirect } from '@utils/navigation';
import ROUTES from '@constants/routes';
import useActions from '@hooks/useActions';

const OrderSuccessDialog: FC = (): JSX.Element => {
  const { resetBasketState, closeDialog } = useActions();

  const handleClose = () => {
    redirect(ROUTES.PRODUCTS).then(() => {
      resetBasketState();
      closeDialog({ name: 'OrderSuccessDialog' });
    });
  };

  return (
    <Fragment>
      <DialogTitle title="ORDER_SUCCESS" onClose={handleClose} />
      <DialogActions>
        <Button text="OK" onClick={handleClose} />
      </DialogActions>
    </Fragment>
  );
};

export default OrderSuccessDialog;
