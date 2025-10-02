import React from 'react';
import { OxygenProvider } from '@8x8/oxygen-config';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BottomActions from './BottomActions';
import { FilterType, FilterDefinitionType } from '../../../../types';

const translations = {
  deleteFilterlabel: 'Delete',
  applyFilterLabel: 'Apply',
};

const MOCK_TELEMETRY_PROPS = {
  uiArea: 'test',
};

describe('BottomActions component', () => {
  it('should display both delete and apply buttons', () => {
    const filter: FilterType = {
      id: '1',
      label: 'Filter 1',
      operator: { value: 'is', label: 'is' },
      values: [{ label: 'value', value: 'value' }],
    };

    const filterDefinition: FilterDefinitionType = {
      id: '1',
      label: 'Filter 1',
      isAlwaysVisible: false,
      operators: [
        { value: 'is', label: 'is' },
        { value: 'notEndsWith', label: "doesn't end with" },
      ],
    };

    render(
      <OxygenProvider themeName="light">
        <BottomActions
          filter={filter}
          internalFilter={filter}
          filterDefinition={filterDefinition}
          onFilterDelete={() => {}}
          hasGlobalApplyButton={false}
          onApply={() => {}}
          translations={translations}
          testId="test-id"
          internalOnChange={() => {}}
        />
      </OxygenProvider>,
    );

    expect(screen.getByTestId('test-id_DELETE_FILTER')).toBeInTheDocument();
    expect(screen.getByTestId('test-id_APPLY_FILTER')).toBeInTheDocument();
  });

  it('should display only delete button', () => {
    const filter: FilterType = {
      id: '1',
      label: 'Filter 1',
      operator: { value: 'is', label: 'is' },
      values: [{ label: 'value', value: 'value' }],
    };

    const filterDefinition: FilterDefinitionType = {
      id: '1',
      label: 'Filter 1',
      isAlwaysVisible: false,
      operators: [
        { value: 'is', label: 'is' },
        { value: 'notEndsWith', label: "doesn't end with" },
      ],
    };

    render(
      <OxygenProvider themeName="light">
        <BottomActions
          filter={filter}
          internalFilter={filter}
          filterDefinition={filterDefinition}
          onFilterDelete={() => {}}
          hasGlobalApplyButton
          onApply={() => {}}
          translations={translations}
          testId="test-id"
          internalOnChange={() => {}}
        />
      </OxygenProvider>,
    );

    expect(screen.getByTestId('test-id_DELETE_FILTER')).toBeInTheDocument();
    expect(
      screen.queryByTestId('test-id_APPLY_FILTER'),
    ).not.toBeInTheDocument();
  });

  it('should display only apply button', () => {
    const filter: FilterType = {
      id: '1',
      label: 'Filter 1',
      operator: { value: 'is', label: 'is' },
      values: [{ label: 'value', value: 'value' }],
    };

    const filterDefinition: FilterDefinitionType = {
      id: '1',
      label: 'Filter 1',
      isAlwaysVisible: true,
      operators: [
        { value: 'is', label: 'is' },
        { value: 'notEndsWith', label: "doesn't end with" },
      ],
    };

    render(
      <OxygenProvider themeName="light">
        <BottomActions
          filter={filter}
          internalFilter={filter}
          filterDefinition={filterDefinition}
          onFilterDelete={() => {}}
          hasGlobalApplyButton={false}
          onApply={() => {}}
          translations={translations}
          testId="test-id"
          internalOnChange={() => {}}
        />
      </OxygenProvider>,
    );

    expect(
      screen.queryByTestId('test-id_DELETE_FILTER'),
    ).not.toBeInTheDocument();
    expect(screen.getByTestId('test-id_APPLY_FILTER')).toBeInTheDocument();
  });

  it('should display apply button disabled if internalFilter is equal to filer and is not always visible', () => {
    const filter: FilterType = {
      id: '1',
      label: 'Filter 1',
      operator: { value: 'is', label: 'is' },
      values: [{ label: 'value', value: 'value' }],
    };

    const filterDefinition: FilterDefinitionType = {
      id: '1',
      label: 'Filter 1',
      isAlwaysVisible: false,
      operators: [
        { value: 'is', label: 'is' },
        { value: 'notEndsWith', label: "doesn't end with" },
      ],
    };

    render(
      <OxygenProvider themeName="light">
        <BottomActions
          filter={filter}
          internalFilter={filter}
          filterDefinition={filterDefinition}
          onFilterDelete={() => {}}
          hasGlobalApplyButton={false}
          onApply={() => {}}
          translations={translations}
          testId="test-id"
          internalOnChange={() => {}}
        />
      </OxygenProvider>,
    );

    expect(screen.getByTestId('test-id_APPLY_FILTER')).toHaveAttribute(
      'aria-disabled',
      'true',
    );
  });

  it('displays the reset button when there is a single operator and has filterDefault', () => {
    const filter: FilterType = {
      id: '1',
      label: 'Filter 1',
      operator: { value: 'is', label: 'is' },
      values: [{ label: 'value', value: 'value' }],
    };

    const filterDefinition: FilterDefinitionType = {
      id: '1',
      label: 'Filter 1',
      isAlwaysVisible: false,
      operators: [{ value: 'is', label: 'is' }],
    };

    render(
      <OxygenProvider themeName="light">
        <BottomActions
          filter={filter}
          internalFilter={filter}
          filterDefinition={filterDefinition}
          onFilterDelete={() => {}}
          hasGlobalApplyButton={false}
          onApply={() => {}}
          translations={translations}
          testId="test-id"
          internalOnChange={() => {}}
          filterDefault={filter}
        />
      </OxygenProvider>,
    );

    const resetButton = screen.getByTestId(
      'test-id_ACTION_BUTTON_RESET_FILTER',
    );

    // Assert that the reset/clear button is displayed
    expect(resetButton).toBeInTheDocument();
  });

  it('displays the clear button when there is a single operator and has always filter visible', () => {
    const filter: FilterType = {
      id: '1',
      label: 'Filter 1',
      operator: { value: 'is', label: 'is' },
      values: [{ label: 'value', value: 'value' }],
    };

    const filterDefinition: FilterDefinitionType = {
      id: '1',
      label: 'Filter 1',
      isAlwaysVisible: true,
      operators: [{ value: 'is', label: 'is' }],
    };

    render(
      <OxygenProvider themeName="light">
        <BottomActions
          filter={filter}
          internalFilter={filter}
          filterDefinition={filterDefinition}
          onFilterDelete={() => {}}
          hasGlobalApplyButton={false}
          onApply={() => {}}
          translations={translations}
          testId="test-id"
          internalOnChange={() => {}}
          filterDefault={filter}
        />
      </OxygenProvider>,
    );

    const resetButton = screen.getByTestId(
      'test-id_ACTION_BUTTON_RESET_FILTER',
    );

    // Assert that the reset/clear button is displayed
    expect(resetButton).toBeInTheDocument();
  });

  it('should display apply button disabled if dateTime filter has isEndTimeValid as false', () => {
    const filter: FilterType = {
      id: '1',
      label: 'Filter 1',
      operator: { value: 'dateRange', label: 'is' },
      values: [
        {
          isEndTimeValid: false,
        },
      ],
    };

    const filterDefinition: FilterDefinitionType = {
      id: '1',
      label: 'Filter 1',
      isAlwaysVisible: false,
      operators: [
        { value: 'is', label: 'is' },
        { value: 'notEndsWith', label: "doesn't end with" },
      ],
    };

    render(
      <OxygenProvider themeName="light">
        <BottomActions
          filter={filter}
          internalFilter={filter}
          filterDefinition={filterDefinition}
          onFilterDelete={() => {}}
          hasGlobalApplyButton={false}
          onApply={() => {}}
          translations={translations}
          testId="test-id"
          internalOnChange={() => {}}
        />
      </OxygenProvider>,
    );

    expect(screen.getByTestId('test-id_APPLY_FILTER')).toHaveAttribute(
      'aria-disabled',
      'true',
    );
  });

  it('should display apply button disabled if the filter is not always visible and there are no values in the filter', () => {
    const filter: FilterType = {
      id: '1',
      label: 'Filter 1',
      operator: { value: 'is', label: 'is' },
      values: [{ label: 'value', value: 'value' }],
    };

    const filterDefinition: FilterDefinitionType = {
      id: '1',
      label: 'Filter 1',
      isAlwaysVisible: false,
      operators: [
        { value: 'is', label: 'is' },
        { value: 'notEndsWith', label: "doesn't end with" },
      ],
    };

    render(
      <OxygenProvider themeName="light">
        <BottomActions
          filter={filter}
          internalFilter={{ ...filter, values: [] }}
          filterDefinition={filterDefinition}
          onFilterDelete={() => {}}
          hasGlobalApplyButton={false}
          onApply={() => {}}
          translations={translations}
          testId="test-id"
          internalOnChange={() => {}}
        />
      </OxygenProvider>,
    );

    expect(screen.getByTestId('test-id_APPLY_FILTER')).toHaveAttribute(
      'aria-disabled',
      'true',
    );
  });
  it('should send telemetry event on click the reset button', async () => {
    const user = userEvent.setup();
    const mockOnTelemetry = jest.fn();
    const filter: FilterType = {
      id: '1',
      label: 'Filter 1',
      operator: { value: 'is', label: 'is' },
      values: [
        { label: 'value', value: 'value' },
        { value: 'val2', label: 'val2' },
      ],
    };

    const filterDefinition: FilterDefinitionType = {
      id: '1',
      label: 'Filter 1',
      operators: [
        { value: 'is', label: 'is' },
        { value: 'isNot', label: 'is not' },
      ],
    };

    const filterDefault: FilterType = {
      id: '1',
      label: 'Filter 1',
      operator: { value: 'is', label: 'is' },
      values: [{ label: 'value', value: 'value' }],
    };

    render(
      <OxygenProvider themeName="light" telemetryCallback={mockOnTelemetry}>
        <BottomActions
          internalFilter={filter}
          filterDefinition={filterDefinition}
          filterDefault={filterDefault}
          internalOnChange={() => {}}
          hasGlobalApplyButton={false}
          translations={translations}
          testId="test-id"
          telemetryProps={MOCK_TELEMETRY_PROPS}
          onFilterDelete={jest.fn()}
          onApply={jest.fn()}
        />
      </OxygenProvider>,
    );

    const resetButton = screen.getByTestId(
      'test-id_ACTION_BUTTON_RESET_FILTER',
    );

    expect(resetButton).toBeInTheDocument();
    expect(resetButton).toHaveAttribute('aria-disabled', 'false');
    await user.click(resetButton);
    expect(mockOnTelemetry).toBeCalled();
    expect(mockOnTelemetry).toBeCalledWith(
      'filter_reset',
      MOCK_TELEMETRY_PROPS,
    );
  });
});
