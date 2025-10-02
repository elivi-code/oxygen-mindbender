import { Popover } from '@8x8/oxygen-popover';
import React from 'react';
import { ArrowDownIcon, CalendarIcon } from '@8x8/oxygen-icon';
import { FilterTag } from './Filter.styled';
import { isFilterActive } from '../../utils/filterDetails';
import FilterDropdownContent from '../FilterDropdownContent';
import FilterTagText from './FilterTagText';
import getFilterTitle from '../../utils/getFilterTitle';
import { isDateRange } from '../../utils/operatorDetails';
function Filter({ openFilterId, setOpenFilterId, internalFilter, filter, filterDefinition, filterDefault, internalOnChange, onFilterDelete, hasGlobalApplyButton, onApply, getSearchSuggestions, searchSuggestionKeyOffset, popoverPortalRef, translations, testId, telemetryProps, showOperatorInFilterButton, }) {
    const { title, id } = filterDefinition;
    const titleDisplay = getFilterTitle(internalFilter, filterDefinition, openFilterId !== id);
    return (React.createElement(Popover, { isOpen: openFilterId === id, setIsOpen: (value) => {
            setOpenFilterId(value ? id : null);
        }, floatingContent: React.createElement(FilterDropdownContent, { filter: filter, internalFilter: internalFilter, filterDefinition: filterDefinition, filterDefault: filterDefault, internalOnChange: internalOnChange, onFilterDelete: onFilterDelete, hasGlobalApplyButton: hasGlobalApplyButton, onApply: onApply, getSearchSuggestions: getSearchSuggestions, searchSuggestionKeyOffset: searchSuggestionKeyOffset, translations: translations, testId: `${testId}_DROPDOWN_CONTENT`, popoverPortalRef: popoverPortalRef, telemetryProps: telemetryProps }), testId: `${testId}_POPOVER`, portalTargetRef: popoverPortalRef, ...(isDateRange(internalFilter.operator) && { maxHeight: 512 }) },
        React.createElement(FilterTag, { isFilterActive: isFilterActive(internalFilter), size: "small", id: `filter-${id}`, title: title || titleDisplay, iconRight: isDateRange(filter?.operator) ? React.createElement(CalendarIcon, null) : React.createElement(ArrowDownIcon, null), testId: `${testId}_FILTER_TAG_${id}` },
            React.createElement(FilterTagText, { filter: internalFilter, filterDefinition: filterDefinition, showOperatorInFilterButton: showOperatorInFilterButton, shouldShowOperator: openFilterId === id }))));
}
export default Filter;
