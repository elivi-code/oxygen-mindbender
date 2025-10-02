import { rgba } from 'polished';
import themes from '@8x8/oxygen-theme';
import color from '../choices/color.const';
import spacing from '../choices/spacing.const';
import size from '../choices/size.const';
import zIndex from '../choices/zIndex.const';
import { button, buttonNovo, buttonNovoDark, buttonNeoLight, buttonNeoDark, } from './button.const';
const { light, dark, neoLight, neoDark } = themes;
const dropdownButton = {
    button: {
        ...button,
    },
    indicatorLeftMargin: size.default,
    indicatorScale: 1,
    indicatorColor: color.steel700,
    indicatorColorDisabled: color.cloudyBlue,
    dropdownOffset: '0',
    dropdownMaxHeight: '200px',
    dropdownMaxWidth: '200px',
    dropdownPadding: `${spacing.xxs} 0`,
    dropdownBackgroundColor: color.white,
    dropdownBorderColor: color.cloudyBlue300,
    dropdownShadowSize: size.shadowDefault,
    dropdownShadowColor: color.cloudyBlue300,
    dropdownZIndex: zIndex.z3000,
    dropdownBorderRadius: '0px',
    isClassic: true,
};
const dropdownButtonNovo = {
    isClassic: false,
    button: buttonNovo,
    indicatorLeftMargin: light.spacing03,
    indicatorScale: undefined,
    dropdownOffset: '0',
    dropdownMaxHeight: '192px',
    dropdownMaxWidth: '160px',
    dropdownPadding: `${light.spacing03} 0`,
    dropdownShadowSize: '0px 1px 2px',
    dropdownZIndex: 3000,
    dropdownBorderRadius: '6px',
    indicatorColor: light.icon05,
    indicatorColorDisabled: light.disabled04,
    dropdownBackgroundColor: light.ui06,
    dropdownBorderColor: light.ui01,
    dropdownShadowColor: rgba(light.ui04, 0.25),
};
const dropdownButtonNovoDark = {
    ...dropdownButtonNovo,
    button: buttonNovoDark,
    indicatorColor: dark.icon05,
    indicatorColorDisabled: dark.disabled04,
    dropdownBackgroundColor: dark.ui06,
    dropdownBorderColor: dark.ui01,
    dropdownShadowColor: rgba(dark.ui04, 0.25),
};
const dropdownButtonNeoLight = {
    ...dropdownButtonNovo,
    button: buttonNeoLight,
    indicatorColor: neoLight.icon05,
    indicatorColorDisabled: neoLight.disabled04,
    dropdownBackgroundColor: neoLight.ui06,
    dropdownBorderColor: neoLight.ui01,
    dropdownShadowColor: rgba(neoLight.ui04, 0.25),
};
const dropdownButtonNeoDark = {
    ...dropdownButtonNovoDark,
    button: buttonNeoDark,
    indicatorColor: neoDark.icon05,
    indicatorColorDisabled: neoDark.disabled04,
    dropdownBackgroundColor: neoDark.ui06,
    dropdownBorderColor: neoDark.ui01,
    dropdownShadowColor: rgba(neoDark.ui04, 0.25),
};
export { dropdownButton, dropdownButtonNovo, dropdownButtonNovoDark, dropdownButtonNeoLight, dropdownButtonNeoDark, };
