import React from 'react';
import { OxygenProvider } from '@8x8/oxygen-config';
import { render, screen, fireEvent } from '@testing-library/react';
import AddNewFilter from './AddNewFilter';

describe('AddNewFilter', () => {
  it('should not display add button if there are no other filters to add', () => {
    render(
      <OxygenProvider>
        <AddNewFilter
          internalCurrentFilters={[]}
          filterDefinitions={[]}
          onAddFilter={() => {}}
          translations={{ addNewFilterLabel: 'Add new filter' }}
          testId="test-id"
        />
      </OxygenProvider>,
    );

    expect(screen.queryByTestId('test-id_BUTTON')).not.toBeInTheDocument();
  });

  it('should display add button if there are other filters to add', () => {
    render(
      <OxygenProvider>
        <AddNewFilter
          internalCurrentFilters={[]}
          filterDefinitions={[{ id: '1', label: 'Filter 1' }]}
          onAddFilter={() => {}}
          translations={{ addNewFilterLabel: 'Add new filter' }}
          testId="test-id"
        />
      </OxygenProvider>,
    );

    expect(screen.queryByTestId('test-id_BUTTON')).toBeInTheDocument();
  });

  it('should display list if there are filters to add and button was clicked', () => {
    render(
      <OxygenProvider>
        <AddNewFilter
          internalCurrentFilters={[]}
          filterDefinitions={[{ id: '1', label: 'Filter 1' }]}
          onAddFilter={() => {}}
          translations={{ addNewFilterLabel: 'Add new filter' }}
          testId="test-id"
        />
      </OxygenProvider>,
    );

    fireEvent.click(screen.getByTestId('test-id_BUTTON'));

    expect(screen.queryByTestId('test-id_CONTAINER')).toBeInTheDocument();
  });

  it('should call onAddFilter with the selected filter', () => {
    const onAddFilter = jest.fn();

    render(
      <OxygenProvider>
        <AddNewFilter
          internalCurrentFilters={[]}
          filterDefinitions={[{ id: '1', label: 'Filter 1' }]}
          onAddFilter={onAddFilter}
          translations={{ addNewFilterLabel: 'Add new filter' }}
          testId="test-id"
        />
      </OxygenProvider>,
    );

    fireEvent.click(screen.getByTestId('test-id_BUTTON'));
    fireEvent.click(screen.getByText('Filter 1'));

    expect(onAddFilter).toHaveBeenCalledWith({ id: '1', label: 'Filter 1' });
  });

  it('should display add button even if search filters to no results', () => {
    render(
      <OxygenProvider>
        <AddNewFilter
          internalCurrentFilters={[]}
          filterDefinitions={[{ id: '1', label: 'Filter 1' }]}
          onAddFilter={() => {}}
          translations={{ addNewFilterLabel: 'Add new filter' }}
          testId="test-id"
        />
      </OxygenProvider>,
    );

    // open Popover
    fireEvent.click(screen.getByTestId('test-id_BUTTON'));

    const input = screen.getByTestId('test-id_SEARCH_INPUT_FIELD');

    fireEvent.change(input, { target: { value: 'abcd' } });

    expect(screen.queryByTestId('test-id_BUTTON')).toBeInTheDocument();
  });
});
