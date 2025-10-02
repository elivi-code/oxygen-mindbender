import themes from '@8x8/oxygen-theme';

import color from '../choices/color.const';
import timing from '../choices/timing.const';
import font from '../choices/font.const';
import size from '../choices/size.const';

const { light, dark, neoLight, neoDark } = themes;

export interface ButtonTheme {
  backgroundColorPrimary: string;
  backgroundColorPrimaryHover: string;
  backgroundColorPrimaryActive: string;
  backgroundColorPrimaryDisabled: string;
  borderColorPrimary: string;
  borderColorPrimaryHover: string;
  borderColorPrimaryActive: string;
  borderColorPrimaryDisabled: string;
  fontColorPrimary: string;
  fontColorPrimaryDisabled: string;
  backgroundColorSecondary: string;
  backgroundColorSecondaryHover: string;
  backgroundColorSecondaryActive: string;
  backgroundColorSecondaryDisabled: string;
  borderColorSecondary: string;
  borderColorSecondaryHover: string;
  borderColorSecondaryActive: string;
  borderColorSecondaryDisabled: string;
  fontColorSecondary: string;
  fontColorSecondaryDisabled: string;
  backgroundColorTertiary: string;
  backgroundColorTertiaryHover: string;
  backgroundColorTertiaryActive: string;
  backgroundColorTertiaryDisabled: string;
  borderColorTertiary: string;
  borderColorTertiaryHover: string;
  borderColorTertiaryActive: string;
  borderColorTertiaryDisabled: string;
  fontColorTertiary: string;
  fontColorTertiaryActive: string;
  fontColorTertiaryHover: string;
  fontColorTertiaryDisabled: string;
  backgroundColorTertiaryReversed: string;
  backgroundColorTertiaryReversedHover: string;
  backgroundColorTertiaryReversedActive: string;
  backgroundColorTertiaryReversedDisabled: string;
  borderColorTertiaryReversed: string;
  borderColorTertiaryReversedHover: string;
  borderColorTertiaryReversedActive: string;
  borderColorTertiaryReversedDisabled: string;
  fontColorTertiaryReversed: string;
  fontColorTertiaryReversedActive: string;
  fontColorTertiaryReversedHover: string;
  fontColorTertiaryReversedDisabled: string;
  backgroundColorDestructive: string;
  backgroundColorDestructiveHover: string;
  backgroundColorDestructiveActive: string;
  backgroundColorDestructiveDisabled: string;
  borderColorDestructive: string;
  borderColorDestructiveHover: string;
  borderColorDestructiveActive: string;
  borderColorDestructiveDisabled: string;
  fontColorDestructive: string;
  fontColorDestructiveDisabled: string;
  backgroundColorSuccess: string;
  backgroundColorSuccessHover: string;
  backgroundColorSuccessActive: string;
  backgroundColorSuccessDisabled: string;
  borderColorSuccess: string;
  borderColorSuccessHover: string;
  borderColorSuccessActive: string;
  borderColorSuccessDisabled: string;
  borderSizeTertiary: string;
  fontColorSuccess: string;
  fontColorSuccessDisabled: string;
  shadowColorPrimaryFocus?: string;
  shadowColorSecondaryFocus?: string;
  shadowColorTertiaryFocus?: string;
  shadowColorDestructiveFocus?: string;
  shadowColorSuccessFocus?: string;
  shadowBackgroundColorFocus?: string;
  fontSize: string;
  lineHeight: string;
  fontFamily: string;
  fontWeight: string | number;
  fontSizeMedium: string;
  fontFamilyMedium: string;
  fontWeightMedium: string | number;
  lineHeightMedium: string;
  letterSpacingMedium: string;
  fontSizeSmall: string;
  fontFamilySmall: string;
  fontWeightSmall: string | number;
  lineHeightSmall: string;
  letterSpacingSmall: string;
  fontSizeLarge: string;
  fontFamilyLarge: string;
  fontWeightLarge: string | number;
  lineHeightLarge: string;
  letterSpacingLarge: string;
  paddingSmall: string;
  paddingLarge: string;
  paddingMedium: string;
  heightMedium: string;
  paddingLargeV2: string;
  heightLargeV2: string;
  borderSize: string;
  borderRadius: string;
  heightSmall: string;
  heightLarge: string;
  marginLeftSmall: string;
  marginBottomSmall: string;
  marginLeftLarge: string;
  marginBottomLarge: string;
  buttonGroupSpacingSmall: string;
  buttonGroupSpacingLarge: string;
  transitionDuration: string;
  isClassic: boolean;
}

