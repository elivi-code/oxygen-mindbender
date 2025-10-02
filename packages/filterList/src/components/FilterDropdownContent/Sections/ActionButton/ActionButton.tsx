import React, { useCallback } from 'react';
import isEqual from 'lodash.isequal';
import Button from '@8x8/oxygen-button';
import { useOxygen } from '@8x8/oxygen-config';
import { useAriaLive } from '@8x8/oxygen-utils';

import {
  FilterType,
  FilterDefinitionType,
  Translations,
  GroupFilterDefinitionType,
} from '../../../../types';

interface ActionInterface {
  internalFilter: FilterType;
  filterDefinition: FilterDefinitionType | GroupFilterDefinitionType;
  filterDefault?: FilterType;
  internalOnChange(newFilter: FilterType, applyExternal?: boolean): void;
  hasGlobalApplyButton: boolean;
  translations: Partial<Translations>;
  testId: string;
  telemetryProps?: Record<string, string>;
}

export function ActionButton({
  internalFilter,
  filterDefinition,
  filterDefault,
  internalOnChange,
  hasGlobalApplyButton,
  translations,
  testId,
  telemetryProps,
}: ActionInterface) {
  const shouldEnableReset = !isEqual(internalFilter, filterDefault);
  const shouldAllowClear = !!internalFilter.values?.length;
  const hasDefaults = !!filterDefault;
  const { telemetryCallback } = useOxygen();
  const { announce } = useAriaLive();

  const onReset = useCallback(() => {
    if (telemetryProps && telemetryCallback !== undefined) {
      telemetryCallback?.('filter_reset', {
        ...telemetryProps,
      });
    }
    internalOnChange(filterDefault, !hasGlobalApplyButton);

    const filterName =
      filterDefinition.label || filterDefinition.name || filterDefinition.id;
    const message = translations.resetSuccessLabel?.replace(
      '{filterName}',
      filterName,
    );

    announce(message);
  }, [
    announce,
    filterDefault,
    filterDefinition,
    hasGlobalApplyButton,
    internalOnChange,
    telemetryCallback,
    telemetryProps,
    translations.resetSuccessLabel,
  ]);

  const onClear = useCallback(() => {
    internalOnChange(
      {
        ...internalFilter,
        values: null,
      },
      !hasGlobalApplyButton,
    );
  }, [internalOnChange, internalFilter, hasGlobalApplyButton]);

  if (hasDefaults) {
    return (
      <Button
        variant="text"
        size="small"
        testId={`${testId}_RESET_FILTER`}
        title={translations.resetLabel}
        onClick={onReset}
        isDisabled={!shouldEnableReset}
      >
        {translations.resetLabel}
      </Button>
    );
  }

  if (filterDefinition.isAlwaysVisible) {
    return (
      <Button
        variant="text"
        size="small"
        testId={`${testId}_CLEAR_FILTER`}
        title={translations.clearLabel}
        onClick={onClear}
        isDisabled={!shouldAllowClear}
      >
        {translations.clearLabel}
      </Button>
    );
  }

  return null;
}
