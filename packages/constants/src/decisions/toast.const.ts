import { rgba } from 'polished';

import themes, { TypographySet } from '@8x8/oxygen-theme';

import color from '../choices/color.const';
import font from '../choices/font.const';
import size from '../choices/size.const';
import timing from '../choices/timing.const';
import zIndex from '../choices/zIndex.const';
import {
  textLink,
  textLinkNovo,
  textLinkNovoDark,
  textLinkNeoLight,
  textLinkNeoDark,
  TextLinkTheme,
} from './textLink.const';

const { light, dark, neoLight, neoDark } = themes;

const verticalPaddingOffset = 4;

export interface TextLinkI extends TypographySet, TextLinkTheme {}

export interface ToastTheme {
  toastSmall: string;
  toastMedium: string;
  toastLarge: string;
  animationEnterDuration: number;
  animationEnterTimingFunction: string;
  animationExitDuration: number;
  animationExitTimingFunction: string;
  animationFlipDuration: number;
  backgroundColor: string;
  backgroundColorError: string;
  color: string;
  colorError: string;
  colorTitle: string;
  colorDescription: string;
  colorAction: string;
  closeIconColor: string;
  markingColorError: string;
  markingIconColorError: string;
  markingColorInfo: string;
  markingIconColorInfo: string;
  markingColorSuccess: string;
  markingIconColorSuccess: string;
  markingColorWarning: string;
  markingIconColorWarning: string;
  markingColorLoading: string;
  markingIconColorLoading: string;
  boxShadow: string;
  fontFamily: string;
  fontSize: string;
  fontWeight: string | number;
  lineHeight: string;
  fontFamilyTitle: string;
  fontSizeTitle: string;
  fontWeightTitle: string | number;
  letterSpacingTitle: string;
  lineHeightTitle: string;
  fontFamilyDescription: string;
  fontSizeDescription: string;
  fontWeightDescription: string | number;
  letterSpacingDescription: string;
  lineHeightDescription: string;
  letterSpacing: string;
  fontStyle: string;
  fontStretch: string;
  textAlign: string;
  borderRadius: string;
  borderColor?: string;
  padding: string;
  maxHeight: string;
  maxWidth: string;
  stackMargin: string;
  /*
   * @deprecated
   */
  structureMargin: string;
  zIndex: number;
  iconSize: number;
  textLinkAsAction?: TextLinkI;
  marginControl: string;
  isClassic: boolean;
}

const toast: ToastTheme = {
  // Sizes
  toastSmall: '368px',
  toastMedium: '480px',
  toastLarge: '800px',

  // Animation
  animationEnterDuration: 300,
  animationEnterTimingFunction: 'easeIn',
  animationExitDuration: 150,
  animationExitTimingFunction: 'easeOut',
  animationFlipDuration: 150,

  // Types
  backgroundColor: color.steel700,
  backgroundColorError: color.goldenBell,

  color: color.white,
  colorError: color.pickledBluewood800,

  colorTitle: undefined,
  colorDescription: undefined,
  colorAction: undefined,

  textLinkAsAction: {
    ...textLink,
    textLinkPadding: '0',
  },

  closeIconColor: undefined,
  markingColorError: undefined,
  markingColorInfo: undefined,
  markingColorSuccess: undefined,
  markingColorWarning: undefined,
  markingColorLoading: undefined,
  markingIconColorError: undefined,
  markingIconColorInfo: undefined,
  markingIconColorSuccess: undefined,
  markingIconColorWarning: undefined,
  markingIconColorLoading: undefined,

  boxShadow: `0 1px 5px 0 ${rgba(color.pickledBluewood800, 0.2)}`,

  // Typography
  fontFamily: font.family,
  fontSize: font.sizeSm,
  fontWeight: font.weightAttention,
  lineHeight: font.lineHeightSm,

  fontFamilyTitle: undefined,
  fontSizeTitle: undefined,
  fontWeightTitle: undefined,
  letterSpacingTitle: undefined,
  lineHeightTitle: undefined,

  fontFamilyDescription: undefined,
  fontSizeDescription: undefined,
  fontWeightDescription: undefined,
  letterSpacingDescription: undefined,
  lineHeightDescription: undefined,

  letterSpacing: 'normal',
  fontStyle: 'normal',
  fontStretch: 'normal',
  textAlign: 'left',

  // Structure
  borderRadius: size.borderRadiusDefault,

  padding: `${parseInt(size.default2x, 10) - verticalPaddingOffset}px ${
    size.default2x
  }`,

  maxHeight: '120px',
  maxWidth: '100%',
  stackMargin: '16px',

  structureMargin: light.spacing03,

  zIndex: zIndex.z5000,

  iconSize: 20,

  // Control
  marginControl: '12px',

  isClassic: true,
};

