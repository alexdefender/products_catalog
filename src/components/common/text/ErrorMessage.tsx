import { FC, JSX } from 'react';
import { useTheme } from '@mui/material/styles';

import Text, { TextProps } from './Text';

export type ErrorMessageProps = {
  error?: string;
} & Omit<TextProps, 'tid'>;

const ErrorMessage: FC<ErrorMessageProps> = ({ error, ...props }): JSX.Element => {
  const theme = useTheme();

  return <Text {...props} tid={error || 'ERROR_OCCURRED'} component="div" color={theme.palette.error.main} />;
};

export default ErrorMessage;
