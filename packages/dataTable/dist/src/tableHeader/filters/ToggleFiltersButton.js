import React from 'react';
import styled from 'styled-components';
import { IconButton } from '@8x8/oxygen-button';
import Badge from '@8x8/oxygen-badge';
import { FilterIcon } from '@8x8/oxygen-icon';
import { getTestAttributes } from '@8x8/oxygen-config';
const FilterButtonWrapper = styled.div `
  position: relative;
`;
export const ToggleFiltersButton = ({ numActiveFilters, isActive, onClick, testId = 'filter-button', }) => (React.createElement(FilterButtonWrapper, { ...getTestAttributes(testId) },
    numActiveFilters > 0 && (React.createElement(Badge, { position: "top-end" }, numActiveFilters)),
    React.createElement(IconButton, { onClick: onClick, isActive: isActive, testId: testId },
        React.createElement(FilterIcon, null))));
