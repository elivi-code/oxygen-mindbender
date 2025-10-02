import { input } from './input.const';
export interface TimeSelectorTheme {
    input: typeof input;
    dropdownAnimationDuration: string;
    dropdownZIndex: number;
    dropdownBorderSize: string;
    dropdownBorderColor: string;
    dropdownBorderRadius: string | number;
    dropdownShadowBlurRadius: string;
    dropdownShadowColor: string;
    dropdownShadow: string;
    dropdownFontSize: string;
    dropdownLineHeight: string;
    dropdownFontFamily: string;
    dropdownWidth: string;
    dropdownMaxHeight: string;
    dropdownPadding: string;
    listItemPadding: string;
    listItemBackground: string;
    listItemBackgroundHover: string;
    listItemBackgroundSelected: string;
    listItemColor: string;
}
declare const timeSelector: TimeSelectorTheme;
declare const timeSelectorNovo: TimeSelectorTheme;
declare const timeSelectorNovoDark: TimeSelectorTheme;
declare const timeSelectorNeoLight: TimeSelectorTheme;
declare const timeSelectorNeoDark: TimeSelectorTheme;
export { timeSelector, timeSelectorNovo, timeSelectorNovoDark, timeSelectorNeoLight, timeSelectorNeoDark, };
//# sourceMappingURL=timeSelector.d.ts.map