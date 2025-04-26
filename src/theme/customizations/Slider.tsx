import { Theme, Components } from '@mui/material/styles';

const SliderCustomization: Components<Theme> = {
  MuiSlider: {
    styleOverrides: {
      markLabel: {
        '&[data-index="0"]': {
          transform: 'translateX(0%)',
        },
        '&[data-index="1"]': {
          transform: 'translateX(-100%)',
        },
      },
    },
  },
};

export default SliderCustomization;
