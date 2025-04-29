import { Theme, Components } from '@mui/material/styles';

const ToolbarCustomization: Components<Theme> = {
  MuiToolbar: {
    styleOverrides: {
      root: ({ theme }) => ({
        gap: theme.spacing(2),
        width: '100%',
        maxWidth: theme.breakpoints.values.lg,
        marginRight: 'auto',
        marginLeft: 'auto',
        [theme.breakpoints.up('md')]: {
          minHeight: 68,
        },
      }),
    },
    defaultProps: {
      variant: 'dense',
    },
  },
};

export default ToolbarCustomization;
