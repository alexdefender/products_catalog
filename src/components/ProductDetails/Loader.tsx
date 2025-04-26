import { FC, JSX } from 'react';
import { useTheme } from '@mui/material/styles';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const ProductDetailsLoader: FC = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Stack gap={1} flexDirection="column" maxWidth={800} mx="auto">
      <Skeleton height={40} width={300} />
      <Skeleton height={24} width={140} />
      <Skeleton height={36} width={100} />
      <Skeleton height={500} width={500} sx={{ margin: theme.spacing(0, 'auto') }} />
      <Skeleton height={100} width={800} />
    </Stack>
  );
};

export default ProductDetailsLoader;
