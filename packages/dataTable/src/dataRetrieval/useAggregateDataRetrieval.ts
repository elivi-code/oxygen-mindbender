import { useCallback } from 'react';
import {
  DataRetrievalParameters,
  TotalResultsRetrievalParameters,
} from './useDataRetrievalParams';

interface Props<T> {
  getData: (dataRetrievalProps: DataRetrievalParameters) => Promise<T[]>;
  getTotalResults: (
    dataRetrievalProps: DataRetrievalParameters,
  ) => Promise<number>;
}

/**
 * Aggregates getData and getTotalResults into one function.
 *
 * Some APIs in 8x8 support total results on the same request as data fetching (e.g. vcc)
 * others have separate requests for total results (e.g. smp), we should support both
 *
 */
const useAggregateDataRetrieval = <TData>({
  getData,
  getTotalResults,
}: Props<TData>) => {
  const getDataAndTotalResults = useCallback(
    async (
      params: DataRetrievalParameters & TotalResultsRetrievalParameters,
    ) => {
      const [data, totalResults] = await Promise.all([
        getData(params),
        params.shouldGetTotalResults ? getTotalResults(params) : undefined,
      ]);

      return { data, totalResults };
    },
    [getData, getTotalResults],
  );

  return getDataAndTotalResults;
};

const useAggregateAlwaysGetTotalResults = <TData>({
  getData,
  getTotalResults,
}: Props<TData>) =>
  useCallback(
    async (params: DataRetrievalParameters) => {
      const [data, totalResults] = await Promise.all([
        getData(params),
        getTotalResults(params),
      ]);

      return { data, totalResults };
    },
    [getData, getTotalResults],
  );

export { useAggregateDataRetrieval, useAggregateAlwaysGetTotalResults };
