import React from 'react';
import styled, { useTheme } from 'styled-components';

import { AscendingSortingIcon } from '../styled/AscendingSortingIcon';
import { DescendingSortingIcon } from '../styled/DescendingSortingIcon';
import { SortDirections } from './sortingUtils';

const SortingIndicatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

interface Props {
  sortDirection?: SortDirections;
}

const SortingIndicator: React.FC<Props> = ({ sortDirection }) => {
  const theme = useTheme();

  const ascColor =
    sortDirection === SortDirections.asc ? theme.icon01 : theme.icon06;
  const descColor =
    sortDirection === SortDirections.desc ? theme.icon01 : theme.icon06;

  return (
    <SortingIndicatorWrapper>
      <AscendingSortingIcon aria-hidden="true" size={12} color={ascColor} />
      <DescendingSortingIcon aria-hidden="true" size={12} color={descColor} />
    </SortingIndicatorWrapper>
  );
};

export { SortingIndicator };
