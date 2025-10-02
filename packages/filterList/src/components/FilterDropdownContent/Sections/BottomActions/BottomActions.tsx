import React from 'react';
import isEqual from 'lodash.isequal';
import Button from '@8x8/oxygen-button';

import { isDateRange } from '../../../../utils/operatorDetails';
import {
  FilterType,
  FilterDefinitionType,
  Translations,
  GroupFilterDefinitionType,
} from '../../../../types';
import {
  Container,
  DeleteButton,
  NegativeActions,
} from './BottomActions.styled';
import { ActionButton } from '../ActionButton/ActionButton';
import { isGroupFilterDefinitionType } from '../../../../utils/getFilterType';

interface BottomActionsInterface {
  filter?: FilterType;
  internalFilter: FilterType;
  filterDefinition: FilterDefinitionType | GroupFilterDefinitionType;
  onFilterDelete(filterToDelete: FilterType): void;
  filterDefault?: FilterType;
  internalOnChange(newFilter: FilterType, applyExternal?: boolean): void;
  hasGlobalApplyButton: boolean;
  onApply(): void;
  translations: Partial<Translations>;
  testId: string;
  telemetryProps?: Record<string, string>;
}

function BottomActions({
  filter,
  internalFilter,
  filterDefinition,
  onFilterDelete,
  hasGlobalApplyButton,
  filterDefault,
  internalOnChange,
  telemetryProps,
  onApply,
  translations,
  testId,
}: BottomActionsInterface) {
  const isDirty =
    (!isEqual(filter?.values, internalFilter?.values) ||
      !isEqual(filter?.operator, internalFilter?.operator)) &&
    (!!internalFilter?.values?.length || filterDefinition.isAlwaysVisible) &&
    (!isDateRange(internalFilter.operator) ||
      (internalFilter.values?.[0]?.isEndTimeValid ?? true));

  const operatorsArray = isGroupFilterDefinitionType(filterDefinition)
    ? filterDefinition.subFilterOperators[internalFilter?.subFilterId]
    : filterDefinition.operators;
  const isSingleOperator = operatorsArray?.length === 1;
  const hasNoAction =
    filterDefinition.isAlwaysVisible &&
    hasGlobalApplyButton &&
    !isSingleOperator;

  if (hasNoAction) {
    return null;
  }

  return (
    <Container>
      <NegativeActions>
        {!filterDefinition.isAlwaysVisible ? (
          <DeleteButton
            variant="text"
            size="small"
            testId={`${testId}_DELETE_FILTER`}
            title={translations.deleteFilterlabel}
            onClick={() => onFilterDelete(internalFilter)}
            isDisabled={filterDefinition.isAlwaysVisible}
          >
            {translations.deleteFilterlabel}
          </DeleteButton>
        ) : (
          <div />
        )}

        <ActionButton
          internalFilter={internalFilter}
          filterDefinition={filterDefinition}
          filterDefault={filterDefault}
          internalOnChange={internalOnChange}
          hasGlobalApplyButton={hasGlobalApplyButton}
          translations={translations}
          testId={`${testId}_ACTION_BUTTON`}
          telemetryProps={telemetryProps}
        />
      </NegativeActions>

      {!hasGlobalApplyButton && (
        <Button
          variant="text"
          size="small"
          testId={`${testId}_APPLY_FILTER`}
          title={translations.applyFilterLabel}
          onClick={onApply}
          isDisabled={!isDirty}
        >
          {translations.applyFilterLabel}
        </Button>
      )}
    </Container>
  );
}

export default BottomActions;
