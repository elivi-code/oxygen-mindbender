import { rgba } from 'polished';

import themes from '@8x8/oxygen-theme';

import color from '../choices/color.const';
import size from '../choices/size.const';
import spacing from '../choices/spacing.const';
import timing from '../choices/timing.const';
import font from '../choices/font.const';
import zIndex from '../choices/zIndex.const';

const { light, dark, neoLight, neoDark } = themes;

export interface DateTimeSelectorTheme {
  fontSize: string;
  lineHeight: string;
  fontFamily: string;
  letterSpacing: string;
  fontWeight: number | string;
  borderColor: string;
  borderColorOpen: string;
  borderColorError: string;
  borderSize: string;
  borderRadius: number | string;
  width: string;
  heightSmall: string;
  heightLarge: string;
  backgroundColor: string;
  backgroundColorDisabled: string;
  color: string;
  colorDisabled: string;
  placeholderColor: string;
  paddingVerticalSmall: string;
  paddingVerticalLarge: string;
  paddingHorizontal: string;
  iconColor: string;
  iconMinSize: string;
  transitionTiming: string;
  iconMargin: string;
  containerZIndex: number;
  containerBorderSize: string;
  containerBorderColor: string;
  containerShadowBlurRadius: string;
  containerShadowColor: string;
  containerPadding: string;
  containerBackgroundColor: string;
  containerAnimationDuration: string;
  footerPadding: string;
  footerBorderSize: string;
  footerBorderColor: string;
  containerBorderRadius: string;
  clearIconColor: string;
  clearIconHoverColor: string;
  isClassic: boolean;
}

const dateTimeSelector: DateTimeSelectorTheme = {
  fontSize: font.sizeSm,
  lineHeight: font.lineHeightSm,
  fontFamily: font.family,
  letterSpacing: undefined,
  fontWeight: undefined,

  // Input Box
  borderColor: color.cloudyBlue300,
  borderColorOpen: color.dodgerBlue,
  borderColorError: color.coral,
  borderSize: size.borderSizeDefault,
  borderRadius: 0,
  width: '330px',
  heightSmall: size.formItemSizeSmall,
  heightLarge: size.formItemSizeLarge,
  backgroundColor: color.white,
  backgroundColorDisabled: color.cloudyBlue100,
  color: color.pickledBluewood800,
  colorDisabled: color.cloudyBlue,
  placeholderColor: color.cloudyBlue,
  paddingVerticalSmall: `${
    parseInt(spacing.xxs, 10) - parseInt(size.borderSizeDefault, 10)
  }px`,
  paddingVerticalLarge: `${
    parseInt(spacing.xs, 10) - parseInt(size.borderSizeDefault, 10)
  }px`,
  paddingHorizontal: spacing.sm,
  iconColor: color.steel700,
  iconMinSize: size.medium,
  transitionTiming: timing.fast,
  iconMargin: spacing.xs,

  // Dropdown container
  containerZIndex: zIndex.z2000 + 500,
  containerBorderSize: size.borderSizeDefault,
  containerBorderColor: color.cloudyBlue300,
  containerShadowBlurRadius: size.small,
  containerShadowColor: color.cloudyBlue300,
  containerPadding: spacing.lg,
  containerBackgroundColor: color.white,
  containerAnimationDuration: timing.fast,

  footerPadding: spacing.md,
  footerBorderSize: size.borderSizeDefault,
  footerBorderColor: color.cloudyBlue300,

  containerBorderRadius: undefined,

  // Clear icon
  clearIconColor: color.cloudyBlue,
  clearIconHoverColor: color.steel700,

  isClassic: true,
};

