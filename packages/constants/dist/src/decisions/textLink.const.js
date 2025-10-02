import themes from '@8x8/oxygen-theme';
import color from '../choices/color.const';
import font from '../choices/font.const';
import spacing from '../choices/spacing.const';
const { light, dark, neoLight, neoDark } = themes;
const textLink = {
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
const textLinkNovo = {
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
const textLinkNovoDark = {
    ...textLinkNovo,
    textLinkColorPrimary: dark.action05,
    textLinkColorPrimaryHover: dark.hover07,
    textLinkColorPrimaryActive: dark.active07,
    textLinkColorPrimaryDisabled: dark.disabled02,
    textLinkShadowColorFocus: dark.focus01,
};
const textLinkNeoLight = {
    ...textLinkNovo,
    textLinkShadowColorFocus: neoLight.focus01,
    textLinkColorPrimary: neoLight.action05,
    textLinkColorPrimaryHover: neoLight.hover07,
    textLinkColorPrimaryActive: neoLight.active07,
    textLinkColorPrimaryDisabled: neoLight.disabled02,
};
const textLinkNeoDark = {
    ...textLinkNovoDark,
    textLinkColorPrimary: neoDark.action05,
    textLinkColorPrimaryHover: neoDark.hover07,
    textLinkColorPrimaryActive: neoDark.active07,
    textLinkColorPrimaryDisabled: neoDark.disabled02,
    textLinkShadowColorFocus: neoDark.focus01,
};
export { textLink, textLinkNovo, textLinkNovoDark, textLinkNeoLight, textLinkNeoDark, };
