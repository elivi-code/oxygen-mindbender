import { predefinedRanges } from '@8x8/oxygen-date-time-range-selector';
const mockFilters = [
    // filter with values
    {
        id: 'Filter_1',
        name: 'test',
        label: 'test',
        operator: { value: 'is', label: 'is' },
        values: [{ value: 'val1', label: 'val1' }],
    },
    // filter without values
    {
        id: 'Filter_2',
        name: 'test2',
        label: 'test2',
        operator: { value: 'isNot', label: 'is not' },
        values: [],
    },
    // boolean filter
    {
        id: 'Filter_3',
        name: 'test3',
        label: 'test3',
        operator: { value: 'boolean', label: 'is' },
        values: [{ value: 'true', label: 'true' }],
    },
    // number filter
    {
        id: 'Filter_4',
        name: 'test4',
        label: 'test4',
        operator: { value: 'greaterThan', label: 'is greater than' },
        values: [{ value: '10' }],
    },
    // date range filter
    {
        id: 'Filter_5',
        name: 'test5',
        label: 'test5',
        operator: {
            value: 'dateRange',
            label: 'is',
        },
        values: [
            {
                isEndTimeValid: true,
                dateRange: {
                    startDate: '"2024-02-05T22:00:00.000Z"',
                    endDate: '"2024-03-17T21:59:00.000Z"',
                },
                predefinedRange: {
                    id: 'CUSTOM',
                },
                label: '02/06/2024 12:00 AM - 03/17/2024 11:59 PM',
            },
        ],
    },
];
const mockFilterDefinitions = [
    {
        id: 'Filter_1',
        label: 'test',
        name: 'test',
        operators: [
            { value: 'is', label: 'is' },
            { value: 'isNot', label: 'is not' },
        ],
        values: [
            { value: 'val1', label: 'val1' },
            { value: 'val2', label: 'val2' },
            { value: 'val3', label: 'val3' },
            { value: 'val4', label: 'val4' },
        ],
    },
    {
        id: 'Filter_2',
        label: 'test2',
        name: 'test2',
        operators: [
            { value: 'isNot', label: 'is not' },
            { value: 'is', label: 'is' },
        ],
        values: [
            { value: 'val1', label: 'val1' },
            { value: 'val2', label: 'val2' },
            { value: 'val3', label: 'val3' },
            { value: 'val4', label: 'val4' },
        ],
    },
    {
        id: 'Filter_3',
        label: 'test3',
        name: 'test3',
        operators: [{ value: 'boolean', label: 'is' }],
        values: [
            { value: 'true', label: 'true' },
            { value: 'false', label: 'false' },
        ],
    },
    {
        id: 'Filter_4',
        label: 'test4',
        name: 'test4',
        operators: [{ value: 'greaterThan', label: 'is greater than' }],
    },
    {
        id: 'Filter_5',
        label: 'Date Range',
        name: 'Date Range',
        operators: [{ value: 'dateRange', label: 'is' }],
        dateTimeRangeProps: {
            predefinedRanges,
            // predefinedRange: { id: 'CUSTOM' },
            fromLabel: 'From',
            startTimeLabel: 'Start Time',
            toLabel: 'To',
            endTimeLabel: 'End Time',
            customPredefinedRangeLabel: 'Custom',
            endTimeErrorMessage: 'Cannot be before start time',
            dateFormat: 'MM/dd/yyyy',
            timeFormat: 'hh:mm a',
        },
    },
];
export { mockFilters, mockFilterDefinitions };
