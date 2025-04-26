import { Theme, Components } from '@mui/material/styles';

const SkeletonCustomization: Components<Theme> = {
  MuiSkeleton: {
    defaultProps: {
      variant: 'rounded',
    },
  },
};

export default SkeletonCustomization;
