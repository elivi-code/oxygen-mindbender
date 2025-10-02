import React, { useCallback, useEffect, useState, useRef } from 'react';
import { produce } from 'immer';
import { useImmer } from 'use-immer';
import isEqual from 'lodash.isequal';
import { getTestAttributes, useOxygen } from '@8x8/oxygen-config';

import { FiltersWrapper, FilterListWrapper } from './FilterList.styled';
import {
  FilterType,
  FilterDefinitionType,
  FilterListInterface,
  Translations,
  GroupFilterDefinitionType,
} from '../../types';
import Filter from '../Filter';
import AddNewFilter from '../AddNewFilter';
import FilterActions from '../FilterActions';
import { isGroupFilterDefinitionType } from '../../utils/getFilterType';

const defaultTranslations: Translations = {
  searchNewFilterLabel: 'Search filter',
  searchValueLabel: 'Search filter values',
  addNewFilterLabel: 'Add filter',
  applyFilterLabel: 'Apply',
  resetAllLabel: 'Reset All',
  resetAllSuccessLabel: 'All filters have been reset',
  clearAllLabel: 'Clear All',
  clearAllSuccessLabel: 'All filters have been cleared',
  deleteFilterlabel: 'Delete',
  resetLabel: 'Reset',
  resetSuccessLabel: 'Filter {filterName} successfully reset',
  clearLabel: 'Clear',
  noSuggestionsFoundLabel: 'No suggestions found',
  selectedLabel: 'Selected',
  freeformLabel: 'Freeform',
};

