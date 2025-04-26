import { FC, JSX, useState } from 'react';
import FormControl from '@mui/material/FormControl';
import Slider, { SliderProps } from '@mui/material/Slider';

import Text from '../common/text/Text';

export type RangeSliderProps = {
  label: string;
} & SliderProps;

const RangeSlider: FC<RangeSliderProps> = ({ label = '', onChange, ...props }): JSX.Element => {
  const [value, setValue] = useState(props.value);

  const handleChange = (e: Event, newValue: number | number[], activeThumb: number) => {
    setValue(newValue);
    onChange?.(e, newValue, activeThumb);
  };

  return (
    <FormControl>
      <Text tid={label} variant="h6" />
      <Slider {...props} value={value} onChange={handleChange} />
    </FormControl>
  );
};

export default RangeSlider;
