import React, { ComponentType } from 'react';
import PropTypes from 'prop-types';
import type { PartialDeep } from 'type-fest';
import assign from 'lodash.assign';
import cloneDeep from 'lodash.clonedeep';
import isFunction from 'lodash.isfunction';
import isObject from 'lodash.isobject';
import hoistStatics from 'hoist-non-react-statics';

import * as constants from '@8x8/oxygen-constants';
import type { AllComponentsThemes } from '@8x8/oxygen-constants';
import { isReactDevMode } from '@8x8/oxygen-utils';
import type { Theme } from '@8x8/oxygen-theme';

import { OxygenProvider, useOxygen, themeNames } from './OxygenProvider';
import type { ContextType, OxygenProviderProps } from './OxygenProvider';

type ConstantsType = typeof constants;
type ConstantsKey = keyof ConstantsType;

let configObject = cloneDeep(constants);
let logger: Console['log'] = console.warn; // eslint-disable-line no-console

const COMPONENT_TYPE_HOC = 'HOC';

/**
 * Extend the default theme with custom configuration.
 * @param {Object} newConfigs
 */
function set(newConfigs: PartialDeep<ConstantsType>) {
  Object.keys(newConfigs)
    .filter((key: ConstantsKey) => key in newConfigs)
    .forEach((key: ConstantsKey) => {
      if (isObject(newConfigs[key]) && isObject(configObject[key])) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        configObject[key] = assign(configObject[key], newConfigs[key]);
      } else {
        /* The following item is completeley ignored by type-safe projects due to defined types */
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        configObject[key] = newConfigs[key];
      }
    });
}

/**
 * Reset the configuration to use the default values for all components
 */
function reset() {
  configObject = cloneDeep(constants);
}

/**
 * Get the full theme configuration
 * @return {Object}
 */
function get() {
  return cloneDeep(configObject);
}

/**
 * Get the configuration for a component/element by ID
 * @param {String} configId
 * @return {*}
 */
function getById<T extends keyof typeof constants>(configId: T) {
  return configObject[configId];
}

/**
 * Get the test attributes object
 * @param getTestIdFn
 * @return {Object}
 */
function getTestAttributes(getTestIdFn: string) {
  return {
    'test-id': getTestIdFn,
    'data-test-id': getTestIdFn,
    'data-id': getTestIdFn,
  };
}

export type AnyTheme = ConstantsType[keyof ConstantsType];

const themeMapper = {
  light: 'Novo',
  dark: 'NovoDark',
  classic: '',
} as const;

const neoThemeMapper = {
  light: 'NeoLight',
  dark: 'NeoDark',
  classic: 'NeoLight',
};

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
function withTheme<U extends ComponentType<any>>(
  WrappedComponent: U & {
    componentType?: string;
    theme?: Partial<AnyTheme>;
  },
  configProp: keyof AllComponentsThemes,
) {
  type P = React.ComponentProps<U>;
  const WithTheme = React.forwardRef((props: P, ref) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { theme, ...rest } = props;

    // Get the theme from the context
    const context = useOxygen();

    // holds the component theme object, either from the global config object or from the context
    let computedTheme;

    // no context available — use the computedTheme from the config object
    if (!context) {
      /**
       * get and getById are both expensive as they both do deep cloning
       * use getById as it only clones a part of the config tree until
       * we get rid of the global config object and deep cloning
       * */
      computedTheme = getById(configProp);
    } else {
      // use from context
      const { themeName, enableNeo, globalComponentsOverride } = context;

      const componentTheme = enableNeo
        ? // maps to ${componentName}NeoLight or ${componentName}NeoDark from constants
          (`${configProp}${neoThemeMapper[themeName]}` as keyof AllComponentsThemes)
        : // maps to ${componentName}Novo or ${componentName}NovoDark from constants
          (`${configProp}${themeMapper[themeName]}` as keyof AllComponentsThemes);

      computedTheme = {
        ...constants[componentTheme],
        // apply global overrides if available for this particular component (if available)
        ...globalComponentsOverride?.[configProp],
      };
    }

    // Allow the local provided theme object to overwrite the global theme object (that comes from the config or from the context)
    const componentTheme = {
      ...computedTheme,
      ...theme,
    };

    const refs =
      WrappedComponent.componentType === COMPONENT_TYPE_HOC
        ? { ref }
        : { forwardedRef: ref };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return <WrappedComponent {...rest} theme={componentTheme} {...refs} />;
  });

  WithTheme.displayName = WrappedComponent.displayName;

  const WithThemeNS = Object.assign(WithTheme, {
    name: WrappedComponent.name,
    componentType: COMPONENT_TYPE_HOC,
    propTypes: {
      theme: PropTypes.object,
    },
    defaultProps: {
      theme: {},
    },
  });

  hoistStatics(WithThemeNS, WrappedComponent);

  return WithThemeNS as unknown as U & typeof WithTheme;
}

function setLogger(newLogger: Console['log']) {
  if (isFunction(newLogger)) {
    logger = newLogger;
  }
}

function withDeprecation<T>(
  WrappedComponent: ComponentType<T> & { componentType?: string },
  deprecationMessage: string,
) {
  const WithDeprecation = React.forwardRef((props: T, ref) => {
    const refs =
      WrappedComponent.componentType === COMPONENT_TYPE_HOC
        ? { ref }
        : { forwardedRef: ref };

    return <WrappedComponent {...props} {...refs} />;
  });

  WithDeprecation.displayName = WrappedComponent.displayName;

  const WithDeprecationNS = Object.assign(WithDeprecation, {
    componentType: COMPONENT_TYPE_HOC,
  });

  if (isReactDevMode()) {
    const message =
      deprecationMessage ||
      `Component "${
        WrappedComponent.displayName || WrappedComponent.name || ''
      }" is deprecated`;

    logger(
      `${message}; Please check Oxygen changelog for more info: https://github.com/8x8/oxygen/blob/master/CHANGELOG.md`,
    );
  }

  hoistStatics(WithDeprecationNS, WrappedComponent);

  return WithDeprecationNS;
}

export type { ContextType, OxygenProviderProps, AllComponentsThemes, Theme };

export {
  set,
  reset,
  get,
  getById,
  getTestAttributes,
  withTheme,
  setLogger,
  withDeprecation,
  OxygenProvider,
  useOxygen,
  themeNames,
};
