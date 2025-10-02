import { useCallback } from 'react';
/**
 * Aggregates getData and getTotalResults into one function.
 *
 * Some APIs in 8x8 support total results on the same request as data fetching (e.g. vcc)
 * others have separate requests for total results (e.g. smp), we should support both
 *
 */
const useAggregateDataRetrieval = ({ getData, getTotalResults, }) => {
    const getDataAndTotalResults = useCallback(async (params) => {
        const [data, totalResults] = await Promise.all([
            getData(params),
            params.shouldGetTotalResults ? getTotalResults(params) : undefined,
        ]);
        return { data, totalResults };
    }, [getData, getTotalResults]);
    return getDataAndTotalResults;
};
const useAggregateAlwaysGetTotalResults = ({ getData, getTotalResults, }) => useCallback(async (params) => {
    const [data, totalResults] = await Promise.all([
        getData(params),
        getTotalResults(params),
    ]);
    return { data, totalResults };
}, [getData, getTotalResults]);
export { useAggregateDataRetrieval, useAggregateAlwaysGetTotalResults };
