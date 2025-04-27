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
      select: ({ theme }) => ({
        padding: theme.spacing(1, 1.5),
      }),
    },
  },
};

export default SelectCustomization;
