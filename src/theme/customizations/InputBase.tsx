import { Theme, Components } from '@mui/material/styles';

const InputBaseCustomization: Components<Theme> = {
  MuiInputBase: {
    styleOverrides: {
      input: ({ theme }) => ({
        padding: `${theme.spacing(1, 1.5)} !important`,
      }),
    },
  },
};

export default InputBaseCustomization;