const button: ButtonTheme = {
  // Primary
  backgroundColorPrimary: color.dodgerBlue,
  backgroundColorPrimaryHover: color.dodgerBlue400,
  backgroundColorPrimaryActive: color.dodgerBlue700,
  backgroundColorPrimaryDisabled: color.dodgerBlue300,

  borderColorPrimary: color.dodgerBlue,
  borderColorPrimaryHover: color.dodgerBlue400,
  borderColorPrimaryActive: color.dodgerBlue700,
  borderColorPrimaryDisabled: color.dodgerBlue300,

  fontColorPrimary: color.white,
  fontColorPrimaryDisabled: color.dodgerBlue100,

  // Secondary
  backgroundColorSecondary: color.white,
  backgroundColorSecondaryHover: color.cloudyBlue100,
  backgroundColorSecondaryActive: color.cloudyBlue300,
  backgroundColorSecondaryDisabled: color.white,

  borderColorSecondary: color.cloudyBlue300,
  borderColorSecondaryHover: color.cloudyBlue300,
  borderColorSecondaryActive: color.cloudyBlue300,
  borderColorSecondaryDisabled: color.cloudyBlue300,

  fontColorSecondary: color.pickledBluewood800,
  fontColorSecondaryDisabled: color.cloudyBlue300,

  // Tertiary
  backgroundColorTertiary: 'transparent',
  backgroundColorTertiaryHover: color.cloudyBlue100,
  backgroundColorTertiaryActive: color.cloudyBlue300,
  backgroundColorTertiaryDisabled: 'transparent',

  borderColorTertiary: color.cloudyBlue300,
  borderColorTertiaryHover: color.cloudyBlue300,
  borderColorTertiaryActive: color.cloudyBlue300,
  borderColorTertiaryDisabled: color.cloudyBlue300,

  fontColorTertiary: color.pickledBluewood800,
  fontColorTertiaryActive: undefined,
  fontColorTertiaryHover: undefined,
  fontColorTertiaryDisabled: color.cloudyBlue300,

  // Tertiary Reversed
  backgroundColorTertiaryReversed: 'transparent',
  backgroundColorTertiaryReversedHover: color.cloudyBlue100,
  backgroundColorTertiaryReversedActive: color.cloudyBlue300,
  backgroundColorTertiaryReversedDisabled: 'transparent',

  borderColorTertiaryReversed: color.cloudyBlue300,
  borderColorTertiaryReversedHover: color.cloudyBlue300,
  borderColorTertiaryReversedActive: color.cloudyBlue300,
  borderColorTertiaryReversedDisabled: color.cloudyBlue300,

  fontColorTertiaryReversed: color.cloudyBlue300,
  fontColorTertiaryReversedActive: color.pickledBluewood800,
  fontColorTertiaryReversedHover: color.pickledBluewood800,
  fontColorTertiaryReversedDisabled: color.cloudyBlue300,

  // Destructive
  backgroundColorDestructive: color.coral,
  backgroundColorDestructiveHover: color.candyPink,
  backgroundColorDestructiveActive: color.coral700,
  backgroundColorDestructiveDisabled: color.coral200,

  borderColorDestructive: color.coral,
  borderColorDestructiveHover: color.candyPink,
  borderColorDestructiveActive: color.coral700,
  borderColorDestructiveDisabled: color.coral200,

  fontColorDestructive: color.white,
  fontColorDestructiveDisabled: color.cloudyBlue100,

  // Success
  backgroundColorSuccess: color.jadeGreen,
  backgroundColorSuccessHover: color.jadeGreen400,
  backgroundColorSuccessActive: color.jadeGreen700,
  backgroundColorSuccessDisabled: color.jadeGreen200,

  borderColorSuccess: color.jadeGreen,
  borderColorSuccessHover: color.jadeGreen400,
  borderColorSuccessActive: color.jadeGreen700,
  borderColorSuccessDisabled: color.jadeGreen200,

  fontColorSuccess: color.white,
  fontColorSuccessDisabled: color.steel700,

  // Typography
  fontSize: font.sizeSm,
  lineHeight: font.lineHeightSm,
  fontFamily: font.family,
  fontWeight: font.weightAttention,
  fontSizeMedium: light.bodyBold01.fontSize,
  fontFamilyMedium: light.bodyBold01.fontFamily,
  fontWeightMedium: light.bodyBold01.fontWeight,
  lineHeightMedium: light.bodyBold01.lineHeight,
  letterSpacingMedium: light.bodyBold01.letterSpacing,
  fontSizeSmall: light.labelBold01.fontSize,
  fontFamilySmall: light.labelBold01.fontFamily,
  fontWeightSmall: light.labelBold01.fontWeight,
  lineHeightSmall: light.labelBold01.lineHeight,
  letterSpacingSmall: light.labelBold01.letterSpacing,
  fontSizeLarge: light.bodyBold02.fontSize,
  fontFamilyLarge: light.bodyBold02.fontFamily,
  fontWeightLarge: light.bodyBold02.fontWeight,
  lineHeightLarge: light.bodyBold02.lineHeight,
  letterSpacingLarge: light.bodyBold02.letterSpacing,

  // Structure
  paddingSmall: `calc(${size.small} - 1px) calc(${size.default2x} - 1px)`,
  paddingLarge: `calc(${size.default} - 1px) calc(${size.medium} - 1px)`,

  paddingMedium: 'unset',
  heightMedium: 'unset',

  paddingLargeV2: `calc(${size.borderRadiusLarge} - 1px) calc(${size.default2x} - 1px)`,
  heightLargeV2: size.tableHeaderSize,

  borderSize: '1px',
  borderRadius: size.borderRadiusDefault,

  heightSmall: size.formItemSizeSmall,
  heightLarge: size.formItemSizeLarge,
  /**
   * @deprecated instead of `marginLeftSmall`and `marginBottomSmall`, please use `buttonGroupSpacingSmall` property
   */
  marginLeftSmall: size.default,
  marginBottomSmall: size.default,
  /**
   * @deprecated instead of `marginLeftLarge` and `marginBottomLarge`, please use `buttonGroupSpacingLarge` property
   */
  marginLeftLarge: size.default2x,
  marginBottomLarge: size.default2x,
  buttonGroupSpacingSmall: size.default,
  buttonGroupSpacingLarge: size.default2x,
  // Animation
  transitionDuration: timing.fast,
  borderSizeTertiary: '1px',

  isClassic: true,
};

