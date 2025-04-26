import { Theme, Components } from '@mui/material/styles';

const ToolbarCustomization: Components<Theme> = {
  MuiToolbar: {
    styleOverrides: {
      root: ({ theme }) => ({
        gap: theme.spacing(1),
        width: '100%',
        maxWidth: theme.breakpoints.values.lg,
        marginRight: 'auto',
        marginLeft: 'auto',
      }),
    },
    defaultProps: {
      variant: 'dense',
    },
  },
};

export default ToolbarCustomization;
