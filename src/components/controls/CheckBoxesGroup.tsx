import { FC, JSX } from 'react';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';

import { Value } from '@models';
import Checkbox from './Checkbox';
import Label from './common/Label';

export const prepareValues = (old: Value[], newValue: Value, checked: boolean) => {
  if (checked === false) {
    return old.filter((v) => v.value !== newValue.value);
  }
  return [...old, newValue];
};

export type CheckBoxesGroupProps = {
  items: Value[];
  value: Value[];
  onChange: (value: Value[]) => void;
  label: string;
  required?: boolean;
};

const CheckBoxesGroup: FC<CheckBoxesGroupProps> = ({ items, value, onChange, label = '', required }): JSX.Element => {
  const handleChange = (newValue: Value, checked: boolean) => {
    const newValues = prepareValues(value, newValue, checked);
    onChange(newValues);
  };

  return (
    <FormControl>
      <Label label={label} required={required} />
      <FormGroup>
        {items.map((item) => (
          <Checkbox
            key={item.name}
            checked={value.some((v) => v.value === item.value)}
            name={`${item.value}`}
            onChange={(checked) => handleChange(item, checked)}
            label={item.name}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
};

export default CheckBoxesGroup;