const buttonNovo: ButtonTheme = {
  isClassic: false,

  fontSize: undefined,
  lineHeight: undefined,
  fontFamily: undefined,
  fontWeight: undefined,

  // Primary
  backgroundColorPrimary: light.action09,
  backgroundColorPrimaryHover: light.hover11,
  backgroundColorPrimaryActive: light.active11,
  backgroundColorPrimaryDisabled: light.disabled01,

  borderColorPrimary: 'unset',
  borderColorPrimaryHover: 'unset',
  borderColorPrimaryActive: 'unset',
  borderColorPrimaryDisabled: 'unset',

  shadowColorPrimaryFocus: light.focus01,

  fontColorPrimary: light.textColor09,
  fontColorPrimaryDisabled: light.disabled04,

  // Secondary
  backgroundColorSecondary: light.action02,
  backgroundColorSecondaryHover: light.hover02,
  backgroundColorSecondaryActive: light.active02,
  backgroundColorSecondaryDisabled: light.disabled01,

  borderColorSecondary: 'unset',
  borderColorSecondaryHover: 'unset',
  borderColorSecondaryActive: 'unset',
  borderColorSecondaryDisabled: 'unset',

  shadowColorSecondaryFocus: light.focus01,

  fontColorSecondary: light.textColor04,
  fontColorSecondaryDisabled: light.disabled04,

  // Tertiary
  backgroundColorTertiary: 'transparent',
  backgroundColorTertiaryHover: light.hover02,
  backgroundColorTertiaryActive: light.active02,
  backgroundColorTertiaryDisabled: light.disabled01,

  borderColorTertiary: light.ui01,
  borderColorTertiaryHover: light.hover02,
  borderColorTertiaryActive: light.active02,
  borderColorTertiaryDisabled: light.disabled01,

  shadowColorTertiaryFocus: light.focus01,

  borderSizeTertiary: '1px',

  fontColorTertiary: light.textColor01,
  fontColorTertiaryActive: light.icon05,
  fontColorTertiaryHover: light.icon05,
  fontColorTertiaryDisabled: light.icon03,

  // Tertiary Reversed
  backgroundColorTertiaryReversed: 'transparent',
  backgroundColorTertiaryReversedHover: light.hover09,
  backgroundColorTertiaryReversedActive: light.active09,
  backgroundColorTertiaryReversedDisabled: light.disabled01,

  borderColorTertiaryReversed: light.ui08,
  borderColorTertiaryReversedHover: light.hover09,
  borderColorTertiaryReversedActive: light.active09,
  borderColorTertiaryReversedDisabled: light.disabled01,

  fontColorTertiaryReversed: light.textColor04,
  fontColorTertiaryReversedActive: light.icon01,
  fontColorTertiaryReversedHover: light.icon01,
  fontColorTertiaryReversedDisabled: light.icon07,

  // Destructive
  backgroundColorDestructive: light.action03,
  backgroundColorDestructiveHover: light.hover03,
  backgroundColorDestructiveActive: light.active03,
  backgroundColorDestructiveDisabled: light.disabled01,

  borderColorDestructive: 'unset',
  borderColorDestructiveHover: 'unset',
  borderColorDestructiveActive: 'unset',
  borderColorDestructiveDisabled: 'unset',

  shadowColorDestructiveFocus: light.focus01,

  fontColorDestructive: light.textColor06,
  fontColorDestructiveDisabled: light.disabled04,

  // Success
  backgroundColorSuccess: light.success01,
  backgroundColorSuccessHover: light.hover04,
  backgroundColorSuccessActive: light.active04,
  backgroundColorSuccessDisabled: light.disabled01,

  borderColorSuccess: 'unset',
  borderColorSuccessHover: 'unset',
  borderColorSuccessActive: 'unset',
  borderColorSuccessDisabled: 'unset',

  shadowColorSuccessFocus: light.focus01,

  fontColorSuccess: light.textColor06,
  fontColorSuccessDisabled: light.disabled04,

  // New shadow
  shadowBackgroundColorFocus: light.ui06,

  // Typography
  fontSizeMedium: light.bodyBold01.fontSize,
  fontFamilyMedium: light.bodyBold01.fontFamily,
  fontWeightMedium: light.bodyBold01.fontWeight,
  lineHeightMedium: light.bodyBold01.lineHeight,
  letterSpacingMedium: light.bodyBold01.letterSpacing,
  fontSizeSmall: light.labelBold01.fontSize,
  fontFamilySmall: light.labelBold01.fontFamily,
  fontWeightSmall: light.labelBold01.fontWeight,
  lineHeightSmall: light.labelBold01.lineHeight,
  letterSpacingSmall: light.labelBold01.letterSpacing,
  fontSizeLarge: light.bodyBold02.fontSize,
  fontFamilyLarge: light.bodyBold02.fontFamily,
  fontWeightLarge: light.bodyBold02.fontWeight,
  lineHeightLarge: light.bodyBold02.lineHeight,
  letterSpacingLarge: light.bodyBold02.letterSpacing,

  // Structure
  paddingLarge: `calc(${size.default} - 1px) calc(${size.medium} - 1px)`,

  paddingSmall: `${light.spacing03} ${light.spacing04}`,
  paddingMedium: `${light.spacing03} ${light.spacing05}`,
  paddingLargeV2: `${light.spacing04} ${light.spacing05}`,

  borderSize: '0',
  borderRadius: '6px',

  heightSmall: '32px',
  heightMedium: '40px',
  heightLarge: size.formItemSizeLarge,
  heightLargeV2: '48px',
  /**
   * @deprecated instead of `marginLeftSmall`and `marginBottomSmall`, please use `buttonGroupSpacingSmall` property
   */
  marginLeftSmall: light.spacing03,
  marginBottomSmall: light.spacing03,
  /**
   * @deprecated instead of `marginLeftLarge` and `marginBottomLarge`, please use `buttonGroupSpacingLarge` property
   */
  marginLeftLarge: light.spacing05,
  marginBottomLarge: light.spacing05,
  buttonGroupSpacingSmall: light.spacing03,
  buttonGroupSpacingLarge: light.spacing05,
  // Animation
  transitionDuration: '150ms',
};

