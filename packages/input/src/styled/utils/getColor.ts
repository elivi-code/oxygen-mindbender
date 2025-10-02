import { InputFieldProps } from '../InputFieldProps';

const getColor = ({
  theme,
  fixed,
  isDisabled,
  isReadOnly,
}: InputFieldProps) => {
  if (fixed) {
    return theme.colorFixed;
  }

  if (isReadOnly) {
    return theme.colorReadOnly;
  }

  if (isDisabled) {
    return theme.colorDisabled;
  }

  return theme.color;
};

export default getColor;
