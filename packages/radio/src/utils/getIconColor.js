const getIconColor = ({
  theme,
  isChecked,
  isDisabled,
  isFocused,
  isHovered,
}) => {
  switch (true) {
    case isDisabled: {
      return theme.iconDisabledColor;
    }
    case isFocused: {
      return theme.iconFocusColor;
    }
    case isHovered: {
      return theme.iconHoverColor;
    }
    case isChecked: {
      return theme.iconSelectedColor;
    }
    default: {
      return theme.iconUnselectedColor;
    }
  }
};

export default getIconColor;
