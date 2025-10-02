import React from 'react';
import { OxygenProvider } from '@8x8/oxygen-config';
import { render, screen } from '@testing-library/react';
import TopActions from './TopActions';
import {
  FilterType,
  FilterDefinitionType,
  GroupFilterDefinitionType,
} from '../../../../types';

const translations = {
  resetLabel: 'Reset',
  clearLavel: 'Clear',
};

describe('TopActions component', () => {
  it('should use subFilterOperators when filterDefinition is a GroupFilterDefinitionType', () => {
    const filter: FilterType = {
      id: '1',
      label: 'Filter 1',
      subFilterId: 'sub1',
      operator: { value: 'is', label: 'is' },
      values: [{ label: 'value', value: 'value' }],
    };

    const filterDefinition: GroupFilterDefinitionType = {
      id: 'group-filter',
      label: 'Group Filter',
      subFilterOperators: {
        sub1: [
          { value: 'is', label: 'is' },
          { value: 'notEndsWith', label: "doesn't end with" },
        ],
      },
      subFilters: {
        sub1: { id: 'sub1', label: 'Sub Filter 1' },
      },
      values: [{ value: 'sub1', label: 'Sub Filter 1' }],
    };

    render(
      <OxygenProvider themeName="light">
        <TopActions
          internalFilter={filter}
          filterDefinition={filterDefinition}
          internalOnChange={() => {}}
          hasGlobalApplyButton={false}
          translations={translations}
          testId="test-id"
        />
      </OxygenProvider>,
    );

    const select = screen.getByTestId('test-id_SELECT_CONTAINER');

    expect(select).toBeInTheDocument();
    expect(select.textContent).toContain('is');
  });

  it('should render select if there is at least one operator in filterDefinition', () => {
    const filter: FilterType = {
      id: '1',
      label: 'Filter 1',
      operator: { value: 'is', label: 'is' },
      values: [{ label: 'value', value: 'value' }],
    };

    const filterDefinition: FilterDefinitionType = {
      id: '1',
      label: 'Filter 1',
      operators: [
        { value: 'is', label: 'is' },
        { value: 'isNot', label: 'is not' },
      ],
    };

    render(
      <OxygenProvider themeName="light">
        <TopActions
          internalFilter={filter}
          filterDefinition={filterDefinition}
          internalOnChange={() => {}}
          hasGlobalApplyButton={false}
          translations={translations}
          testId="test-id"
        />
      </OxygenProvider>,
    );

    expect(screen.getByTestId('test-id_SELECT_CONTAINER')).toBeInTheDocument();
  });

  it('should display the selected operator value if there is one ', () => {
    const filter: FilterType = {
      id: '1',
      label: 'Filter 1',
      operator: { value: 'is', label: 'is' },
      values: [{ label: 'value', value: 'value' }],
    };

    const filterDefinition: FilterDefinitionType = {
      id: '1',
      label: 'Filter 1',
      operators: [
        { value: 'is', label: 'is' },
        { value: 'isNot', label: 'is not' },
      ],
    };

    render(
      <OxygenProvider themeName="light">
        <TopActions
          internalFilter={filter}
          filterDefinition={filterDefinition}
          internalOnChange={() => {}}
          hasGlobalApplyButton={false}
          translations={translations}
          testId="test-id"
        />
      </OxygenProvider>,
    );

    expect(screen.getByTestId('test-id_SELECT_CONTAINER')).toHaveTextContent(
      'is',
    );
  });
});