const inlineNotification: ToastTheme = { ...toast, borderColor: undefined };

const toastNovo: ToastTheme = {
  isClassic: false,
  // Sizes
  toastSmall: '320px',
  toastMedium: '480px',
  toastLarge: '800px',

  // Animation
  animationEnterDuration: 300,
  animationEnterTimingFunction: 'easeIn',
  animationExitDuration: 150,
  animationExitTimingFunction: 'easeOut',
  animationFlipDuration: 150,

  // Types
  markingColorError: light.error01,
  markingIconColorError: light.error01,
  markingColorInfo: light.info01,
  markingIconColorInfo: light.info01,
  markingColorSuccess: light.success01,
  markingIconColorSuccess: light.success01,
  markingColorWarning: light.warning01,
  markingIconColorWarning: light.warning03,
  markingColorLoading: light.action04,
  markingIconColorLoading: light.action04,

  color: undefined,
  colorError: undefined,

  colorTitle: light.textColor04,
  colorDescription: light.textColor04,
  colorAction: light.action06,

  textLinkAsAction: {
    ...textLinkNovoDark,
    ...light.bodyBold01,
    textLinkPadding: '0',
  },

  closeIconColor: light.icon05,

  backgroundColor: light.ui07,
  backgroundColorError: undefined,

  boxShadow: `0px 6px 20px ${rgba(light.shadow01, 0.25)}`,

  // Typography
  fontFamily: undefined,
  fontSize: undefined,
  fontWeight: undefined,
  lineHeight: undefined,
  letterSpacing: undefined,

  fontFamilyTitle: light.bodyBold01.fontFamily,
  fontSizeTitle: light.bodyBold01.fontSize,
  fontWeightTitle: light.bodyBold01.fontWeight,
  letterSpacingTitle: light.bodyBold01.letterSpacing,
  lineHeightTitle: light.bodyBold01.lineHeight,

  fontFamilyDescription: light.body01.fontFamily,
  fontSizeDescription: light.body01.fontSize,
  fontWeightDescription: light.body01.fontWeight,
  letterSpacingDescription: light.body01.letterSpacing,
  lineHeightDescription: light.body01.lineHeight,

  fontStyle: 'normal',
  fontStretch: 'normal',

  textAlign: 'left',

  // Structure
  borderRadius: '6px',

  stackMargin: light.spacing03,
  maxHeight: '16rem',
  maxWidth: '100%',

  padding: `${light.spacing03} ${light.spacing05} ${light.spacing03} 0`,

  zIndex: 5000,

  iconSize: 20,

  structureMargin: light.spacing03,

  // Control
  marginControl: undefined,
};
const toastNovoDark: ToastTheme = {
  ...toastNovo,

  // Types
  markingColorError: dark.error01,
  markingIconColorError: dark.error01,
  markingColorInfo: dark.info01,
  markingIconColorInfo: dark.info01,
  markingColorSuccess: dark.success01,
  markingIconColorSuccess: dark.success01,
  markingColorWarning: dark.warning01,
  markingIconColorWarning: dark.warning03,

  colorTitle: dark.textColor04,
  colorDescription: dark.textColor04,
  colorAction: dark.action06,

  closeIconColor: dark.icon05,

  textLinkAsAction: {
    ...textLinkNovo,
    ...light.bodyBold01,
    textLinkPadding: '0',
  },

  backgroundColor: dark.ui07,

  boxShadow: `0px 6px 20px ${rgba(dark.shadow01, 0.25)}`,
};

