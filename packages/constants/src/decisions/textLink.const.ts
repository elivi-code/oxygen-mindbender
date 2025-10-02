import themes, { TypographySet } from '@8x8/oxygen-theme';

import color from '../choices/color.const';
import font from '../choices/font.const';
import spacing from '../choices/spacing.const';

const { light, dark, neoLight, neoDark } = themes;

export interface TextLinkTheme extends TypographySet {
  /** @deprecated */
  fontFamily: string;
  /** @deprecated */
  fontSize: string;
  /** @deprecated */
  lineHeight: string;
  /** @deprecated */
  fontWeight: string | number;
  /** @deprecated */
  letterSpacing: string;
  textLinkColorPrimary: string;
  textLinkColorPrimaryHover: string;
  textLinkColorPrimaryActive: string;
  textLinkColorPrimaryDisabled: string;
  /** @deprecated */
  textLinkColorPrimarySelected: string;
  /** @deprecated */
  textLinkBackgroundColorPrimarySelected: string;
  textLinkMargin: string;
  /** @deprecated */
  textLinkPadding: string;
  textLinkBorderWidthFocus: string;
  textLinkBorderRadiusFocus: string;
  textLinkShadowColorFocus: string;
}

const textLink: TextLinkTheme = {
  fontFamily: font.family,
  fontSize: font.sizeSm,
  lineHeight: font.lineHeightSm,
  fontWeight: font.weightDefault,
  letterSpacing: undefined,
  textLinkColorPrimary: color.dodgerBlue,
  textLinkColorPrimaryHover: color.dodgerBlue300,
  textLinkColorPrimaryActive: color.dodgerBlue,
  textLinkColorPrimaryDisabled: color.dodgerBlue300,
  textLinkColorPrimarySelected: 'inherit',
  textLinkBackgroundColorPrimarySelected: 'inherit',
  textLinkMargin: '0',
  textLinkPadding: `0 ${spacing.xxs}`,
  textLinkBorderWidthFocus: '2px',
  textLinkBorderRadiusFocus: '2px',
  textLinkShadowColorFocus: color.dodgerBlue,
};

const textLinkNovo: TextLinkTheme = {
  // Typography
  ...light.body02,
  textLinkMargin: '0',
  textLinkPadding: `0 ${light.spacing02}`,
  textLinkBorderWidthFocus: '2px',
  textLinkBorderRadiusFocus: '2px',
  textLinkShadowColorFocus: light.focus01,
  textLinkColorPrimary: light.action05,
  textLinkColorPrimaryHover: light.hover07,
  textLinkColorPrimaryActive: light.active07,
  textLinkColorPrimaryDisabled: light.disabled02,
  textLinkColorPrimarySelected: 'inherit',
  textLinkBackgroundColorPrimarySelected: 'inherit',
};
const textLinkNovoDark: TextLinkTheme = {
  ...textLinkNovo,
  textLinkColorPrimary: dark.action05,
  textLinkColorPrimaryHover: dark.hover07,
  textLinkColorPrimaryActive: dark.active07,
  textLinkColorPrimaryDisabled: dark.disabled02,
  textLinkShadowColorFocus: dark.focus01,
};

const textLinkNeoLight: TextLinkTheme = {
  ...textLinkNovo,
  textLinkShadowColorFocus: neoLight.focus01,
  textLinkColorPrimary: neoLight.action05,
  textLinkColorPrimaryHover: neoLight.hover07,
  textLinkColorPrimaryActive: neoLight.active07,
  textLinkColorPrimaryDisabled: neoLight.disabled02,
};

const textLinkNeoDark: TextLinkTheme = {
  ...textLinkNovoDark,
  textLinkColorPrimary: neoDark.action05,
  textLinkColorPrimaryHover: neoDark.hover07,
  textLinkColorPrimaryActive: neoDark.active07,
  textLinkColorPrimaryDisabled: neoDark.disabled02,
  textLinkShadowColorFocus: neoDark.focus01,
};

export {
  textLink,
  textLinkNovo,
  textLinkNovoDark,
  textLinkNeoLight,
  textLinkNeoDark,
};
