import React, { FC, JSX } from 'react';
import Stack from '@mui/material/Stack';

import SafeText from './text/SafeText';

const NotFound: FC = (): JSX.Element => (
  <Stack justifyContent="center" alignItems="center" margin={4} width="100%">
    <SafeText content="404" variant="h2" component="p" fontWeight={600} />
  </Stack>
);

export default NotFound;
