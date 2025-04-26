import { FC, JSX, memo } from 'react';
import { useTranslation } from 'react-i18next';
import Typography, { TypographyProps } from '@mui/material/Typography';

export type TextProps = {
  tid: string;
  values?: Record<string, any>;
  noWrap?: boolean;
} & TypographyProps;

const Text: FC<TextProps> = ({ tid, values = {}, noWrap, ...props }): JSX.Element | string => {
  const { t } = useTranslation();

  if (noWrap) {
    return t(tid, { replace: values }) || '';
  }

  return <Typography {...props}>{t(tid, { replace: values })}</Typography>;
};

export default memo(Text);
