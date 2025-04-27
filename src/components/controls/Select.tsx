import { FC, JSX, memo } from 'react';
import { useTranslation } from 'react-i18next';
import Flex from '@mui/material/Stack';
import SelectComponent, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { useTheme } from '@mui/material/styles';

import { Value } from '@models';
import SafeText from '../common/text/SafeText';
import Text from '../common/text/Text';
import Label from './common/Label';
import ErrorMessage from '../common/text/ErrorMessage';

const Item = ({ name }: { name: string }): JSX.Element => <SafeText content={name} fontWeight={600} />;

const Placeholder = ({ placeholder }: { placeholder: string }): JSX.Element => {
  const theme = useTheme();

  return <Text tid={placeholder} color={theme.palette.grey[500]} />;
};

export type SelectProps = {
  value: Value;
  items: Value[];
  onChange?: (value: Value) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  required?: boolean;
};

const Select: FC<SelectProps> = ({
  value = { value: '', name: '' },
  items = [],
  label,
  error,
  placeholder = '',
  required,
  onChange,
}): JSX.Element => {
  const { t } = useTranslation();

  const handleChange = (e: SelectChangeEvent) => {
    const newValue = items.find((item) => item.value === e.target.value);

    if (onChange && newValue) {
      onChange(newValue);
    }
  };

  return (
    <FormControl sx={{ minWidth: 200 }}>
      {label && <Label label={label} required={required} />}
      <SelectComponent
        displayEmpty
        value={value?.value}
        renderValue={(selected) => (
          <Flex gap={1} alignItems="center">
            {selected.length === 0 && placeholder ? (
              <Placeholder placeholder={placeholder} />
            ) : (
              <Item name={t(value.name)} />
            )}
          </Flex>
        )}
        onChange={handleChange}
        IconComponent={KeyboardArrowDownOutlinedIcon}
      >
        {items.map(({ value: itemValue, name }) =>
          itemValue !== value.value ? (
            <MenuItem key={name} value={itemValue}>
              <Item name={t(name)} />
            </MenuItem>
          ) : (
            <li key={name} value={itemValue} />
          ),
        )}
      </SelectComponent>
      {error && <ErrorMessage error={error} />}
    </FormControl>
  );
};

export default memo(Select);
