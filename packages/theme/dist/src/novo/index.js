import color from './tokens/color';
import colorPalette from './tokens/colorPalette';
import size from './tokens/size';
import spacing from './tokens/spacing';
import timing from './tokens/timing';
import typography from './tokens/typography';
import { label01, labelBold01, body01, bodyBold01, body02, bodyBold02, heading01, heading02, } from './tokens/typographySet';
import colorDark from './tokens/color-dark';
/** @deprecated Use OxygenProvider */
const novo = {
    ...color,
    ...colorPalette,
    ...size,
    ...spacing,
    ...timing,
    ...typography,
    label01,
    labelBold01,
    body01,
    bodyBold01,
    body02,
    bodyBold02,
    prodHeading01: heading01,
    prodHeading02: heading02,
};
/** @deprecated Use OxygenProvider */
const dark = {
    ...novo,
    ...colorDark,
};
// Novo
export default novo;
// Novo Dark
export { dark };
