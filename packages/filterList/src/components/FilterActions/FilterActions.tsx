import React, { useCallback, useMemo } from 'react';
import { produce } from 'immer';
import isEqual from 'lodash.isequal';

import { getTestAttributes, useOxygen } from '@8x8/oxygen-config';
import Button from '@8x8/oxygen-button';
import { useAriaLive } from '@8x8/oxygen-utils';

import {
  FilterDefinitionType,
  FilterType,
  GroupFilterDefinitionType,
  Translations,
} from '../../types';
import { FilterListWrapper } from './FilterActions.styled';

interface FilterActionsInterface {
  filterDefinitions: (FilterDefinitionType | GroupFilterDefinitionType)[];
  currentFilters: FilterType[];
  internalCurrentFilters: FilterType[];
  defaultFilters?: FilterType[];
  onChange(newFilters: FilterType[]): void;
  setInternalCurrentFilters(newFilters: FilterType[]): void;
  hasGlobalApplyButton: boolean;
  translations: Partial<Translations>;
  testId: string;
  telemetryProps?: Record<string, string>;
}

function FilterActions({
  filterDefinitions,
  currentFilters,
  internalCurrentFilters,
  defaultFilters,
  onChange,
  setInternalCurrentFilters,
  hasGlobalApplyButton,
  translations,
  testId,
  telemetryProps,
}: FilterActionsInterface) {
  const shouldAllowSave = useMemo(
    () => !isEqual(currentFilters, internalCurrentFilters),
    [currentFilters, internalCurrentFilters],
  );

  const { telemetryCallback } = useOxygen();
  const { announce } = useAriaLive();
  const hasDefaults = !!defaultFilters;
  const shouldAllowClear = internalCurrentFilters.some(
    filter => Array.isArray(filter.values) && filter.values.length > 0,
  );

  const shouldEnableResetAll = useMemo(
    () => !!defaultFilters && !isEqual(internalCurrentFilters, defaultFilters),
    [internalCurrentFilters, defaultFilters],
  );

  const onApplyChanges = useCallback(() => {
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

    setInternalCurrentFilters(internalCurrentFilters);
    onChange(internalCurrentFilters);
  }, [onChange, internalCurrentFilters]);

  const onReset = useCallback(() => {
    if (telemetryProps && telemetryCallback !== undefined) {
      telemetryCallback?.('filter_reset_all', {
        ...telemetryProps,
      });
    }
    setInternalCurrentFilters(defaultFilters);
    onChange(defaultFilters);

    announce(translations.resetAllSuccessLabel);
  }, [
    onChange,
    defaultFilters,
    translations.resetAllSuccessLabel,
    setInternalCurrentFilters,
    telemetryCallback,
    telemetryProps,
    announce,
  ]);

  const onClearAll = useCallback(() => {
    if (telemetryProps && telemetryCallback !== undefined) {
      telemetryCallback?.('filter_clear_all', {
        ...telemetryProps,
      });
    }
    const newFilters = produce(internalCurrentFilters, draft => {
      return draft
        ?.filter(
          filter =>
            filterDefinitions?.find(definition => definition.id === filter.id)
              ?.isAlwaysVisible,
        )
        ?.map(filter => ({
          ...filter,
          values: null as FilterType['values'],
        }));
    });

    onChange(newFilters);

    announce(translations.clearAllSuccessLabel);
  }, [
    onChange,
    internalCurrentFilters,
    filterDefinitions,
    telemetryCallback,
    telemetryProps,
    translations.clearAllSuccessLabel,
    announce,
  ]);

  return (
    <FilterListWrapper {...getTestAttributes(`${testId}_CONTAINER`)}>
      {hasDefaults ? (
        <Button
          variant="text"
          testId={`${testId}_RESET_ALL_FILTER`}
          title={translations.resetAllLabel}
          onClick={onReset}
          isDisabled={!shouldEnableResetAll}
        >
          {translations.resetAllLabel}
        </Button>
      ) : (
        <Button
          variant="text"
          testId={`${testId}_CLEAR_ALL_FILTER`}
          title={translations.clearAllLabel}
          onClick={onClearAll}
          isDisabled={!shouldAllowClear}
        >
          {translations.clearAllLabel}
        </Button>
      )}

      {hasGlobalApplyButton && (
        <Button
          testId={`${testId}_GLOBAL_APPLY_FILTER`}
          onClick={onApplyChanges}
          title={translations.applyFilterLabel}
          isDisabled={!shouldAllowSave}
        >
          {translations.applyFilterLabel}
        </Button>
      )}
    </FilterListWrapper>
  );
}

export default FilterActions;
