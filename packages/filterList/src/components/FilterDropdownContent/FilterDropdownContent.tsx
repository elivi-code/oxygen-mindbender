import React from 'react';

import { getTestAttributes } from '@8x8/oxygen-config';
import { Spinner } from '@8x8/oxygen-loaders';

import {
  FilterType,
  Translations,
  FilterListInterface,
  FilterDefinitionType,
  GroupFilterDefinitionType,
} from '../../types';
import { Container, LoaderContainer } from './FilterDropdownContent.styled';
import BottomActions from './Sections/BottomActions';
import TopActions from './Sections/TopActions';
import FilterValues from './Sections/FilterVariations';
import { isDateRange } from '../../utils/operatorDetails';
import { isGroupFilterDefinitionType } from '../../utils/getFilterType';
import GroupFilterContent from './GroupFilterContent';

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

function FilterDropdownContent({
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
}: FilterDropdownContentInterface) {
  const bottomActionsProps = {
    filter,
    internalFilter,
    filterDefinition,
    onFilterDelete,
    filterDefault,
    internalOnChange,
    hasGlobalApplyButton,
    onApply,
    translations,
    telemetryProps,
    testId: `${testId}_BOTTOM_ACTIONS`,
  };

  if (internalFilter?.isLoading) {
    return (
      <Container
        {...getTestAttributes(`${testId}_CONTAINER`)}
        {...(!isDateRange(internalFilter.operator) && { $maxWidth: true })}
      >
        <LoaderContainer>
          <Spinner size="small" />
        </LoaderContainer>
        <BottomActions {...bottomActionsProps} />
      </Container>
    );
  }

  return (
    <Container
      {...getTestAttributes(`${testId}_CONTAINER`)}
      {...(!isDateRange(internalFilter.operator) && { $maxWidth: true })}
    >
      {isGroupFilterDefinitionType(filterDefinition) ? (
        <GroupFilterContent
          filter={filter}
          internalFilter={internalFilter}
          filterDefinition={filterDefinition}
          onFilterDelete={onFilterDelete}
          internalOnChange={internalOnChange}
          filterDefault={filterDefault}
          hasGlobalApplyButton={hasGlobalApplyButton}
          onApply={onApply}
          getSearchSuggestions={getSearchSuggestions}
          searchSuggestionKeyOffset={searchSuggestionKeyOffset}
          translations={translations}
          testId={`${testId}_GROUP_FILTER_CONTENT`}
          popoverPortalRef={popoverPortalRef}
          telemetryProps={telemetryProps}
        />
      ) : (
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
            filterDefault={filterDefault}
            internalOnChange={internalOnChange}
            getSearchSuggestions={getSearchSuggestions}
            searchSuggestionKeyOffset={searchSuggestionKeyOffset}
            translations={translations}
            testId={`${testId}_VALUES`}
          />
          <BottomActions {...bottomActionsProps} />
        </>
      )}
    </Container>
  );
}

export default FilterDropdownContent;
