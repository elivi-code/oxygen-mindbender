const getPadding = ({ theme, isDisabled, readOnly }) => {
  if (isDisabled) {
    return theme.textareaPadding;
  }

  if (readOnly) {
    return theme.textareaPaddingReadOnly;
  }

  return theme.textareaPadding;
};

export default getPadding;
