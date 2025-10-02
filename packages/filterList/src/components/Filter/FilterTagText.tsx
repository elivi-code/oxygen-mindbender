import styled from 'styled-components';
import React from 'react';

import { FilterDefinitionType, FilterType } from '../../types';
import extractDataFromFilter from '../../utils/extractDataFromFilter';
import { isDateRange } from '../../utils/operatorDetails';
import { FilterTagTextWrapper } from './Filter.styled';

const MaxWidthWithEllipsis = styled.span`
  white-space: nowrap;
  overflow: hidden;
  max-width: 228px;
  text-overflow: ellipsis;
`;

interface FilterTagTextInterface {
  filter: FilterType;
  filterDefinition?: FilterDefinitionType;
  showOperatorInFilterButton?: boolean;
  shouldShowOperator?: boolean;
}

function FilterTagText({
  filter,
  filterDefinition = undefined,
  showOperatorInFilterButton,
  shouldShowOperator = false,
}: FilterTagTextInterface) {
  const { filterLabel, operatorLabel, firstValueLabel, filterValuesLength } =
    extractDataFromFilter(filter, filterDefinition);

  const operator = shouldShowOperator || firstValueLabel ? operatorLabel : '';

  const Wrapper = isDateRange(filter?.operator)
    ? React.Fragment
    : MaxWidthWithEllipsis;

  return (
    <FilterTagTextWrapper>
      <Wrapper>
        {filterLabel}
        {showOperatorInFilterButton && operator && (
          <strong>{` ${operator}`}</strong>
        )}
        {showOperatorInFilterButton && firstValueLabel && ` ${firstValueLabel}`}
        {!showOperatorInFilterButton &&
          isDateRange(filter?.operator) &&
          firstValueLabel && <strong>{` (${firstValueLabel})`}</strong>}
      </Wrapper>

      {showOperatorInFilterButton
        ? filterValuesLength > 1 && (
            <strong>{` +${filterValuesLength - 1}`}</strong>
          )
        : !isDateRange(filter?.operator) &&
          filterValuesLength > 0 && (
            <strong>{` (${filterValuesLength})`}</strong>
          )}
    </FilterTagTextWrapper>
  );
}

export default FilterTagText;
