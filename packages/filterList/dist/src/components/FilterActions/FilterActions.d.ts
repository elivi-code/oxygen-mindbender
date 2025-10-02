import React from 'react';
import { FilterDefinitionType, FilterType, GroupFilterDefinitionType, Translations } from '../../types';
interface FilterActionsInterface {
    filterDefinitions: (FilterDefinitionType | GroupFilterDefinitionType)[];
    currentFilters: FilterType[];
    internalCurrentFilters: FilterType[];
    defaultFilters?: FilterType[];
    onChange(newFilters: FilterType[]): void;
    setInternalCurrentFilters(newFilters: FilterType[]): void;
    hasGlobalApplyButton: boolean;
    translations: Partial<Translations>;
    testId: string;
    telemetryProps?: Record<string, string>;
}
declare function FilterActions({ filterDefinitions, currentFilters, internalCurrentFilters, defaultFilters, onChange, setInternalCurrentFilters, hasGlobalApplyButton, translations, testId, telemetryProps, }: FilterActionsInterface): React.JSX.Element;
export default FilterActions;
//# sourceMappingURL=FilterActions.d.ts.map