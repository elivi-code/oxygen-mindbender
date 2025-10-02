import React from 'react';
import { FilterType, FilterDefinitionType, Translations, GroupFilterDefinitionType } from '../../../../types';
interface BottomActionsInterface {
    filter?: FilterType;
    internalFilter: FilterType;
    filterDefinition: FilterDefinitionType | GroupFilterDefinitionType;
    onFilterDelete(filterToDelete: FilterType): void;
    filterDefault?: FilterType;
    internalOnChange(newFilter: FilterType, applyExternal?: boolean): void;
    hasGlobalApplyButton: boolean;
    onApply(): void;
    translations: Partial<Translations>;
    testId: string;
    telemetryProps?: Record<string, string>;
}
declare function BottomActions({ filter, internalFilter, filterDefinition, onFilterDelete, hasGlobalApplyButton, filterDefault, internalOnChange, telemetryProps, onApply, translations, testId, }: BottomActionsInterface): React.JSX.Element;
export default BottomActions;
//# sourceMappingURL=BottomActions.d.ts.map