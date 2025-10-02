import React from 'react';
import '@testing-library/jest-dom';

import { OxygenProvider } from '@8x8/oxygen-config';
import { render, screen } from '@testing-library/react';
import FilterTagText from './FilterTagText';
import { FilterType, FilterDefinitionType } from '../../types';

describe('FilterTagText component', () => {
  it('should display only the filter label if no value or operator was provided', () => {
    const filter: FilterType = {
      id: '1',
      label: 'Filter 1',
    };

    render(
      <OxygenProvider themeName="light">
        <FilterTagText filter={filter} />,
      </OxygenProvider>,
    );

    expect(screen.getByText('Filter 1')).toBeInTheDocument();
  });

  it('should display the filter label without operator if operator was provided but no values and shouldShowOperator is false', () => {
    const filter: FilterType = {
      id: '1',
      label: 'Filter 1',
      operator: { value: 'is', label: 'is' },
    };

    render(
      <OxygenProvider themeName="light">
        <FilterTagText filter={filter} />,
      </OxygenProvider>,
    );

    expect(screen.getByText('Filter 1')).toBeInTheDocument();
  });

  it('should display the filter label with operator if operator was provided and shouldShowOperator is true', () => {
    const filter: FilterType = {
      id: '1',
      label: 'Filter 1',
      operator: { value: 'is', label: 'is' },
    };

    render(
      <OxygenProvider themeName="light">
        <FilterTagText
          filter={filter}
          shouldShowOperator
          showOperatorInFilterButton
        />
        ,
      </OxygenProvider>,
    );

    expect(screen.getByText('Filter 1')).toBeInTheDocument();
    expect(screen.getByText(`is`)).toBeInTheDocument();
  });

  it('should not display the operator when showOperatorInFilterButton is false, even if operator is provided', () => {
    const filter: FilterType = {
      id: '1',
      label: 'Filter 1',
      operator: { value: 'is', label: 'is' },
    };

    render(
      <OxygenProvider themeName="light">
        <FilterTagText filter={filter} showOperatorInFilterButton={false} />,
      </OxygenProvider>,
    );

    expect(screen.queryByText('is')).not.toBeInTheDocument();
  });

  it('should not display the values length when filterValuesLength is 0 and showOperatorInFilterButton is false', () => {
    const filter: FilterType = {
      id: '1',
      label: 'Filter 1',
      operator: { value: 'is', label: 'is' },
      values: [],
    };

    const filterDefinition: FilterDefinitionType = {
      id: '1',
      label: 'Filter 1',
      operators: [{ value: 'is', label: 'is' }],
      values: [
        { value: '1', label: '1' },
        { value: '2', label: '1' },
      ],
      isAlwaysVisible: true,
    };

    render(
      <FilterTagText
        filter={filter}
        filterDefinition={filterDefinition}
        showOperatorInFilterButton={false}
      />,
    );

    expect(screen.queryByText('(0)')).not.toBeInTheDocument();
  });
});
