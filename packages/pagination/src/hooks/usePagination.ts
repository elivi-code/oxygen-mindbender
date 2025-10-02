import { PaginationHookProps, PaginationState } from '../types';

const usePagination = (
  pagination: PaginationState,
  totalRecords: number,
): PaginationHookProps => {
  const { pageNumber, rowsPerPage } = pagination;
  const numberOfPages = Math.ceil(totalRecords / rowsPerPage);

  return {
    canGoBack: pageNumber !== 1,
    canGoNext: pageNumber !== numberOfPages,
    numberOfPages: Math.ceil(totalRecords / rowsPerPage),
    pageNumber,
    rowsPerPage,
  };
};

export default usePagination;
