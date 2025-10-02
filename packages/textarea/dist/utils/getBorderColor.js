var getBorderColor = function getBorderColor(_ref) {
  var theme = _ref.theme,
    hasError = _ref.hasError,
    isDisabled = _ref.isDisabled,
    readOnly = _ref.readOnly;
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