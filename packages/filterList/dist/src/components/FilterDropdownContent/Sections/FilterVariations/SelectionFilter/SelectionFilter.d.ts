import React from 'react';
import { FilterDefinitionType, FilterListInterface, FilterType, Translations } from '../../../../../types';
interface SelectionFilterInterface {
    filterDefinition: FilterDefinitionType;
    internalFilter: FilterType;
    internalOnChange(newFilter: FilterType, applyExternal?: boolean): void;
    getSearchSuggestions?: FilterListInterface['getSearchSuggestions'];
    searchSuggestionKeyOffset?: number;
    isMultiSelection: boolean;
    translations: Partial<Translations>;
    testId: string;
}
declare function SelectionFilter({ filterDefinition, internalFilter, internalOnChange, getSearchSuggestions, searchSuggestionKeyOffset, isMultiSelection, translations, testId, }: SelectionFilterInterface): React.JSX.Element;
export default SelectionFilter;
//# sourceMappingURL=SelectionFilter.d.ts.map