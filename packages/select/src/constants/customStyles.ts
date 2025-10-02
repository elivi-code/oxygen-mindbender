import { ellipsis } from 'polished';
import { GroupBase, StylesConfig, Theme } from 'react-select';
import { IconSet, Size } from '../components/SelectProps';

function getCustomStyles<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({
  backgroundColor,
  backgroundColorDisabled,
  backgroundColorHover,
  borderColorHover,
  borderColor,
  borderColorDisabled,
  borderColorError,
  borderColorFocus,
  borderWidth,
  controlFocusBoxShadow,
  dropdownIndicatorColor,
  dropdownIndicatorColorDisabled,
  fontFamily,
  headingBorderColor,
  headingBorderSize,
  headingBorderStyle,
  headingMargin,
  headingPadding,
  headingTextColor,
  headingTextFontSize,
  headingTextFontWeight,
  indicatorsContainerPaddingHorizontal,
  inputBoxSizeDefault,
  inputBoxSizeLarge,
  inputBoxSizeSmall,
  inputColor,
  menuBackgroundColor,
  menuBorderColor,
  menuBorderSize,
  menuBorderStyle,
  menuBoxShadowColor,
  menuBoxShadowSize,
  menuZindex,
  noOptionTextColor,
  noOptionTextFontSize,
  optionActiveBackgroundColor,
  optionHoveredBackgroundColor,
  optionPaddingHorizontal,
  optionPaddingVertical,
  optionSelectedBackground,
  optionTextColor,
  optionTextFontSize,
  optionTextFontWeightSelected,
  optionTextSelectedColor,
  placeholderTextColor,
  placeholderTextColorDisabled,
  selectedOptionTextColor,
  selectedOptionTextColorDisabled,
  valueContainerPadding,
}: Theme): StylesConfig<Option, IsMulti, Group> {
  const getOptionTextStyles = (isSelected: boolean) => {
    if (isSelected) {
      return {
        color: optionTextSelectedColor,
        fontWeight: optionTextFontWeightSelected,
      };
    }

    return {
      color: optionTextColor,
    };
  };
  const getBorderColor = ({
    isDisabled,
    isFocused,
    hasError,
  }: {
    isDisabled: boolean;
    isFocused: boolean;
    hasError: boolean;
  }) => {
    if (isDisabled) {
      return borderColorDisabled;
    }

    if (hasError) {
      return borderColorError;
    }

    if (isFocused) {
      return borderColorFocus;
    }

    return borderColor;
  };
  const getHoverBorderColor = ({
    isDisabled,
    isFocused,
    hasError,
  }: {
    isDisabled: boolean;
    isFocused: boolean;
    hasError: boolean;
  }) => {
    if (isDisabled) {
      return borderColorDisabled;
    }

    if (hasError) {
      return borderColorError;
    }

    if (isFocused) {
      return borderColorFocus;
    }

    return borderColorHover;
  };
  const getSize = (size: Size) => {
    if (size === 'large') {
      return inputBoxSizeLarge;
    }

    if (size === 'small') {
      return inputBoxSizeSmall;
    }

    return inputBoxSizeDefault;
  };
  /**
   * Since the Indicators are no longer vertically centered they need to be aligned with the Icon, the Value and the
   * Chips (for multi-select). This calculates an appropriate padding for each size and also takes into account Classic
   *  which requires some padding for "small"
   * */
  const getIndicatorsContainerPadding = (size: Size, iconSet: IconSet) => {
    if (size === 'large') {
      return '10px';
    }

    if (size === 'small') {
      if (iconSet === 'classic') {
        return '3px';
      }

      return '2px';
    }

    return '6px';
  };
  const getOptionBackground = ({
    isFocused,
    isSelected,
  }: {
    isFocused: boolean;
    isSelected: boolean;
  }) => {
    if (optionSelectedBackground === 'icon' && isSelected && !isFocused) {
      return 'transparent';
    }

    if (isFocused || isSelected) {
      return optionHoveredBackgroundColor;
    }

    return 'transparent';
  };

  return {
    control: (
      providedStyle,
      { isDisabled, isFocused, selectProps: { size, hasError, isReadOnly } },
    ) => ({
      ...providedStyle,
      ':hover': {
        background: backgroundColorHover,
        borderColor: getHoverBorderColor({
          isDisabled,
          isFocused,
          hasError,
        }),
      },
      borderWidth,
      borderColor: getBorderColor({
        isDisabled,
        isFocused,
        hasError,
      }),
      background:
        isDisabled || isReadOnly ? backgroundColorDisabled : backgroundColor,
      minHeight: getSize(size),
      boxShadow: isFocused ? controlFocusBoxShadow : undefined,
      cursor: !(isDisabled || isReadOnly) && !isFocused ? 'pointer' : undefined,
    }),
    dropdownIndicator: (
      providedStyle,
      { isDisabled, selectProps: { isReadOnly } },
    ) => ({
      ...providedStyle,
      color:
        isDisabled || isReadOnly
          ? dropdownIndicatorColorDisabled
          : dropdownIndicatorColor,
    }),
    groupHeading: providedStyle => ({
      ...providedStyle,
      ...ellipsis(),
      fontFamily,
      fontSize: headingTextFontSize,
      fontWeight: headingTextFontWeight,
      textAlign: 'initial',
      textTransform: undefined,
      color: headingTextColor,
      display: 'block',
      borderBottom: `${headingBorderSize} ${headingBorderStyle} ${headingBorderColor}`,
      padding: headingPadding,
      margin: headingMargin,
    }),
    indicatorSeparator: providedStyle => ({
      ...providedStyle,
      display: 'none',
    }),
    indicatorsContainer: (
      providedStyle,
      { selectProps: { size }, theme: { iconSet } },
    ) => ({
      ...providedStyle,
      alignSelf: 'center',
      padding: `${getIndicatorsContainerPadding(
        size,
        iconSet as IconSet,
      )} ${indicatorsContainerPaddingHorizontal}`,
    }),
    input: (providedStyle, { selectProps: { isReadOnly } }) => ({
      ...providedStyle,
      color: isReadOnly ? dropdownIndicatorColorDisabled : inputColor,
    }),
    menu: providedStyle => ({
      ...providedStyle,
      boxShadow: `${menuBoxShadowSize} ${menuBoxShadowColor}`,
      background: menuBackgroundColor,
      border: `${menuBorderSize} ${menuBorderStyle} ${menuBorderColor}`,
      marginTop: 0,
      zIndex: `${menuZindex}`,
    }),
    menuPortal: providedStyle => ({
      ...providedStyle,
      zIndex: `${menuZindex}`,
    }),
    noOptionsMessage: providedStyle => ({
      ...providedStyle,
      fontFamily,
      fontSize: noOptionTextFontSize,
      padding: `${optionPaddingVertical} ${optionPaddingHorizontal}`,
      color: noOptionTextColor,
    }),
    option: (providedStyle, state) => {
      const {
        isFocused,
        isSelected,
        isDisabled,
        selectProps: { isReadOnly },
      } = state;

      return {
        ...providedStyle,
        fontFamily,
        fontSize: optionTextFontSize,
        position: 'relative',
        padding: `${optionPaddingVertical} ${optionPaddingHorizontal}`,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'initial',
        background: getOptionBackground({
          isFocused,
          isSelected,
        }),
        ...getOptionTextStyles(isSelected),
        ':active': {
          background: optionActiveBackgroundColor,
        },
        opacity: isDisabled || isReadOnly ? 0.5 : undefined,
        cursor: isDisabled || isReadOnly ? 'default' : 'pointer',
      };
    },
    placeholder: (
      providedStyle,
      { isDisabled, selectProps: { isSearchable, isReadOnly } },
    ) => ({
      ...providedStyle,
      fontSize: optionTextFontSize,
      color:
        isDisabled || isReadOnly
          ? placeholderTextColorDisabled
          : placeholderTextColor,
      top: 0,
      transform: '0',
      position: isSearchable ? 'absolute' : 'relative',
      ...ellipsis(),
    }),
    singleValue: (
      providedStyle,
      { isDisabled, selectProps: { isSearchable, isReadOnly } },
    ) => ({
      ...providedStyle,
      color:
        isDisabled || isReadOnly
          ? selectedOptionTextColorDisabled
          : selectedOptionTextColor,
      top: 0,
      transform: '0',
      position: isSearchable ? 'absolute' : 'relative',
    }),
    valueContainer: providedStyle => ({
      ...providedStyle,
      ...ellipsis(),
      padding: valueContainerPadding,
      display: 'flex',
      flexWrap: 'nowrap',
    }),
  };
}

export default getCustomStyles;
