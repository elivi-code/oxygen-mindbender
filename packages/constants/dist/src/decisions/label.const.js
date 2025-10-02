import themes from '@8x8/oxygen-theme';
import color from '../choices/color.const';
import font from '../choices/font.const';
import size from '../choices/size.const';
const { light, dark, neoLight, neoDark } = themes;
const label = {
    fontColor: color.pickledBluewood800,
    fontColorAction: color.dodgerBlue,
    fontColorActionDisabled: color.dodgerBlue300,
    fontColorActionHover: color.dodgerBlue300,
    fontColorStarRequired: color.coral,
    fontFamily: font.family,
    fontSize: font.sizeSm,
    fontStretch: 'normal',
    fontWeight: font.weightDefault,
    height: size.medium,
    lineHeight: font.lineHeightSm,
    letterSpacing: 'normal',
    borderSizeFocus: size.smallest,
    borderColorFocus: color.dodgerBlue,
    iconSet: 'classic',
    iconSize: 18,
    iconColor: color.steel700,
    actionLinkPaddingHorizontal: size.smallest,
    actionLinkPaddingVertical: size.small,
};
const labelNovo = {
    ...light.body01,
    fontColor: light.textColor01,
    fontColorAction: light.action05,
    fontColorActionDisabled: light.disabled02,
    fontColorActionHover: light.hover07,
    fontColorStarRequired: light.error01,
    fontStretch: 'normal',
    height: light.body01.lineHeight,
    iconSet: 'novo',
    iconSize: 16,
    iconColor: light.icon01,
    borderSizeFocus: light.spacing01,
    borderColorFocus: light.focus01,
    actionLinkPaddingHorizontal: light.spacing01,
    actionLinkPaddingVertical: light.spacing02,
};
const labelNovoDark = {
    ...labelNovo,
    fontColor: dark.textColor01,
    fontColorAction: dark.action05,
    fontColorActionDisabled: dark.disabled02,
    fontColorActionHover: dark.hover07,
    fontColorStarRequired: dark.error01,
    borderColorFocus: dark.focus01,
    iconColor: dark.icon01,
};
const labelNeoLight = {
    ...labelNovo,
    fontColor: neoLight.textColor01,
    fontColorAction: neoLight.action05,
    fontColorActionDisabled: neoLight.disabled02,
    fontColorActionHover: neoLight.hover07,
    fontColorStarRequired: neoLight.error01,
    height: neoLight.body01.lineHeight,
    iconColor: neoLight.icon01,
    borderColorFocus: neoLight.focus01,
};
const labelNeoDark = {
    ...labelNovoDark,
    fontColor: neoDark.textColor01,
    fontColorAction: neoDark.action05,
    fontColorActionDisabled: neoDark.disabled02,
    fontColorActionHover: neoDark.hover07,
    fontColorStarRequired: neoDark.error01,
    borderColorFocus: neoDark.focus01,
    iconColor: neoDark.icon01,
};
export { label, labelNovo, labelNovoDark, labelNeoLight, labelNeoDark };
