import { FilterDefinitionType, FilterType } from '../types';
import extractDataFromFilter from './extractDataFromFilter';

describe('extractDataFromFilter', () => {
  it('should return data for dateTime filter', () => {
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

    expect(extractDataFromFilter(filter, filterDefinition)).toEqual({
      filterLabel: 'test5',
      operatorLabel: 'is',
      firstValueLabel: '05/02/2024 22:00 - 17/03/2024 21:59',
      valuesLabels: ['05/02/2024 22:00 - 17/03/2024 21:59'],
      filterValuesLength: 1,
    });
  });

  it('should return filter data for normal filter', () => {
    const filter: FilterType = {
      id: 'Filter_5',
      name: 'test5',
      label: 'test5',
      operator: {
        value: 'is',
        label: 'is',
      },
      values: [
        {
          value: 'test',
          label: 'test',
        },
        {
          value: 'test2',
          label: 'test2',
        },
      ],
    };

    const filterDefinition: FilterDefinitionType = {
      id: 'Filter_5',
      name: 'test5',
      label: 'test5',
    };

    expect(extractDataFromFilter(filter, filterDefinition)).toEqual({
      filterLabel: 'test5',
      operatorLabel: 'is',
      firstValueLabel: 'test',
      valuesLabels: ['test', 'test2'],
      filterValuesLength: 2,
    });
  });

  it('should return filter data for normal filter with operator label from definition', () => {
    const filter: FilterType = {
      id: 'Filter_5',
      name: 'test5',
      label: 'test5',
      operator: {
        value: 'is',
        label: 'is_from_value',
      },
      values: [
        {
          value: 'test',
          label: 'test',
        },
        {
          value: 'test2',
          label: 'test2',
        },
      ],
    };

    const filterDefinition: FilterDefinitionType = {
      id: 'Filter_5',
      name: 'test5',
      label: 'test5',
      operators: [
        { value: 'is', label: 'is' },
        { value: 'isNot', label: 'is not' },
      ],
    };

    expect(extractDataFromFilter(filter, filterDefinition)).toEqual({
      filterLabel: 'test5',
      operatorLabel: 'is',
      firstValueLabel: 'test',
      valuesLabels: ['test', 'test2'],
      filterValuesLength: 2,
    });
  });

  it('should correctly return data without provided operator and no definition', () => {
    const filter: FilterType = {
      id: 'Filter_5',
      name: 'test5',
      label: 'test5',
    };

    expect(extractDataFromFilter(filter)).toEqual({
      filterLabel: 'test5',
      operatorLabel: undefined,
      firstValueLabel: undefined,
      valuesLabels: undefined,
      filterValuesLength: 0,
    });
  });
});
