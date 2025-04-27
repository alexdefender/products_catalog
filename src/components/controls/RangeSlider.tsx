import { FC, JSX, useState } from 'react';
import FormControl from '@mui/material/FormControl';
import Slider, { SliderProps } from '@mui/material/Slider';

import Label from './common/Label';

export type RangeSliderProps = {
  label: string;
  required?: boolean;
} & SliderProps;

const RangeSlider: FC<RangeSliderProps> = ({ label = '', onChange, required, ...props }): JSX.Element => {
  const [value, setValue] = useState(props.value);

  const handleChange = (e: Event, newValue: number | number[], activeThumb: number) => {
    setValue(newValue);
    onChange?.(e, newValue, activeThumb);
  };

  return (
    <FormControl>
      <Label label={label} required={required} />
      <Slider {...props} value={value} onChange={handleChange} />
    </FormControl>
  );
};

export default RangeSlider;
