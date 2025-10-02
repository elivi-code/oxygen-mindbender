import { rgba } from 'polished';
import { css, FlattenSimpleInterpolation, keyframes } from 'styled-components';
import themes from '@8x8/oxygen-theme';

import color from '../choices/color.const';
import size from '../choices/size.const';
import spacing from '../choices/spacing.const';
import timing from '../choices/timing.const';
import zIndex from '../choices/zIndex.const';
import font from '../choices/font.const';

const { light, dark, neoLight, neoDark } = themes;

const animation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  70% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInAnimation = css`
  animation: ${animation} ${timing.medium} ease-in;
`;

const fadeInAnimationNovo = css`
  animation: ${animation} 150ms ease-in;
`;

export interface ModalTheme {
  zIndex: number;
  widthSmall: string;
  width: string;
  widthLarge: string;
  minHeight: string;
  modalOffsetMinimal: string;
  backgroundColor: string;
  shadowSize: string;
  shadowColor: string;
  borderRadius: string;
  animation: string | FlattenSimpleInterpolation;
  headerPadding: string;
  headerPaddingRightWithIcon: string;
  headerShadowSize: string;
  headerShadowColor: string;
  headerFontFamily: string;
  headerTitleFontSize: string;
  headerTitleLineHeight: string;
  headerTitleFontWeight: string | number;
  headerTitleFontLetterSpacing: string;
  headerTitleColor: string;
  headerPaddingNoContent?: string;
  headerTitleWrap: boolean;
  /**
   * @deprecated
   */
  headerIconTop: string;
  /**
   * @deprecated
   */
  headerIconRight: string;
  /**
   * @deprecated
   */
  headerIconColor: string;
  /**
   * @deprecated
   */
  headerIconColorActive: string;
  /**
   * @deprecated
   */
  headerIconColorFocus: string;
  /**
   * @deprecated
   */
  headerIconColorHover: string;
  /**
   * @deprecated
   */
  headerIconBackgroundActive: string;
  /**
   * @deprecated
   */
  headerIconBackgroundFocus: string;
  /**
   * @deprecated
   */
  headerIconBackgroundHover: string;
  /**
   * @deprecated
   */
  headerIconBorderFocus: string;
  contentColor: string;
  contentPadding: string;
  contentFontFamily: string;
  contentFontSize: string;
  contentLineHeight: string;
  contentFontWeight: string | number;
  contentFontLetterSpacing: string;
  footerPadding?: string;
  footerPaddingSmall?: string; // novo
  footerPaddingNoContent?: string; // novo
  footerPaddingHorizontal?: string; // classic
  footerPaddingSmallHorizontal?: string; // classic
  footerPaddingVertical?: string; // classic
  footerShadowSize: string;
  footerShadowColor: string;
  footerButtonSpacing: string;
}

const modal: ModalTheme = {
  zIndex: zIndex.z2000,
  widthSmall: '620px',
  width: '620px',
  widthLarge: '960px',
  minHeight: '360px',
  modalOffsetMinimal: spacing.md,
  backgroundColor: color.white,
  shadowSize: size.shadowMedium,
  shadowColor: rgba(color.pickledBluewood800, 0.1),
  borderRadius: size.borderRadiusMedium,
  animation: fadeInAnimation,
  headerPadding: spacing.md,
  headerPaddingRightWithIcon: '56px',
  headerShadowSize: size.shadowSmall,
  headerShadowColor: color.cloudyBlue300,
  headerFontFamily: font.family,
  headerTitleFontSize: font.sizeLg,
  headerTitleLineHeight: font.lineHeightLg,
  headerTitleFontWeight: font.weightAttention,
  headerTitleFontLetterSpacing: 'normal',
  headerTitleColor: undefined,
  headerTitleWrap: true,
  headerIconTop: spacing.md,
  headerIconRight: spacing.md,
  headerIconColor: color.steel700,
  headerIconColorActive: color.dodgerBlue,
  headerIconColorFocus: color.dodgerBlue,
  headerIconColorHover: color.dodgerBlue,
  headerIconBackgroundActive: 'transparent',
  headerIconBackgroundFocus: 'transparent',
  headerIconBackgroundHover: 'transparent',
  headerIconBorderFocus: 'transparent',
  contentColor: undefined,
  contentPadding: spacing.md,
  contentFontFamily: font.family,
  contentFontSize: font.sizeSm,
  contentLineHeight: font.lineHeightSm,
  contentFontWeight: font.weightDefault,
  contentFontLetterSpacing: 'normal',
  footerPaddingHorizontal: size.medium,
  footerPaddingSmallHorizontal: size.default2x,
  footerPaddingVertical: size.default2x,
  footerShadowSize: size.shadowSmall,
  footerShadowColor: color.cloudyBlue300,
  footerButtonSpacing: spacing.md,
};

