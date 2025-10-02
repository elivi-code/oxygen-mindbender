import customStyles from './customStyles';

const selectTheme = {
  backgroundColor: 'backgroundColor',
  backgroundColorDisabled: 'backgroundColorDisabled',
  backgroundColorHover: 'backgroundColorHover',
  borderColorHover: 'borderColorHover',
  borderColor: 'borderColor',
  borderColorDisabled: 'borderColorDisabled',
  borderColorError: 'borderColorError',
  borderColorFocus: 'borderColorFocus',
  borderWidth: 'borderWidth',
  controlFocusBoxShadow: 'controlFocusBoxShadow',
  dropdownIndicatorColor: 'dropdownIndicatorColor',
  dropdownIndicatorColorDisabled: 'dropdownIndicatorColorDisabled',
  fontFamily: 'fontFamily',
  headingBorderColor: 'headingBorderColor',
  headingBorderSize: 'headingBorderSize',
  headingBorderStyle: 'headingBorderStyle',
  headingMargin: 'headingMargin',
  headingPadding: 'headingPadding',
  headingTextColor: 'headingTextColor',
  headingTextFontSize: 'headingTextFontSize',
  headingTextFontWeight: 'headingTextFontWeight',
  indicatorsContainerPaddingHorizontal: 'indicatorsContainerPaddingHorizontal',
  inputBoxSizeDefault: 'inputBoxSizeDefault',
  inputBoxSizeLarge: 'inputBoxSizeLarge',
  inputBoxSizeSmall: 'inputBoxSizeSmall',
  inputColor: 'inputColor',
  menuBackgroundColor: 'menuBackgroundColor',
  menuBorderColor: 'menuBorderColor',
  menuBorderSize: 'menuBorderSize',
  menuBorderStyle: 'menuBorderStyle',
  menuBoxShadowColor: 'menuBoxShadowColor',
  menuBoxShadowSize: 'menuBoxShadowSize',
  menuZindex: 'menuZindex',
  noOptionTextColor: 'noOptionTextColor',
  noOptionTextFontSize: 'noOptionTextFontSize',
  optionActiveBackgroundColor: 'optionActiveBackgroundColor',
  optionHoveredBackgroundColor: 'optionHoveredBackgroundColor',
  optionPaddingHorizontal: 'optionPaddingHorizontal',
  optionPaddingVertical: 'optionPaddingVertical',
  optionSelectedBackground: 'optionSelectedBackground',
  optionTextColor: 'optionTextColor',
  optionTextFontSize: 'optionTextFontSize',
  optionTextFontWeightSelected: 'optionTextFontWeightSelected',
  optionTextSelectedColor: 'optionTextSelectedColor',
  placeholderTextColor: 'placeholderTextColor',
  placeholderTextColorDisabled: 'placeholderTextColorDisabled',
  selectedOptionTextColor: 'selectedOptionTextColor',
  selectedOptionTextColorDisabled: 'selectedOptionTextColorDisabled',
  valueContainerPadding: 'valueContainerPadding',
};

