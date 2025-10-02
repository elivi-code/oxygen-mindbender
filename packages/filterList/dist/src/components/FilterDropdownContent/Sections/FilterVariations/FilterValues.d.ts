import React from 'react';
import { FilterType, FilterDefinitionType, Translations, FilterListInterface, GroupFilterDefinitionType } from '../../../../types';
interface FilterValuesInterface {
    internalFilter: FilterType;
    filterDefinition: FilterDefinitionType | GroupFilterDefinitionType;
    filterDefault?: FilterType;
    internalOnChange(newFilter: FilterType, applyExternal?: boolean): void;
    getSearchSuggestions?: FilterListInterface['getSearchSuggestions'];
    searchSuggestionKeyOffset?: number;
    translations: Partial<Translations>;
    testId: string;
}
declare function FilterValues({ internalFilter, filterDefinition, filterDefault, internalOnChange, getSearchSuggestions, searchSuggestionKeyOffset, translations, testId, }: FilterValuesInterface): React.JSX.Element;
export default FilterValues;
//# sourceMappingURL=FilterValues.d.ts.map