import React from 'react';
import { isDateRange, isMultiSelection, isSingleSelection, } from '../../../../utils/operatorDetails';
import { isGroupFilterDefinitionType } from '../../../../utils/getFilterType';
import InputFilter from './InputFilter';
import SelectionFilter from './SelectionFilter';
import DateTimeRangeSelector from './DateRangeFilter';
function FilterValues({ internalFilter, filterDefinition, filterDefault, internalOnChange, getSearchSuggestions, searchSuggestionKeyOffset, translations, testId, }) {
    if (isDateRange(internalFilter.operator)) {
        return (React.createElement(DateTimeRangeSelector, { internalFilter: internalFilter, filterDefinition: filterDefinition, filterDefault: filterDefault, internalOnChange: internalOnChange, testId: testId }));
    }
    if (isMultiSelection(internalFilter.operator) ||
        isSingleSelection(internalFilter.operator) ||
        isGroupFilterDefinitionType(filterDefinition)) {
        return (React.createElement(SelectionFilter, { key: internalFilter.subFilterId || internalFilter.id, filterDefinition: filterDefinition, internalFilter: internalFilter, internalOnChange: internalOnChange, getSearchSuggestions: getSearchSuggestions, searchSuggestionKeyOffset: searchSuggestionKeyOffset, isMultiSelection: isMultiSelection(internalFilter.operator), translations: translations, testId: testId }));
    }
    return (React.createElement(InputFilter, { internalFilter: internalFilter, internalOnChange: internalOnChange, testId: testId }));
}
export default FilterValues;
