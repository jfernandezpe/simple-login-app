export const getFormFields = node =>
  Array.from(node.querySelectorAll('.form-field'));

export const validateForm = formFields =>
  formFields.every(field => field.reportValidity());
