import { useCallback, useEffect, useState } from 'react';
const useDataRetrievalParams = ({ initialDataRetrievalParams, executeDataRetrieval, }) => {
    const [dataRetrievalParams, setDataRetrievalParams] = useState({
        ...initialDataRetrievalParams,
    });
    const onPaginationChange = useCallback((paginationState, shouldGetTotalResults = false) => {
        const newParams = {
            ...dataRetrievalParams,
            shouldGetTotalResults,
            offset: (paginationState.pageNumber - 1) * paginationState.rowsPerPage,
            limit: paginationState.rowsPerPage,
        };
        setDataRetrievalParams(newParams);
        executeDataRetrieval(newParams);
    }, [dataRetrievalParams, executeDataRetrieval]);
    const onSortingChange = useCallback((sortingUpdater) => {
        const newParams = {
            ...dataRetrievalParams,
            shouldGetTotalResults: false,
            // if you are wondering why this is so ugly, it's because this is how the react-table onSortingChange is typed
            sorting: typeof sortingUpdater === 'function'
                ? sortingUpdater(dataRetrievalParams.sorting || [])
                : sortingUpdater,
        };
        setDataRetrievalParams(newParams);
        executeDataRetrieval(newParams);
    }, [dataRetrievalParams, executeDataRetrieval]);
    // filtering may cause the total number of results to change, hence we mark the need to retrieve total results
    // and go to the first page, since the current page might be invalid in the context of the new total number of results
    const onFiltersChange = useCallback((filters) => {
        const newParams = {
            ...dataRetrievalParams,
            shouldGetTotalResults: true,
            offset: 0,
            filters,
        };
        setDataRetrievalParams(newParams);
        executeDataRetrieval(newParams);
    }, [dataRetrievalParams, executeDataRetrieval]);
    // searching may cause the total number of results to change, hence we mark the need to retrieve total results
    // and go to the first page, since the current page might be invalid in the context of the new total number of results
    const onSearchChange = useCallback((search) => {
        // this condition was added to avoid unnecessary api calls triggered by the onClear event in KeywordSearch component
        // when the previous and new search strings are equal.
        if (search !== dataRetrievalParams.search) {
            const newParams = {
                ...dataRetrievalParams,
                shouldGetTotalResults: true,
                offset: 0,
                search,
            };
            setDataRetrievalParams(newParams);
            executeDataRetrieval(newParams);
        }
    }, [dataRetrievalParams, executeDataRetrieval]);
    const onRefreshData = useCallback(() => {
        executeDataRetrieval({
            ...dataRetrievalParams,
            shouldGetTotalResults: true,
        });
    }, [dataRetrievalParams, executeDataRetrieval]);
    useEffect(() => {
        // first load
        executeDataRetrieval({
            ...dataRetrievalParams,
            shouldGetTotalResults: true,
        });
    }, []);
    return {
        dataRetrievalParams,
        onPaginationChange,
        onSortingChange,
        onFiltersChange,
        onSearchChange,
        onRefreshData,
    };
};
export { useDataRetrievalParams, };
