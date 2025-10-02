import React, { useRef } from 'react';
import styled from 'styled-components';

import FilterList, { FilterListInterface } from '@8x8/oxygen-filter-list';
import { Spinner } from '@8x8/oxygen-loaders';

const SpinnerContainer = styled.div`
  display: flex;
`;

const PortalNode = styled.div`
  /* makes filter dropdown work properly when rendered in a modal */
  position: fixed;
  z-index: 300;
`;

type FiltersProps = FilterListInterface & {
  loadingFilters?: boolean;
};

/**
 * Renders either a spinner or the FilterList component
 */
const Filters: React.FC<FiltersProps> = ({
  searchSuggestionKeyOffset = 25,
  loadingFilters,
  ...rest
}) => {
  const popoverPortalRef = useRef(null);

  if (loadingFilters) {
    return (
      <SpinnerContainer>
        <Spinner size="small" strokeWidth={1.5} />
      </SpinnerContainer>
    );
  }

  return (
    <>
      <FilterList
        searchSuggestionKeyOffset={searchSuggestionKeyOffset}
        popoverPortalRef={popoverPortalRef}
        {...rest}
      />
      <PortalNode ref={popoverPortalRef} />
    </>
  );
};

export { Filters, type FiltersProps };
