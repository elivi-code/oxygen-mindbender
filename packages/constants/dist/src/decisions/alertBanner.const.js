import themes from '@8x8/oxygen-theme';
const { light, dark, neoLight, neoDark } = themes;
const alertBanner = {
    background: light.warning01,
    color: light.textColor07,
    iconColor: light.icon08,
};
const alertBannerNovo = alertBanner;
const alertBannerNovoDark = {
    background: dark.warning01,
    color: dark.textColor07,
    iconColor: dark.icon08,
};
const alertBannerNeoLight = {
    ...alertBannerNovo,
    background: neoLight.warning01,
    color: neoLight.textColor07,
    iconColor: neoLight.icon08,
};
const alertBannerNeoDark = {
    ...alertBannerNovoDark,
    background: neoDark.warning01,
    color: neoDark.textColor07,
    iconColor: neoDark.icon08,
};
export { alertBanner, alertBannerNovo, alertBannerNovoDark, alertBannerNeoLight, alertBannerNeoDark, };
