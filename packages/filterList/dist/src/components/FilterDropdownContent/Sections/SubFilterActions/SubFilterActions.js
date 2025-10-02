import React, { useCallback } from 'react';
import Select from '@8x8/oxygen-select';
import { Container, SelectWrapper } from './SubFilterActions.styled';
function SubFilterActions({ internalFilter, filterDefinition, internalOnChange, testId, popoverPortalRef, }) {
    const popoverPortalTarget = popoverPortalRef?.current ?? document.body;
    const options = filterDefinition.values?.map(value => ({
        value: String(value.value),
        label: value.label || `${value.value}`,
    }));
    const activeSubFilter = options?.find(option => option.value === internalFilter.subFilterId) ||
        null;
    const onSubFilterChange = useCallback((option) => {
        const operators = filterDefinition.subFilterOperators?.[option.value];
        if (internalFilter.subFilterId !== option.value) {
            internalOnChange({
                ...internalFilter,
                subFilterId: String(option.value),
                operator: operators[0],
                values: [],
            });
        }
    }, [filterDefinition, internalFilter, internalOnChange]);
    return (React.createElement(Container, { showMargin: !!internalFilter?.subFilterId },
        React.createElement(SelectWrapper, null, filterDefinition.values?.length ? (React.createElement(Select, { testId: `${testId}_GROUP_FILTER_SELECT`, isSearchable: false, isClearable: false, onChange: onSubFilterChange, options: options, value: activeSubFilter, menuPosition: "fixed", menuPortalTarget: popoverPortalTarget })) : (React.createElement("div", null)))));
}
export default SubFilterActions;
