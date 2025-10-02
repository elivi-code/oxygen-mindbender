import React from 'react';
import { FilterListInterface, FilterType, FilterDefinitionType, Translations, GroupFilterDefinitionType } from '../../types';
interface FilterInterface extends Pick<FilterListInterface, 'getSearchSuggestions' | 'hasGlobalApplyButton' | 'searchSuggestionKeyOffset' | 'popoverPortalRef' | 'showOperatorInFilterButton'> {
    openFilterId: FilterType['id'];
    setOpenFilterId?(newFilterId: FilterType['id']): void;
    internalFilter: FilterType;
    filter?: FilterType;
    filterDefinition: FilterDefinitionType | GroupFilterDefinitionType;
    filterDefault?: FilterType;
    internalOnChange(newFilter: FilterType, applyExternal?: boolean): void;
    onFilterDelete(filterToDelete: FilterType): void;
    onApply(): void;
    translations: Partial<Translations>;
    testId: string;
    telemetryProps?: Record<string, string>;
}
declare function Filter({ openFilterId, setOpenFilterId, internalFilter, filter, filterDefinition, filterDefault, internalOnChange, onFilterDelete, hasGlobalApplyButton, onApply, getSearchSuggestions, searchSuggestionKeyOffset, popoverPortalRef, translations, testId, telemetryProps, showOperatorInFilterButton, }: FilterInterface): React.JSX.Element;
export default Filter;
//# sourceMappingURL=Filter.d.ts.map