const getBorderColor = ({ theme, hasError, isDisabled, readOnly }) => {
  if (isDisabled) {
    return theme.textareaBorderColorDisabled;
  }

  if (readOnly) {
    return theme.textareaBorderColorReadOnly;
  }

  if (hasError) {
    return theme.textareaBorderColorError;
  }

  return theme.textareaBorderColor;
};

export default getBorderColor;
