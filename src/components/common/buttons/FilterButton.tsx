import { FC, JSX } from 'react';
import ButtonBase, { ButtonBaseProps } from '@mui/material/ButtonBase';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const FilterButton: FC<ButtonBaseProps> = (props): JSX.Element => (
  <ButtonBase {...props}>
    <FilterAltIcon fontSize="large" />
  </ButtonBase>
);

export default FilterButton;
