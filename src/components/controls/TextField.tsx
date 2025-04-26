import { FC, JSX } from 'react';
import { useTranslation } from 'react-i18next';
import MuiTextField, { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';

export type TextFieldProps = {
  label?: string;
  lValues?: object;
  error?: string;
} & Omit<MuiTextFieldProps, 'error'>;

const TextField: FC<TextFieldProps> = ({ label = '', lValues, error, ...props }): JSX.Element => {
  const { t } = useTranslation();

  return (
    <MuiTextField
      {...props}
      label={t(label, { replace: lValues }) || ''}
      error={!!error}
      helperText={error}
      color={!!error ? 'error' : 'primary'}
    />
  );
};

export default TextField;
