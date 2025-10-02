import themes from '@8x8/oxygen-theme';

import color from '../choices/color.const';
import size from '../choices/size.const';
import font from '../choices/font.const';

const { light, dark, neoLight, neoDark } = themes;

export interface BadgeTheme {
  backgroundColorPrimary: string;
  backgroundColorSecondary: string;
  fontColorPrimary: string;
  fontColorSecondary: string;
  fontFamily: string;
  fontSizeBig: string;
  fontSizeMedium: string;
  fontSizeSmall: number;
  fontWeight: string | number;
  lineHeightBig: string;
  lineHeightMedium: string;
  lineHeightSmall: number;
  paddingBig: string;
  paddingMedium: string;
  paddingSmall: string | number;
  positionOuterBig: string;
  positionOuterMedium: string;
  positionOuterSmall: string;
  sizeBig: string;
  sizeMedium: string;
  sizeSmall: string;
}

const badge: BadgeTheme = {
  backgroundColorPrimary: color.coral400,
  backgroundColorSecondary: color.goldenBell,
  fontColorPrimary: color.white,
  fontColorSecondary: color.pickledBluewood800,
  fontFamily: font.family,
  fontSizeBig: font.sizeXs,
  fontSizeMedium: font.sizeXs,
  fontSizeSmall: 0,
  fontWeight: 400,
  lineHeightBig: font.lineHeightSm,
  lineHeightMedium: font.lineHeightXs,
  lineHeightSmall: 0,
  paddingBig: size.small,
  paddingMedium: size.small,
  paddingSmall: 0,
  positionOuterBig: '10px',
  positionOuterMedium: '8px',
  positionOuterSmall: '3px',
  sizeBig: size.medium,
  sizeMedium: '18px',
  sizeSmall: size.default,
};

const badgeNovo: BadgeTheme = {
  ...badge,
  backgroundColorPrimary: light.warning01,
  backgroundColorSecondary: light.warning01,
  fontColorPrimary: light.textColor07,
  fontColorSecondary: light.textColor07,
  fontFamily: light.labelBold01.fontFamily,
  fontSizeMedium: light.labelBold01.fontSize,
  fontSizeBig: light.labelBold01.fontSize,
  fontWeight: light.labelBold01.fontWeight,
  lineHeightMedium: light.labelBold01.lineHeight,
  lineHeightBig: light.labelBold01.lineHeight,
  paddingMedium: light.spacing02,
  sizeBig: '1rem',
  sizeMedium: '1rem',
  sizeSmall: '0.75rem',
  positionOuterBig: '0.5rem',
  positionOuterMedium: '0.5rem',
  positionOuterSmall: '0.375rem',
};

const badgeNovoDark: BadgeTheme = {
  ...badgeNovo,
  backgroundColorPrimary: light.warning01,
  backgroundColorSecondary: light.warning01,
  fontColorPrimary: light.textColor07,
  fontColorSecondary: light.textColor07,
};

const badgeNeoLight = {
  ...badgeNovo,
  backgroundColorPrimary: neoLight.warning01,
  backgroundColorSecondary: neoLight.warning01,
  fontColorPrimary: neoLight.textColor07,
  fontColorSecondary: neoLight.textColor07,
};

const badgeNeoDark = {
  ...badgeNovoDark,
  backgroundColorPrimary: neoDark.warning01,
  backgroundColorSecondary: neoDark.warning01,
  fontColorPrimary: neoDark.textColor07,
  fontColorSecondary: neoDark.textColor07,
};

/** @deprecated */
const badgeType = {
  primary: 'primary',
  secondary: 'secondary',
};

/** @deprecated */
const badgeSize = {
  small: 'small',
  medium: 'medium',
  /** @deprecated */
  big: 'big',
};

/** @deprecated */
const badgePosition = {
  /** @deprecated */
  topLeft: 'tl',
  /** @deprecated */
  topRight: 'tr',
  /** @deprecated */
  bottomLeft: 'bl',
  /** @deprecated */
  bottomRight: 'br',
  'top-start': 'top-start',
  'top-end': 'top-end',
  'bottom-start': 'bottom-start',
  'bottom-end': 'bottom-end',
};

export {
  badge,
  badgeNovo,
  badgeNovoDark,
  badgeNeoLight,
  badgeNeoDark,
  badgeType,
  badgeSize,
  badgePosition,
};
