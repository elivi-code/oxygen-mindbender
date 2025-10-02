import styled from 'styled-components';
import React from 'react';
import extractDataFromFilter from '../../utils/extractDataFromFilter';
import { isDateRange } from '../../utils/operatorDetails';
import { FilterTagTextWrapper } from './Filter.styled';
const MaxWidthWithEllipsis = styled.span `
  white-space: nowrap;
  overflow: hidden;
  max-width: 228px;
  text-overflow: ellipsis;
`;
function FilterTagText({ filter, filterDefinition = undefined, showOperatorInFilterButton, shouldShowOperator = false, }) {
    const { filterLabel, operatorLabel, firstValueLabel, filterValuesLength } = extractDataFromFilter(filter, filterDefinition);
    const operator = shouldShowOperator || firstValueLabel ? operatorLabel : '';
    const Wrapper = isDateRange(filter?.operator)
        ? React.Fragment
        : MaxWidthWithEllipsis;
    return (React.createElement(FilterTagTextWrapper, null,
        React.createElement(Wrapper, null,
            filterLabel,
            showOperatorInFilterButton && operator && (React.createElement("strong", null, ` ${operator}`)),
            showOperatorInFilterButton && firstValueLabel && ` ${firstValueLabel}`,
            !showOperatorInFilterButton &&
                isDateRange(filter?.operator) &&
                firstValueLabel && React.createElement("strong", null, ` (${firstValueLabel})`)),
        showOperatorInFilterButton
            ? filterValuesLength > 1 && (React.createElement("strong", null, ` +${filterValuesLength - 1}`))
            : !isDateRange(filter?.operator) &&
                filterValuesLength > 0 && (React.createElement("strong", null, ` (${filterValuesLength})`))));
}
export default FilterTagText;
