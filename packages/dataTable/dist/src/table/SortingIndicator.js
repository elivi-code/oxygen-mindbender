import React from 'react';
import styled, { useTheme } from 'styled-components';
import { AscendingSortingIcon } from '../styled/AscendingSortingIcon';
import { DescendingSortingIcon } from '../styled/DescendingSortingIcon';
import { SortDirections } from './sortingUtils';
const SortingIndicatorWrapper = styled.div `
  display: flex;
  flex-direction: column;
`;
const SortingIndicator = ({ sortDirection }) => {
    const theme = useTheme();
    const ascColor = sortDirection === SortDirections.asc ? theme.icon01 : theme.icon06;
    const descColor = sortDirection === SortDirections.desc ? theme.icon01 : theme.icon06;
    return (React.createElement(SortingIndicatorWrapper, null,
        React.createElement(AscendingSortingIcon, { "aria-hidden": "true", size: 12, color: ascColor }),
        React.createElement(DescendingSortingIcon, { "aria-hidden": "true", size: 12, color: descColor })));
};
export { SortingIndicator };
