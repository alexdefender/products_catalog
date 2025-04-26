import { Theme, Components } from '@mui/material/styles';

const ButtonBaseCustomization: Components<Theme> = {
  MuiButtonBase: {
    defaultProps: {
      disableTouchRipple: true,
      disableRipple: true,
    },
  },
};

export default ButtonBaseCustomization;
