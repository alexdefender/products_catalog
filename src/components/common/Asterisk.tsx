import { FC, JSX } from 'react';
import { styled } from '@mui/material/styles';

const Span = styled('span')(({ theme }) => ({
  marginLeft: theme.spacing(0.5),
  color: theme.palette.primary.main,
  fontSize: theme.typography.pxToRem(16),
  fontWeight: 600,
  verticalAlign: 'top',
}));

const Asterisk: FC = (): JSX.Element => <Span>*</Span>;

export default Asterisk;
