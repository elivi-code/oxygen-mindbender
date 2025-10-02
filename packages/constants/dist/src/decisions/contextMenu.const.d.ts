import { TypographySet } from '@8x8/oxygen-theme';
export interface ContextMenuTheme extends Partial<TypographySet> {
    contextMenuBackground: string;
    contextMenuBorder: string;
    contextMenuBoxShadow: string;
    contextMenuFontFamily?: string;
    contextMenuFontSize?: string;
    contextMenuZIndex: number;
    contextMenuItemColor: string;
    contextMenuItemDisabledColor: string;
    contextMenuWidth: string;
    contextMenuItemWidth: string;
    contextMenuItemHoverColor: string;
    contextMenuItemDisabledHoverColor: string;
    contextMenuItemColorActive: string;
    contextMenuBorderRadius: string;
    contextMenuPadding: string;
    contextMenuItemPadding: string;
    isClassic: boolean;
}
declare const contextMenu: ContextMenuTheme;
declare const contextMenuNovo: ContextMenuTheme;
declare const contextMenuNovoDark: ContextMenuTheme;
declare const contextMenuNeoLight: ContextMenuTheme;
declare const contextMenuNeoDark: ContextMenuTheme;
export { contextMenu, contextMenuNovo, contextMenuNovoDark, contextMenuNeoLight, contextMenuNeoDark, };
//# sourceMappingURL=contextMenu.const.d.ts.map