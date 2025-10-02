var getColor = function getColor(_ref) {
  var theme = _ref.theme,
    readOnly = _ref.readOnly,
    isDisabled = _ref.isDisabled;
  if (isDisabled) {
    return theme.textareaColorDisabled;
  }
  if (readOnly) {
    return theme.textareaColorReadOnly;
  }
  return theme.textareaColor;
};
export default getColor;