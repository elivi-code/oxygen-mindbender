const getBackgroundColor = ({ theme, isDisabled, readOnly }) => {
  if (isDisabled) {
    return theme.textareaBackgroundColorDisabled;
  }

  if (readOnly) {
    return theme.textareaBackgroundColorReadOnly;
  }

  return theme.textareaBackgroundColor;
};

export default getBackgroundColor;
