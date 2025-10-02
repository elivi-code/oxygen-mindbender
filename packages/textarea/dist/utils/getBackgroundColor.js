var getBackgroundColor = function getBackgroundColor(_ref) {
  var theme = _ref.theme,
    isDisabled = _ref.isDisabled,
    readOnly = _ref.readOnly;
  if (isDisabled) {
    return theme.textareaBackgroundColorDisabled;
  }
  if (readOnly) {
    return theme.textareaBackgroundColorReadOnly;
  }
  return theme.textareaBackgroundColor;
};
export default getBackgroundColor;