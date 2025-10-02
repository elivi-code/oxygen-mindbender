import React from 'react';
import BottomActions from './Sections/BottomActions';
import TopActions from './Sections/TopActions';
import FilterValues from './Sections/FilterVariations';
import SubFilterActions from './Sections/SubFilterActions';
function GroupFilterContent({ filter, internalFilter, filterDefinition, filterDefault, internalOnChange, onFilterDelete, hasGlobalApplyButton, onApply, getSearchSuggestions, searchSuggestionKeyOffset, translations, testId, popoverPortalRef, telemetryProps, }) {
    return (React.createElement(React.Fragment, null,
        React.createElement(SubFilterActions, { internalFilter: internalFilter, filterDefinition: filterDefinition, internalOnChange: internalOnChange, testId: `${testId}_SUB_FILTER_ACTIONS`, popoverPortalRef: popoverPortalRef }),
        internalFilter?.subFilterId && (React.createElement(React.Fragment, null,
            React.createElement(TopActions, { internalFilter: internalFilter, filterDefinition: filterDefinition, internalOnChange: internalOnChange, testId: `${testId}_TOP_ACTIONS`, popoverPortalRef: popoverPortalRef }),
            React.createElement(FilterValues, { internalFilter: internalFilter, filterDefinition: filterDefinition, internalOnChange: internalOnChange, getSearchSuggestions: getSearchSuggestions, searchSuggestionKeyOffset: searchSuggestionKeyOffset, translations: translations, testId: `${testId}_VALUES` }),
            React.createElement(BottomActions, { filter: filter, internalFilter: internalFilter, filterDefinition: filterDefinition, onFilterDelete: onFilterDelete, filterDefault: filterDefault, internalOnChange: internalOnChange, hasGlobalApplyButton: hasGlobalApplyButton, onApply: onApply, translations: translations, telemetryProps: telemetryProps, testId: `${testId}_BOTTOM_ACTIONS` })))));
}
export default GroupFilterContent;
