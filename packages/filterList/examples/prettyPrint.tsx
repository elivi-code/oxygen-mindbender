import { JSONViewer } from '@8x8/oxygen-storybook-utils';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

function prettyPrint(currentFilters, filterDefinitions, defaultFilters) {
  return (
    <Wrapper>
      <JSONViewer data={currentFilters} title="currentFilters" />
      <JSONViewer data={filterDefinitions} title="filterDefinitions" />
      <JSONViewer data={defaultFilters} title="defaultFilters" />
    </Wrapper>
  );
}

export default prettyPrint;
