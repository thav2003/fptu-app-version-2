export const validate = values => {
  const errors = {};
  if (!values.content) {
    errors.content = true;
  }
  if (values.content && values.content.length < 10) {
    errors.content = true;
  }

  return errors;
};
export const warn = values => {
  const warnings = {};

  return warnings;
};
