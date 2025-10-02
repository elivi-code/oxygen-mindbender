import React from 'react';
import styled from 'styled-components';
import { getTestAttributes } from '@8x8/oxygen-config';
import { SortingIndicator } from './SortingIndicator';
const StyledWrapper = styled.div `
  display: flex;
  align-items: center;
  justify-content: ${props => props.align || 'left'};
  gap: ${props => props.theme.spacing03};
  ${props => props.isSortable && 'cursor: pointer'};
  width: 100%;
`;
const HeaderCellWrapper = ({ align, children, isSortable, onSort, sortDirection, testId = 'header-cell-wrapper', }) => (React.createElement(StyledWrapper, { ...getTestAttributes(testId), tabIndex: isSortable ? 0 : -1, align: align, isSortable: isSortable, onClick: isSortable ? onSort : undefined, onKeyDown: e => {
        if (isSortable && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            onSort?.(e);
        }
    } },
    children,
    isSortable && React.createElement(SortingIndicator, { sortDirection: sortDirection })));
export { HeaderCellWrapper };
