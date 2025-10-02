import { rgba } from 'polished';
import themes from '@8x8/oxygen-theme';

import color from '../choices/color.const';
import font from '../choices/font.const';
import size from '../choices/size.const';
import spacing from '../choices/spacing.const';
import zIndex from '../choices/zIndex.const';

const { light, dark, neoLight, neoDark } = themes;

export interface SelectTheme {
  avatarPaddingRight: string;
  backgroundColor: string;
  backgroundColorDisabled: string;
  backgroundColorHover: string;
  baseUnit: number;
  borderColor: string;
  borderColorDisabled: string;
  borderColorError: string;
  borderColorFocus: string;
  borderColorHover: string;
  borderRadius: number | string;
  borderWidth: string;
  checkboxPaddingRight: string;
  clearIconColor: string;
  clearIconFocusedColor: string;
  clearIconFocusedHoverColor: string;
  clearIconHoverColor: string;
  controlFocusBoxShadow: string;
  dropdownIndicatorColor: string;
  dropdownIndicatorColorDisabled: string;
  fontFamily: string;
  fontSize: string;
  headingBorderColor: string;
  headingBorderSize: string;
  headingBorderStyle: string;
  headingMargin: string | number;
  headingPadding: string;
  headingTextColor: string;
  headingTextFontSize: string;
  headingTextFontWeight: string | number;
  iconHeight: string;
  iconMargin: string | number;
  iconPaddingRight: string;
  iconSize: number;
  iconSet?: 'novo' | 'classic';
  indicatorsContainerPaddingHorizontal: string;
  inputBoxSizeDefault: string;
  inputBoxSizeLarge: string;
  inputBoxSizeSmall: string;
  inputColor: string;
  labelFontWeight: string | number;
  lineHeight: string;
  marginTop: string;
  menuBackgroundColor: string;
  menuBorderColor: string;
  menuBorderSize: string;
  menuBorderStyle: string;
  menuBoxShadowColor: string;
  menuBoxShadowSize: string | number;
  menuGutter: number;
  menuZindex: number;
  multiValueChipPaddingVerticalDefault: string;
  multiValueChipPaddingVerticalLarge: string;
  multiValueChipPaddingVerticalSmall: string;
  noOptionTextColor: string;
  noOptionTextFontSize: string;
  optionActiveBackgroundColor: string;
  optionHoveredBackgroundColor: string;
  optionIconColor: string;
  optionPaddingHorizontal: string;
  optionPaddingVertical: string;
  optionSelectedBackground: string;
  optionTextColor: string;
  optionTextFontSize: string;
  optionTextFontWeightSelected: string | number;
  optionTextSelectedColor: string;
  placeholderIconColor: string;
  placeholderTextColor: string;
  placeholderTextColorDisabled: string;
  selectedOptionTextColor: string;
  selectedOptionTextColorDisabled: string;
  shortMultiDisplayPadding: string;
  valueContainerPadding: string;
}

