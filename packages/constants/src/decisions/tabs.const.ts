import themes from '@8x8/oxygen-theme';

import color from '../choices/color.const';
import size from '../choices/size.const';
import font from '../choices/font.const';
import timing from '../choices/timing.const';

const { light, dark, neoLight, neoDark } = themes;

export interface TabsTheme {
  isClassic: boolean;
  fontFamily: string;
  fontSize: string;
  fontWeight: string | number;
  lineHeight: string;
  letterSpacing: string;
  selectedFontFamily: string;
  selectedFontSize: string;
  selectedFontWeight: string | number;
  selectedLineHeight: string;
  selectedLetterSpacing: string;
  tabTextColorDark?: string;
  tabTextColorDarkHover?: string;
  tabTextColorDarkActive?: string;
  tabTextColorDarkDisabled?: string;
  tabTextColorLight?: string;
  tabTextColorLightHover?: string;
  tabTextColorLightActive?: string;
  tabTextColorLightDisabled?: string;
  tabHeight: string;
  tabMaxWidth: string;
  tabMinWidth: string;
  tabPadding: string;
  tabBorderRadius: string | number;
  tabBorderTopSize: string | number;
  tabBorderRightSize: string | number;
  tabBorderBottomSize: string;
  tabBorderLeftSize: string | number;
  tabBorderColorDark?: string;
  tabBorderColorDarkHover?: string;
  tabBorderColorDarkActive?: string;
  tabBorderColorDarkDisabled?: string;
  tabBorderColorLight?: string;
  tabBorderColorLightHover?: string;
  tabBorderColorLightActive?: string;
  tabBorderColorLightDisabled?: string;
  tabBackgroundDark?: string;
  tabBackgroundDarkHover?: string;
  tabBackgroundDarkActive?: string;
  tabBackgroundDarkDisabled?: string;
  tabBackgroundLight?: string;
  tabBackgroundLightHover?: string;
  tabBackgroundLightActive?: string;
  tabBackgroundLightDisabled?: string;
  tabTransitionTime: string;
  tabsBarBackgroundDark?: string;
  tabsBarBackgroundLight?: string;
  tabsBarBorderColorDark?: string;
  tabsBarBorderColorLight?: string;
  tabsBarBorderTopSize: string | number;
  tabsBarBorderRightSize: string | number;
  tabsBarBorderBottomSize: string;
  tabsBarBorderLeftSize: string | number;
  tabsBarPadding: string | number;
  tabsBarBorderRadius: string | number;
  textColor?: string;
  tabBorderColor?: string;
  tabBackground?: string;
  textColorHover?: string;
  tabBorderColorHover?: string;
  tabBackgroundHover?: string;
  textColorFocus?: string;
  tabBorderColorFocus?: string;
  tabBackgroundFocus?: string;
  textColorActive?: string;
  tabBorderColorActive?: string;
  tabBackgroundActive?: string;
  textColorDisabled?: string;
  tabBorderColorDisabled?: string;
  tabBackgroundDisabled?: string;
  tabGap?: string;
  tabBorderSizeFocus?: string | number;
  tabsBarBackground?: string;
  tabsBarBorderColor?: string;
}

const tabs: TabsTheme = {
  isClassic: true,

  fontFamily: font.family,
  fontSize: font.sizeSm,
  fontWeight: font.weightDefault,
  lineHeight: font.lineHeightSm,
  letterSpacing: 'normal',

  selectedFontFamily: font.family,
  selectedFontSize: font.sizeSm,
  selectedFontWeight: font.weightDefault,
  selectedLineHeight: font.lineHeightSm,
  selectedLetterSpacing: '0',

  tabTextColorDark: color.cloudyBlue,
  tabTextColorDarkHover: color.white,
  tabTextColorDarkActive: color.white,
  tabTextColorDarkDisabled: color.steel700,

  tabTextColorLight: color.pickledBluewood800,
  tabTextColorLightHover: color.dodgerBlue,
  tabTextColorLightActive: color.dodgerBlue,
  tabTextColorLightDisabled: color.cloudyBlue,

  tabHeight: size.large,
  tabMaxWidth: 'initial',
  tabMinWidth: 'initial',
  tabPadding: `0 ${size.default2x}`,
  tabBorderRadius: 0,
  tabBorderTopSize: 0,
  tabBorderRightSize: 0,
  tabBorderBottomSize: size.smallest,
  tabBorderLeftSize: 0,
  tabBorderColorDark: 'transparent',
  tabBorderColorDarkHover: 'transparent',
  tabBorderColorDarkActive: color.goldenBell,
  tabBorderColorDarkDisabled: 'transparent',
  tabBorderColorLight: 'transparent',
  tabBorderColorLightHover: 'transparent',
  tabBorderColorLightActive: color.dodgerBlue,
  tabBorderColorLightDisabled: 'transparent',
  tabBackgroundDark: 'transparent',
  tabBackgroundDarkHover: 'transparent',
  tabBackgroundDarkActive: 'transparent',
  tabBackgroundDarkDisabled: 'transparent',
  tabBackgroundLight: 'transparent',
  tabBackgroundLightHover: 'transparent',
  tabBackgroundLightActive: 'transparent',
  tabBackgroundLightDisabled: 'transparent',
  tabTransitionTime: timing.fast,
  tabsBarBackgroundDark: color.pickledBluewood,
  tabsBarBackgroundLight: color.white,
  tabsBarBorderColorDark: color.pickledBluewood,
  tabsBarBorderColorLight: color.cloudyBlue300,
  tabsBarBorderTopSize: 0,
  tabsBarBorderRightSize: 0,
  tabsBarBorderBottomSize: '1px',
  tabsBarBorderLeftSize: 0,
  tabsBarPadding: `0 ${size.medium}`,
  tabsBarBorderRadius: 0,
};

