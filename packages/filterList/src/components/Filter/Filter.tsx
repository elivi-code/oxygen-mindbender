import { Popover } from '@8x8/oxygen-popover';
import React from 'react';
import { ArrowDownIcon, CalendarIcon } from '@8x8/oxygen-icon';

import {
  FilterListInterface,
  FilterType,
  FilterDefinitionType,
  Translations,
  GroupFilterDefinitionType,
} from '../../types';
import { FilterTag } from './Filter.styled';
import { isFilterActive } from '../../utils/filterDetails';
import FilterDropdownContent from '../FilterDropdownContent';
import FilterTagText from './FilterTagText';
import getFilterTitle from '../../utils/getFilterTitle';
import { isDateRange } from '../../utils/operatorDetails';

interface FilterInterface
  extends Pick<
    FilterListInterface,
    | 'getSearchSuggestions'
    | 'hasGlobalApplyButton'
    | 'searchSuggestionKeyOffset'
    | 'popoverPortalRef'
    | 'showOperatorInFilterButton'
  > {
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

function Filter({
  openFilterId,
  setOpenFilterId,
  internalFilter,
  filter,
  filterDefinition,
  filterDefault,
  internalOnChange,
  onFilterDelete,
  hasGlobalApplyButton,
  onApply,
  getSearchSuggestions,
  searchSuggestionKeyOffset,
  popoverPortalRef,
  translations,
  testId,
  telemetryProps,
  showOperatorInFilterButton,
}: FilterInterface) {
  const { title, id } = filterDefinition;
  const titleDisplay = getFilterTitle(
    internalFilter,
    filterDefinition,
    openFilterId !== id,
  );

  return (
    <Popover
      isOpen={openFilterId === id}
      setIsOpen={(value: boolean) => {
        setOpenFilterId(value ? id : null);
      }}
      floatingContent={
        <FilterDropdownContent
          filter={filter}
          internalFilter={internalFilter}
          filterDefinition={filterDefinition}
          filterDefault={filterDefault}
          internalOnChange={internalOnChange}
          onFilterDelete={onFilterDelete}
          hasGlobalApplyButton={hasGlobalApplyButton}
          onApply={onApply}
          getSearchSuggestions={getSearchSuggestions}
          searchSuggestionKeyOffset={searchSuggestionKeyOffset}
          translations={translations}
          testId={`${testId}_DROPDOWN_CONTENT`}
          popoverPortalRef={popoverPortalRef}
          telemetryProps={telemetryProps}
        />
      }
      testId={`${testId}_POPOVER`}
      portalTargetRef={popoverPortalRef}
      {...(isDateRange(internalFilter.operator) && { maxHeight: 512 })}
    >
      <FilterTag
        isFilterActive={isFilterActive(internalFilter)}
        size="small"
        id={`filter-${id}`}
        title={title || titleDisplay}
        iconRight={
          isDateRange(filter?.operator) ? <CalendarIcon /> : <ArrowDownIcon />
        }
        testId={`${testId}_FILTER_TAG_${id}`}
      >
        <FilterTagText
          filter={internalFilter}
          filterDefinition={filterDefinition}
          showOperatorInFilterButton={showOperatorInFilterButton}
          shouldShowOperator={openFilterId === id}
        />
      </FilterTag>
    </Popover>
  );
}

export default Filter;
