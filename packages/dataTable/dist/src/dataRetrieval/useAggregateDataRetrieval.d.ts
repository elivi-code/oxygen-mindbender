import { DataRetrievalParameters, TotalResultsRetrievalParameters } from './useDataRetrievalParams';
interface Props<T> {
    getData: (dataRetrievalProps: DataRetrievalParameters) => Promise<T[]>;
    getTotalResults: (dataRetrievalProps: DataRetrievalParameters) => Promise<number>;
}
/**
 * Aggregates getData and getTotalResults into one function.
 *
 * Some APIs in 8x8 support total results on the same request as data fetching (e.g. vcc)
 * others have separate requests for total results (e.g. smp), we should support both
 *
 */
declare const useAggregateDataRetrieval: <TData>({ getData, getTotalResults, }: Props<TData>) => (params: DataRetrievalParameters & TotalResultsRetrievalParameters) => Promise<{
    data: TData[];
    totalResults: number | undefined;
}>;
declare const useAggregateAlwaysGetTotalResults: <TData>({ getData, getTotalResults, }: Props<TData>) => (params: DataRetrievalParameters) => Promise<{
    data: TData[];
    totalResults: number;
}>;
export { useAggregateDataRetrieval, useAggregateAlwaysGetTotalResults };
//# sourceMappingURL=useAggregateDataRetrieval.d.ts.map