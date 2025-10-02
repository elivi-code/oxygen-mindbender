import { CheckboxIconWrapperProps } from '../styled/CheckboxIconWrapperProps';
import { CheckboxTheme } from '../types';

type Props = Partial<CheckboxIconWrapperProps> & {
  theme: CheckboxTheme;
};

export const getIconColor = ({
  theme,
  isChecked,
  isDisabled,
  isFocused,
  isHovered,
  isIndeterminate,
}: Props) => {
  switch (true) {
    case isDisabled: {
      return theme.disabledColor;
    }
    case isHovered: {
      return theme.checkboxIconColorHover;
    }
    case isChecked:
    case isIndeterminate: {
      return theme.checkedBackgroundColor;
    }
    case isFocused: {
      return theme.backgroundColor || theme.accentColor;
    }
    default: {
      return theme.backgroundColor || theme.accentColor;
    }
  }
};

export default getIconColor;
