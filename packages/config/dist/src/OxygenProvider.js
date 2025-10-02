import React, { createContext } from 'react';
import { ThemeProvider } from 'styled-components';
import noop from 'lodash.noop';
import themes from '@8x8/oxygen-theme';
export const themeNames = {
    light: 'light',
    dark: 'dark',
    classic: 'classic',
};
/**
 * Ignore undefined values from an object
 */
const definedProps = (obj) => Object.fromEntries(Object.entries(obj).filter(([k, v]) => v !== undefined));
// there is no theme name for "classic", we are going to use "novo" as default
// if you use the new provider you will only have the new design system on the context
const themeMapping = {
    light: 'novo',
    dark: 'novoDark',
    classic: 'novo',
};
const themeMappingNeo = {
    light: 'neoLight',
    dark: 'neoDark',
    classic: 'neoLight',
};
/**
 * Use `undefined` as default value to differentiate between project using
 * the Provider and projects not using it.
 * */
export const OxygenContext = createContext(undefined);
export const OxygenProvider = ({ children, ...props }) => {
    /**
     * read values from context to enable nesting
     * these have precendence over local default values
     *
     * props => context => defaults
     */
    const defaults = {
        themeName: 'light',
        telemetryCallback: noop,
    };
    const contextValues = React.useContext(OxygenContext);
    const { themeName, enableNeo, globalComponentsOverride, telemetryCallback } = {
        ...defaults,
        ...contextValues,
        ...definedProps(props),
    };
    // if a custom theme object is presented use that — but only if it comes directly from props, not from context
    // otherwise use the Oxygen provided themes (novo or novoDark) based on the themeName
    // classic returns novo — there is no classic with usage of <OxygenProvider />
    const selectedTheme = props.theme ||
        (enableNeo
            ? themes[themeMappingNeo[themeName]]
            : themes[themeMapping[themeName]]);
    const contextValue = React.useMemo(() => ({
        themeName,
        enableNeo,
        globalComponentsOverride,
        theme: selectedTheme,
        telemetryCallback,
    }), [
        themeName,
        enableNeo,
        globalComponentsOverride,
        selectedTheme,
        telemetryCallback,
    ]);
    return (React.createElement(OxygenContext.Provider, { value: contextValue },
        React.createElement(ThemeProvider, { theme: selectedTheme }, children)));
};
export const useOxygen = () => React.useContext(OxygenContext);
