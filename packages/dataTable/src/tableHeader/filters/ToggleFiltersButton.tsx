import React from 'react';
import styled from 'styled-components';
import { IconButton } from '@8x8/oxygen-button';
import Badge from '@8x8/oxygen-badge';
import { FilterIcon } from '@8x8/oxygen-icon';
import { getTestAttributes } from '@8x8/oxygen-config';

interface Props {
  numActiveFilters: number;
  isActive: boolean;
  onClick: () => void;
  testId?: string;
}

const FilterButtonWrapper = styled.div`
  position: relative;
`;

export const ToggleFiltersButton: React.FC<Props> = ({
  numActiveFilters,
  isActive,
  onClick,
  testId = 'filter-button',
}) => (
  <FilterButtonWrapper {...getTestAttributes(testId)}>
    {/* used a string instead of a constant for the position property to avoid a typescript warning.
     because oxygen badgePosition has an incorrect type */}
    {numActiveFilters > 0 && (
      <Badge position="top-end">{numActiveFilters}</Badge>
    )}
    <IconButton onClick={onClick} isActive={isActive} testId={testId}>
      <FilterIcon />
    </IconButton>
  </FilterButtonWrapper>
);