const tabsNovo: TabsTheme = {
  isClassic: false,

  fontFamily: light.body01.fontFamily,
  fontSize: light.body01.fontSize,
  fontWeight: light.body01.fontWeight,
  lineHeight: light.body01.lineHeight,
  letterSpacing: light.body01.letterSpacing,

  selectedFontFamily: light.bodyBold01.fontFamily,
  selectedFontSize: light.bodyBold01.fontSize,
  selectedFontWeight: light.bodyBold01.fontWeight,
  selectedLineHeight: light.bodyBold01.lineHeight,
  selectedLetterSpacing: light.bodyBold01.letterSpacing,

  textColor: light.textColor02,
  tabBorderColor: 'transparent',
  tabBackground: 'transparent',

  textColorHover: light.textColor01,
  tabBorderColorHover: light.ui04,
  tabBackgroundHover: 'transparent',

  textColorFocus: light.textColor01,
  tabBorderColorFocus: light.focus01,
  tabBackgroundFocus: 'transparent',

  textColorActive: light.action04,
  tabBorderColorActive: light.action04,
  tabBackgroundActive: 'transparent',

  textColorDisabled: light.disabled02,
  tabBorderColorDisabled: 'transparent',
  tabBackgroundDisabled: 'transparent',

  tabGap: light.spacing02,
  tabHeight: '52px',
  tabMaxWidth: 'initial',
  tabMinWidth: 'initial',
  tabPadding: `0 ${light.spacing03}`,
  tabBorderRadius: 0,
  tabBorderTopSize: 0,
  tabBorderRightSize: 0,
  tabBorderBottomSize: '2px',
  tabBorderLeftSize: 0,
  tabBorderSizeFocus: '2px',
  tabTransitionTime: '150ms',

  tabsBarBackground: 'transparent',
  tabsBarBorderColor: light.ui01,
  tabsBarBorderTopSize: 0,
  tabsBarBorderRightSize: 0,
  tabsBarBorderBottomSize: '1px',
  tabsBarBorderLeftSize: 0,
  tabsBarPadding: 0,
  tabsBarBorderRadius: 0,
};

const tabsNovoDark: TabsTheme = {
  ...tabsNovo,

  textColor: dark.textColor02,
  textColorHover: dark.textColor01,
  textColorFocus: dark.textColor01,
  textColorActive: dark.action04,
  tabBorderColorActive: dark.action04,
  textColorDisabled: dark.disabled02,
  tabsBarBorderColor: dark.ui01,
  tabBorderColorHover: dark.ui04,
  tabBorderColorFocus: dark.focus01,
};

const tabsNeoLight: TabsTheme = {
  ...tabsNovo,
  textColor: neoLight.textColor02,
  textColorHover: neoLight.textColor01,
  tabBorderColorHover: neoLight.ui04,
  textColorFocus: neoLight.textColor01,
  tabBorderColorFocus: neoLight.focus01,
  textColorActive: neoLight.action04,
  tabBorderColorActive: neoLight.action04,
  textColorDisabled: neoLight.disabled02,
  tabsBarBorderColor: neoLight.ui01,
};

const tabsNeoDark: TabsTheme = {
  ...tabsNovoDark,
  textColor: neoDark.textColor02,
  textColorHover: neoDark.textColor01,
  textColorFocus: neoDark.textColor01,
  textColorActive: neoDark.action04,
  tabBorderColorActive: neoDark.action04,
  textColorDisabled: neoDark.disabled02,
  tabsBarBorderColor: neoDark.ui01,
  tabBorderColorHover: neoDark.ui04,
  tabBorderColorFocus: neoDark.focus01,
};

export { tabs, tabsNovo, tabsNovoDark, tabsNeoLight, tabsNeoDark };
