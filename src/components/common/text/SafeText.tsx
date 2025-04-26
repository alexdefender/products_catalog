import { FC, JSX, memo } from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';

export type SafeTextProps = {
  content: string | number;
} & TypographyProps;

const SafeText: FC<SafeTextProps> = ({ content, ...props }): JSX.Element => (
  <Typography dangerouslySetInnerHTML={{ __html: `${content}` }} {...props} />
);

export default memo(SafeText);
