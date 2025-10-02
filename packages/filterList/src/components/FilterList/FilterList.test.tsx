import React, { useRef, useState } from 'react';
import { render, screen, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { OxygenProvider, ContextType } from '@8x8/oxygen-config';
import FilterList, { FilterType } from '../..';
import { FilterDefinitionType, type FilterListInterface } from '../../types';
import {
  mockFilterDefinitions,
  mockFilters,
} from '../../utils/mockData/filters';

const MOCK_TELEMETRY_PROPS = {
  uiArea: 'test',
};

const Component = () => {
  const popoverPortalRef = useRef<HTMLDivElement | null>(null);

  return (
    <OxygenProvider>
      <FilterList
        currentFilters={mockFilters}
        filterDefinitions={mockFilterDefinitions}
        onChange={() => {}}
        popoverPortalRef={popoverPortalRef}
        testId="test-id"
        telemetryProps={{ uiArea: 'test' }}
      />
      <div ref={popoverPortalRef} data-test-id="CUSTOM_PORTAL" />
    </OxygenProvider>
  );
};

type FilterListWithStateProps = Partial<FilterListInterface> & {
  telemetryCallback?: ContextType['telemetryCallback'];
};

const FilterListWithState = ({
  onChange,
  hasGlobalApplyButton = false,
  currentFiltersSortFunction = undefined,
  defaultFilters = mockFilters,
  filterDefinitions = mockFilterDefinitions,
  telemetryProps = undefined,
  telemetryCallback = () => null,
}: FilterListWithStateProps) => {
  const [currentFilters, setCurrentFilters] =
    useState<FilterType[]>(defaultFilters);

  const localOnChange = updatedFilters => {
    setCurrentFilters(updatedFilters);

    if (onChange) {
      onChange(updatedFilters);
    }
  };

  return (
    <OxygenProvider telemetryCallback={telemetryCallback}>
      <FilterList
        currentFilters={currentFilters}
        defaultFilters={defaultFilters}
        currentFiltersSortFunction={currentFiltersSortFunction}
        filterDefinitions={filterDefinitions}
        hasGlobalApplyButton={hasGlobalApplyButton}
        onChange={localOnChange}
        telemetryProps={telemetryProps}
      />
    </OxygenProvider>
  );
};

describe('FilterList', () => {
  it('should render', () => {
    render(
      <OxygenProvider>
        <FilterList
          currentFilters={mockFilters}
          filterDefinitions={mockFilterDefinitions}
          onChange={() => {}}
          testId="test-id"
        />
      </OxygenProvider>,
    );

    expect(screen.queryByTestId('test-id')).toBeInTheDocument();
  });
  it('renders the Popover in a local ref', () => {
    render(
      <OxygenProvider>
        <FilterList
          currentFilters={mockFilters}
          filterDefinitions={mockFilterDefinitions}
          onChange={() => {}}
          testId="test-id"
        />
      </OxygenProvider>,
    );

    // open the filter
    screen.getByTestId('test-id_FILTER_FILTER_TAG_Filter_1').click();
    const portal = screen.getByTestId('test-id_PORTAL');

    expect(
      within(portal).getByTestId('test-id_FILTER_POPOVER'),
    ).toBeInTheDocument();
  });

  it('renders the Popover in a custom ref', () => {
    render(<Component />);

    // open the filter
    screen.getByTestId('test-id_FILTER_FILTER_TAG_Filter_1').click();
    const localPortal = screen.getByTestId('test-id_PORTAL');
    const customPortal = screen.getByTestId('CUSTOM_PORTAL');

    expect(
      within(localPortal).queryByTestId('test-id_FILTER_POPOVER'),
    ).not.toBeInTheDocument();
    expect(
      within(customPortal).queryByTestId('test-id_FILTER_POPOVER'),
    ).toBeInTheDocument();
  });

  it('sends telemetry event on apply', async () => {
    const user = userEvent.setup();
    const mockOnTelemetry = jest.fn();
    let mockFilterDefinitionsWithoutValues;

    const localOnChange = updatedFilters => {
      mockFilterDefinitionsWithoutValues = updatedFilters.map(filter => {
        const { values, ...rest } = filter;

        return rest;
      });
    };

    render(
      <FilterListWithState
        hasGlobalApplyButton
        telemetryProps={{ uiArea: 'test' }}
        telemetryCallback={mockOnTelemetry}
        onChange={localOnChange}
      />,
    );

    const firstFilter = screen.getByTestId(
      'FILTER_LIST_FILTER_FILTER_TAG_Filter_1',
    );

    // open popover
    await user.click(firstFilter);

    // get checkboxes
    const [checkbox1] = screen.getAllByTestId(
      'FILTER_LIST_FILTER_DROPDOWN_CONTENT_VALUES_CHECKBOX',
    );

    // 1st checkbox initially checked
    expect(checkbox1).toBeChecked();

    // uncheck 1st checkbox
    await user.click(checkbox1);
    expect(checkbox1).not.toBeChecked();

    const globalApply = screen.getByTestId(
      'FILTER_LIST_ACTIONS_GLOBAL_APPLY_FILTER',
    );

    // Click on global reset
    await user.click(globalApply);

    const props = {
      ...MOCK_TELEMETRY_PROPS,
      filters: mockFilterDefinitionsWithoutValues,
    };

    expect(mockOnTelemetry).toHaveBeenCalledTimes(1);
    expect(mockOnTelemetry).toHaveBeenCalledWith('filter_apply', props);
  });

  it('sends telemetry event on global reset all', async () => {
    const user = userEvent.setup();
    const mockOnTelemetry = jest.fn();

    render(
      <FilterListWithState
        hasGlobalApplyButton
        telemetryProps={{ uiArea: 'test' }}
        telemetryCallback={mockOnTelemetry}
      />,
    );

    const firstFilter = screen.getByTestId(
      'FILTER_LIST_FILTER_FILTER_TAG_Filter_1',
    );

    // open popover
    await user.click(firstFilter);

    // get checkboxes
    const [checkbox1] = screen.getAllByTestId(
      'FILTER_LIST_FILTER_DROPDOWN_CONTENT_VALUES_CHECKBOX',
    );

    // 1st checkbox initially checked
    expect(checkbox1).toBeChecked();

    // uncheck 1st checkbox
    await user.click(checkbox1);
    expect(checkbox1).not.toBeChecked();

    const globalReset = screen.getByTestId(
      'FILTER_LIST_ACTIONS_RESET_ALL_FILTER',
    );

    // Click on global reset
    await user.click(globalReset);

    expect(mockOnTelemetry).toHaveBeenCalledTimes(1);
    expect(mockOnTelemetry).toHaveBeenCalledWith(
      'filter_reset_all',
      MOCK_TELEMETRY_PROPS,
    );
  });

  it('sends telemetry event on click GlobalApplyButton', async () => {
    const user = userEvent.setup();
    const mockOnTelemetry = jest.fn();

    render(
      <FilterListWithState
        hasGlobalApplyButton
        telemetryProps={{ uiArea: 'test' }}
        telemetryCallback={mockOnTelemetry}
      />,
    );

    const firstFilter = screen.getByTestId(
      'FILTER_LIST_FILTER_FILTER_TAG_Filter_1',
    );

    // open popover
    await user.click(firstFilter);

    // get checkboxes
    const [checkbox1] = screen.getAllByTestId(
      'FILTER_LIST_FILTER_DROPDOWN_CONTENT_VALUES_CHECKBOX',
    );

    // 1st checkbox initially checked
    expect(checkbox1).toBeChecked();

    // uncheck 1st checkbox
    await user.click(checkbox1);
    expect(checkbox1).not.toBeChecked();

    const globallyApplyButton = screen.getByTestId(
      'FILTER_LIST_ACTIONS_GLOBAL_APPLY_FILTER',
    );

    // Click on global apply button
    await user.click(globallyApplyButton);
    expect(mockOnTelemetry).toHaveBeenCalledTimes(1);
  });

  it('does not sends telemetry event on click GlobalApplyButton - no telemetry props', async () => {
    const user = userEvent.setup();
    const mockOnTelemetry = jest.fn();

    render(
      <FilterListWithState
        hasGlobalApplyButton
        telemetryCallback={mockOnTelemetry}
      />,
    );

    const firstFilter = screen.getByTestId(
      'FILTER_LIST_FILTER_FILTER_TAG_Filter_1',
    );

    // open popover
    await user.click(firstFilter);

    // get checkboxes
    const [checkbox1] = screen.getAllByTestId(
      'FILTER_LIST_FILTER_DROPDOWN_CONTENT_VALUES_CHECKBOX',
    );

    // 1st checkbox initially checked
    expect(checkbox1).toBeChecked();

    // uncheck 1st checkbox
    await user.click(checkbox1);
    expect(checkbox1).not.toBeChecked();

    const globallyApplyButton = screen.getByTestId(
      'FILTER_LIST_ACTIONS_GLOBAL_APPLY_FILTER',
    );

    // Click on global apply button
    await user.click(globallyApplyButton);
    expect(mockOnTelemetry).toHaveBeenCalledTimes(0);
  });

  it('correctly resets the filters when hasGlobalApplyButton', async () => {
    const user = userEvent.setup();

    render(<FilterListWithState hasGlobalApplyButton />);

    const firstFilter = screen.getByTestId(
      'FILTER_LIST_FILTER_FILTER_TAG_Filter_1',
    );

    // open popover
    await user.click(firstFilter);

    // get checkboxes
    let [checkbox1] = screen.getAllByTestId(
      'FILTER_LIST_FILTER_DROPDOWN_CONTENT_VALUES_CHECKBOX',
    );

    // 1st checkbox initially checked
    expect(checkbox1).toBeChecked();

    // uncheck 1st checkbox
    await user.click(checkbox1);
    expect(checkbox1).not.toBeChecked();

    const globalReset = screen.getByTestId(
      'FILTER_LIST_ACTIONS_RESET_ALL_FILTER',
    );

    // Click on global reset
    await user.click(globalReset);

    // open popover
    await user.click(firstFilter);

    // requery, otherwise we get a reference to the old stale element
    [checkbox1] = screen.getAllByTestId(
      'FILTER_LIST_FILTER_DROPDOWN_CONTENT_VALUES_CHECKBOX',
    );

    // 1st checkbox should be checked
    expect(checkbox1).toBeChecked();
  });

  it('adds and sorts filters correctly', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    const sortFn = (a, b) => (a.id > b.id ? -1 : 1);

    // Render without the last2 filter (filter 4 and filter 5)
    render(
      <FilterListWithState
        onChange={onChange}
        currentFiltersSortFunction={sortFn}
        defaultFilters={mockFilters.slice(0, 3)}
      />,
    );

    // + Add Filter button
    const add = screen.getByTestId('FILTER_LIST_ADD_NEW_FILTER_BUTTON');

    await user.click(add);

    // Select filter 4
    await user.click(screen.getByText('test4'));

    expect(onChange).toHaveBeenCalledTimes(0);

    const applyButton = screen.getByTestId(
      'FILTER_LIST_FILTER_DROPDOWN_CONTENT_BOTTOM_ACTIONS_APPLY_FILTER',
    );

    // Apply button is disabled
    expect(applyButton).toHaveAttribute('aria-disabled', 'true');

    // Click apply should not do anything as it is disabled
    await user.click(applyButton);

    expect(onChange).toHaveBeenCalledTimes(0);

    const greaterThanInput = screen.getByTestId(
      'FILTER_LIST_FILTER_DROPDOWN_CONTENT_VALUES_INPUT_FIELD',
    );

    // Input a value
    await user.type(greaterThanInput, '5');

    expect(greaterThanInput).toHaveValue(5);

    // Apply button is enabled
    await waitFor(() =>
      expect(applyButton).toHaveAttribute('aria-disabled', 'false'),
    );

    // Click apply should not do anything as it is disabled
    await user.click(applyButton);

    expect(onChange).toHaveBeenCalledTimes(1);
    // this is sorted differently than the original, so sort it here
    const updatedFilters = JSON.parse(
      JSON.stringify(mockFilters.slice(0, 4).sort(sortFn)),
    );

    updatedFilters[0].values = [{ value: '5' }];
    expect(onChange).toHaveBeenCalledWith(updatedFilters);
  });

  it('calls onFilterToggle with the correct filterId when a popover is opened and null when closed', async () => {
    const user = userEvent.setup();
    const mockonFilterToggle = jest.fn();

    render(
      <OxygenProvider>
        <FilterList
          currentFilters={mockFilters}
          filterDefinitions={mockFilterDefinitions}
          onChange={() => {}}
          onFilterToggle={mockonFilterToggle}
          testId="test-id"
        />
      </OxygenProvider>,
    );

    const firstFilter = screen.getByTestId(
      'test-id_FILTER_FILTER_TAG_Filter_1',
    );

    // Open the filter
    await user.click(firstFilter);

    // Verify that onFilterToggle is called with the correct filterId
    expect(mockonFilterToggle).toHaveBeenCalledWith('Filter_1');

    // Close the filter
    await user.click(firstFilter);

    // Verify that onFilterToggle is called with null
    expect(mockonFilterToggle).toHaveBeenCalledWith(null);
  });

  it('does not call onChange when clearing a filter with un-applied changes', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

    const currentFiltersMock: FilterType[] = [
      {
        id: 'Filter_1',
        name: 'test',
        label: 'test',
        operator: { value: 'is', label: 'is' },
        values: [],
      },
    ];

    const filterDefinitionMock: FilterDefinitionType[] = [
      {
        id: 'Filter_1',
        label: 'test',
        name: 'test',
        isAlwaysVisible: true,
        operators: [{ value: 'is', label: 'is' }],
        values: [
          { value: 'val1', label: 'val1' },
          { value: 'val2', label: 'val2' },
          { value: 'val3', label: 'val3' },
          { value: 'val4', label: 'val4' },
        ],
      },
    ];

    render(
      <OxygenProvider>
        <FilterList
          currentFilters={currentFiltersMock}
          filterDefinitions={filterDefinitionMock}
          onChange={() => {}}
        />
      </OxygenProvider>,
    );

    const firstFilter = screen.getByTestId(
      'FILTER_LIST_FILTER_FILTER_TAG_Filter_1',
    );

    await user.click(firstFilter);

    const [checkbox1] = screen.getAllByTestId(
      'FILTER_LIST_FILTER_DROPDOWN_CONTENT_VALUES_CHECKBOX',
    );

    await user.click(checkbox1);

    const clearButton = screen.getByTestId(
      'FILTER_LIST_FILTER_DROPDOWN_CONTENT_BOTTOM_ACTIONS_ACTION_BUTTON_CLEAR_FILTER',
    );

    await user.click(clearButton);

    expect(onChange).toHaveBeenCalledTimes(0);
  });
});
