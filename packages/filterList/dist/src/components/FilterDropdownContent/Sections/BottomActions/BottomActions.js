import React from 'react';
import isEqual from 'lodash.isequal';
import Button from '@8x8/oxygen-button';
import { isDateRange } from '../../../../utils/operatorDetails';
import { Container, DeleteButton, NegativeActions, } from './BottomActions.styled';
import { ActionButton } from '../ActionButton/ActionButton';
import { isGroupFilterDefinitionType } from '../../../../utils/getFilterType';
function BottomActions({ filter, internalFilter, filterDefinition, onFilterDelete, hasGlobalApplyButton, filterDefault, internalOnChange, telemetryProps, onApply, translations, testId, }) {
    const isDirty = (!isEqual(filter?.values, internalFilter?.values) ||
        !isEqual(filter?.operator, internalFilter?.operator)) &&
        (!!internalFilter?.values?.length || filterDefinition.isAlwaysVisible) &&
        (!isDateRange(internalFilter.operator) ||
            (internalFilter.values?.[0]?.isEndTimeValid ?? true));
    const operatorsArray = isGroupFilterDefinitionType(filterDefinition)
        ? filterDefinition.subFilterOperators[internalFilter?.subFilterId]
        : filterDefinition.operators;
    const isSingleOperator = operatorsArray?.length === 1;
    const hasNoAction = filterDefinition.isAlwaysVisible &&
        hasGlobalApplyButton &&
        !isSingleOperator;
    if (hasNoAction) {
        return null;
    }
    return (React.createElement(Container, null,
        React.createElement(NegativeActions, null,
            !filterDefinition.isAlwaysVisible ? (React.createElement(DeleteButton, { variant: "text", size: "small", testId: `${testId}_DELETE_FILTER`, title: translations.deleteFilterlabel, onClick: () => onFilterDelete(internalFilter), isDisabled: filterDefinition.isAlwaysVisible }, translations.deleteFilterlabel)) : (React.createElement("div", null)),
            React.createElement(ActionButton, { internalFilter: internalFilter, filterDefinition: filterDefinition, filterDefault: filterDefault, internalOnChange: internalOnChange, hasGlobalApplyButton: hasGlobalApplyButton, translations: translations, testId: `${testId}_ACTION_BUTTON`, telemetryProps: telemetryProps })),
        !hasGlobalApplyButton && (React.createElement(Button, { variant: "text", size: "small", testId: `${testId}_APPLY_FILTER`, title: translations.applyFilterLabel, onClick: onApply, isDisabled: !isDirty }, translations.applyFilterLabel))));
}
export default BottomActions;