const buttonNovoDark: ButtonTheme = {
  ...buttonNovo,

  // Primary
  backgroundColorPrimary: dark.action09,
  backgroundColorPrimaryHover: dark.hover11,
  backgroundColorPrimaryActive: dark.active11,
  backgroundColorPrimaryDisabled: dark.disabled01,

  shadowColorPrimaryFocus: dark.focus01,

  fontColorPrimary: dark.textColor09,
  fontColorPrimaryDisabled: dark.disabled04,

  // Secondary
  backgroundColorSecondary: dark.action02,
  backgroundColorSecondaryHover: dark.hover02,
  backgroundColorSecondaryActive: dark.active02,
  backgroundColorSecondaryDisabled: dark.disabled01,

  shadowColorSecondaryFocus: dark.focus01,

  fontColorSecondary: dark.textColor04,
  fontColorSecondaryDisabled: dark.disabled04,

  // Tertiary
  backgroundColorTertiary: 'transparent',
  backgroundColorTertiaryHover: dark.hover02,
  backgroundColorTertiaryActive: dark.active02,
  backgroundColorTertiaryDisabled: dark.disabled01,

  borderColorTertiary: dark.ui01,
  borderColorTertiaryHover: dark.hover02,
  borderColorTertiaryActive: dark.active02,
  borderColorTertiaryDisabled: dark.disabled01,

  shadowColorTertiaryFocus: dark.focus01,

  fontColorTertiary: dark.textColor01,
  fontColorTertiaryActive: dark.icon05,
  fontColorTertiaryHover: dark.icon05,
  fontColorTertiaryDisabled: dark.icon03,

  // Tertiary Reversed
  backgroundColorTertiaryReversed: 'transparent',
  backgroundColorTertiaryReversedHover: dark.hover09,
  backgroundColorTertiaryReversedActive: dark.active09,
  backgroundColorTertiaryReversedDisabled: dark.disabled01,

  borderColorTertiaryReversed: dark.ui08,
  borderColorTertiaryReversedHover: dark.hover09,
  borderColorTertiaryReversedActive: dark.active09,
  borderColorTertiaryReversedDisabled: dark.disabled01,

  fontColorTertiaryReversed: dark.textColor04,
  fontColorTertiaryReversedActive: dark.icon01,
  fontColorTertiaryReversedHover: dark.icon01,
  fontColorTertiaryReversedDisabled: dark.icon07,

  // Destructive
  backgroundColorDestructive: dark.action03,
  backgroundColorDestructiveHover: dark.hover03,
  backgroundColorDestructiveActive: dark.active03,
  backgroundColorDestructiveDisabled: dark.disabled01,

  shadowColorDestructiveFocus: dark.focus01,

  fontColorDestructive: dark.textColor06,
  fontColorDestructiveDisabled: dark.disabled04,

  // Success
  backgroundColorSuccess: dark.success01,
  backgroundColorSuccessHover: dark.hover04,
  backgroundColorSuccessActive: dark.active04,
  backgroundColorSuccessDisabled: dark.disabled01,

  shadowColorSuccessFocus: dark.focus01,

  fontColorSuccess: dark.textColor06,
  fontColorSuccessDisabled: dark.disabled04,

  // Shadow
  shadowBackgroundColorFocus: dark.ui06,
};

