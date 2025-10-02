import themes from '@8x8/oxygen-theme';

import color from '../choices/color.const';
import size from '../choices/size.const';
import font from '../choices/font.const';

const { light, dark, neoLight, neoDark } = themes;

export interface AvatarTheme {
  size3xsmall: string;
  size2xsmall: string;
  sizeXsmall: string;
  sizeSmall: string;
  sizeMedium: string;
  sizeLarge: string;
  sizeXlarge: string;
  size2xlarge: string;
  size3xlarge: string;
  font3xsmall: string;
  font2xsmall: string;
  fontXsmall: string;
  fontSmall: string;
  fontMedium: string;
  fontLarge: string;
  fontXlarge: string;
  font2xlarge: string;
  font3xlarge: string;
  icon3xsmall: number;
  icon2xsmall: number;
  iconXsmall: number;
  iconSmall: number;
  iconMedium: number;
  iconLarge: number;
  iconXlarge: number;
  icon2xlarge: number;
  icon3xlarge: number;
  avatarBackgroundColor: string;
  borderColor: string;
  initialsColor: string;
  initialsFontFamily: string;
  /**
   * @deprecated
   */
  placeholderIconColor: string;
  editOverlayColor: string;
  editIconColor: string;
  editIconSmallSize: string;
  editIconLargeSize: string;
  /**
   * @deprecated
   */
  hoverOverlayColor?: string;
  focusBorderColor?: string;
  innerBorderColor?: string;
  iconSet?: 'novo';
}

// Classic
const avatar: AvatarTheme = {
  size3xsmall: '16px',
  size2xsmall: '24px',
  sizeXsmall: '32px',
  sizeSmall: '40px',
  sizeMedium: '48px',
  sizeLarge: '64px',
  sizeXlarge: '72px',
  size2xlarge: '80px',
  size3xlarge: '160px',
  font3xsmall: '7px',
  font2xsmall: '10px',
  fontXsmall: '12px',
  fontSmall: '13px',
  fontMedium: '15px',
  fontLarge: '15px',
  fontXlarge: '19px',
  font2xlarge: '19px',
  font3xlarge: '36px',
  icon3xsmall: 10,
  icon2xsmall: 14,
  iconXsmall: 19,
  iconSmall: 24,
  iconMedium: 28,
  iconLarge: 38,
  iconXlarge: 44,
  icon2xlarge: 44,
  icon3xlarge: 76,
  avatarBackgroundColor: color.cloudyBlue,
  borderColor: color.steel700,
  initialsColor: color.pickledBluewood800,
  initialsFontFamily: font.family,
  /**
   * @deprecated
   */
  placeholderIconColor: color.steel700,
  editOverlayColor: color.steel700,
  editIconColor: color.white,
  editIconSmallSize: size.default2x,
  editIconLargeSize: size.medium,
};

// Novo
const avatarNovo: AvatarTheme = {
  ...avatar,
  size2xsmall: light.spacing06,
  sizeXsmall: light.spacing07,
  sizeSmall: light.spacing08,
  sizeMedium: light.spacing09,
  fontXsmall: light.label01.fontSize,
  fontSmall: light.label01.fontSize,
  fontMedium: light.body02.fontSize,
  fontLarge: light.body02.fontSize,
  icon2xsmall: 16,
  iconXsmall: 20,
  iconSmall: 24,
  iconMedium: 32,
  avatarBackgroundColor: light.avatarBackground01,
  borderColor: light.ui06,
  initialsColor: light.avatarText01,
  initialsFontFamily: light.body02.fontFamily,
  /**
   * @deprecated
   */
  placeholderIconColor: light.icon01,
  editOverlayColor: light.icon01,
  editIconColor: light.ui06,
  /**
   * @deprecated
   */
  hoverOverlayColor: light.ui07,
  focusBorderColor: light.action01,
  innerBorderColor: light.ui06,
  iconSet: 'novo',
};

// Novo Dark
const avatarNovoDark: AvatarTheme = {
  ...avatarNovo,
  avatarBackgroundColor: dark.avatarBackground01,
  borderColor: dark.ui06,
  initialsColor: dark.avatarText01,
  /**
   * @deprecated
   */
  placeholderIconColor: dark.icon01,
  editOverlayColor: dark.icon01,
  editIconColor: dark.ui06,
  /**
   * @deprecated
   */
  hoverOverlayColor: dark.ui07,
  focusBorderColor: dark.action01,
  innerBorderColor: dark.ui06,
};

const avatarNeoLight: AvatarTheme = {
  ...avatarNovo,
  avatarBackgroundColor: neoLight.avatarBackground01,
  borderColor: neoLight.ui06,
  initialsColor: neoLight.avatarText01,
  /**
   * @deprecated
   */
  placeholderIconColor: neoLight.icon01,
  editOverlayColor: neoLight.icon01,
  editIconColor: neoLight.ui06,
  /**
   * @deprecated
   */
  hoverOverlayColor: neoLight.ui07,
  focusBorderColor: neoLight.action01,
  innerBorderColor: neoLight.ui06,
};

const avatarNeoDark: AvatarTheme = {
  ...avatarNovoDark,
  avatarBackgroundColor: neoDark.avatarBackground01,
  borderColor: neoDark.ui06,
  initialsColor: neoDark.avatarText01,
  /**
   * @deprecated
   */
  placeholderIconColor: neoDark.icon01,
  editOverlayColor: neoDark.icon01,
  editIconColor: neoDark.ui06,
  /**
   * @deprecated
   */
  hoverOverlayColor: neoDark.ui07,
  focusBorderColor: neoDark.action01,
  innerBorderColor: neoDark.ui06,
};

/**
 * @deprecated Please use the `avatarSize` object directly from the Avatar package: import { avatarSize } from '@8x8/oxygen-avatar';
 */
const avatarSize = {
  size3xsmall: '3xsmall',
  size2xsmall: '2xsmall',
  sizeXsmall: 'xsmall',
  sizeSmall: 'small',
  sizeMedium: 'medium',
  sizeLarge: 'large',
  sizeXlarge: 'xlarge',
  size2xlarge: '2xlarge',
  size3xlarge: '3xlarge',
} as const;

/**
 * @deprecated Please use the `avatarUserStatus` object directly from the Avatar package: import { avatarUserStatus } from '@8x8/oxygen-avatar';
 */
const avatarUserStatus = {
  available: 'available',
  away: 'away',
  busy: 'busy',
  doNotDisturb: 'doNotDisturb',
  onBreak: 'onBreak',
  onCall: 'onCall',
  onDirectCall: 'onDirectCall',
  offline: 'offline',
  workingOffline: 'workingOffline',
  wrapUp: 'wrapUp',
} as const;

export {
  avatar,
  avatarUserStatus,
  avatarSize,
  avatarNovo,
  avatarNovoDark,
  avatarNeoLight,
  avatarNeoDark,
};
