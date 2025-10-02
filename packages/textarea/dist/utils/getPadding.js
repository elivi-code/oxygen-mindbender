var getPadding = function getPadding(_ref) {
  var theme = _ref.theme,
    isDisabled = _ref.isDisabled,
    readOnly = _ref.readOnly;
  if (isDisabled) {
    return theme.textareaPadding;
  }
  if (readOnly) {
    return theme.textareaPaddingReadOnly;
  }
  return theme.textareaPadding;
};
export default getPadding;