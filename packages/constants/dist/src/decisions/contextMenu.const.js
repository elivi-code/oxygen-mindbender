import { rgba } from 'polished';
import themes from '@8x8/oxygen-theme';
import color from '../choices/color.const';
import font from '../choices/font.const';
import zIndex from '../choices/zIndex.const';
const { light, dark, neoLight, neoDark } = themes;
const contextMenu = {
    contextMenuBackground: color.white,
    contextMenuBorder: `1px solid ${color.cloudyBlue300}`,
    contextMenuBoxShadow: `0px 1px 5px ${rgba(color.pickledBluewood800, 0.1)}`,
    contextMenuFontFamily: font.family,
    contextMenuFontSize: font.sizeSm,
    contextMenuZIndex: zIndex.z1000,
    contextMenuItemColor: color.pickledBluewood800,
    contextMenuItemDisabledColor: color.steel700,
    contextMenuWidth: undefined,
    contextMenuItemWidth: `246px`,
    contextMenuItemHoverColor: color.dodgerBlue100,
    contextMenuItemDisabledHoverColor: 'transparent',
    contextMenuItemColorActive: color.dodgerBlue,
    contextMenuBorderRadius: '0px',
    contextMenuPadding: undefined,
    contextMenuItemPadding: undefined,
    isClassic: true,
};
const contextMenuNovo = {
    isClassic: false,
    ...light.body02,
    contextMenuZIndex: 1000,
    contextMenuItemWidth: undefined,
    contextMenuWidth: '160px',
    contextMenuPadding: `${light.spacing03} 0`,
    contextMenuItemPadding: `${light.spacing03} ${light.spacing05}`,
    contextMenuBackground: light.ui06,
    contextMenuBorder: `1px solid ${light.ui01}`,
    contextMenuBorderRadius: '6px',
    contextMenuBoxShadow: `0px 1px 2px ${rgba(light.ui04, 0.25)}`,
    contextMenuItemColor: light.textColor01,
    contextMenuItemDisabledColor: light.disabled01,
    contextMenuItemColorActive: undefined,
    contextMenuItemHoverColor: light.hover08,
    contextMenuItemDisabledHoverColor: 'transparent',
};
const contextMenuNovoDark = {
    ...contextMenuNovo,
    contextMenuBackground: dark.ui06,
    contextMenuBorder: `1px solid ${dark.ui01}`,
    contextMenuBoxShadow: `0px 1px 2px ${rgba(dark.ui04, 0.25)}`,
    contextMenuItemColor: dark.textColor01,
    contextMenuItemDisabledColor: dark.disabled01,
    contextMenuItemColorActive: undefined,
    contextMenuItemHoverColor: dark.hover08,
    contextMenuItemDisabledHoverColor: 'transparent',
};
const contextMenuNeoLight = {
    ...contextMenuNovo,
    contextMenuBackground: neoLight.ui06,
    contextMenuBorder: `1px solid ${neoLight.ui01}`,
    contextMenuBoxShadow: `0px 1px 2px ${rgba(neoLight.ui04, 0.25)}`,
    contextMenuItemColor: neoLight.textColor01,
    contextMenuItemDisabledColor: neoLight.disabled01,
    contextMenuItemHoverColor: neoLight.hover08,
};
const contextMenuNeoDark = {
    ...contextMenuNovoDark,
    contextMenuBackground: neoDark.ui06,
    contextMenuBorder: `1px solid ${neoDark.ui01}`,
    contextMenuBoxShadow: `0px 1px 2px ${rgba(neoDark.ui04, 0.25)}`,
    contextMenuItemColor: neoDark.textColor01,
    contextMenuItemDisabledColor: neoDark.disabled01,
    contextMenuItemHoverColor: neoDark.hover08,
};
export { contextMenu, contextMenuNovo, contextMenuNovoDark, contextMenuNeoLight, contextMenuNeoDark, };
