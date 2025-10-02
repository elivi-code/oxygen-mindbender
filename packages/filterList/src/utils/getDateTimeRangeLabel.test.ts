import { FilterDefinitionType, FilterType } from '../types';
import getDateTimeRangeLabel from './getDateTimerangeLabel';

describe('getDateTimeRangeLabel', () => {
  it('should return dates interval', () => {
    const filter: FilterType = {
      id: 'Filter_5',
      name: 'test5',
      label: 'test5',
      operator: {
        value: 'dateRange',
        label: 'is',
      },
      values: [
        {
          dateRange: {
            startDate: '"2024-02-05T22:00:00.000Z"',
            endDate: '"2024-03-17T21:59:00.000Z"',
          },
        },
      ],
    };
    const filterDefinition: FilterDefinitionType = {
      id: 'Filter_5',
      name: 'test5',
      label: 'test5',
      dateTimeRangeProps: {
        dateFormat: 'dd/MM/yyyy',
        timeFormat: 'HH:mm',
      },
    };

    expect(getDateTimeRangeLabel({ filter, filterDefinition })).toBe(
      '05/02/2024 22:00 - 17/03/2024 21:59',
    );
  });

  it('should return predefined range label for TODAY', () => {
    const filter: FilterType = {
      id: 'Filter_5',
      name: 'test5',
      label: 'test5',
      operator: {
        value: 'dateRange',
        label: 'is',
      },
      values: [
        {
          predefinedRange: {
            id: 'TODAY',
          },
        },
      ],
    };

    const filterDefinition: FilterDefinitionType = {
      id: 'Filter_5',
      name: 'test5',
      label: 'test5',
      dateTimeRangeProps: {
        predefinedRanges: [
          {
            id: 'TODAY',
            displayName: 'Today',
          },
        ],
      },
    };

    expect(getDateTimeRangeLabel({ filter, filterDefinition })).toBe('Today');
  });

  it('should not throw if filterDefinition is not provided for predefinedRange', () => {
    const filter: FilterType = {
      id: 'Filter_5',
      name: 'test5',
      label: 'test5',
      operator: {
        value: 'dateRange',
        label: 'is',
      },
      values: [
        {
          predefinedRange: {
            id: 'TODAY',
            selectedDisplayName: ['Today'],
          },
        },
      ],
    };

    expect(getDateTimeRangeLabel({ filter })).toBe('');
  });

  it('should not throw if filterDefinition is not provided for dateRange', () => {
    const filter: FilterType = {
      id: 'Filter_5',
      name: 'test5',
      label: 'test5',
      operator: {
        value: 'dateRange',
        label: 'is',
      },
      values: [
        {
          dateRange: {
            startDate: '"2024-02-05T22:00:00.000Z"',
            endDate: '"2024-03-17T21:59:00.000Z"',
          },
        },
      ],
    };

    expect(getDateTimeRangeLabel({ filter })).toBe('');
  });
});
