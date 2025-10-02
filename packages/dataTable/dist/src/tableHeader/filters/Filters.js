import React, { useRef } from 'react';
import styled from 'styled-components';
import FilterList from '@8x8/oxygen-filter-list';
import { Spinner } from '@8x8/oxygen-loaders';
const SpinnerContainer = styled.div `
  display: flex;
`;
const PortalNode = styled.div `
  /* makes filter dropdown work properly when rendered in a modal */
  position: fixed;
  z-index: 300;
`;
/**
 * Renders either a spinner or the FilterList component
 */
const Filters = ({ searchSuggestionKeyOffset = 25, loadingFilters, ...rest }) => {
    const popoverPortalRef = useRef(null);
    if (loadingFilters) {
        return (React.createElement(SpinnerContainer, null,
            React.createElement(Spinner, { size: "small", strokeWidth: 1.5 })));
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(FilterList, { searchSuggestionKeyOffset: searchSuggestionKeyOffset, popoverPortalRef: popoverPortalRef, ...rest }),
        React.createElement(PortalNode, { ref: popoverPortalRef })));
};
export { Filters };
