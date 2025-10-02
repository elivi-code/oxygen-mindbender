import novo from './novo/novo';
import novoDark from './novo/novoDark';
import novoColorPalette from './novo/novoColorPalette';
import neoLight from './novo/neoLight';
import neoDark from './novo/neoDark';
// Deprecated exports — keep for backwards compatibility
// These are deprecated as they export the theme itself together with the values (colors) used by the theme
export { default as novo } from './novo';
export { dark as novoDark } from './novo';
export { default as classic } from './classic';
const themes = {
    /** @deprecated use OxygenProvider (& light theme) */
    novo,
    /** @deprecated use OxygenProvider (& dark theme) */
    novoDark,
    /** @deprecated use colorPalette */
    novoColorPalette,
    light: novo,
    dark: novoDark,
    colorPalette: novoColorPalette,
    neoLight,
    neoDark,
};
// Direct theme exports on the default object
export default themes;