function FilterList({
  currentFilters,
  defaultFilters = undefined,
  filterDefinitions,
  getSearchSuggestions = undefined,
  searchSuggestionKeyOffset = 20,
  onChange,
  onFilterToggle = undefined,
  hasGlobalApplyButton = false,
  emptyFilterAllowed = false,
  currentFiltersSortFunction = undefined,
  popoverPortalRef = undefined,
  translations = defaultTranslations,
  testId = 'FILTER_LIST',
  telemetryProps,
  showOperatorInFilterButton = true,
}: FilterListInterface) {
  const [internalCurrentFilters, setInternalCurrentFilters] = useImmer<
    FilterType[]
  >([]);

  const { telemetryCallback } = useOxygen();
  const [openFilterId, setOpenFilterId] = useState<FilterType['id']>();
  const localPopoverPortalRef = useRef<HTMLDivElement | null>(null);
  const popoverPortalRefToUse = popoverPortalRef || localPopoverPortalRef;

  // Clear internal state if automatic apply is enabled when openFilterId changes
  useEffect(() => {
    if (
      !isEqual(currentFilters, internalCurrentFilters) &&
      !openFilterId &&
      !hasGlobalApplyButton &&
      !emptyFilterAllowed
    ) {
      setInternalCurrentFilters(currentFilters);
    }
  }, [
    currentFilters,
    setInternalCurrentFilters,
    openFilterId,
    hasGlobalApplyButton,
    emptyFilterAllowed,
  ]);

  // Update internal state if external state changes - general case
  useEffect(() => {
    if (!isEqual(currentFilters, internalCurrentFilters)) {
      setInternalCurrentFilters(currentFilters);
    }
  }, [currentFilters, setInternalCurrentFilters]);

  // Notify parent component whenever a filter is opened/closed
  useEffect(() => {
    onFilterToggle?.(openFilterId);
  }, [openFilterId]);

  const onAddFilter = useCallback(
    (newFilterDefinition: FilterDefinitionType | GroupFilterDefinitionType) => {
      const newFilter: FilterType = {
        id: newFilterDefinition.id,
        label: newFilterDefinition.label,
        name: newFilterDefinition.name,
        ...(isGroupFilterDefinitionType(newFilterDefinition)
          ? {}
          : { operator: newFilterDefinition.operators?.[0] }),
      };

      const newInternalFilters = produce(internalCurrentFilters, draft => {
        draft.push(newFilter);

        if (currentFiltersSortFunction) {
          draft.sort(currentFiltersSortFunction);
        }
      });

      setInternalCurrentFilters(newInternalFilters);
      setOpenFilterId(newFilter.id);
    },
    [internalCurrentFilters, setInternalCurrentFilters, setOpenFilterId],
  );

  const internalOnChange = useCallback(
    (newFilter: FilterType, applyExternal?: boolean) => {
      const newFilters = produce(internalCurrentFilters, draft => {
        const index = draft.findIndex(filter => filter.id === newFilter.id);

        draft[index] = newFilter;

        if (currentFiltersSortFunction) {
          draft.sort(currentFiltersSortFunction);
        }
      });

      setInternalCurrentFilters(newFilters);

      if (applyExternal && !isEqual(newFilters, currentFilters)) {
        onChange(newFilters);
      }
    },
    [internalCurrentFilters, setInternalCurrentFilters, onChange],
  );

  const onFilterDelete = useCallback(
    (filterToDelete: FilterType) => {
      const newFilters = produce(internalCurrentFilters, draft => {
        const updatedDraft = draft.filter(
          filter => filter.id !== filterToDelete.id,
        );

        if (currentFiltersSortFunction) {
          updatedDraft.sort(currentFiltersSortFunction);
        }

        return updatedDraft;
      });

      setInternalCurrentFilters(newFilters);

      if (!hasGlobalApplyButton) {
        onChange(newFilters);
      }
    },
    [
      internalCurrentFilters,
      setInternalCurrentFilters,
      onChange,
      hasGlobalApplyButton,
    ],
  );

  const onApply = useCallback(() => {
    const internalCurrentFiltersWithoutValues = internalCurrentFilters.map(
      filter => {
        const { values, ...rest } = filter;

        return rest;
      },
    );

    if (telemetryProps && telemetryCallback !== undefined) {
      telemetryCallback?.('filter_apply', {
        ...telemetryProps,
        filters: internalCurrentFiltersWithoutValues,
      });
    }

    onChange(internalCurrentFilters);
    setOpenFilterId(null);
  }, [internalCurrentFilters, onChange, setOpenFilterId]);

  return (
    <FiltersWrapper {...getTestAttributes(testId)}>
      <FilterListWrapper>
        {internalCurrentFilters.map(currentFilter => {
          const filterDefinition:
            | FilterDefinitionType
            | GroupFilterDefinitionType =
            filterDefinitions?.find(
              definition => definition.id === currentFilter.id,
            ) || currentFilter;

          const filterDefault = defaultFilters?.find(
            defaultFilter => defaultFilter.id === currentFilter.id,
          );

          const filter = currentFilters?.find(
            searchedFilter => searchedFilter.id === currentFilter.id,
          );

          return (
            <Filter
              key={currentFilter.id}
              openFilterId={openFilterId}
              setOpenFilterId={setOpenFilterId}
              internalFilter={currentFilter}
              filter={filter}
              filterDefinition={filterDefinition}
              filterDefault={filterDefault}
              internalOnChange={internalOnChange}
              onFilterDelete={onFilterDelete}
              hasGlobalApplyButton={hasGlobalApplyButton}
              onApply={onApply}
              getSearchSuggestions={getSearchSuggestions}
              searchSuggestionKeyOffset={searchSuggestionKeyOffset}
              popoverPortalRef={popoverPortalRefToUse}
              translations={translations}
              testId={`${testId}_FILTER`}
              telemetryProps={telemetryProps}
              showOperatorInFilterButton={showOperatorInFilterButton}
            />
          );
        })}

        <AddNewFilter
          internalCurrentFilters={internalCurrentFilters}
          filterDefinitions={filterDefinitions}
          onAddFilter={onAddFilter}
          popoverPortalRef={popoverPortalRefToUse}
          translations={translations}
          testId={`${testId}_ADD_NEW_FILTER`}
        />
      </FilterListWrapper>

      <FilterActions
        filterDefinitions={filterDefinitions}
        currentFilters={currentFilters}
        defaultFilters={defaultFilters}
        internalCurrentFilters={internalCurrentFilters}
        onChange={onChange}
        setInternalCurrentFilters={setInternalCurrentFilters}
        hasGlobalApplyButton={hasGlobalApplyButton}
        translations={translations}
        testId={`${testId}_ACTIONS`}
        telemetryProps={telemetryProps}
      />
      <div
        ref={localPopoverPortalRef}
        {...getTestAttributes(`${testId}_PORTAL`)}
      />
    </FiltersWrapper>
  );
}

export default FilterList;
