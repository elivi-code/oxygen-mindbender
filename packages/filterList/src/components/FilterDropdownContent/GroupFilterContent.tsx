import React from 'react';
import BottomActions from './Sections/BottomActions';
import TopActions from './Sections/TopActions';
import FilterValues from './Sections/FilterVariations';
import SubFilterActions from './Sections/SubFilterActions';
import {
  FilterType,
  FilterListInterface,
  GroupFilterDefinitionType,
  Translations,
} from '../../types';

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

function GroupFilterContent({
  filter,
  internalFilter,
  filterDefinition,
  filterDefault,
  internalOnChange,
  onFilterDelete,
  hasGlobalApplyButton,
  onApply,
  getSearchSuggestions,
  searchSuggestionKeyOffset,
  translations,
  testId,
  popoverPortalRef,
  telemetryProps,
}: GroupFilterInterface) {
  return (
    <>
      <SubFilterActions
        internalFilter={internalFilter}
        filterDefinition={filterDefinition}
        internalOnChange={internalOnChange}
        testId={`${testId}_SUB_FILTER_ACTIONS`}
        popoverPortalRef={popoverPortalRef}
      />
      {internalFilter?.subFilterId && (
        <>
          <TopActions
            internalFilter={internalFilter}
            filterDefinition={filterDefinition}
            internalOnChange={internalOnChange}
            testId={`${testId}_TOP_ACTIONS`}
            popoverPortalRef={popoverPortalRef}
          />

          <FilterValues
            internalFilter={internalFilter}
            filterDefinition={filterDefinition}
            internalOnChange={internalOnChange}
            getSearchSuggestions={getSearchSuggestions}
            searchSuggestionKeyOffset={searchSuggestionKeyOffset}
            translations={translations}
            testId={`${testId}_VALUES`}
          />

          <BottomActions
            filter={filter}
            internalFilter={internalFilter}
            filterDefinition={filterDefinition}
            onFilterDelete={onFilterDelete}
            filterDefault={filterDefault}
            internalOnChange={internalOnChange}
            hasGlobalApplyButton={hasGlobalApplyButton}
            onApply={onApply}
            translations={translations}
            telemetryProps={telemetryProps}
            testId={`${testId}_BOTTOM_ACTIONS`}
          />
        </>
      )}
    </>
  );
}

export default GroupFilterContent;
