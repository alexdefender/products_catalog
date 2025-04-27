import { Theme, Components } from '@mui/material/styles';

const SelectCustomization: Components<Theme> = {
  MuiSelect: {
    defaultProps: {
      label: null,
    },
    styleOverrides: {
      root: {
        minWidth: 200,
      },
    },
  },
};

export default SelectCustomization;
