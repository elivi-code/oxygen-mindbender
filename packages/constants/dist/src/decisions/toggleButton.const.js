import { rgba } from 'polished';
import themes from '@8x8/oxygen-theme';
import size from '../choices/size.const';
import color from '../choices/color.const';
const { light, dark, neoLight, neoDark } = themes;
const toggleButton = {
    backgroundColor: color.cloudyBlue,
    backgroundColorSelected: color.dodgerBlue,
    // @deprecated - use `outlineColorFocus`
    backgroundColorFocus: color.dodgerBlue300,
    outlineColorFocus: color.dodgerBlue300,
    knobColor: color.white,
    knobColorDisabled: color.white,
    knobMargin: size.small,
    height: '20px',
    width: '32px',
    margin: size.default,
    knobSize: '14px',
    labelDisabledColor: rgba(color.pickledBluewood800, 0.5),
    iconSet: 'classic',
    focusColor: light.focus01,
};
const toggleButtonNovo = {
    ...toggleButton,
    backgroundColor: light.ui03,
    backgroundColorDisabled: light.ui03,
    // @deprecated - use `outlineColorFocus`
    backgroundColorFocus: light.focus01,
    outlineColorFocus: light.focus01,
    backgroundColorSelected: light.action04,
    knobColor: light.icon02,
    knobColorDisabled: light.icon03,
    knobMargin: '4px',
    height: '24px',
    width: '40px',
    margin: '16px',
    knobSize: '16px',
    labelDisabledColor: light.disabled02,
    iconSet: 'novo',
};
const toggleButtonNovoDark = {
    ...toggleButtonNovo,
    backgroundColor: dark.ui03,
    backgroundColorDisabled: dark.ui03,
    backgroundColorSelected: dark.action04,
    outlineColorFocus: dark.focus01,
    knobColorDisabled: dark.icon03,
    labelDisabledColor: dark.disabled02,
};
const toggleButtonNeoLight = {
    ...toggleButtonNovo,
    backgroundColor: neoLight.ui33,
    backgroundColorDisabled: neoLight.ui33,
    backgroundColorFocus: neoLight.focus01,
    outlineColorFocus: neoLight.focus01,
    backgroundColorSelected: neoLight.action04,
    knobColor: neoLight.icon02,
    knobColorDisabled: neoLight.icon03,
    labelDisabledColor: neoLight.disabled02,
};
const toggleButtonNeoDark = {
    ...toggleButtonNovoDark,
    backgroundColor: neoDark.ui33,
    backgroundColorDisabled: neoDark.ui33,
    backgroundColorSelected: neoDark.action04,
    outlineColorFocus: neoDark.focus01,
    knobColorDisabled: neoDark.icon03,
    labelDisabledColor: neoDark.disabled02,
};
const toggleButtonGroup = {
    verticalGroupMargin: size.default,
    horizontalGroupMargin: size.default2x,
};
const toggleButtonGroupNovo = {
    verticalGroupMargin: light.spacing03,
    horizontalGroupMargin: light.spacing06,
};
const toggleButtonGroupNovoDark = {
    ...toggleButtonGroupNovo,
};
export { toggleButton, toggleButtonNovo, toggleButtonNovoDark, toggleButtonNeoLight, toggleButtonNeoDark, toggleButtonGroup, toggleButtonGroupNovo, toggleButtonGroupNovoDark, };
