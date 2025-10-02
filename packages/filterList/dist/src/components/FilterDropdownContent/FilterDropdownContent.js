import React from 'react';
import { getTestAttributes } from '@8x8/oxygen-config';
import { Spinner } from '@8x8/oxygen-loaders';
import { Container, LoaderContainer } from './FilterDropdownContent.styled';
import BottomActions from './Sections/BottomActions';
import TopActions from './Sections/TopActions';
import FilterValues from './Sections/FilterVariations';
import { isDateRange } from '../../utils/operatorDetails';
import { isGroupFilterDefinitionType } from '../../utils/getFilterType';
import GroupFilterContent from './GroupFilterContent';
function FilterDropdownContent({ filter, internalFilter, filterDefinition, filterDefault, internalOnChange, onFilterDelete, hasGlobalApplyButton, onApply, getSearchSuggestions, searchSuggestionKeyOffset, translations, testId, popoverPortalRef, telemetryProps, }) {
    const bottomActionsProps = {
        filter,
        internalFilter,
        filterDefinition,
        onFilterDelete,
        filterDefault,
        internalOnChange,
        hasGlobalApplyButton,
        onApply,
        translations,
        telemetryProps,
        testId: `${testId}_BOTTOM_ACTIONS`,
    };
    if (internalFilter?.isLoading) {
        return (React.createElement(Container, { ...getTestAttributes(`${testId}_CONTAINER`), ...(!isDateRange(internalFilter.operator) && { $maxWidth: true }) },
            React.createElement(LoaderContainer, null,
                React.createElement(Spinner, { size: "small" })),
            React.createElement(BottomActions, { ...bottomActionsProps })));
    }
    return (React.createElement(Container, { ...getTestAttributes(`${testId}_CONTAINER`), ...(!isDateRange(internalFilter.operator) && { $maxWidth: true }) }, isGroupFilterDefinitionType(filterDefinition) ? (React.createElement(GroupFilterContent, { filter: filter, internalFilter: internalFilter, filterDefinition: filterDefinition, onFilterDelete: onFilterDelete, internalOnChange: internalOnChange, filterDefault: filterDefault, hasGlobalApplyButton: hasGlobalApplyButton, onApply: onApply, getSearchSuggestions: getSearchSuggestions, searchSuggestionKeyOffset: searchSuggestionKeyOffset, translations: translations, testId: `${testId}_GROUP_FILTER_CONTENT`, popoverPortalRef: popoverPortalRef, telemetryProps: telemetryProps })) : (React.createElement(React.Fragment, null,
        React.createElement(TopActions, { internalFilter: internalFilter, filterDefinition: filterDefinition, internalOnChange: internalOnChange, testId: `${testId}_TOP_ACTIONS`, popoverPortalRef: popoverPortalRef }),
        React.createElement(FilterValues, { internalFilter: internalFilter, filterDefinition: filterDefinition, filterDefault: filterDefault, internalOnChange: internalOnChange, getSearchSuggestions: getSearchSuggestions, searchSuggestionKeyOffset: searchSuggestionKeyOffset, translations: translations, testId: `${testId}_VALUES` }),
        React.createElement(BottomActions, { ...bottomActionsProps })))));
}
export default FilterDropdownContent;
