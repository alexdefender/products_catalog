import { FC, JSX, MouseEvent, useState } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import useAppSelector from '@hooks/useAppSelector';
import useActions from '@hooks/useActions';
import { validateCheckout } from '@utils/validation';
import { Button, TextField, Text } from '@components';
import Basket from './Basket';

const initialFormState = {
  name: '',
  email: '',
  phone: '',
};

const Checkout: FC = (): JSX.Element => {
  const { items } = useAppSelector((state) => state.basket);
  const [formData, setFormData] = useState(initialFormState);
  const [showValidationErrors, setShowValidationErrors] = useState(false);
  // simulating sending data
  const [isLoading, setIsLoading] = useState(false);
  const { openDialog } = useActions();

  const onSubmit = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { hasError } = validateCheckout(formData);

    if (hasError) {
      setShowValidationErrors(true);
      return;
    }

    // simulating sending data
    setIsLoading(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        openDialog({ name: 'OrderSuccessDialog' });
        setIsLoading(false);

        resolve(null);
      }, 1000);
    });
  };

  const handleChange = (field: keyof typeof initialFormState, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validationErrors = showValidationErrors ? validateCheckout(formData) : undefined;

  return (
    <Stack flexDirection="column" alignItems="center" gap={2}>
      <Basket />
      <Text tid="RECIPIENT" component="h3" variant="h3" />
      <Box
        component="form"
        onSubmit={onSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          maxWidth: 400,
          gap: 2,
        }}
      >
        <TextField
          label="NAME"
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          error={validationErrors?.name}
          required
          fullWidth
        />
        <TextField
          label="EMAIL"
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          error={validationErrors?.email}
          placeholder="your@email.com"
          autoComplete="email"
          required
          fullWidth
        />
        <TextField
          label="PHONE_NUMBER"
          id="phone"
          type="text"
          name="phone"
          value={formData.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          error={validationErrors?.phone}
          required
          fullWidth
        />
        <Button
          type="submit"
          text="ORDER"
          fullWidth
          disabled={validationErrors?.hasError || isLoading || !items.length}
          loading={isLoading}
        />
      </Box>
    </Stack>
  );
};

export default Checkout;