const buttonNeoLight: ButtonTheme = {
  ...buttonNovo,
  // Primary
  backgroundColorPrimary: neoLight.action09,
  backgroundColorPrimaryHover: neoLight.hover11,
  backgroundColorPrimaryActive: neoLight.active11,
  backgroundColorPrimaryDisabled: neoLight.disabled01,

  shadowColorPrimaryFocus: neoLight.focus01,

  fontColorPrimary: neoLight.textColor09,
  fontColorPrimaryDisabled: neoLight.disabled04,

  // Secondary
  backgroundColorSecondary: neoLight.action02,
  backgroundColorSecondaryHover: neoLight.hover02,
  backgroundColorSecondaryActive: neoLight.active02,
  backgroundColorSecondaryDisabled: neoLight.disabled01,

  shadowColorSecondaryFocus: neoLight.focus01,

  fontColorSecondary: neoLight.textColor04,
  fontColorSecondaryDisabled: neoLight.disabled04,

  // Tertiary
  backgroundColorTertiaryHover: neoLight.hover02,
  backgroundColorTertiaryActive: neoLight.active02,
  backgroundColorTertiaryDisabled: neoLight.disabled01,

  borderColorTertiary: neoLight.ui01,
  borderColorTertiaryHover: neoLight.hover02,
  borderColorTertiaryActive: neoLight.active02,
  borderColorTertiaryDisabled: neoLight.disabled01,

  shadowColorTertiaryFocus: neoLight.focus01,

  fontColorTertiary: neoLight.textColor01,
  fontColorTertiaryActive: neoLight.icon05,
  fontColorTertiaryHover: neoLight.icon05,
  fontColorTertiaryDisabled: neoLight.icon03,

  // Tertiary Reversed
  backgroundColorTertiaryReversedHover: neoLight.hover09,
  backgroundColorTertiaryReversedActive: neoLight.active09,
  backgroundColorTertiaryReversedDisabled: neoLight.disabled01,

  borderColorTertiaryReversed: neoLight.ui08,
  borderColorTertiaryReversedHover: neoLight.hover09,
  borderColorTertiaryReversedActive: neoLight.active09,
  borderColorTertiaryReversedDisabled: neoLight.disabled01,

  fontColorTertiaryReversed: neoLight.textColor04,
  fontColorTertiaryReversedActive: neoLight.icon01,
  fontColorTertiaryReversedHover: neoLight.icon01,
  fontColorTertiaryReversedDisabled: neoLight.icon07,

  // Destructive
  backgroundColorDestructive: neoLight.action03,
  backgroundColorDestructiveHover: neoLight.hover03,
  backgroundColorDestructiveActive: neoLight.active03,
  backgroundColorDestructiveDisabled: neoLight.disabled01,

  shadowColorDestructiveFocus: neoLight.focus01,

  fontColorDestructive: neoLight.textColor06,
  fontColorDestructiveDisabled: neoLight.disabled04,

  // Success
  backgroundColorSuccess: neoLight.success01,
  backgroundColorSuccessHover: neoLight.hover04,
  backgroundColorSuccessActive: neoLight.active04,
  backgroundColorSuccessDisabled: neoLight.disabled01,

  shadowColorSuccessFocus: neoLight.focus01,

  fontColorSuccess: neoLight.textColor06,
  fontColorSuccessDisabled: neoLight.disabled04,

  // New shadow
  shadowBackgroundColorFocus: neoLight.ui06,
};

