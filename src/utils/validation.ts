import i18n from '@services/i18n';

export const REQUIRED_TEXT_TID = 'VALIDATION_REQUIRED';

export const getError = (tid: string, values = {}) => i18n.t(tid, values);

export const minLength =
  (min: number) =>
  (value: string = '') => {
    if (value.toString().length < min) {
      return getError('VALIDATION_MIN_LENGTH_STR', { min });
    }

    return '';
  };

const EMAIL_EXP =
  /^(([^<>()[\]\\.,;:\s@"']+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const isEmail = (val: string) => EMAIL_EXP.test(val);

export const emailValidation = (value: string) => {
  const val = (value || '').trim();

  if (isEmail(val)) {
    return '';
  }

  return getError('VALIDATION_EMAIL');
};

export const requiredValidation = (value: string) => {
  if (!value) {
    return getError(REQUIRED_TEXT_TID);
  }

  return '';
};

const PHONE_EXP = /\+\d{1,3}\(?\d{1,3}\)?( ?-?\d{2,3}){2,}/;
export const phoneNumber = (value: string) => {
  if (!value) {
    return null;
  }

  return PHONE_EXP.test(value) ? null : getError('VALIDATION_PHONE_NUMBER');
};

export const validator = (values: any = {}, config: any = {}) => {
  const errors: any = { hasError: false };

  Object.keys(config).forEach((field) => {
    let fieldError;
    config[field].some((rule: any) => {
      fieldError = rule((values || {})[field], values);

      return !!fieldError;
    });

    if (fieldError) {
      errors.hasError = true;
    }

    errors[field] = fieldError;
  });

  return errors;
};

const checkoutConfig = {
  name: [requiredValidation, minLength(3)],
  email: [requiredValidation, emailValidation],
  phone: [requiredValidation, phoneNumber],
};

export const validateCheckout = <T>(values: T): { hasError: boolean } & T => validator(values, checkoutConfig);
