const usePagination = (pagination, totalRecords) => {
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
