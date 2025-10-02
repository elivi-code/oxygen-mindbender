import React from 'react';
import styled from 'styled-components';
import { getTestAttributes } from '@8x8/oxygen-config';
import { SortingIndicator } from './SortingIndicator';
import { SortDirections } from './sortingUtils';
import { AlignTypes } from './utils';

interface StyledWrapperProps {
  align?: AlignTypes;
  isSortable?: boolean;
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: ${props => props.align || 'left'};
  gap: ${props => props.theme.spacing03};
  ${props => props.isSortable && 'cursor: pointer'};
  width: 100%;
`;

interface Props {
  align?: AlignTypes;
  children: React.ReactNode;
  isSortable?: boolean;
  onSort?: (event: unknown) => void;
  sortDirection?: SortDirections;
  testId?: string;
}

const HeaderCellWrapper: React.FC<Props> = ({
  align,
  children,
  isSortable,
  onSort,
  sortDirection,
  testId = 'header-cell-wrapper',
}) => (
  <StyledWrapper
    {...getTestAttributes(testId)}
    tabIndex={isSortable ? 0 : -1}
    align={align}
    isSortable={isSortable}
    onClick={isSortable ? onSort : undefined}
    onKeyDown={e => {
      if (isSortable && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        onSort?.(e);
      }
    }}
  >
    {children}
    {isSortable && <SortingIndicator sortDirection={sortDirection} />}
  </StyledWrapper>
);

export { HeaderCellWrapper };
