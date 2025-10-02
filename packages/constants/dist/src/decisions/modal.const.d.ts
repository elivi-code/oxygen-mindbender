import { FlattenSimpleInterpolation } from 'styled-components';
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
    footerPaddingSmall?: string;
    footerPaddingNoContent?: string;
    footerPaddingHorizontal?: string;
    footerPaddingSmallHorizontal?: string;
    footerPaddingVertical?: string;
    footerShadowSize: string;
    footerShadowColor: string;
    footerButtonSpacing: string;
}
declare const modal: ModalTheme;
declare const modalNovo: ModalTheme;
declare const modalNovoDark: ModalTheme;
declare const modalNeoLight: ModalTheme;
declare const modalNeoDark: ModalTheme;
export { modal, modalNovo, modalNovoDark, modalNeoLight, modalNeoDark };
//# sourceMappingURL=modal.const.d.ts.map