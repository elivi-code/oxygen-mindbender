import React from 'react';
import { OxygenProvider } from '@8x8/oxygen-config';
import { fireEvent, render, screen } from '@testing-library/react';
import Filter from './Filter';

import { FilterDefinitionType, FilterType } from '../../types';

describe('Filter component', () => {
  it('should display the filter label', () => {
    const filter: FilterType = {
      id: '1',
      label: 'Filter 1',
      operator: { value: 'is', label: 'is' },
    };

    const filterDefinition: FilterDefinitionType = {
      id: '1',
      label: 'Filter 1',
      name: 'Filter 1',
    };

    render(
      <OxygenProvider themeName="light">
        <Filter
          openFilterId={filter.id}
          setOpenFilterId={() => {}}
          internalFilter={filter}
          filter={filter}
          filterDefinition={filterDefinition}
          internalOnChange={() => {}}
          onFilterDelete={() => {}}
          hasGlobalApplyButton={false}
          onApply={() => {}}
          searchSuggestionKeyOffset={20}
          translations={{}}
          testId="test-id"
        />
      </OxygenProvider>,
    );

    expect(screen.getByText('Filter 1')).toBeInTheDocument();
  });

  it('should call setOpenFilterId with id if the id is different from openFilterId', () => {
    const filter: FilterType = {
      id: '1',
      label: 'Filter 1',
      operator: { value: 'is', label: 'is' },
    };

    const filterDefinition: FilterDefinitionType = {
      id: '1',
      label: 'Filter 1',
      name: 'Filter 1',
    };

    const setOpenFilterId = jest.fn();

    render(
      <OxygenProvider themeName="light">
        <Filter
          openFilterId="2"
          setOpenFilterId={setOpenFilterId}
          internalFilter={filter}
          filter={filter}
          filterDefinition={filterDefinition}
          internalOnChange={() => {}}
          onFilterDelete={() => {}}
          hasGlobalApplyButton={false}
          onApply={() => {}}
          searchSuggestionKeyOffset={20}
          translations={{}}
          testId="test-id"
        />
      </OxygenProvider>,
    );

    fireEvent.click(screen.getByText('Filter 1'));

    expect(setOpenFilterId).toHaveBeenCalledWith('1');
  });

  it('should call setOpenFilterId with null if the id is the same as openFilterId', () => {
    const filter: FilterType = {
      id: '1',
      label: 'Filter 1',
      operator: { value: 'is', label: 'is' },
    };

    const filterDefinition: FilterDefinitionType = {
      id: '1',
      label: 'Filter 1',
      name: 'Filter 1',
    };

    const setOpenFilterId = jest.fn();

    render(
      <OxygenProvider themeName="light">
        <Filter
          openFilterId="1"
          setOpenFilterId={setOpenFilterId}
          internalFilter={filter}
          filter={filter}
          filterDefinition={filterDefinition}
          internalOnChange={() => {}}
          onFilterDelete={() => {}}
          hasGlobalApplyButton={false}
          onApply={() => {}}
          searchSuggestionKeyOffset={20}
          translations={{}}
          testId="test-id"
        />
      </OxygenProvider>,
    );

    fireEvent.click(screen.getByText('Filter 1'));

    expect(setOpenFilterId).toHaveBeenCalledWith(null);
  });

  it('should render dropdown if filter is open', () => {
    const filter: FilterType = {
      id: '1',
      label: 'Filter 1',
      operator: { value: 'is', label: 'is' },
    };

    const filterDefinition: FilterDefinitionType = {
      id: '1',
      label: 'Filter 1',
      name: 'Filter 1',
    };

    render(
      <OxygenProvider themeName="light">
        <Filter
          openFilterId="1"
          setOpenFilterId={() => {}}
          internalFilter={filter}
          filter={filter}
          filterDefinition={filterDefinition}
          internalOnChange={() => {}}
          onFilterDelete={() => {}}
          hasGlobalApplyButton={false}
          onApply={() => {}}
          searchSuggestionKeyOffset={20}
          translations={{}}
          testId="test-id"
        />
      </OxygenProvider>,
    );

    expect(
      screen.queryByTestId('test-id_DROPDOWN_CONTENT_CONTAINER'),
    ).toBeInTheDocument();
  });
});
