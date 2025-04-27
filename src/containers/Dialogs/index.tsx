import { FC, Fragment, JSX } from 'react';
import Dialog from '@mui/material/Dialog';
import { Breakpoint } from '@mui/system';

import { DIALOGS } from '@constants';
import ProductsFiltersDialog, { ProductsFiltersDialogProps } from './ProductsFiltersDialog';
import BasketDialog, { BasketDialogProps } from './BasketDialog';
import useAppSelector from '@hooks/useAppSelector';
import useActions from '@hooks/useActions';

const DIALOG_COMPONENTS = {
  [DIALOGS.PRODUCTS_FILTERS]: ProductsFiltersDialog,
  [DIALOGS.BASKET]: BasketDialog,
};

export type DialogDataMap = {
  [DIALOGS.PRODUCTS_FILTERS]: Omit<ProductsFiltersDialogProps, 'onClose'>;
  [DIALOGS.BASKET]: Omit<BasketDialogProps, 'onClose'>;
};

const MEDIA_SIZE: { [keys: string]: Breakpoint } = {
  [DIALOGS.BASKET]: 'sm',

};

const FULL_SCREEN: { [keys: string]: boolean } = {};

const DISABLE_CLOSE: { [keys: string]: boolean } = {};

const Dialogs: FC = (): JSX.Element => {
  const dialogs = useAppSelector((state) => state.dialogs);
  const { closeDialog } = useActions();

  return (
    <Fragment>
      {Object.values(DIALOGS).map((dialogName) => {
        const DialogComponent = DIALOG_COMPONENTS[dialogName];
        const { isOpen, data = {} as any } = dialogs[dialogName] || {};

        const onClose = () => {
          if (DISABLE_CLOSE[dialogName]) {
            return;
          }

          closeDialog({ name: dialogName });
        };

        if (isOpen) {
          return (
            <Dialog
              id={dialogName}
              key={dialogName}
              open
              onClose={() => onClose()}
              maxWidth={MEDIA_SIZE[dialogName]}
              fullScreen={FULL_SCREEN[dialogName]}
              disablePortal
              disableEnforceFocus
            >
              <DialogComponent {...data} onClose={onClose} />
            </Dialog>
          );
        }

        return null;
      })}
    </Fragment>
  );
};

export default Dialogs;
