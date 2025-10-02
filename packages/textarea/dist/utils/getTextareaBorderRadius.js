var getInputBorderRadius = function getInputBorderRadius(_ref) {
  var theme = _ref.theme,
    readOnly = _ref.readOnly;
  if (readOnly) {
    return theme.textareaBorderRadiusReadOnly;
  }
  return theme.textareaBorderRadius;
};
export default getInputBorderRadius;