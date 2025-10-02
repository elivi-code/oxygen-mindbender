import React, { useMemo } from 'react';
import PageNavigation from './components/PageNavigation';
import RowsPerPage from './components/RowsPerPage';
import { DEFAULT_PAGINATION_ROWS_PER_PAGE_VALUES } from './constants/paginationConstants';
import { PAGINATION_SIZE, } from './types';
import { PaginationWrapper } from './styled';
import useElementSize from './hooks/useElementSize';
const COMPACT_MODE_THRESHOLD = 600;
const Pagination = ({ canGoBack, canGoNext, numberOfPages, onPaginationChange, pageNumber, rowsPerPage, rowsPerPageOptions = DEFAULT_PAGINATION_ROWS_PER_PAGE_VALUES, isDisabled = false, size = PAGINATION_SIZE.default, translations, testId = 'PAGINATION', ...rest }) => {
    const [paginationRef, { width }] = useElementSize();
    const isCompactMode = width <= COMPACT_MODE_THRESHOLD;
    const sortedRowsPerPageOptions = useMemo(() => rowsPerPageOptions.sort((a, b) => a - b), [rowsPerPageOptions]);
    if (!rowsPerPageOptions.includes(rowsPerPage)) {
        // eslint-disable-next-line no-console
        console.error(`Invalid "rowsPerPage" value: ${rowsPerPage}. Use one of "rowsPerPageOptions" prop options: ${rowsPerPageOptions}`);
    }
    const handleRowsPerPageChange = (selectedRowsPerPage) => {
        onPaginationChange({ pageNumber: 1, rowsPerPage: selectedRowsPerPage });
    };
    const handlePageChange = (selectedPage) => {
        onPaginationChange({ pageNumber: selectedPage, rowsPerPage });
    };
    return (React.createElement(PaginationWrapper, { ...rest, size: size, ref: paginationRef },
        !isCompactMode && (React.createElement(RowsPerPage, { onRowsPerPageChange: handleRowsPerPageChange, rowsPerPageOptions: sortedRowsPerPageOptions, selectedRowsPerPage: rowsPerPage, isDisabled: isDisabled, size: size, translations: translations, testId: testId })),
        React.createElement(PageNavigation, { canGoBack: canGoBack, canGoNext: canGoNext, currentPage: pageNumber, isCompactMode: width <= COMPACT_MODE_THRESHOLD, numberOfPages: numberOfPages, onPageChange: handlePageChange, isDisabled: isDisabled, size: size, translations: translations, testId: testId })));
};
export default Pagination;
