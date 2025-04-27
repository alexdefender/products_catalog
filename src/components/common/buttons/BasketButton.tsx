import { FC, JSX } from 'react';
import { useTheme } from '@mui/material/styles';

import IconButton from './IconButton';

type ButtonProps = {
  onClick: VoidFunction;
};

const BasketButton: FC<ButtonProps> = ({ onClick }): JSX.Element => {
  const theme = useTheme();

  return (
    <IconButton
      icon="basket"
      size="large"
      color={theme.palette.success.main}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    />
  );
};

export default BasketButton;
