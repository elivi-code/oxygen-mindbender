var getFocusedBorderColor = function getFocusedBorderColor(_ref) {
  var theme = _ref.theme,
    hasError = _ref.hasError;
  if (hasError) {
    return theme.textareaBorderColorError;
  }
  return theme.textareaBorderColorFocus;
};
export default getFocusedBorderColor;