import { FC, JSX } from 'react';
import MuiDialogTitle from '@mui/material/DialogTitle';

import Text from '../text/Text';
import IconButton from '../buttons/IconButton';

type DialogTitleProps = {
  title?: string;
  color?: string;
  tValues?: object;
  onClose?: VoidFunction;
};

const DialogTitle: FC<DialogTitleProps> = ({ title, tValues = {}, color, onClose }): JSX.Element => (
  <MuiDialogTitle>
    {title && (
      <Text component="h2" variant="h5" tid={title} values={tValues} fontWeight={600} align="center" color={color} />
    )}
    {onClose && <IconButton icon="close" onClick={onClose} sx={{ position: 'absolute', top: 4, right: 4 }} />}
  </MuiDialogTitle>
);

export default DialogTitle;
