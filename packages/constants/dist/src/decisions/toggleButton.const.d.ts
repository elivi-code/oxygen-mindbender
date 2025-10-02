export interface ToggleButtonTheme {
    backgroundColor: string;
    backgroundColorSelected: string;
    backgroundColorFocus: string;
    backgroundColorDisabled?: string;
    outlineColorFocus: string;
    knobColor: string;
    knobColorDisabled: string;
    knobMargin: string;
    height: string;
    width: string;
    margin: string;
    knobSize: string;
    labelDisabledColor: string;
    iconSet: 'novo' | 'classic';
    focusColor?: string;
}
declare const toggleButton: ToggleButtonTheme;
declare const toggleButtonNovo: ToggleButtonTheme;
declare const toggleButtonNovoDark: ToggleButtonTheme;
declare const toggleButtonNeoLight: ToggleButtonTheme;
declare const toggleButtonNeoDark: ToggleButtonTheme;
declare const toggleButtonGroup: {
    verticalGroupMargin: string;
    horizontalGroupMargin: string;
};
declare const toggleButtonGroupNovo: {
    verticalGroupMargin: string;
    horizontalGroupMargin: string;
};
declare const toggleButtonGroupNovoDark: {
    verticalGroupMargin: string;
    horizontalGroupMargin: string;
};
export { toggleButton, toggleButtonNovo, toggleButtonNovoDark, toggleButtonNeoLight, toggleButtonNeoDark, toggleButtonGroup, toggleButtonGroupNovo, toggleButtonGroupNovoDark, };
//# sourceMappingURL=toggleButton.const.d.ts.map