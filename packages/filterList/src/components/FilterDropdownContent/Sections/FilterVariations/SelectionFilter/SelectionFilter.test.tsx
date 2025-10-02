import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { OxygenProvider } from '@8x8/oxygen-config';
import SelectionFilter from './SelectionFilter';
import { FilterDefinitionType, FilterType } from '../../../../../types';

const generateValues = (num: number) =>
  Array.from({ length: num }, (_, i) => ({
    value: `value${i + 1}`,
    label: `Value ${i + 1}`,
  }));

describe('SelectionFilter component', () => {
  it('should render checkboxes if is MultiSelection, values were provided and no getSearchSuggestions was provided', () => {
    const filterDefinition: FilterDefinitionType = {
      id: '1',
      label: 'Filter 1',
      operators: [{ value: 'is', label: 'is' }],
      values: [
        { value: 'value1', label: 'Value 1' },
        { value: 'value2', label: 'Value 2' },
        { value: 'value3', label: 'Value 3' },
      ],
      allowFreeformSuggestions: false,
    };

    const internalFilter: FilterType = {
      id: '1',
      label: 'Filter 1',
      operator: { value: 'is', label: 'is' },
      values: [{ label: 'value1', value: 'value1' }],
    };

    const internalOnChange = jest.fn();

    render(
      <OxygenProvider>
        <SelectionFilter
          filterDefinition={filterDefinition}
          internalFilter={internalFilter}
          internalOnChange={internalOnChange}
          isMultiSelection
          translations={{}}
          testId="test-id"
        />
      </OxygenProvider>,
    );

    const checkbox = screen.queryAllByTestId('test-id_CHECKBOX');

    expect(checkbox).toHaveLength(3);

    const selectedItems = screen.queryAllByTestId('test-id_SELECTED_CHECKBOX');

    expect(selectedItems).toHaveLength(1);
  });

  it('should call getSearchSuggestions if there are not enough values', () => {
    const filterDefinition: FilterDefinitionType = {
      id: '1',
      label: 'Filter 1',
      operators: [{ value: 'is', label: 'is' }],
      allowFreeformSuggestions: false,
    };

    const internalFilter: FilterType = {
      id: '1',
      label: 'Filter 1',
      operator: { value: 'is', label: 'is' },
    };

    const internalOnChange = jest.fn();

    const getSearchSuggestions = jest.fn(() =>
      Promise.resolve({
        content: [
          { value: 'value4', label: 'Value 4' },
          { value: 'value5', label: 'Value 5' },
          { value: 'value6', label: 'Value 6' },
        ],
        lastPage: true,
      }),
    );

    render(
      <OxygenProvider>
        <SelectionFilter
          filterDefinition={filterDefinition}
          internalFilter={internalFilter}
          internalOnChange={internalOnChange}
          getSearchSuggestions={getSearchSuggestions}
          isMultiSelection
          translations={{}}
          testId="test-id"
        />
      </OxygenProvider>,
    );

    expect(getSearchSuggestions).toHaveBeenCalledWith('1', '', 0);
  });

  it('should renader not items label if there are no values in definition and getSearchSuggestions was not provided', () => {
    const filterDefinition: FilterDefinitionType = {
      id: '1',
      label: 'Filter 1',
      operators: [{ value: 'is', label: 'is' }],
      allowFreeformSuggestions: false,
    };

    const internalFilter = {
      id: '1',
      label: 'Filter 1',
      type: 'selection',
    };

    const internalOnChange = jest.fn();

    render(
      <OxygenProvider>
        <SelectionFilter
          filterDefinition={filterDefinition}
          internalFilter={internalFilter}
          internalOnChange={internalOnChange}
          isMultiSelection
          translations={{ noSuggestionsFoundLabel: 'No items' }}
          testId="test-id"
        />
      </OxygenProvider>,
    );

    expect(screen.queryByText('No items')).toBeInTheDocument();
  });

  it('should render not items label if there are no values in definition and getSearchSuggestions was provided and allowFreeformSuggestions = false', async () => {
    const filterDefinition: FilterDefinitionType = {
      id: '1',
      label: 'Filter 1',
      operators: [{ value: 'is', label: 'is' }],
      allowFreeformSuggestions: false,
    };

    const internalFilter: FilterType = {
      id: '1',
      label: 'Filter 1',
      operator: { value: 'is', label: 'is' },
    };

    const internalOnChange = jest.fn();
    const getSearchSuggestions = jest.fn(() =>
      Promise.resolve({
        content: [],
        lastPage: true,
      }),
    );

    render(
      <OxygenProvider>
        <SelectionFilter
          filterDefinition={filterDefinition}
          internalFilter={internalFilter}
          internalOnChange={internalOnChange}
          getSearchSuggestions={getSearchSuggestions}
          isMultiSelection
          translations={{ noSuggestionsFoundLabel: 'No items' }}
          testId="test-id"
        />
      </OxygenProvider>,
    );

    await waitFor(() =>
      expect(screen.queryByText('No items')).toBeInTheDocument(),
    );
  });

  it.each([
    [
      'promise with empty response',
      jest.fn(() =>
        Promise.resolve({
          content: [],
          lastPage: true,
        }),
      ),
    ],
    [
      'promise with error',
      jest.fn(() => {
        throw new Error('getSearchSuggestions should not be called');
      }),
    ],
  ])(
    'should create option with the same value as the search criteria if allowFreeformSuggestions = true when %s',
    async (name, getSearchSuggestions) => {
      const filterDefinition: FilterDefinitionType = {
        id: '1',
        label: 'Filter 1',
        operators: [{ value: 'is', label: 'is' }],
        allowFreeformSuggestions: true,
      };

      const internalFilter: FilterType = {
        id: '1',
        label: 'Filter 1',
        operator: { value: 'is', label: 'is' },
      };

      const internalOnChange = jest.fn();

      render(
        <OxygenProvider>
          <SelectionFilter
            filterDefinition={filterDefinition}
            internalFilter={internalFilter}
            internalOnChange={internalOnChange}
            getSearchSuggestions={getSearchSuggestions}
            isMultiSelection
            translations={{ noSuggestionsFoundLabel: 'No items' }}
            testId="test-id"
          />
        </OxygenProvider>,
      );

      // write something in test-id_SELECTION_INPUT_FIELD
      const input = screen.getByTestId('test-id_SELECTION_INPUT_FIELD');

      await userEvent.type(input, 'test');

      // wait for the input to have that value
      await waitFor(() => expect(input).toHaveValue('test'));

      expect(getSearchSuggestions).toHaveBeenCalledWith('1', 'test', 0);
      expect(screen.queryByText('test')).toBeInTheDocument();
    },
  );

  it('should also filter selected values when something is typed in the input', async () => {
    const filterDefinition: FilterDefinitionType = {
      id: '1',
      label: 'Filter 1',
      operators: [{ value: 'is', label: 'is' }],
      values: generateValues(11),
      allowFreeformSuggestions: false,
    };

    const internalFilter: FilterType = {
      id: '1',
      label: 'Filter 1',
      operator: { value: 'is', label: 'is' },
      values: [{ label: 'value1', value: 'value1' }],
    };

    const internalOnChange = jest.fn();

    render(
      <OxygenProvider>
        <SelectionFilter
          filterDefinition={filterDefinition}
          internalFilter={internalFilter}
          internalOnChange={internalOnChange}
          isMultiSelection
          translations={{}}
          testId="test-id"
        />
      </OxygenProvider>,
    );

    // write something in test-id_SELECTION_INPUT_FIELD
    const input = screen.getByTestId('test-id_SELECTION_INPUT_FIELD');

    await userEvent.type(input, '2');

    await waitFor(() => expect(input).toHaveValue('2'));

    // wait for the input to have that value

    expect(screen.queryAllByTestId('test-id_CHECKBOX')).toHaveLength(1);
    expect(screen.queryAllByTestId('test-id_SELECTED_CHECKBOX')).toHaveLength(
      0,
    );

    expect(screen.queryByText('Value 2')).toBeInTheDocument();
    expect(screen.queryByText('Value 3')).not.toBeInTheDocument();
    expect(screen.queryByText('Value 1')).not.toBeInTheDocument();
  });

  it('will not allow duplicates', async () => {
    const internalOnChange = jest.fn();
    const getSearchSuggestions = jest.fn(() =>
      Promise.resolve({
        content: [
          { value: 'value1', label: 'Value 1' },
          { value: 'value1', label: 'Value 1' },
        ],
        lastPage: true,
      }),
    );

    render(
      <OxygenProvider>
        <SelectionFilter
          filterDefinition={{
            id: '1',
            label: 'Filter 1',
            operators: [{ value: 'is', label: 'is' }],
            allowFreeformSuggestions: false,
          }}
          internalFilter={{
            id: '1',
            label: 'Filter 1',
            operator: { value: 'is', label: 'is' },
          }}
          internalOnChange={internalOnChange}
          getSearchSuggestions={getSearchSuggestions}
          isMultiSelection
          translations={{ noSuggestionsFoundLabel: 'No items' }}
          testId="test-id"
        />
      </OxygenProvider>,
    );

    // it deduplicates results from getSearchSuggestions based on identical `value`
    await waitFor(() =>
      expect(screen.queryAllByTestId('LABEL_VALUE')).toHaveLength(1),
    );
  });

  it('shows search input when there are more than 10 options', () => {
    const filterDefinition: FilterDefinitionType = {
      id: '1',
      label: 'Filter 1',
      operators: [{ value: 'is', label: 'is' }],
      values: generateValues(15),
      allowFreeformSuggestions: false,
    };

    const internalFilter: FilterType = {
      id: '1',
      label: 'Filter 1',
      operator: { value: 'is', label: 'is' },
      values: [],
    };

    const internalOnChange = jest.fn();

    render(
      <OxygenProvider>
        <SelectionFilter
          filterDefinition={filterDefinition}
          internalFilter={internalFilter}
          internalOnChange={internalOnChange}
          isMultiSelection
          translations={{}}
          testId="test-id"
        />
      </OxygenProvider>,
    );

    // Verify that the search input is shown despite alwaysShowSearchInput being false
    // because there are more than 10 options
    const searchInput = screen.getByTestId('test-id_SELECTION_INPUT');

    expect(searchInput).toBeInTheDocument();

    // Verify that some of the options are visible
    expect(screen.getByText('Value 1')).toBeInTheDocument();
    expect(screen.getByText('Value 10')).toBeInTheDocument();
  });

  it('hides search input when there are fewer than 10 options', () => {
    const filterDefinition: FilterDefinitionType = {
      id: '1',
      label: 'Filter 1',
      operators: [{ value: 'is', label: 'is' }],
      values: generateValues(5),
      allowFreeformSuggestions: false,
    };

    const internalFilter: FilterType = {
      id: '1',
      label: 'Filter 1',
      operator: { value: 'is', label: 'is' },
      values: [],
    };

    const internalOnChange = jest.fn();

    render(
      <OxygenProvider>
        <SelectionFilter
          filterDefinition={filterDefinition}
          internalFilter={internalFilter}
          internalOnChange={internalOnChange}
          isMultiSelection
          translations={{}}
          testId="test-id"
        />
      </OxygenProvider>,
    );

    // Verify that the search input is not shown when alwaysShowSearchInput is false
    // and there are fewer than 10 options
    const searchInput = screen.queryByTestId('test-id_SELECTION_INPUT');

    expect(searchInput).not.toBeInTheDocument();

    // Verify that the options are still visible
    expect(screen.getByText('Value 1')).toBeInTheDocument();
    expect(screen.getByText('Value 5')).toBeInTheDocument();
  });

  it('shows search input when allowFreeformSuggestions is true', () => {
    const filterDefinition: FilterDefinitionType = {
      id: '1',
      label: 'Filter 1',
      operators: [{ value: 'is', label: 'is' }],
      values: generateValues(5),
      allowFreeformSuggestions: true,
    };

    const internalFilter: FilterType = {
      id: '1',
      label: 'Filter 1',
      operator: { value: 'is', label: 'is' },
      values: [],
    };

    const internalOnChange = jest.fn();

    render(
      <OxygenProvider>
        <SelectionFilter
          filterDefinition={filterDefinition}
          internalFilter={internalFilter}
          internalOnChange={internalOnChange}
          isMultiSelection
          translations={{}}
          testId="test-id"
        />
      </OxygenProvider>,
    );

    // Verify that the search input is shown when allowFreeformSuggestions is true
    // even though alwaysShowSearchInput is false and there are fewer than 10 options
    const searchInput = screen.getByTestId('test-id_SELECTION_INPUT');

    expect(searchInput).toBeInTheDocument();
  });

  it('shows search input when filterDefinition.hasSearchSuggestion is true', () => {
    const filterDefinition: FilterDefinitionType = {
      id: '1',
      label: 'Filter 1',
      operators: [{ value: 'is', label: 'is' }],
      values: generateValues(5),
      allowFreeformSuggestions: false,
    };

    const internalFilter: FilterType = {
      id: '1',
      label: 'Filter 1',
      operator: { value: 'is', label: 'is' },
      values: [],
    };

    const internalOnChange = jest.fn();
    const getSearchSuggestions = jest.fn(() =>
      Promise.resolve({
        content: [],
        lastPage: true,
      }),
    );

    render(
      <OxygenProvider>
        <SelectionFilter
          filterDefinition={filterDefinition}
          internalFilter={internalFilter}
          internalOnChange={internalOnChange}
          getSearchSuggestions={getSearchSuggestions}
          isMultiSelection
          translations={{}}
          testId="test-id"
        />
      </OxygenProvider>,
    );

    // Verify that the search input is shown when getSearchSuggestions is provided
    // even though alwaysShowSearchInput is false and there are fewer than 10 options
    const searchInput = screen.getByTestId('test-id_SELECTION_INPUT');

    expect(searchInput).toBeInTheDocument();
  });
});
