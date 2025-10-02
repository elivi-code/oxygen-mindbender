export interface RadioTheme {
    borderSize?: string;
    borderStyle?: string;
    iconDotSize?: string;
    iconSelectedColor: string;
    iconHoverColor: string;
    iconFocusColor: string;
    iconDisabledColor?: string;
    iconSet: 'novo' | 'classic';
    iconSize: string;
    iconSpacing: string;
    iconUnselectedColor: string;
    labelColor: string;
    labelDisabledColor: string;
    focusColor?: string;
}
declare const radio: RadioTheme;
declare const radioNovo: RadioTheme;
declare const radioNovoDark: RadioTheme;
declare const radioNeoLight: RadioTheme;
declare const radioNeoDark: RadioTheme;
declare const radioGroup: {
    verticalGroupMargin: string;
    horizontalGroupMargin: string;
};
declare const radioGroupNovo: {
    verticalGroupMargin: string;
    horizontalGroupMargin: string;
};
declare const radioGroupNovoDark: {
    verticalGroupMargin: string;
    horizontalGroupMargin: string;
};
export { radio, radioNovo, radioNovoDark, radioGroup, radioGroupNovo, radioGroupNovoDark, radioNeoLight, radioNeoDark, };
//# sourceMappingURL=radio.const.d.ts.map