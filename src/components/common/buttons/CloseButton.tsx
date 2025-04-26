import { FC, JSX } from 'react';
import ButtonBase, { ButtonBaseProps } from '@mui/material/ButtonBase';
import Close from '@mui/icons-material/Close';

const CloseButton: FC<ButtonBaseProps> = (props): JSX.Element => (
  <ButtonBase {...props}>
    <Close />
  </ButtonBase>
);

export default CloseButton;