describe('customStyles', () => {
  describe('snapshots', () => {
    test.each`
      component
      ${'control'}
      ${'dropdownIndicator'}
      ${'groupHeading'}
      ${'indicatorSeparator'}
      ${'indicatorsContainer'}
      ${'input'}
      ${'menu'}
      ${'menuPortal'}
      ${'noOptionsMessage'}
      ${'option'}
      ${'placeholder'}
      ${'valueContainer'}
      ${'singleValue'}
    `('$component should match snapshot', ({ component }) => {
      const controlStyles = customStyles(selectTheme)[component](
        {
          customProp: 'customValue',
        },
        {
          selectProps: {},
          theme: {},
        },
      );

      expect(controlStyles).toMatchSnapshot();
    });
  });
  describe('control', () => {
    test.each`
      isDisabled | isFocused | hasError | size         | expectedBackground           | expectedMinHeight        | expectedBoxShadow          | expectedBorderColor      | expectedHoverBorderColor | expectedCursor
      ${false}   | ${false}  | ${false} | ${'small'}   | ${'backgroundColor'}         | ${'inputBoxSizeSmall'}   | ${undefined}               | ${'borderColor'}         | ${'borderColorHover'}    | ${'pointer'}
      ${true}    | ${true}   | ${false} | ${'large'}   | ${'backgroundColorDisabled'} | ${'inputBoxSizeLarge'}   | ${'controlFocusBoxShadow'} | ${'borderColorDisabled'} | ${'borderColorDisabled'} | ${undefined}
      ${false}   | ${true}   | ${true}  | ${undefined} | ${'backgroundColor'}         | ${'inputBoxSizeDefault'} | ${'controlFocusBoxShadow'} | ${'borderColorError'}    | ${'borderColorError'}    | ${undefined}
      ${false}   | ${true}   | ${false} | ${undefined} | ${'backgroundColor'}         | ${'inputBoxSizeDefault'} | ${'controlFocusBoxShadow'} | ${'borderColorFocus'}    | ${'borderColorFocus'}    | ${undefined}
    `(
      `for {
        isDisabled:$isDisabled,
        isFocused:$isFocused, 
        hasError:$hasError, size:$size
      } expect background=$expectedBackground & boxShadow=$expectedBoxShadow & cursor=$expectedCursor & minHeight=$expectedMinHeight & borderColor=$expectedBorderColor & hoverBorderColor=$expectedHoverBorderColor`,
      ({
        isDisabled,
        isFocused,
        size,
        hasError,
        expectedBackground,
        expectedMinHeight,
        expectedBoxShadow,
        expectedCursor,
        expectedBorderColor,
        expectedHoverBorderColor,
      }) => {
        const providedStyle = {};
        const props = {
          selectProps: { size, hasError },
          theme: {},
          isDisabled,
          isFocused,
        };
        const controlStyles = customStyles(selectTheme).control(
          providedStyle,
          props,
        );

        expect(controlStyles.background).toBe(expectedBackground);
        expect(controlStyles.boxShadow).toBe(expectedBoxShadow);
        expect(controlStyles.cursor).toBe(expectedCursor);
        expect(controlStyles.minHeight).toBe(expectedMinHeight);
        expect(controlStyles.borderColor).toBe(expectedBorderColor);
        expect(controlStyles[':hover'].borderColor).toBe(
          expectedHoverBorderColor,
        );
      },
    );
  });
  describe('dropdownIndicator', () => {
    test.each`
      isDisabled | expectedColor
      ${false}   | ${'dropdownIndicatorColor'}
      ${true}    | ${'dropdownIndicatorColorDisabled'}
    `(
      'for { isDisabled:$isDisabled } expect color=$expectedColor',
      ({ isDisabled, expectedColor }) => {
        const providedStyle = {};
        const props = {
          selectProps: {},
          isDisabled,
        };
        const controlStyles = customStyles(selectTheme).dropdownIndicator(
          providedStyle,
          props,
        );

        expect(controlStyles.color).toBe(expectedColor);
      },
    );
  });
  describe('indicatorsContainer', () => {
    test.each`
      size         | iconSet      | expectedPadding
      ${undefined} | ${'novo'}    | ${'6px indicatorsContainerPaddingHorizontal'}
      ${'large'}   | ${'novo'}    | ${'10px indicatorsContainerPaddingHorizontal'}
      ${'small'}   | ${'novo'}    | ${'2px indicatorsContainerPaddingHorizontal'}
      ${'small'}   | ${'classic'} | ${'3px indicatorsContainerPaddingHorizontal'}
    `(
      'for { size:$size, iconSet:$iconSet } expect padding=$expectedPadding',
      ({ size, iconSet, expectedPadding }) => {
        const providedStyle = {};
        const props = {
          selectProps: { size },
          theme: { iconSet },
        };
        const controlStyles = customStyles(selectTheme).indicatorsContainer(
          providedStyle,
          props,
        );

        expect(controlStyles.padding).toBe(expectedPadding);
      },
    );
  });
  describe('option', () => {
    test.each`
      isFocused | isSelected | isDisabled | optionSelectedBackground      | expectedBackground                | expectedOpacity | expectedCursor
      ${false}  | ${false}   | ${false}   | ${'optionSelectedBackground'} | ${'transparent'}                  | ${undefined}    | ${'pointer'}
      ${false}  | ${false}   | ${true}    | ${'optionSelectedBackground'} | ${'transparent'}                  | ${0.5}          | ${'default'}
      ${true}   | ${false}   | ${false}   | ${'optionSelectedBackground'} | ${'optionHoveredBackgroundColor'} | ${undefined}    | ${'pointer'}
      ${true}   | ${false}   | ${false}   | ${'icon'}                     | ${'optionHoveredBackgroundColor'} | ${undefined}    | ${'pointer'}
      ${true}   | ${true}    | ${false}   | ${'icon'}                     | ${'optionHoveredBackgroundColor'} | ${undefined}    | ${'pointer'}
      ${false}  | ${true}    | ${false}   | ${'icon'}                     | ${'transparent'}                  | ${undefined}    | ${'pointer'}
      ${false}  | ${true}    | ${false}   | ${'optionSelectedBackground'} | ${'optionHoveredBackgroundColor'} | ${undefined}    | ${'pointer'}
    `(
      `for { isFocused:$isFocused, isSelected:$isSelected, isDisabled:$isDisabled, optionSelectedBackground:$optionSelectedBackground } expect background=$expectedBackground, opacity=$expectedOpacity, cursor=$expectedCursor`,
      ({
        isFocused,
        isSelected,
        isDisabled,
        optionSelectedBackground,
        expectedBackground,
        expectedOpacity,
        expectedCursor,
      }) => {
        const providedStyle = {};
        const props = {
          selectProps: {},
          isFocused,
          isSelected,
          isDisabled,
        };
        const controlStyles = customStyles({
          ...selectTheme,
          optionSelectedBackground,
        }).option(providedStyle, props);

        expect(controlStyles.background).toBe(expectedBackground);
        expect(controlStyles.opacity).toBe(expectedOpacity);
        expect(controlStyles.cursor).toBe(expectedCursor);
      },
    );
  });
  describe('placeholder', () => {
    test.each`
      isDisabled | isSearchable | expectedPosition | expectedColor
      ${false}   | ${false}     | ${'relative'}    | ${'placeholderTextColor'}
      ${true}    | ${true}      | ${'absolute'}    | ${'placeholderTextColorDisabled'}
    `(
      `for { isDisabled:$isDisabled, isSearchable:$isSearchable } expect position=$expecexpectedPositiontedPadding, color=$expectedColor`,
      ({ isDisabled, isSearchable, expectedPosition, expectedColor }) => {
        const providedStyle = {};
        const props = {
          selectProps: { isSearchable },
          isDisabled,
        };
        const controlStyles = customStyles(selectTheme).placeholder(
          providedStyle,
          props,
        );

        expect(controlStyles.position).toBe(expectedPosition);
        expect(controlStyles.color).toBe(expectedColor);
      },
    );
  });
  describe('singleValue', () => {
    test.each`
      isDisabled | isSearchable | expectedPosition | expectedColor
      ${false}   | ${false}     | ${'relative'}    | ${'selectedOptionTextColor'}
      ${true}    | ${true}      | ${'absolute'}    | ${'selectedOptionTextColorDisabled'}
    `(
      `for { isDisabled:$isDisabled, isSearchable:$isSearchable } expect position=$expecexpectedPositiontedPadding, color=$expectedColor`,
      ({ isDisabled, isSearchable, expectedPosition, expectedColor }) => {
        const providedStyle = {};
        const props = {
          selectProps: { isSearchable },
          isDisabled,
        };
        const controlStyles = customStyles(selectTheme).singleValue(
          providedStyle,
          props,
        );

        expect(controlStyles.position).toBe(expectedPosition);
        expect(controlStyles.color).toBe(expectedColor);
      },
    );
  });
});
