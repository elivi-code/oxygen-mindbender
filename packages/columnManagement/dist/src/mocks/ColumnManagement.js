export const MOCK_DEFAULT_COLUMNS = [
    { id: '1', name: 'Queues', isLocked: true },
    { id: '2', name: 'Channel' },
    { id: '3', name: 'Waiting' },
];
export const MOCK_DEFAULT_COLUMNS_EQUAL_CURRENT = [
    { id: '1', name: 'Queues', isLocked: true },
    { id: '2', name: 'Channel' },
    { id: '3', name: 'Waiting' },
    { id: '4', name: 'Completed' },
    { id: '5', name: 'Abandoned' },
    { id: '6', name: 'Agents' },
    { id: '7', name: 'Average Wait' },
    { id: '8', name: 'Longest Wait' },
    { id: '9', name: 'SLA' },
    { id: '10', name: 'Overtime' },
];
export const MOCK_CURRENT_COLUMNS = [
    { id: '1', name: 'Queues', isLocked: true },
    { id: '2', name: 'Channel' },
    { id: '3', name: 'Waiting' },
    { id: '4', name: 'Completed' },
    { id: '5', name: 'Abandoned' },
    { id: '6', name: 'Agents' },
    { id: '7', name: 'Average Wait' },
    { id: '8', name: 'Longest Wait' },
    { id: '9', name: 'SLA' },
    { id: '10', name: 'Overtime' },
];
export const MOCK_CURRENT_COLUMNS_TOOLTIP = [
    { id: '1', name: 'Queues', isLocked: true },
    { id: '2', name: 'Channel', tooltipText: 'Channel tooltip' },
    { id: '3', name: 'Waiting', tooltipText: 'Waiting tooltip' },
    { id: '4', name: 'Completed', tooltipText: 'Completed tooltip' },
    { id: '5', name: 'Abandoned', tooltipText: 'Abanadoned tooltip' },
    { id: '6', name: 'Agents', tooltipText: 'Agents tooltip' },
    { id: '7', name: 'Average Wait', tooltipText: 'Average Wait tooltip' },
    { id: '8', name: 'Longest Wait', tooltipText: 'Longest Wait tooltip' },
    { id: '9', name: 'SLA', tooltipText: 'SLA tooltip' },
    { id: '10', name: 'Overtime', tooltipText: 'Overtime tooltip' },
];
export const MOCK_CURRENT_COLUMNS_ELEMENT_REMOVED = [
    { id: '1', name: 'Queues', isLocked: true },
    { id: '3', name: 'Waiting' },
    { id: '4', name: 'Completed' },
    { id: '5', name: 'Abandoned' },
    { id: '6', name: 'Agents' },
    { id: '7', name: 'Average Wait' },
    { id: '8', name: 'Longest Wait' },
    { id: '9', name: 'SLA' },
    { id: '10', name: 'Overtime' },
];
export const MOCK_CURRENT_COLUMNS_ELEMENT_ADDED = [
    { id: '1', name: 'Queues', isLocked: true },
    { id: '2', name: 'Channel' },
    { id: '3', name: 'Waiting' },
    { id: '4', name: 'Completed' },
    { id: '5', name: 'Abandoned' },
    { id: '6', name: 'Agents' },
    { id: '7', name: 'Average Wait' },
    { id: '8', name: 'Longest Wait' },
    { id: '9', name: 'SLA' },
    { id: '10', name: 'Overtime' },
    {
        id: '11',
        name: 'Average Staffing',
    },
];
export const MOCK_AVAILABLE_COLUMNS = [
    {
        id: '11',
        name: 'Average Staffing',
    },
    {
        id: '13',
        name: 'Failed',
    },
    {
        id: '14',
        name: 'Overtime',
    },
    {
        id: '12',
        name: 'Busy',
    },
    {
        id: '15',
        name: 'Quickest wait',
    },
];
export const MOCK_AVAILABLE_COLUMNS_TOOLTIP = [
    {
        id: '11',
        name: 'Average Staffing',
        tooltipText: 'Average Staffing tooltip',
    },
    {
        id: '13',
        name: 'Failed',
        tooltipText: 'Failed tooltip',
    },
    {
        id: '14',
        name: 'Overtime',
        tooltipText: 'Overtime tooltip',
    },
    {
        id: '12',
        name: 'Busy',
        tooltipText: 'Busy tooltip',
    },
    {
        id: '15',
        name: 'Quickest wait',
        tooltipText: 'Quickest wait tooltip',
    },
];
export const MOCK_SORTED_AVAILABLE_COLUMNS = [
    {
        id: '11',
        name: 'Average Staffing',
    },
    {
        id: '12',
        name: 'Busy',
    },
    {
        id: '13',
        name: 'Failed',
    },
    {
        id: '14',
        name: 'Overtime',
    },
    {
        id: '15',
        name: 'Quickest wait',
    },
];
export const MOCK_COLUMNS = {
    currentColumns: MOCK_CURRENT_COLUMNS,
    availableColumns: MOCK_AVAILABLE_COLUMNS,
};