const toastNeoLight: ToastTheme = {
  ...toastNovo,
  markingColorError: neoLight.error01,
  markingIconColorError: neoLight.error01,
  markingColorInfo: neoLight.info01,
  markingIconColorInfo: neoLight.info01,
  markingColorSuccess: neoLight.success01,
  markingIconColorSuccess: neoLight.success01,
  markingColorWarning: neoLight.warning01,
  markingIconColorWarning: neoLight.warning03,
  markingColorLoading: neoLight.action04,
  markingIconColorLoading: neoLight.action04,
  colorTitle: neoLight.textColor04,
  colorDescription: neoLight.textColor04,
  colorAction: neoLight.action06,
  textLinkAsAction: {
    ...textLinkNeoDark,
    ...neoDark.bodyBold01,
    textLinkPadding: '0',
  },
  closeIconColor: neoLight.icon05,
  backgroundColor: neoLight.ui07,
  boxShadow: `0px 6px 20px ${rgba(neoLight.shadow01, 0.25)}`,
};

const toastNeoDark: ToastTheme = {
  ...toastNovoDark,
  markingColorError: neoDark.error01,
  markingIconColorError: neoDark.error01,
  markingColorInfo: neoDark.info01,
  markingIconColorInfo: neoDark.info01,
  markingColorSuccess: neoDark.success01,
  markingIconColorSuccess: neoDark.success01,
  markingColorWarning: neoDark.warning01,
  markingIconColorWarning: neoDark.warning03,
  colorTitle: neoDark.textColor04,
  colorDescription: neoDark.textColor04,
  colorAction: neoDark.action06,
  closeIconColor: neoDark.icon05,
  textLinkAsAction: {
    ...textLinkNeoLight,
    ...neoLight.bodyBold01,
    textLinkPadding: '0',
  },
  backgroundColor: neoDark.ui07,
  boxShadow: `0px 6px 20px ${rgba(neoDark.shadow01, 0.25)}`,
};

const inlineNotificationNovo: ToastTheme = {
  ...toastNovoDark,
  borderColor: light.ui01,
  backgroundColor: light.ui06,
  markingIconColorWarning: light.warning02,
};

const inlineNotificationNovoDark: ToastTheme = {
  ...toastNovo,
  borderColor: dark.ui01,
  backgroundColor: dark.ui06,
  markingIconColorWarning: dark.warning02,
};

const inlineNotificationNeoLight: ToastTheme = {
  ...inlineNotificationNovo,
  borderColor: neoLight.ui01,
  backgroundColor: neoLight.ui06,
  markingIconColorWarning: neoLight.warning02,
};

const inlineNotificationNeoDark: ToastTheme = {
  ...inlineNotificationNovoDark,
  borderColor: neoDark.ui01,
  backgroundColor: neoDark.ui06,
  markingIconColorWarning: neoDark.warning02,
};

const toastSizes = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};

const toastTypes = {
  success: 'success',
  error: 'error',
  warning: 'warning',
  info: 'info',
  loading: 'loading',
};

export {
  toast,
  inlineNotification,
  toastNovo,
  toastNovoDark,
  toastNeoLight,
  toastNeoDark,
  inlineNotificationNovo,
  inlineNotificationNovoDark,
  inlineNotificationNeoLight,
  inlineNotificationNeoDark,
  toastSizes,
  toastTypes,
};
