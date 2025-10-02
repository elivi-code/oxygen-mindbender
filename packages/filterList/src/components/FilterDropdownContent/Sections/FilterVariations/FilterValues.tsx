import React from 'react';

import {
  FilterType,
  FilterDefinitionType,
  Translations,
  FilterListInterface,
  GroupFilterDefinitionType,
} from '../../../../types';
import {
  isDateRange,
  isMultiSelection,
  isSingleSelection,
} from '../../../../utils/operatorDetails';
import { isGroupFilterDefinitionType } from '../../../../utils/getFilterType';
import InputFilter from './InputFilter';
import SelectionFilter from './SelectionFilter';
import DateTimeRangeSelector from './DateRangeFilter';

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

function FilterValues({
  internalFilter,
  filterDefinition,
  filterDefault,
  internalOnChange,
  getSearchSuggestions,
  searchSuggestionKeyOffset,
  translations,
  testId,
}: FilterValuesInterface) {
  if (isDateRange(internalFilter.operator)) {
    return (
      <DateTimeRangeSelector
        internalFilter={internalFilter}
        filterDefinition={filterDefinition}
        filterDefault={filterDefault}
        internalOnChange={internalOnChange}
        testId={testId}
      />
    );
  }

  if (
    isMultiSelection(internalFilter.operator) ||
    isSingleSelection(internalFilter.operator) ||
    isGroupFilterDefinitionType(filterDefinition)
  ) {
    return (
      <SelectionFilter
        key={internalFilter.subFilterId || internalFilter.id}
        filterDefinition={filterDefinition}
        internalFilter={internalFilter}
        internalOnChange={internalOnChange}
        getSearchSuggestions={getSearchSuggestions}
        searchSuggestionKeyOffset={searchSuggestionKeyOffset}
        isMultiSelection={isMultiSelection(internalFilter.operator)}
        translations={translations}
        testId={testId}
      />
    );
  }

  return (
    <InputFilter
      internalFilter={internalFilter}
      internalOnChange={internalOnChange}
      testId={testId}
    />
  );
}

export default FilterValues;
