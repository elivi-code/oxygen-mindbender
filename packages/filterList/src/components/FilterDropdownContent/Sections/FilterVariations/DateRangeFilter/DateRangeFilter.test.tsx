import React from 'react';
import { OxygenProvider } from '@8x8/oxygen-config';
import { render, screen } from '@testing-library/react';
import DateRangeFilter from './DateRangeFilter';
import { FilterDefinitionType, FilterType } from '../../../../../types';

import {
  mockFilters,
  mockFilterDefinitions,
} from '../../../../../utils/mockData/filters';

const mockDateTimeRange = jest.fn();
const mockLastXDaysRange = jest.fn();

const baseFilterDefinition: FilterDefinitionType = {
  ...mockFilterDefinitions[4],
  dateTimeRangeProps: {
    predefinedRanges: [
      {
        id: 'TODAY',
        displayName: 'Today',
        dateTimeRange: mockDateTimeRange,
      },
      {
        id: 'LAST_X_DAYS',
        displayName: 'Last X Days',
        dateTimeRange: mockLastXDaysRange,
        hasArgument: true,
      },
    ],
    endTimeErrorMessage: 'End time error',
    fromLabel: 'From',
    startTimeLabel: 'Start Time',
    toLabel: 'To',
    endTimeLabel: 'End Time',
    customPredefinedRangeLabel: 'Custom Range',
    dateFormat: 'yyyy-MM-dd',
    timeFormat: 'HH:mm',
  },
};

