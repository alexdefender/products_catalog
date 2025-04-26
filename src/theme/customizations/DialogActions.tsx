import { Theme, Components } from '@mui/material/styles';

const DialogActionsCustomization: Components<Theme> = {
  MuiDialogActions: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: theme.spacing(1.5, 3, 3),
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
          gap: theme.spacing(1),
          flexWrap: 'wrap',
          '&>:not(:first-of-type)': {
            margin: 0,
          },
        },
      }),
    },
  },
};

export default DialogActionsCustomization;
