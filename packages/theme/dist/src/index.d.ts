export { TypographySet, Theme } from './types';
export { default as novo } from './novo';
export { dark as novoDark } from './novo';
export { default as classic } from './classic';
declare const themes: {
    /** @deprecated use OxygenProvider (& light theme) */
    novo: import("./types").Theme;
    /** @deprecated use OxygenProvider (& dark theme) */
    novoDark: import("./types").Theme;
    /** @deprecated use colorPalette */
    novoColorPalette: import("./types").NovoColorPalette;
    light: import("./types").Theme;
    dark: import("./types").Theme;
    colorPalette: import("./types").NovoColorPalette;
    neoLight: import("./types").Theme;
    neoDark: import("./types").Theme;
};
export default themes;
//# sourceMappingURL=index.d.ts.map