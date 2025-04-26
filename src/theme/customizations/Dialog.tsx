import { Theme, Components } from '@mui/material/styles';

const DialogCustomization: Components<Theme> = {
  MuiDialog: {
    defaultProps: {
      fullWidth: true,
      maxWidth: 'xs',
    },
    styleOverrides: {
      paper: ({ theme }) => ({
        width: `calc(100% - ${theme.spacing(2)})`,
        margin: theme.spacing(1),
        backgroundColor: theme.palette.background.default,
        borderRadius: theme.spacing(2),
      }),
      paperFullScreen: ({ theme }) => ({
        height: `calc(100% - ${theme.spacing(2)})`,
      }),
    },
  },
};

export default DialogCustomization;
