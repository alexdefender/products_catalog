import { FC, JSX } from 'react';
import { useTheme } from '@mui/material/styles';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const ProductsListLoader: FC = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Stack gap={2} flexWrap="wrap" justifyContent="center">
      {Array(3)
        .fill(0)
        .map((_, i) => (
          <Skeleton key={i} height={300} width={250} sx={{ borderRadius: theme.spacing(1) }} />
        ))}
    </Stack>
  );
};

export default ProductsListLoader;
