import { FC, JSX } from 'react';
import ButtonBase, { ButtonBaseProps } from '@mui/material/ButtonBase';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

const GridButton: FC<ButtonBaseProps> = (props): JSX.Element => (
  <ButtonBase {...props}>
    <ViewModuleIcon fontSize="large" />
  </ButtonBase>
);

export default GridButton;
