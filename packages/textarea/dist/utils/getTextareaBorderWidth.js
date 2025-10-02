var getTextareaBorderWidth = function getTextareaBorderWidth(_ref) {
  var theme = _ref.theme,
    readOnly = _ref.readOnly;
  if (readOnly) {
    return theme.borderWidthReadOnly;
  }
  return theme.borderWidth;
};
export default getTextareaBorderWidth;