const dateTimeSelectorNovo: DateTimeSelectorTheme = {
  isClassic: false,

  // Typography
  ...light.body01,

  // Input Box
  borderColor: light.ui05,
  borderColorOpen: light.focus01,
  borderColorError: light.action03,
  borderSize: '2px',
  borderRadius: '6px',
  width: '330px',
  heightSmall: '32px',
  heightLarge: '40px',
  backgroundColor: light.ui05,
  backgroundColorDisabled: undefined,

  color: light.textColor01,
  colorDisabled: light.disabled02,
  placeholderColor: light.textColor02,

  paddingVerticalSmall: `${
    parseInt(light.spacing02, 10) - parseInt('2px', 10)
  }px`,
  paddingVerticalLarge: `${
    parseInt(light.spacing03, 10) - parseInt('2px', 10)
  }px`,
  paddingHorizontal: light.spacing04,

  iconColor: light.icon01,

  iconMinSize: '24px',
  transitionTiming: '150ms',
  iconMargin: light.spacing03,

  // Dropdown container
  containerZIndex: 2000 + 500,
  containerBorderSize: '1px',
  containerBorderColor: light.ui01,
  containerShadowBlurRadius: undefined,
  containerBorderRadius: '6px',

  containerShadowColor: rgba(light.shadow01, 0.25),
  containerPadding: light.spacing06,
  containerBackgroundColor: light.ui06,
  containerAnimationDuration: timing.fast,

  footerPadding: light.spacing05,
  footerBorderSize: '1px',
  footerBorderColor: light.ui01,

  // Clear icon
  clearIconColor: light.icon01,
  clearIconHoverColor: light.action04,
};

const dateTimeSelectorNovoDark: DateTimeSelectorTheme = {
  ...dateTimeSelectorNovo,

  // Input Box
  borderColor: dark.ui05,
  borderColorOpen: dark.focus01,
  borderColorError: dark.action03,

  backgroundColor: dark.ui05,
  backgroundColorDisabled: undefined,

  color: dark.textColor01,
  colorDisabled: dark.disabled02,
  placeholderColor: dark.textColor02,

  iconColor: dark.icon01,

  // Dropdown container
  containerBorderColor: dark.ui01,
  containerShadowColor: rgba(dark.shadow01, 0.25),

  containerBackgroundColor: dark.ui06,

  footerBorderColor: dark.ui01,

  // Clear icon
  clearIconColor: dark.icon01,
  clearIconHoverColor: dark.action04,
};

const dateTimeSelectorNeoLight: DateTimeSelectorTheme = {
  ...dateTimeSelectorNovo,
  borderColor: neoLight.ui05,
  borderColorOpen: neoLight.focus01,
  borderColorError: neoLight.action03,
  backgroundColor: neoLight.ui05,
  color: neoLight.textColor01,
  colorDisabled: neoLight.disabled02,
  placeholderColor: neoLight.textColor02,
  iconColor: neoLight.icon01,
  containerBorderColor: neoLight.ui01,
  containerShadowColor: rgba(neoLight.shadow01, 0.25),
  containerBackgroundColor: neoLight.ui06,
  footerPadding: neoLight.spacing05,
  footerBorderColor: neoLight.ui01,
  clearIconColor: neoLight.icon01,
  clearIconHoverColor: neoLight.action04,
};

const dateTimeSelectorNeoDark: DateTimeSelectorTheme = {
  ...dateTimeSelectorNovoDark,
  borderColor: neoDark.ui05,
  borderColorOpen: neoDark.focus01,
  borderColorError: neoDark.action03,
  backgroundColor: neoDark.ui05,
  color: neoDark.textColor01,
  colorDisabled: neoDark.disabled02,
  placeholderColor: neoDark.textColor02,
  iconColor: neoDark.icon01,
  containerBorderColor: neoDark.ui01,
  containerShadowColor: rgba(neoDark.shadow01, 0.25),
  containerBackgroundColor: neoDark.ui06,
  footerBorderColor: neoDark.ui01,
  clearIconColor: neoDark.icon01,
  clearIconHoverColor: neoDark.action04,
};

export {
  dateTimeSelector,
  dateTimeSelectorNovo,
  dateTimeSelectorNovoDark,
  dateTimeSelectorNeoLight,
  dateTimeSelectorNeoDark,
};
