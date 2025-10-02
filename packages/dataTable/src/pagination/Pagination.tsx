import React, { ComponentProps, useMemo } from 'react';
import OxygenPagination, {
  DEFAULT_PAGINATION_ROWS_PER_PAGE_VALUES,
  usePagination,
  PaginationHookProps,
} from '@8x8/oxygen-pagination';
import styled from 'styled-components';
import { getTestAttributes } from '@8x8/oxygen-config';

const StyledPagination = styled(OxygenPagination)`
  border-top: 1px solid ${props => props.theme.ui01};
`;

interface PaginationProps
  extends Omit<
    ComponentProps<typeof OxygenPagination>,
    keyof PaginationHookProps
  > {
  totalResults?: number;
  loadingData: boolean;
  limit: number;
  offset: number;
  testId?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  totalResults,
  loadingData,
  limit,
  offset,
  rowsPerPageOptions = DEFAULT_PAGINATION_ROWS_PER_PAGE_VALUES,
  isDisabled,
  testId = 'data-table-pagination',
  ...rest
}) => {
  const paginationState = useMemo(
    () => ({
      pageNumber: Math.floor(offset / limit) + 1,
      rowsPerPage: limit,
    }),
    [limit, offset],
  );
  const usePaginationProps = usePagination(paginationState, totalResults || 0);
  // as long as for one of the "rows per page" options there would be multiple pages show pagination
  const showPagination = (totalResults || 0) > Math.min(...rowsPerPageOptions);

  return showPagination ? (
    <StyledPagination
      {...getTestAttributes(testId)}
      {...rest}
      {...usePaginationProps}
      isDisabled={isDisabled || loadingData}
      rowsPerPageOptions={rowsPerPageOptions}
    />
  ) : null;
};

export { Pagination, PaginationProps };
