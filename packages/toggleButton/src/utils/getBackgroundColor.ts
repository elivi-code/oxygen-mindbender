import { InternalPropsWithTheme } from '../styled/styledProps';

const getBackgroundColor = ({
  theme,
  isChecked,
  isDisabled,
  isIndeterminate,
}: Pick<
  InternalPropsWithTheme,
  'theme' | 'isChecked' | 'isDisabled' | 'isIndeterminate'
>) => {
  switch (true) {
    case isDisabled && theme.iconSet === 'novo': {
      return theme?.backgroundColorDisabled;
    }
    case isChecked: {
      return theme?.backgroundColorSelected;
    }
    case isIndeterminate:
    default: {
      return theme?.backgroundColor;
    }
  }
};

export default getBackgroundColor;
