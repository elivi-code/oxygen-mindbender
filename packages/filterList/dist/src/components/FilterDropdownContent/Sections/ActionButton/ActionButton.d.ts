import React from 'react';
import { FilterType, FilterDefinitionType, Translations, GroupFilterDefinitionType } from '../../../../types';
interface ActionInterface {
    internalFilter: FilterType;
    filterDefinition: FilterDefinitionType | GroupFilterDefinitionType;
    filterDefault?: FilterType;
    internalOnChange(newFilter: FilterType, applyExternal?: boolean): void;
    hasGlobalApplyButton: boolean;
    translations: Partial<Translations>;
    testId: string;
    telemetryProps?: Record<string, string>;
}
export declare function ActionButton({ internalFilter, filterDefinition, filterDefault, internalOnChange, hasGlobalApplyButton, translations, testId, telemetryProps, }: ActionInterface): React.JSX.Element;
export {};
//# sourceMappingURL=ActionButton.d.ts.map