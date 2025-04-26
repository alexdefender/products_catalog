import { Theme, Components } from '@mui/material/styles';

const TypographyCustomization: Components<Theme> = {
  MuiTypography: {
    defaultProps: {
      component: 'span',
    },
  },
};

export default TypographyCustomization;
