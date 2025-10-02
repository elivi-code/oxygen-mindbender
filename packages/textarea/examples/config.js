export const argsConfig = {
  id: 'custom_id',
  name: 'custom_name',
  resize: 'none',
  placeholder: 'Placeholder name',
  autoComplete: 'off',
  autoFocus: true,
  value:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  rows: 4,
  minLength: 1,
  maxLength: 100,
  cols: 50,
  isDisabled: false,
  isReadOnly: false,
  hasError: false,
};
export const argTypesConfig = {
  resize: {
    control: {
      type: 'select',
    },
    options: [
      'auto',
      'vertical',
      'horizontal',
      'both',
      'none',
      'block',
      'inline',
    ],
  },
};
