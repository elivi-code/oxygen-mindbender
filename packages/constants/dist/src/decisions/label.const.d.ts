export interface LabelTheme {
    fontColor: string;
    fontColorAction: string;
    fontColorActionDisabled: string;
    fontColorActionHover: string;
    fontColorStarRequired: string;
    fontFamily: string;
    fontSize: string;
    fontStretch: string;
    fontWeight: string | number;
    height: string;
    lineHeight: string;
    letterSpacing: string;
    borderSizeFocus: string;
    borderColorFocus: string;
    iconSet: 'novo' | 'classic';
    iconSize: number;
    iconColor: string;
    actionLinkPaddingHorizontal: string;
    actionLinkPaddingVertical: string;
}
declare const label: LabelTheme;
declare const labelNovo: LabelTheme;
declare const labelNovoDark: LabelTheme;
declare const labelNeoLight: LabelTheme;
declare const labelNeoDark: LabelTheme;
export { label, labelNovo, labelNovoDark, labelNeoLight, labelNeoDark };
//# sourceMappingURL=label.const.d.ts.map