import { FC, Fragment, JSX, ReactNode } from 'react';
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';

import Text, { TextProps } from '../text/Text';

export type ButtonProps = {
  text?: string;
  tValues?: object;
  TextProps?: Omit<TextProps, 'tid' | 'values'>;
  children?: ReactNode;
} & MuiButtonProps;

const Button: FC<ButtonProps> = ({ text, tValues = {}, TextProps = {}, children, ...props }): JSX.Element => (
  <MuiButton {...props}>
    <Fragment>
      {text && <Text {...TextProps} tid={text} values={tValues} />}
      {children}
    </Fragment>
  </MuiButton>
);

export default Button;
