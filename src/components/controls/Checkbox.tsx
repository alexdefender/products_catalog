import { FC, JSX } from 'react';
import { useTranslation } from 'react-i18next';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export type CheckboxControlProps = {
  checked?: boolean;
  onChange?: (value: boolean) => void;
  label?: string;
  lValues?: object;
  name?: string;
};

const CheckboxControl: FC<CheckboxControlProps> = ({
  checked = false,
  onChange,
  label = '',
  name = '',
}): JSX.Element => {
  const { t } = useTranslation();

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={(e, value) => {
            e.stopPropagation();
            onChange?.(value);
          }}
          name={name}
        />
      }
      label={t(label) || ''}
    />
  );
};
export default CheckboxControl;
