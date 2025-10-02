import React, { createContext } from 'react';
import { ThemeProvider } from 'styled-components';
import type { PartialDeep } from 'type-fest';
import noop from 'lodash.noop';

import { AllComponentsThemes } from '@8x8/oxygen-constants';
import themes from '@8x8/oxygen-theme';
import type { Theme } from '@8x8/oxygen-theme';

export const themeNames = {
  light: 'light',
  dark: 'dark',
  classic: 'classic',
} as const;

export type TelemetryPayload = {
  [prop: string]: unknown;
};

export type ContextType = {
  themeName: keyof typeof themeNames;
  enableNeo: boolean;
  globalComponentsOverride?: PartialDeep<AllComponentsThemes>;
  theme: Theme;
  telemetryCallback?: (eventName: string, payload: TelemetryPayload) => void;
};

export interface OxygenProviderProps {
  themeName?: ContextType['themeName'];
  enableNeo?: boolean;
  globalComponentsOverride?: ContextType['globalComponentsOverride'];
  theme?: ContextType['theme'];
  telemetryCallback?: ContextType['telemetryCallback'];
  children: React.ReactNode;
}

/**
 * Ignore undefined values from an object
 */
const definedProps = (obj: unknown) =>
  Object.fromEntries(Object.entries(obj).filter(([k, v]) => v !== undefined));

// there is no theme name for "classic", we are going to use "novo" as default
// if you use the new provider you will only have the new design system on the context
const themeMapping = {
  light: 'novo',
  dark: 'novoDark',
  classic: 'novo',
} as const;

const themeMappingNeo = {
  light: 'neoLight',
  dark: 'neoDark',
  classic: 'neoLight',
} as const;

/**
 * Use `undefined` as default value to differentiate between project using
 * the Provider and projects not using it.
 * */
export const OxygenContext = createContext<ContextType>(undefined);

export const OxygenProvider: React.FunctionComponent<OxygenProviderProps> = ({
  children,
  ...props
}) => {
  /**
   * read values from context to enable nesting
   * these have precendence over local default values
   *
   * props => context => defaults
   */
  const defaults: Partial<ContextType> = {
    themeName: 'light',
    telemetryCallback: noop,
  };
  const contextValues = React.useContext(OxygenContext);

  const { themeName, enableNeo, globalComponentsOverride, telemetryCallback } =
    {
      ...defaults,
      ...contextValues,
      ...definedProps(props),
    };

  // if a custom theme object is presented use that — but only if it comes directly from props, not from context
  // otherwise use the Oxygen provided themes (novo or novoDark) based on the themeName
  // classic returns novo — there is no classic with usage of <OxygenProvider />
  const selectedTheme =
    props.theme ||
    (enableNeo
      ? themes[themeMappingNeo[themeName]]
      : themes[themeMapping[themeName]]);
  const contextValue = React.useMemo(
    () => ({
      themeName,
      enableNeo,
      globalComponentsOverride,
      theme: selectedTheme,
      telemetryCallback,
    }),
    [
      themeName,
      enableNeo,
      globalComponentsOverride,
      selectedTheme,
      telemetryCallback,
    ],
  );

  return (
    <OxygenContext.Provider value={contextValue}>
      <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>
    </OxygenContext.Provider>
  );
};

export const useOxygen = () => React.useContext(OxygenContext);
