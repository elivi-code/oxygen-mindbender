import { rgba } from 'polished';
import themes from '@8x8/oxygen-theme';
import size from '../choices/size.const';
import color from '../choices/color.const';
const { light, dark, neoLight, neoDark } = themes;
const checkbox = {
    // Deprecated, instead of `accentColor` you should use `backgroundColor`
    accentColor: color.cloudyBlue,
    backgroundColor: color.cloudyBlue,
    checkboxShadowColorFocus: color.dodgerBlue,
    checkboxMargin: size.default,
    checkboxSize: size.medium,
    disabledColor: rgba(color.dodgerBlue, 0.5),
    checkedBackgroundColor: color.dodgerBlue,
    checkboxIconColorFocus: color.dodgerBlue300,
    checkboxIconColorHover: color.dodgerBlue300,
    iconSet: 'classic',
    labelColor: color.pickledBluewood800,
    labelDisabledColor: rgba(color.pickledBluewood800, 0.5),
    labelHeight: size.medium,
    checkboxFocusBorderRadius: '4px',
    checkboxFocusBorderSize: '2px',
    focusColor: light.focus01,
};
const checkboxNovo = {
    backgroundColor: light.ui21,
    checkboxMargin: light.spacing04,
    checkboxSize: '24px',
    checkedBackgroundColor: light.ui22,
    disabledColor: light.disabled02,
    checkboxShadowColorFocus: light.action04,
    checkboxIconColorFocus: light.focus01,
    checkboxIconColorHover: light.focus01,
    iconSet: 'novo',
    labelColor: light.textColor01,
    labelDisabledColor: light.disabled02,
    checkboxFocusBorderRadius: '4px',
    checkboxFocusBorderSize: '2px',
    focusColor: light.focus01,
};
const checkboxNovoDark = {
    ...checkboxNovo,
    backgroundColor: dark.ui21,
    checkedBackgroundColor: dark.ui22,
    checkboxIconColorFocus: dark.focus01,
    checkboxIconColorHover: dark.focus01,
    disabledColor: dark.disabled02,
    labelColor: dark.textColor01,
    labelDisabledColor: dark.disabled02,
};
const checkboxNeoLight = {
    ...checkboxNovo,
    backgroundColor: neoLight.ui21,
    checkedBackgroundColor: neoLight.ui22,
    disabledColor: neoLight.disabled02,
    checkboxShadowColorFocus: neoLight.action04,
    checkboxIconColorFocus: neoLight.focus01,
    checkboxIconColorHover: neoLight.focus01,
    labelColor: neoLight.textColor01,
    labelDisabledColor: neoLight.disabled02,
    focusColor: neoLight.focus01,
};
const checkboxNeoDark = {
    ...checkboxNovoDark,
    backgroundColor: neoDark.ui21,
    checkedBackgroundColor: neoDark.ui22,
    disabledColor: neoDark.disabled02,
    checkboxShadowColorFocus: neoDark.action04,
    checkboxIconColorFocus: neoDark.focus01,
    checkboxIconColorHover: neoDark.focus01,
    labelColor: neoDark.textColor01,
    labelDisabledColor: neoDark.disabled02,
    focusColor: neoDark.focus01,
};
const checkboxGroup = {
    verticalGroupMargin: size.default,
    horizontalGroupMargin: size.default2x,
};
const checkboxGroupNovo = {
    verticalGroupMargin: light.spacing03,
    horizontalGroupMargin: light.spacing06,
};
const checkboxGroupNovoDark = {
    ...checkboxGroupNovo,
};
export { checkbox, checkboxNovo, checkboxNovoDark, checkboxNeoLight, checkboxNeoDark, checkboxGroup, checkboxGroupNovo, checkboxGroupNovoDark, };
