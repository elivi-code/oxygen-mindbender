export interface LoadersTheme {
    backgroundContainer: string;
    backgroundFiller: string;
    backgroundComplete: string;
    borderSize: string;
    borderStyle: string;
    borderColor: string;
    borderRadius: string;
    color: string;
    fontFamily: string;
    fontSize: string;
    fontStretch: string;
    fontStyle: string;
    fontWeight: string | number;
    lineHeight: string;
    letterSpacing: string;
    height: string;
    transitionSpeedSpinner: string;
    transitionSpeedProgressBar: string;
    withSpinnerBackground: boolean;
    widthSpinnerSmall: number;
    widthSpinnerDefault: number;
    widthSpinnerExtraLarge: number;
    widthProgressBarSmall: string;
    widthProgressBarDefault: string;
    widthProgressBarLarge: string;
}
declare const loaders: LoadersTheme;
declare const loadersNovo: LoadersTheme;
declare const loadersNovoDark: LoadersTheme;
declare const loadersNeoLight: LoadersTheme;
declare const loadersNeoDark: LoadersTheme;
/**
 * @deprecated
 */
declare const spinnerSize: {
    small: string;
    default: string;
    large2x: string;
};
/**
 * @deprecated
 */
declare const progressBarSize: {
    small: string;
    default: string;
    large: string;
};
export { loaders, loadersNovo, loadersNovoDark, loadersNeoLight, loadersNeoDark, spinnerSize, progressBarSize, };
//# sourceMappingURL=loaders.const.d.ts.map