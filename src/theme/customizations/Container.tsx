import { Theme, Components } from '@mui/material/styles';

const ContainerCustomization: Components<Theme> = {
  MuiContainer: {
    styleOverrides: {
      root: ({ theme }) => ({
        minHeight: '100vh',
        padding: theme.spacing(10, 2, 2),
        maxWidth: theme.breakpoints.values.lg,
        margin: theme.spacing(0, 'auto'),
        [theme.breakpoints.up('md')]: {
          padding: theme.spacing(12, 3, 3),
        },
      }),
    },
  },
};

export default ContainerCustomization;
