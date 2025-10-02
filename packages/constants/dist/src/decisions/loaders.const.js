import themes from '@8x8/oxygen-theme';
import color from '../choices/color.const';
import font from '../choices/font.const';
import size from '../choices/size.const';
import timing from '../choices/timing.const';
const { light, dark, neoLight, neoDark } = themes;
const loaders = {
    backgroundContainer: color.cloudyBlue100,
    backgroundFiller: color.dodgerBlue,
    backgroundComplete: light.success01,
    borderSize: size.borderSizeDefault,
    borderStyle: 'solid',
    borderColor: color.cloudyBlue300,
    borderRadius: size.borderSizeLarge,
    color: color.pickledBluewood800,
    fontFamily: font.family,
    fontSize: font.sizeSm,
    fontStretch: 'normal',
    fontStyle: 'normal',
    fontWeight: font.weightAttention,
    lineHeight: font.lineHeightSm,
    letterSpacing: 'normal',
    height: size.default,
    transitionSpeedSpinner: timing.slow,
    transitionSpeedProgressBar: timing.medium,
    withSpinnerBackground: true,
    widthSpinnerSmall: parseInt(size.medium, 10),
    widthSpinnerDefault: parseInt(size.large, 10),
    widthSpinnerExtraLarge: parseInt(size.large2x, 10),
    widthProgressBarSmall: '100px',
    widthProgressBarDefault: '240px',
    widthProgressBarLarge: '100%',
};
const loadersNovo = {
    ...loaders,
    ...light.body01,
    withSpinnerBackground: false,
    borderStyle: 'none',
    borderRadius: '8px',
    height: '8px',
    widthSpinnerSmall: 24,
    widthSpinnerDefault: 40,
    widthSpinnerExtraLarge: 72,
    widthProgressBarSmall: '100px',
    widthProgressBarDefault: '240px',
    widthProgressBarLarge: '100%',
    color: light.textColor01,
    backgroundContainer: light.ui01,
    backgroundFiller: light.action04,
    backgroundComplete: light.success01,
};
const loadersNovoDark = {
    ...loadersNovo,
    color: dark.textColor01,
    backgroundContainer: dark.ui01,
    backgroundFiller: dark.action04,
    backgroundComplete: dark.success01,
};
const loadersNeoLight = {
    ...loadersNovo,
    color: neoLight.textColor01,
    backgroundContainer: neoLight.ui01,
    backgroundFiller: neoLight.action04,
    backgroundComplete: neoLight.success01,
};
const loadersNeoDark = {
    ...loadersNovoDark,
    color: neoDark.textColor01,
    backgroundContainer: neoDark.ui01,
    backgroundFiller: neoDark.action04,
    backgroundComplete: neoDark.success01,
};
/**
 * @deprecated
 */
const spinnerSize = {
    small: 'small',
    default: 'default',
    large2x: 'large2x',
};
/**
 * @deprecated
 */
const progressBarSize = {
    small: 'small',
    default: 'default',
    large: 'large',
};
export { loaders, loadersNovo, loadersNovoDark, loadersNeoLight, loadersNeoDark, spinnerSize, progressBarSize, };
