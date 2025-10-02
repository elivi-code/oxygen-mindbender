import React from 'react';
import { FilterType, Translations, FilterListInterface, FilterDefinitionType, GroupFilterDefinitionType } from '../../types';
interface FilterDropdownContentInterface {
    filter?: FilterType;
    internalFilter: FilterType;
    filterDefinition: FilterDefinitionType | GroupFilterDefinitionType;
    filterDefault?: FilterType;
    internalOnChange(newFilter: FilterType, applyExternal?: boolean): void;
    onFilterDelete(filterToDelete: FilterType): void;
    hasGlobalApplyButton: boolean;
    onApply(): void;
    getSearchSuggestions?: FilterListInterface['getSearchSuggestions'];
    searchSuggestionKeyOffset?: number;
    translations: Partial<Translations>;
    testId: string;
    popoverPortalRef: React.RefObject<HTMLElement>;
    telemetryProps?: Record<string, string>;
}
declare function FilterDropdownContent({ filter, internalFilter, filterDefinition, filterDefault, internalOnChange, onFilterDelete, hasGlobalApplyButton, onApply, getSearchSuggestions, searchSuggestionKeyOffset, translations, testId, popoverPortalRef, telemetryProps, }: FilterDropdownContentInterface): React.JSX.Element;
export default FilterDropdownContent;
//# sourceMappingURL=FilterDropdownContent.d.ts.map