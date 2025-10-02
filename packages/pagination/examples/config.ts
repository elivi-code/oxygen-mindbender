import {
  PAGINATION_SIZE,
  DEFAULT_PAGINATION_ROWS_PER_PAGE_VALUES,
} from '@8x8/oxygen-pagination';

export const argsConfig = {
  totalRecords: 50,
  rowsPerPage: DEFAULT_PAGINATION_ROWS_PER_PAGE_VALUES[0],
  rowsPerPageOptions: DEFAULT_PAGINATION_ROWS_PER_PAGE_VALUES,
  size: PAGINATION_SIZE.default,
  isDisabled: false,
};

export const argTypesConfig = {
  totalRecords: {
    type: 'number',
    defaultValue: 50,
  },
  rowsPerPageOptions: {
    options: DEFAULT_PAGINATION_ROWS_PER_PAGE_VALUES,
  },
  size: {
    control: { type: 'select', options: Object.values(PAGINATION_SIZE) },
  },
  isDisabled: {
    control: { type: 'boolean' },
  },
};