const buttonNeoDark: ButtonTheme = {
  ...buttonNovoDark,

  // Primary
  backgroundColorPrimary: neoDark.action09,
  backgroundColorPrimaryHover: neoDark.hover11,
  backgroundColorPrimaryActive: neoDark.active11,
  backgroundColorPrimaryDisabled: neoDark.disabled01,

  shadowColorPrimaryFocus: neoDark.focus01,

  fontColorPrimary: neoDark.textColor09,
  fontColorPrimaryDisabled: neoDark.disabled04,

  // Secondary
  backgroundColorSecondary: neoDark.action02,
  backgroundColorSecondaryHover: neoDark.hover02,
  backgroundColorSecondaryActive: neoDark.active02,
  backgroundColorSecondaryDisabled: neoDark.disabled01,

  shadowColorSecondaryFocus: neoDark.focus01,

  fontColorSecondary: neoDark.textColor04,
  fontColorSecondaryDisabled: neoDark.disabled04,

  // Tertiary
  backgroundColorTertiaryHover: neoDark.hover02,
  backgroundColorTertiaryActive: neoDark.active02,
  backgroundColorTertiaryDisabled: neoDark.disabled01,

  borderColorTertiary: neoDark.ui01,
  borderColorTertiaryHover: neoDark.hover02,
  borderColorTertiaryActive: neoDark.active02,
  borderColorTertiaryDisabled: neoDark.disabled01,

  shadowColorTertiaryFocus: neoDark.focus01,

  fontColorTertiary: neoDark.textColor01,
  fontColorTertiaryActive: neoDark.icon05,
  fontColorTertiaryHover: neoDark.icon05,
  fontColorTertiaryDisabled: neoDark.icon03,

  // Tertiary Reversed
  backgroundColorTertiaryReversedHover: neoDark.hover09,
  backgroundColorTertiaryReversedActive: neoDark.active09,
  backgroundColorTertiaryReversedDisabled: neoDark.disabled01,

  borderColorTertiaryReversed: neoDark.ui08,
  borderColorTertiaryReversedHover: neoDark.hover09,
  borderColorTertiaryReversedActive: neoDark.active09,
  borderColorTertiaryReversedDisabled: neoDark.disabled01,

  fontColorTertiaryReversed: neoDark.textColor04,
  fontColorTertiaryReversedActive: neoDark.icon01,
  fontColorTertiaryReversedHover: neoDark.icon01,
  fontColorTertiaryReversedDisabled: neoDark.icon07,

  // Destructive
  backgroundColorDestructive: neoDark.action03,
  backgroundColorDestructiveHover: neoDark.hover03,
  backgroundColorDestructiveActive: neoDark.active03,
  backgroundColorDestructiveDisabled: neoDark.disabled01,

  shadowColorDestructiveFocus: neoDark.focus01,

  fontColorDestructive: neoDark.textColor06,
  fontColorDestructiveDisabled: neoDark.disabled04,

  // Success
  backgroundColorSuccess: neoDark.success01,
  backgroundColorSuccessHover: neoDark.hover04,
  backgroundColorSuccessActive: neoDark.active04,
  backgroundColorSuccessDisabled: neoDark.disabled01,

  shadowColorSuccessFocus: neoDark.focus01,

  fontColorSuccess: neoDark.textColor06,
  fontColorSuccessDisabled: neoDark.disabled04,

  // Shadow
  shadowBackgroundColorFocus: neoDark.ui06,
};

// the "types" here are deprecated, use the exports from the button package instead
const buttonSize = {
  small: 'small',
  big: 'big',
  large: 'large',
  medium: 'medium',
};

const buttonGroupSpacing = {
  small: 'small',
  large: 'large',
};

const buttonVariant = {
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  destructive: 'destructive',
  tertiary: 'tertiary',
  tertiaryReversed: 'tertiaryReversed',
};

export {
  button,
  buttonNovo,
  buttonNovoDark,
  buttonNeoLight,
  buttonNeoDark,
  buttonSize,
  buttonGroupSpacing,
  buttonVariant,
};
