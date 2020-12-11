export const getFormFields = node => {
  return Array.from(node.querySelectorAll('.form-field'));
};

export const validateForm = formFields => {
  return formFields.every(field => {
    return field.reportValidity();
  });
};
