import React from 'react';
import type { PartialDeep } from 'type-fest';
import { AllComponentsThemes } from '@8x8/oxygen-constants';
import type { Theme } from '@8x8/oxygen-theme';
export declare const themeNames: {
    readonly light: "light";
    readonly dark: "dark";
    readonly classic: "classic";
};
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
 * Use `undefined` as default value to differentiate between project using
 * the Provider and projects not using it.
 * */
export declare const OxygenContext: React.Context<ContextType>;
export declare const OxygenProvider: React.FunctionComponent<OxygenProviderProps>;
export declare const useOxygen: () => ContextType;
//# sourceMappingURL=OxygenProvider.d.ts.map