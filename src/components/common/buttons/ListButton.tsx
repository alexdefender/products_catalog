import { FC, JSX } from 'react';
import ButtonBase, { ButtonBaseProps } from '@mui/material/ButtonBase';
import ListIcon from '@mui/icons-material/FormatListBulleted';

const ListButton: FC<ButtonBaseProps> = (props): JSX.Element => (
  <ButtonBase {...props}>
    <ListIcon fontSize="large" />
  </ButtonBase>
);

export default ListButton;
