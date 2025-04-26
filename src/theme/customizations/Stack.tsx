import { Theme, Components } from '@mui/material/styles';

const AppStackCustomization: Components<Theme> = {
  MuiStack: {
    styleOverrides: {
      root: {
        flexDirection: 'row',
      },
    },
  },
};

export default AppStackCustomization;