const select: SelectTheme = {
  avatarPaddingRight: spacing.xs,
  backgroundColor: color.white,
  backgroundColorDisabled: color.cloudyBlue100,
  backgroundColorHover: color.white,
  baseUnit: 0,
  borderColor: color.cloudyBlue300,
  borderColorDisabled: color.cloudyBlue300,
  borderColorError: color.coral,
  borderColorFocus: color.dodgerBlue,
  borderColorHover: color.cloudyBlue300,
  borderRadius: 0,
  borderWidth: '1px',
  checkboxPaddingRight: spacing.xs,
  clearIconColor: color.cloudyBlue,
  clearIconFocusedColor: color.steel700,
  clearIconFocusedHoverColor: color.pickledBluewood,
  clearIconHoverColor: color.steel700,
  controlFocusBoxShadow: 'none',
  dropdownIndicatorColor: color.steel700,
  dropdownIndicatorColorDisabled: color.steel700,
  fontFamily: font.family,
  fontSize: font.sizeSm,
  headingBorderColor: color.cloudyBlue300,
  headingBorderSize: size.borderSizeDefault,
  headingBorderStyle: 'solid',
  headingMargin: 0,
  headingPadding: spacing.xs,
  headingTextColor: color.pickledBluewood,
  headingTextFontSize: font.sizeSm,
  headingTextFontWeight: font.weightAttention,
  iconHeight: size.medium,
  iconMargin: 0,
  iconPaddingRight: spacing.xs,
  iconSize: 24,
  indicatorsContainerPaddingHorizontal: spacing.xs,
  inputBoxSizeDefault: size.formItemSizeLarge,
  inputBoxSizeLarge: '48px',
  inputBoxSizeSmall: size.formItemSizeSmall,
  inputColor: color.pickledBluewood,
  labelFontWeight: font.weightAttention,
  lineHeight: font.lineHeightSm,
  marginTop: spacing.xxs,
  menuBackgroundColor: color.white,
  menuBorderColor: color.cloudyBlue300,
  menuBorderSize: size.borderSizeDefault,
  menuBorderStyle: 'solid',
  menuBoxShadowColor: `${rgba(color.pickledBluewood800, 0.1)}`,
  menuBoxShadowSize: size.shadowDefault,
  menuGutter: 1,
  menuZindex: zIndex.z1000,
  multiValueChipPaddingVerticalDefault: '6px',
  multiValueChipPaddingVerticalLarge: '8px',
  multiValueChipPaddingVerticalSmall: spacing.xxxs,
  noOptionTextColor: color.cloudyBlue,
  noOptionTextFontSize: font.sizeSm,
  optionActiveBackgroundColor: color.cloudyBlue300,
  optionHoveredBackgroundColor: color.cloudyBlue100,
  optionIconColor: color.pickledBluewood,
  optionPaddingHorizontal: spacing.xs,
  optionPaddingVertical: spacing.xxs,
  optionSelectedBackground: 'color',
  optionTextColor: color.pickledBluewood,
  optionTextFontSize: font.sizeSm,
  optionTextFontWeightSelected: font.weightAttention,
  optionTextSelectedColor: color.dodgerBlue,
  placeholderIconColor: color.cloudyBlue,
  placeholderTextColor: color.cloudyBlue,
  placeholderTextColorDisabled: color.cloudyBlue,
  selectedOptionTextColor: color.steel700,
  selectedOptionTextColorDisabled: color.cloudyBlue,
  shortMultiDisplayPadding: spacing.xxs,
  valueContainerPadding: `0 ${spacing.xs}`,
};

const selectNovo: SelectTheme = {
  ...select,
  backgroundColor: light.ui05,
  backgroundColorDisabled: light.ui05,
  backgroundColorHover: light.hover08,
  borderColor: light.ui05,
  borderColorDisabled: light.ui05,
  borderColorError: light.action03,
  borderColorFocus: light.focus01,
  borderColorHover: light.hover08,
  borderRadius: '6px',
  borderWidth: '2px',
  clearIconColor: light.icon01,
  clearIconFocusedColor: light.icon01,
  dropdownIndicatorColor: light.icon01,
  dropdownIndicatorColorDisabled: light.disabled02,
  fontFamily: light.bulletList01.fontFamily,
  fontSize: light.bulletList01.fontSize,
  headingBorderSize: '0',
  headingMargin: '0',
  headingPadding: `${light.spacing03} ${light.spacing05}`,
  headingTextColor: light.textColor01,
  headingTextFontSize: light.bodyBold01.fontSize,
  headingTextFontWeight: light.bodyBold01.fontWeight,
  iconHeight: '28px',
  iconMargin: '0 6px 0 -6px',
  iconPaddingRight: '0',
  iconSet: 'novo',
  iconSize: 20,
  inputBoxSizeDefault: '40px',
  inputBoxSizeLarge: '48px',
  inputBoxSizeSmall: '32px',
  inputColor: light.textColor01,
  labelFontWeight: light.bulletList01.fontWeight,
  lineHeight: light.bulletList01.lineHeight,
  menuBackgroundColor: light.ui06,
  menuBorderColor: light.focus01,
  menuBorderSize: '2px',
  menuBoxShadowColor: null,
  menuBoxShadowSize: 0,
  multiValueChipPaddingVerticalDefault: '2px',
  multiValueChipPaddingVerticalLarge: '4px',
  multiValueChipPaddingVerticalSmall: '0px',
  noOptionTextColor: light.textColor01,
  noOptionTextFontSize: light.bulletList01.fontSize,
  optionActiveBackgroundColor: '',
  optionHoveredBackgroundColor: light.ui02,
  optionIconColor: light.textColor01,
  optionPaddingHorizontal: light.spacing05,
  optionPaddingVertical: light.spacing03,
  optionSelectedBackground: 'icon',
  optionTextColor: light.textColor01,
  optionTextFontSize: light.bulletList01.fontSize,
  optionTextFontWeightSelected: light.bulletList01.fontWeight,
  optionTextSelectedColor: light.textColor01,
  placeholderIconColor: light.textColor01,
  placeholderTextColor: light.textColor02,
  placeholderTextColorDisabled: light.disabled02,
  selectedOptionTextColor: light.textColor01,
  selectedOptionTextColorDisabled: light.disabled02,
  valueContainerPadding: `0 0 0 ${light.spacing05}`,
};