describe('DateRangeFilter component', () => {
  const renderComponent = (
    internalFilter: FilterType,
    filterDefault?: FilterType,
    internalOnChange = jest.fn(),
    filterDefinition = baseFilterDefinition,
  ) => {
    render(
      <OxygenProvider themeName="light">
        <DateRangeFilter
          filterDefinition={filterDefinition}
          internalFilter={internalFilter}
          filterDefault={filterDefault}
          internalOnChange={internalOnChange}
          testId="test-id"
        />
      </OxygenProvider>,
    );

    return { internalOnChange };
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the DateRangeFilter component', () => {
    const internalFilter: FilterType = mockFilters[4];

    renderComponent(internalFilter);

    const dateRangeFilter = screen.getByTestId('test-id_CONTENT');

    expect(dateRangeFilter).toBeInTheDocument();
  });

  it('initialises filter with default predefined range when no values exist', () => {
    mockDateTimeRange.mockReturnValue({
      startDate: new Date('2023-01-01T00:00:00.000Z'),
      endDate: new Date('2023-01-01T23:59:59.999Z'),
    });

    const internalFilter: FilterType = {
      ...mockFilters[4],
      values: undefined,
    };

    const { internalOnChange } = renderComponent(internalFilter);

    const updatedFilter = internalOnChange.mock.calls[0][0];

    expect(updatedFilter.values).toHaveLength(1);
    expect(updatedFilter.values[0]).toEqual(
      expect.objectContaining({
        predefinedRange: expect.objectContaining({
          id: 'TODAY',
          displayName: 'Today',
        }),
        dateRange: {
          startDate: '"2023-01-01T00:00:00.000Z"',
          endDate: '"2023-01-01T23:59:59.999Z"',
        },
      }),
    );
  });

  it('does not initialise when filter already has values', () => {
    const internalFilter: FilterType = {
      ...mockFilters[4],
      values: [
        {
          dateRange: { startDate: '2023-01-01', endDate: '2023-01-02' },
          predefinedRange: { id: 'CUSTOM' },
        },
      ],
    };

    const { internalOnChange } = renderComponent(internalFilter);

    expect(mockDateTimeRange).not.toHaveBeenCalled();
    expect(internalOnChange).not.toHaveBeenCalled();
  });

  describe('filterDefault handling', () => {
    it('applies valid predefined range default', () => {
      const internalFilter: FilterType = {
        ...mockFilters[4],
        values: undefined,
      };

      const filterDefault: FilterType = {
        id: 'DATE_RANGE',
        values: [
          {
            predefinedRange: { id: 'LAST_X_DAYS', value: '7' },
            label: 'Last 7 Days',
          },
        ],
      };

      const { internalOnChange } = renderComponent(
        internalFilter,
        filterDefault,
      );

      const updatedFilter = internalOnChange.mock.calls[0][0];

      expect(updatedFilter.values).toHaveLength(1);
      expect(updatedFilter.values[0]).toEqual({
        predefinedRange: { id: 'LAST_X_DAYS', value: '7' },
        label: 'Last 7 Days',
      });
    });

    it('applies valid custom range default', () => {
      const internalFilter: FilterType = {
        ...mockFilters[4],
        values: undefined,
      };

      const filterDefault: FilterType = {
        id: 'DATE_RANGE',
        values: [
          {
            predefinedRange: { id: 'CUSTOM' },
            dateRange: {
              startDate: '2024-01-01T00:00:00.000Z',
              endDate: '2024-01-31T23:59:59.999Z',
            },
            label: '01/01/2024 12:00 AM - 01/31/2024 11:59 PM',
          },
        ],
      };

      const { internalOnChange } = renderComponent(
        internalFilter,
        filterDefault,
      );

      const updatedFilter = internalOnChange.mock.calls[0][0];

      expect(updatedFilter.values).toHaveLength(1);
      expect(updatedFilter.values[0]).toEqual({
        predefinedRange: { id: 'CUSTOM' },
        dateRange: {
          startDate: '2024-01-01T00:00:00.000Z',
          endDate: '2024-01-31T23:59:59.999Z',
        },
        label: '01/01/2024 12:00 AM - 01/31/2024 11:59 PM',
      });
    });

    it('falls back to first predefined range when default has invalid predefined range', () => {
      mockDateTimeRange.mockReturnValue({
        startDate: new Date('2023-01-01T00:00:00.000Z'),
        endDate: new Date('2023-01-01T23:59:59.999Z'),
      });

      const internalFilter: FilterType = {
        ...mockFilters[4],
        values: undefined,
      };

      const filterDefault: FilterType = {
        id: 'DATE_RANGE',
        values: [
          {
            predefinedRange: { id: 'NON_EXISTENT_RANGE' },
            label: 'Invalid Range',
          },
        ],
      };

      const { internalOnChange } = renderComponent(
        internalFilter,
        filterDefault,
      );

      const updatedFilter = internalOnChange.mock.calls[0][0];

      expect(updatedFilter.values).toHaveLength(1);
      expect(updatedFilter.values[0].predefinedRange.id).toBe('TODAY');
    });

    it('falls back to first predefined range when default has no predefined range', () => {
      mockDateTimeRange.mockReturnValue({
        startDate: new Date('2023-01-01T00:00:00.000Z'),
        endDate: new Date('2023-01-01T23:59:59.999Z'),
      });

      const internalFilter: FilterType = {
        ...mockFilters[4],
        values: undefined,
      };

      const filterDefault: FilterType = {
        id: 'DATE_RANGE',
        values: [
          {
            dateRange: {
              startDate: '2024-01-01T00:00:00.000Z',
              endDate: '2024-01-31T23:59:59.999Z',
            },
            label: 'No Predefined Range',
          },
        ],
      };

      const { internalOnChange } = renderComponent(
        internalFilter,
        filterDefault,
      );

      const updatedFilter = internalOnChange.mock.calls[0][0];

      expect(updatedFilter.values).toHaveLength(1);
      expect(updatedFilter.values[0].predefinedRange.id).toBe('TODAY');
    });

    it('does not apply default when filter already has values', () => {
      const internalFilter: FilterType = {
        ...mockFilters[4],
        values: [
          {
            dateRange: { startDate: '2023-01-01', endDate: '2023-01-02' },
            predefinedRange: { id: 'CUSTOM' },
          },
        ],
      };

      const filterDefault: FilterType = {
        id: 'DATE_RANGE',
        values: [
          {
            predefinedRange: { id: 'LAST_X_DAYS', value: '7' },
            label: 'Last 7 Days',
          },
        ],
      };

      const { internalOnChange } = renderComponent(
        internalFilter,
        filterDefault,
      );

      expect(internalOnChange).not.toHaveBeenCalled();
    });
  });
});
