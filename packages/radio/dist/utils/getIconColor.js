var getIconColor = function getIconColor(_ref) {
  var theme = _ref.theme,
    isChecked = _ref.isChecked,
    isDisabled = _ref.isDisabled,
    isFocused = _ref.isFocused,
    isHovered = _ref.isHovered;
  switch (true) {
    case isDisabled:
      {
        return theme.iconDisabledColor;
      }
    case isFocused:
      {
        return theme.iconFocusColor;
      }
    case isHovered:
      {
        return theme.iconHoverColor;
      }
    case isChecked:
      {
        return theme.iconSelectedColor;
      }
    default:
      {
        return theme.iconUnselectedColor;
      }
  }
};
export default getIconColor;