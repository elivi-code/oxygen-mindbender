import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { OxygenProvider } from '@8x8/oxygen-config';
import FilterDropdownContent from './FilterDropdownContent';
import {
  FilterType,
  GroupFilterDefinitionType,
  FilterDefinitionType,
} from '../../types';

describe('FilterDropdownContent', () => {
  const mockFilter: FilterType = {
    id: 'filter1',
    operator: { value: 'equals', label: 'Equals' },
    values: [{ value: 'value1', label: 'Value 1' }],
  };

  const mockGroupFilterDefinition: GroupFilterDefinitionType = {
    id: 'group-filter',
    label: 'Group Filter',
    values: [{ value: 'sub1', label: 'Sub Filter 1' }],
    subFilters: {
      sub1: { id: 'sub1', label: 'Sub Filter 1' },
    },
    subFilterOperators: {
      sub1: [{ value: 'is', label: 'is' }],
    },
  };

  const defaultProps = {
    internalFilter: mockFilter,
    filterDefinition: mockGroupFilterDefinition,
    internalOnChange: jest.fn(),
    onFilterDelete: jest.fn(),
    hasGlobalApplyButton: false,
    onApply: jest.fn(),
    translations: {},
    testId: 'test-id',
    popoverPortalRef: { current: document.body },
  };

  it('renders correctly with a group filter definition', () => {
    render(
      <OxygenProvider>
        <FilterDropdownContent
          {...defaultProps}
          filterDefinition={mockGroupFilterDefinition}
        />
      </OxygenProvider>,
    );

    expect(
      screen.getByTestId(
        'test-id_GROUP_FILTER_CONTENT_SUB_FILTER_ACTIONS_GROUP_FILTER_SELECT_VALUE_CONTAINER',
      ),
    ).toBeInTheDocument();
  });

  it('should render the spinner when isLoading is true', () => {
    const filterDefinition: FilterDefinitionType = {
      id: '1',
      label: 'Filter 1',
      operators: [{ value: 'is', label: 'is' }],
    };

    const internalFilter = {
      id: '1',
      label: 'Filter 1',
      type: 'selection',
      isLoading: true,
    };

    render(
      <OxygenProvider>
        <FilterDropdownContent
          {...defaultProps}
          filterDefinition={filterDefinition}
          internalFilter={internalFilter}
        />
      </OxygenProvider>,
    );

    const spinner = screen.getByTestId('SPINNER');

    expect(spinner).toBeInTheDocument();
  });
});
