import React from 'react';
import { FilterType, FilterListInterface, GroupFilterDefinitionType, Translations } from '../../types';
interface GroupFilterInterface {
    filter?: FilterType;
    internalFilter: FilterType;
    filterDefinition: GroupFilterDefinitionType;
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
declare function GroupFilterContent({ filter, internalFilter, filterDefinition, filterDefault, internalOnChange, onFilterDelete, hasGlobalApplyButton, onApply, getSearchSuggestions, searchSuggestionKeyOffset, translations, testId, popoverPortalRef, telemetryProps, }: GroupFilterInterface): React.JSX.Element;
export default GroupFilterContent;
//# sourceMappingURL=GroupFilterContent.d.ts.map