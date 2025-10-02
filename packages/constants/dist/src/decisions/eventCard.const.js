import themes from '@8x8/oxygen-theme';
const { light, dark, neoLight, neoDark } = themes;
const eventCardNovo = {
    background: light.ui06,
    backgroundHover: light.ui02,
    borderColor: light.ui02,
    borderFocusColor: light.focus01,
    gap: light.spacing04,
    iconBackground: light.ui01,
    iconColor: light.icon01,
    shadow: light.shadowLow,
    text: { ...light.body01 },
    textColor: light.textColor02,
    title: { ...light.bodyBold01 },
    titleColor: light.textColor01,
};
const eventCard = eventCardNovo;
const eventCardNovoDark = {
    ...eventCardNovo,
    background: dark.ui06,
    backgroundHover: dark.ui02,
    borderColor: dark.ui02,
    borderFocusColor: dark.focus01,
    iconBackground: dark.ui01,
    iconColor: dark.icon01,
    shadow: dark.shadowLow,
    textColor: dark.textColor02,
    titleColor: dark.textColor01,
};
const eventCardNeoLight = {
    ...eventCardNovo,
    background: neoLight.ui06,
    backgroundHover: neoLight.ui02,
    borderColor: neoLight.ui02,
    borderFocusColor: neoLight.focus01,
    iconBackground: neoLight.ui01,
    iconColor: neoLight.icon01,
    shadow: neoLight.shadowLow,
    textColor: neoLight.textColor02,
    titleColor: neoLight.textColor01,
};
const eventCardNeoDark = {
    ...eventCardNovoDark,
    background: neoDark.ui06,
    backgroundHover: neoDark.ui02,
    borderColor: neoDark.ui02,
    borderFocusColor: neoDark.focus01,
    iconBackground: neoDark.ui01,
    iconColor: neoDark.icon01,
    shadow: neoDark.shadowLow,
    textColor: neoDark.textColor02,
    titleColor: neoDark.textColor01,
};
export { eventCard, eventCardNovo, eventCardNovoDark, eventCardNeoLight, eventCardNeoDark, };
