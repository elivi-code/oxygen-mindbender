import themes from '@8x8/oxygen-theme';
import color from '../choices/color.const';
const { light, dark, neoLight, neoDark } = themes;
const userStatus = {
    sizeSmall: '12px',
    sizeLarge: '20px',
    borderColorAvailable: color.white,
    borderColorAway: color.white,
    borderColorBusy: color.white,
    borderColorWrapUp: color.white,
    borderColorDoNotDisturb: color.white,
    borderColorOffline: color.white,
    borderColorOnBreak: color.white,
    borderColorOnCall: color.white,
    borderColorWorkingOffline: color.white,
    colorAvailable: light.statusAvailable01,
    colorAway: light.statusAway01,
    colorBusy: light.statusBusy01,
    colorWrapUp: light.statusWrapup01,
    colorDoNotDisturb: light.statusBusy01,
    colorOffline: light.statusOffline01,
    colorOnBreak: light.statusOffline01,
    colorOnCall: light.statusBusy01,
    colorWorkingOffline: light.statusAway01,
};
const userStatusNovo = {
    ...userStatus,
};
const userStatusNovoDark = {
    ...userStatus,
    colorAvailable: dark.statusAvailable01,
    colorAway: dark.statusAway01,
    colorBusy: dark.statusBusy01,
    colorWrapUp: dark.statusWrapup01,
    colorDoNotDisturb: dark.statusBusy01,
    colorOffline: dark.statusOffline01,
    colorOnBreak: dark.statusOffline01,
    colorOnCall: dark.statusBusy01,
    colorWorkingOffline: dark.statusAway01,
};
const userStatusNeoLight = {
    ...userStatusNovo,
    colorAvailable: neoLight.statusAvailable01,
    colorAway: neoLight.statusAway01,
    colorBusy: neoLight.statusBusy01,
    colorWrapUp: neoLight.statusWrapup01,
    colorDoNotDisturb: neoLight.statusBusy01,
    colorOffline: neoLight.statusOffline01,
    colorOnBreak: neoLight.statusOffline01,
    colorOnCall: neoLight.statusBusy01,
    colorWorkingOffline: neoLight.statusAway01,
};
const userStatusNeoDark = {
    ...userStatusNovoDark,
    colorAvailable: neoDark.statusAvailable01,
    colorAway: neoDark.statusAway01,
    colorBusy: neoDark.statusBusy01,
    colorWrapUp: neoDark.statusWrapup01,
    colorDoNotDisturb: neoDark.statusBusy01,
    colorOffline: neoDark.statusOffline01,
    colorOnBreak: neoDark.statusOffline01,
    colorOnCall: neoDark.statusBusy01,
    colorWorkingOffline: neoDark.statusAway01,
};
export { userStatus, userStatusNovo, userStatusNovoDark, userStatusNeoLight, userStatusNeoDark, };
