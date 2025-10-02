import React, { useCallback, ComponentProps } from 'react';
import Select, { SelectOption } from '@8x8/oxygen-select';

import {
  FilterType,
  FilterValueType,
  GroupFilterDefinitionType,
} from '../../../../types';

import { Container, SelectWrapper } from './SubFilterActions.styled';

interface SubFilterActionsInterface {
  internalFilter: FilterType;
  filterDefinition: GroupFilterDefinitionType;
  internalOnChange(newFilter: FilterType, applyExternal?: boolean): void;
  testId: string;
  popoverPortalRef?: React.RefObject<HTMLElement>;
}

function SubFilterActions({
  internalFilter,
  filterDefinition,
  internalOnChange,
  testId,
  popoverPortalRef,
}: SubFilterActionsInterface) {
  const popoverPortalTarget = popoverPortalRef?.current ?? document.body;

  const options = filterDefinition.values?.map(value => ({
    value: String(value.value),
    label: value.label || `${value.value}`,
  }));

  const activeSubFilter =
    options?.find(option => option.value === internalFilter.subFilterId) ||
    null;

  const onSubFilterChange: ComponentProps<typeof Select>['onChange'] =
    useCallback(
      (option: { value: FilterValueType; label: string }) => {
        const operators = filterDefinition.subFilterOperators?.[option.value];

        if (internalFilter.subFilterId !== option.value) {
          internalOnChange({
            ...internalFilter,
            subFilterId: String(option.value),
            operator: operators[0],
            values: [],
          });
        }
      },
      [filterDefinition, internalFilter, internalOnChange],
    );

  return (
    <Container showMargin={!!internalFilter?.subFilterId}>
      <SelectWrapper>
        {filterDefinition.values?.length ? (
          <Select<string, SelectOption<string>>
            testId={`${testId}_GROUP_FILTER_SELECT`}
            isSearchable={false}
            isClearable={false}
            onChange={onSubFilterChange}
            options={options}
            value={activeSubFilter}
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

export default SubFilterActions;
