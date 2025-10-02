const getColor = ({ theme, readOnly, isDisabled }) => {
  if (isDisabled) {
    return theme.textareaColorDisabled;
  }

  if (readOnly) {
    return theme.textareaColorReadOnly;
  }

  return theme.textareaColor;
};

export default getColor;
