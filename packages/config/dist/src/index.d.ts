import React, { ComponentType } from 'react';
import type { PartialDeep } from 'type-fest';
import * as constants from '@8x8/oxygen-constants';
import type { AllComponentsThemes } from '@8x8/oxygen-constants';
import type { Theme } from '@8x8/oxygen-theme';
import { OxygenProvider, useOxygen, themeNames } from './OxygenProvider';
import type { ContextType, OxygenProviderProps } from './OxygenProvider';
type ConstantsType = typeof constants;
/**
 * Extend the default theme with custom configuration.
 * @param {Object} newConfigs
 */
declare function set(newConfigs: PartialDeep<ConstantsType>): void;
/**
 * Reset the configuration to use the default values for all components
 */
declare function reset(): void;
/**
 * Get the full theme configuration
 * @return {Object}
 */
declare function get(): typeof constants;
/**
 * Get the configuration for a component/element by ID
 * @param {String} configId
 * @return {*}
 */
declare function getById<T extends keyof typeof constants>(configId: T): (typeof constants)[T];
/**
 * Get the test attributes object
 * @param getTestIdFn
 * @return {Object}
 */
declare function getTestAttributes(getTestIdFn: string): {
    'test-id': string;
    'data-test-id': string;
    'data-id': string;
};
export type AnyTheme = ConstantsType[keyof ConstantsType];
/**
 * HOC to provide a theme to a component
 *
 * Logic:
 * 1. If using the OxygenProvider
 *  - get the themeName from the context ("light" or "dark") — if this is provided use this as base theme
 *  - get the globalComponentsOverride from the context — apply this on top of the base theme from above
 * 2. If not using the OxygenProvider, take the globalComponentTheme from the config object
 *    (this method will be deprecated in the future)
 *
 * @param {String} configProp Property name of configuration object
 */
declare function withTheme<U extends ComponentType<any>>(WrappedComponent: U & {
    componentType?: string;
    theme?: Partial<AnyTheme>;
}, configProp: keyof AllComponentsThemes): U & React.ForwardRefExoticComponent<React.PropsWithoutRef<React.ComponentProps<U>> & React.RefAttributes<unknown>>;
declare function setLogger(newLogger: Console['log']): void;
declare function withDeprecation<T>(WrappedComponent: ComponentType<T> & {
    componentType?: string;
}, deprecationMessage: string): React.ForwardRefExoticComponent<React.PropsWithoutRef<T> & React.RefAttributes<unknown>> & {
    componentType: string;
};
export type { ContextType, OxygenProviderProps, AllComponentsThemes, Theme };
export { set, reset, get, getById, getTestAttributes, withTheme, setLogger, withDeprecation, OxygenProvider, useOxygen, themeNames, };
//# sourceMappingURL=index.d.ts.map