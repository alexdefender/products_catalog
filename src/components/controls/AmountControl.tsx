import { FC, JSX, MouseEvent } from 'react';
import FormControl from '@mui/material/FormControl';

import TextField from './TextField';
import IconButton from '../common/buttons/IconButton';

export type AmountControlProps = {
  value: number;
  onChange: (newValue: number) => void;
};

const AmountControl: FC<AmountControlProps> = ({ value, onChange }): JSX.Element => {
  const handleChange = (action: 'remove' | 'add') => (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    onChange(action === 'remove' ? value - 1 : value + 1);
  };

  return (
    <FormControl sx={{ flexDirection: 'row', gap: 1 }}>
      <IconButton icon="remove" onClick={handleChange('remove')} disabled={value <= 1} />
      <TextField value={value} sx={{ width: 50, '& input': { textAlign: 'center' } }} />
      <IconButton icon="add" onClick={handleChange('add')} />
    </FormControl>
  );
};

export default AmountControl;
