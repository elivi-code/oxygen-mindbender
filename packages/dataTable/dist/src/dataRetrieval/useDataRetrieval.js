import { useCallback, useState } from 'react';
import { useDataRetrievalParams, } from './useDataRetrievalParams';
const SHOW_LOADER_THRESHOLD = 100; // milliseconds
/**
 * This hook encapsulates the following UX logic:
 * - pagination updates only happen after successful data retrieval, on error keep the pagination unchanged
 * - sorting updates only happen after successful data retrieval, on error keep the sorting unchanged
 * - when filtering / searching change total results need to be fetched again since these may have changes
 * and pagination also needs to be reset to the first page as the current page may be invalid
 * */
const useDataRetrieval = ({ initialDataRetrievalParams, getDataAndTotalResults, onDataRetrievalError, }) => {
    const [{ loadingData, loadingTotalResults }, setLoading] = useState({
        loadingData: false,
        loadingTotalResults: false,
    });
    const [data, setData] = useState([]);
    const [totalResults, setTotalResults] = useState();
    const [limit, setLimit] = useState(initialDataRetrievalParams.limit);
    const [offset, setOffset] = useState(initialDataRetrievalParams.offset);
    const [sorting, setSorting] = useState(initialDataRetrievalParams.sorting);
    const executeDataRetrieval = useCallback(async (dataRetrievalParams) => {
        const hideLoader = () => {
            setLoading({
                loadingData: false,
                loadingTotalResults: false,
            });
        };
        // only show loader if data retrieval takes longer than SHOW_LOADER_THRESHOLD ms, this improves perception of speed / avoid flickers
        // this applies if api is fast / you are caching certain results
        const showLoaderTimeout = setTimeout(() => {
            setLoading({
                loadingData: true,
                loadingTotalResults: Boolean(dataRetrievalParams.shouldGetTotalResults),
            });
        }, SHOW_LOADER_THRESHOLD);
        try {
            const result = await getDataAndTotalResults(dataRetrievalParams);
            setData(result.data);
            setTotalResults(prevTotalResults => dataRetrievalParams.shouldGetTotalResults
                ? result.totalResults || 0
                : prevTotalResults);
            // only set these on successful data retrieval to avoid pagination updates on error
            setLimit(dataRetrievalParams.limit);
            setOffset(dataRetrievalParams.offset);
            // only set these on successful data retrieval to avoid sorting updates on error
            setSorting(dataRetrievalParams.sorting);
        }
        catch (err) {
            onDataRetrievalError(err);
        }
        clearTimeout(showLoaderTimeout);
        hideLoader();
    }, [getDataAndTotalResults, onDataRetrievalError]);
    const { dataRetrievalParams, onPaginationChange, onSortingChange, onFiltersChange, onSearchChange, onRefreshData, } = useDataRetrievalParams({
        initialDataRetrievalParams,
        executeDataRetrieval,
    });
    // when a query without any filtering has no results it means there is no data available
    const hasNoData = !loadingData &&
        totalResults === 0 &&
        !dataRetrievalParams.filters &&
        !dataRetrievalParams.search;
    return {
        refreshData: onRefreshData,
        hasNoData,
        data,
        totalResults,
        loadingData,
        onSortingChange,
        onFiltersChange,
        onSearchChange,
        sorting,
        filters: dataRetrievalParams.filters,
        search: dataRetrievalParams.search,
        limit,
        offset,
        loadingTotalResults,
        onPaginationChange,
    };
};
export { useDataRetrieval };