const modalNovo: ModalTheme = {
  animation: fadeInAnimationNovo,
  backgroundColor: light.ui06,
  borderRadius: '6px',
  modalOffsetMinimal: light.spacing07,
  shadowColor: rgba(light.shadow01, 0.25),
  shadowSize: '0 6px 20px',
  minHeight: '0',
  width: '436px',
  widthLarge: '664px',
  widthSmall: '320px',
  zIndex: zIndex.z2000,
  headerPadding: `${light.spacing05}`,
  headerPaddingNoContent: `${light.spacing05}`,
  headerPaddingRightWithIcon: light.spacing09,
  headerShadowSize: '0 1px 0 0',
  headerShadowColor: light.ui02,
  headerFontFamily: light.heading01.fontFamily,
  headerTitleColor: light.textColor01,
  headerTitleFontSize: light.heading01.fontSize,
  headerTitleFontWeight: light.heading01.fontWeight,
  headerTitleFontLetterSpacing: light.heading01.letterSpacing,
  headerTitleLineHeight: light.heading01.lineHeight,
  headerTitleWrap: false,
  headerIconTop: '34px',
  headerIconRight: light.spacing05,
  headerIconColor: light.icon01,
  headerIconColorActive: light.icon01,
  headerIconColorFocus: light.icon01,
  headerIconColorHover: light.icon01,
  headerIconBackgroundActive: light.active05,
  headerIconBackgroundFocus: 'transparent',
  headerIconBackgroundHover: light.hover05,
  headerIconBorderFocus: light.focus01,
  contentColor: light.textColor01,
  contentFontFamily: light.body01.fontFamily,
  contentFontLetterSpacing: light.body01.letterSpacing,
  contentFontSize: light.body01.fontSize,
  contentFontWeight: light.body01.fontWeight,
  contentLineHeight: light.body01.lineHeight,
  contentPadding: `0 ${light.spacing05}`,
  footerPadding: `${light.spacing05}`,
  footerPaddingSmall: `${light.spacing05}`,
  footerPaddingNoContent: `${light.spacing05}`,
  footerButtonSpacing: light.spacing03,
  footerShadowSize: '0 1px 0 0',
  footerShadowColor: light.ui02,
};
const modalNovoDark: ModalTheme = {
  ...modalNovo,
  backgroundColor: dark.ui06,
  shadowColor: rgba(dark.shadow01, 0.25),
  headerShadowColor: dark.ui02,
  headerTitleColor: dark.textColor01,
  headerIconColor: dark.icon01,
  headerIconColorActive: dark.icon01,
  headerIconColorFocus: dark.icon01,
  headerIconColorHover: dark.icon01,
  headerIconBackgroundActive: dark.active05,
  headerIconBackgroundFocus: 'transparent',
  headerIconBackgroundHover: dark.hover05,
  headerIconBorderFocus: dark.focus01,
  contentColor: dark.textColor01,
  footerShadowColor: dark.ui02,
};

const modalNeoLight: ModalTheme = {
  ...modalNovo,
  backgroundColor: neoLight.ui06,
  shadowColor: rgba(neoLight.shadow01, 0.25),
  headerShadowColor: neoLight.ui02,
  headerTitleColor: neoLight.textColor01,
  headerIconColor: neoLight.icon01,
  headerIconColorActive: neoLight.icon01,
  headerIconColorFocus: neoLight.icon01,
  headerIconColorHover: neoLight.icon01,
  headerIconBackgroundActive: neoLight.active05,
  headerIconBackgroundHover: neoLight.hover05,
  headerIconBorderFocus: neoLight.focus01,
  contentColor: neoLight.textColor01,
  footerShadowColor: neoLight.ui02,
};

const modalNeoDark: ModalTheme = {
  ...modalNovoDark,
  backgroundColor: neoDark.ui06,
  shadowColor: rgba(neoDark.shadow01, 0.25),
  headerShadowColor: neoDark.ui02,
  headerTitleColor: neoDark.textColor01,
  headerIconColor: neoDark.icon01,
  headerIconColorActive: neoDark.icon01,
  headerIconColorFocus: neoDark.icon01,
  headerIconColorHover: neoDark.icon01,
  headerIconBackgroundActive: neoDark.active05,
  headerIconBackgroundHover: neoDark.hover05,
  headerIconBorderFocus: neoDark.focus01,
  contentColor: neoDark.textColor01,
  footerShadowColor: neoDark.ui02,
};

export { modal, modalNovo, modalNovoDark, modalNeoLight, modalNeoDark };
