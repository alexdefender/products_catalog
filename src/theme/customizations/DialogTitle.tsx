import { Theme, Components } from '@mui/material/styles';

const DialogTitleCustomization: Components<Theme> = {
  MuiDialogTitle: {
    defaultProps: {
      component: 'div',
    },
    styleOverrides: {
      root: ({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
        padding: theme.spacing(2, 4),
      }),
    },
  },
};

export default DialogTitleCustomization;
