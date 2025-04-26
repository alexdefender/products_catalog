import { FC, JSX } from 'react';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';

import Checkbox from './Checkbox';
import Text from '../common/text/Text';

type Item = {
  value: string; // unique
  name: string;
};

export const prepareValues = (old: Item[], newValue: Item, checked: boolean) => {
  if (checked === false) {
    return old.filter((v) => v.value !== newValue.value);
  }
  return [...old, newValue];
};

export type CheckBoxesGroupProps = {
  items: Item[];
  value: Item[];
  onChange: (value: Item[]) => void;
  label: string;
};

const CheckBoxesGroup: FC<CheckBoxesGroupProps> = ({ items, value, onChange, label = '' }): JSX.Element => {
  const handleChange = (newValue: Item, checked: boolean) => {
    const newValues = prepareValues(value, newValue, checked);
    onChange(newValues);
  };

  return (
    <FormControl>
      <Text tid={label} variant="h5" />
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
