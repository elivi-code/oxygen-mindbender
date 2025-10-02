import React from 'react';
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import SubFilterActions from './SubFilterActions';
import { GroupFilterDefinitionType, FilterType } from '../../../../types';

describe('SubFilterActions', () => {
  const mockFilterDefinition: GroupFilterDefinitionType = {
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

  const mockInternalFilter: FilterType = {
    id: 'filter1',
    subFilterId: 'sub1',
    operator: { value: 'is', label: 'is' },
    values: [],
  };

  const defaultProps = {
    internalFilter: mockInternalFilter,
    filterDefinition: mockFilterDefinition,
    internalOnChange: jest.fn(),
    testId: 'test-id',
  };

  it('renders the Select component with values from GroupFilterDefinition', () => {
    render(<SubFilterActions {...defaultProps} />);

    const select = screen.getByTestId(
      'test-id_GROUP_FILTER_SELECT_VALUE_CONTAINER',
    );

    expect(select).toBeInTheDocument();

    expect(screen.getByText('Sub Filter 1')).toBeInTheDocument();
  });

  it('renders an empty div if no values are provided in GroupFilterDefinition', () => {
    const modifiedFilterDefinition = {
      ...mockFilterDefinition,
      values: [],
    };

    render(
      <SubFilterActions
        {...defaultProps}
        filterDefinition={modifiedFilterDefinition}
      />,
    );

    expect(
      screen.queryByTestId('test-id_GROUP_FILTER_SELECT_VALUE_CONTAINER'),
    ).not.toBeInTheDocument();
  });
});