const selectNovoDark: SelectTheme = {
  ...selectNovo,
  backgroundColor: dark.ui05,
  backgroundColorDisabled: dark.ui05,
  backgroundColorHover: dark.hover08,
  borderColor: dark.ui05,
  borderColorDisabled: dark.ui05,
  borderColorError: dark.action03,
  borderColorFocus: dark.focus01,
  borderColorHover: dark.hover08,
  clearIconColor: dark.icon01,
  clearIconFocusedColor: dark.icon01,
  dropdownIndicatorColor: dark.icon01,
  dropdownIndicatorColorDisabled: dark.disabled02,
  headingTextColor: dark.textColor01,
  inputColor: dark.textColor01,
  menuBackgroundColor: dark.ui06,
  menuBorderColor: dark.focus01,
  noOptionTextColor: dark.textColor01,
  optionHoveredBackgroundColor: dark.ui02,
  optionIconColor: dark.textColor01,
  optionTextColor: dark.textColor01,
  optionTextSelectedColor: dark.textColor01,
  placeholderIconColor: dark.textColor01,
  placeholderTextColor: dark.textColor02,
  placeholderTextColorDisabled: dark.disabled02,
  selectedOptionTextColor: dark.textColor01,
  selectedOptionTextColorDisabled: dark.disabled02,
};

const selectNeoLight: SelectTheme = {
  ...selectNovo,
  backgroundColor: neoLight.ui05,
  backgroundColorDisabled: neoLight.ui05,
  backgroundColorHover: neoLight.hover08,
  borderColor: neoLight.ui05,
  borderColorDisabled: neoLight.ui05,
  borderColorError: neoLight.action03,
  borderColorFocus: neoLight.focus01,
  borderColorHover: neoLight.hover08,
  clearIconColor: neoLight.icon01,
  clearIconFocusedColor: neoLight.icon01,
  dropdownIndicatorColor: neoLight.icon01,
  dropdownIndicatorColorDisabled: neoLight.disabled02,
  headingTextColor: neoLight.textColor01,
  inputColor: neoLight.textColor01,
  menuBackgroundColor: neoLight.ui06,
  menuBorderColor: neoLight.focus01,
  noOptionTextColor: neoLight.textColor01,
  optionHoveredBackgroundColor: neoLight.ui02,
  optionIconColor: neoLight.textColor01,
  optionTextColor: neoLight.textColor01,
  optionTextSelectedColor: neoLight.textColor01,
  placeholderIconColor: neoLight.textColor01,
  placeholderTextColor: neoLight.textColor02,
  placeholderTextColorDisabled: neoLight.disabled02,
  selectedOptionTextColor: neoLight.textColor01,
  selectedOptionTextColorDisabled: neoLight.disabled02,
};

const selectNeoDark: SelectTheme = {
  ...selectNovoDark,
  backgroundColor: neoDark.ui05,
  backgroundColorDisabled: neoDark.ui05,
  backgroundColorHover: neoDark.hover08,
  borderColor: neoDark.ui05,
  borderColorDisabled: neoDark.ui05,
  borderColorError: neoDark.action03,
  borderColorFocus: neoDark.focus01,
  borderColorHover: neoDark.hover08,
  clearIconColor: neoDark.icon01,
  clearIconFocusedColor: neoDark.icon01,
  dropdownIndicatorColor: neoDark.icon01,
  dropdownIndicatorColorDisabled: neoDark.disabled02,
  headingTextColor: neoDark.textColor01,
  inputColor: neoDark.textColor01,
  menuBackgroundColor: neoDark.ui06,
  menuBorderColor: neoDark.focus01,
  noOptionTextColor: neoDark.textColor01,
  optionHoveredBackgroundColor: neoDark.ui02,
  optionIconColor: neoDark.textColor01,
  optionTextColor: neoDark.textColor01,
  optionTextSelectedColor: neoDark.textColor01,
  placeholderIconColor: neoDark.textColor01,
  placeholderTextColor: neoDark.textColor02,
  placeholderTextColorDisabled: neoDark.disabled02,
  selectedOptionTextColor: neoDark.textColor01,
  selectedOptionTextColorDisabled: neoDark.disabled02,
};

export { select, selectNovo, selectNovoDark, selectNeoLight, selectNeoDark };
