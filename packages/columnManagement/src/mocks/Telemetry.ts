export const MOCK_COLUMN_REMOVED = {
  columnName: 'Channel',
  fromPosition: 1,
  uiArea: 'test',
};

export const MOCK_COLUMN_ADDED = {
  columnName: 'Average Staffing',
  uiArea: 'test',
};

export const MOCK_EDIT_COLUMNS_RESET = {
  uiArea: 'test',
};

export const MOCK_EDIT_COLUMNS_SAVED = {
  activeColumnsList: [
    {
      id: '1',
      isLocked: true,
      name: 'Queues',
    },
    {
      id: '2',
      name: 'Channel',
    },
    {
      id: '3',
      name: 'Waiting',
    },
  ],
  activeColumnsNumber: 3,
  availableColumnsNumber: 5,
  uiArea: 'test',
};
