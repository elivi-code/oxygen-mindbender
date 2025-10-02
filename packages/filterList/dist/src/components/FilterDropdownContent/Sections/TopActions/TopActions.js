import React, { useCallback } from 'react';
import Select from '@8x8/oxygen-select';
import decorateOperatorWithLabel from '../../../../utils/decorateOperatorWithLabel';
import { isGroupFilterDefinitionType } from '../../../../utils/getFilterType';
import { Container, SelectWrapper } from './TopActions.styled';
function TopActions({ internalFilter, filterDefinition, internalOnChange, testId, popoverPortalRef, }) {
    const operatorsArray = isGroupFilterDefinitionType(filterDefinition)
        ? filterDefinition.subFilterOperators[internalFilter?.subFilterId]
        : filterDefinition.operators;
    const operators = operatorsArray?.map(operator => decorateOperatorWithLabel(operator));
    const activeOperator = decorateOperatorWithLabel(internalFilter.operator);
    const isSingleOperator = operators?.length === 1;
    const onOperatorChange = useCallback((option) => {
        if (option.value !== internalFilter.operator.value) {
            internalOnChange({
                ...internalFilter,
                operator: option,
                values: [],
            });
        }
    }, [internalFilter, internalOnChange]);
    const popoverPortalTarget = popoverPortalRef?.current ?? document.body;
    if (isSingleOperator) {
        return null;
    }
    return (React.createElement(Container, null,
        React.createElement(SelectWrapper, null, operators?.length ? (React.createElement(Select, { testId: `${testId}_SELECT`, isSearchable: false, isClearable: false, onChange: onOperatorChange, options: operators, value: activeOperator, menuPosition: "fixed", menuPortalTarget: popoverPortalTarget })) : (React.createElement("div", null)))));
}
export default TopActions;
