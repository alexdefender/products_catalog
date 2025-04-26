import { FC, JSX } from 'react';
import DialogTitle from '@mui/material/DialogTitle';

import Text from '../text/Text';
import IconButton from '../buttons/IconButton';

type DialogTitleComponentProps = {
  title?: string;
  color?: string;
  tValues?: object;
  onClose?: () => void;
};

const DialogTitleComponent: FC<DialogTitleComponentProps> = ({ title, tValues = {}, color, onClose }): JSX.Element => (
  <DialogTitle>
    {title && (
      <Text component="h2" variant="h5" tid={title} values={tValues} fontWeight={600} align="center" color={color} />
    )}
    {onClose && <IconButton icon="close" onClick={onClose} sx={{ position: 'absolute', top: 12, right: 12 }} />}
  </DialogTitle>
);

export default DialogTitleComponent;
