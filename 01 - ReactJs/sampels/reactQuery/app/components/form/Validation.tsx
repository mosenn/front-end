export type Validate = {
  name?: string;
  email?: string;
  phone?: string;
  empty?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^(09[0-9]{9}|٠٩[٠١٢٣٤٥٦٧٨٩]{9}|۰۹[۰۱۲۳۴۵۶۷۸۹]{9})$/i;

export const Validation = (values: Validate) => {
  const { name, phone, email } = values;
  const errors: Validate = {};

  if (!name || name.length <= 3) {
    errors.name = "name must be at least 3 characters long";
  }

  if (!email || !emailRegex.test(email)) {
    errors.email = "email is not valid";
  }

  if (!phone || !phoneRegex.test(phone)) {
    errors.phone = "phone number is not valid";
  }

  if (!(name || email || phone)) {
    errors.empty = "fields can't be empty";
  } else {
    delete errors.empty;
  }

  return errors;
};
