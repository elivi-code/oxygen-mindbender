import React, { useCallback } from 'react';
import Select from '@8x8/oxygen-select';

import decorateOperatorWithLabel from '../../../../utils/decorateOperatorWithLabel';
import { isGroupFilterDefinitionType } from '../../../../utils/getFilterType';

import {
  FilterType,
  FilterDefinitionType,
  OperatorType,
  GroupFilterDefinitionType,
} from '../../../../types';
import { Container, SelectWrapper } from './TopActions.styled';

interface TopActionsInterface {
  internalFilter: FilterType;
  filterDefinition: FilterDefinitionType | GroupFilterDefinitionType;
  internalOnChange(newFilter: FilterType, applyExternal?: boolean): void;
  testId: string;
  popoverPortalRef?: React.RefObject<HTMLElement>;
}

function TopActions({
  internalFilter,
  filterDefinition,
  internalOnChange,
  testId,
  popoverPortalRef,
}: TopActionsInterface) {
  const operatorsArray = isGroupFilterDefinitionType(filterDefinition)
    ? filterDefinition.subFilterOperators[internalFilter?.subFilterId]
    : filterDefinition.operators;

  const operators = operatorsArray?.map(operator =>
    decorateOperatorWithLabel(operator),
  );

  const activeOperator = decorateOperatorWithLabel(internalFilter.operator);

  const isSingleOperator = operators?.length === 1;
  const onOperatorChange = useCallback(
    (option: OperatorType) => {
      if (option.value !== internalFilter.operator.value) {
        internalOnChange({
          ...internalFilter,
          operator: option,
          values: [],
        });
      }
    },
    [internalFilter, internalOnChange],
  );

  const popoverPortalTarget = popoverPortalRef?.current ?? document.body;

  if (isSingleOperator) {
    return null;
  }

  return (
    <Container>
      <SelectWrapper>
        {operators?.length ? (
          <Select
            testId={`${testId}_SELECT`}
            isSearchable={false}
            isClearable={false}
            onChange={onOperatorChange}
            options={operators}
            value={activeOperator}
            menuPosition="fixed"
            menuPortalTarget={popoverPortalTarget}
          />
        ) : (
          <div />
        )}
      </SelectWrapper>
    </Container>
  );
}

export default TopActions;
