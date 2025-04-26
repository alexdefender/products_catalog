import { Theme, Components } from '@mui/material/styles';

const ButtonCustomization: Components<Theme> = {
  MuiButton: {
    defaultProps: {
      variant: 'contained',
    },
  },
};

export default ButtonCustomization;
