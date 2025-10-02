import { PaginationProps, TableHeaderProps } from '@8x8/oxygen-data-table';

export const paginationTranslations: PaginationProps['translations'] = {
  rowsPerPage: 'Rows per page',
  prevPage: 'Previous page',
  numberOfPages: 'Number of pages',
  nextPage: 'Next page',
};

type TableHeaderSearch = NonNullable<TableHeaderProps['searchInput']>;

export const searchTranslations: TableHeaderSearch['searchTranslations'] = {
  viewAllResultsForText: 'View all results for',
  viewAllResultsText: 'View all results',
  noResultsText: 'No results',
  loadingSearchResultsText: 'Loading search results',
  clearButtonTitle: 'Clear search',
  placeholder: 'Search',
};
