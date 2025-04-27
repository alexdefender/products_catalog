import { FC, JSX } from 'react';

import Text, { TextProps } from '../../common/text/Text';
import Asterisk from '../../common/Asterisk';

export type LabelProps = {
  label: string;
  required?: boolean;
} & Omit<TextProps, 'tid'>;

const Label: FC<LabelProps> = ({ label, required, ...props }): JSX.Element => (
  <div>
    <Text tid={label} variant="h6" {...props} />
    {required && <Asterisk />}
  </div>
);

export default Label;
