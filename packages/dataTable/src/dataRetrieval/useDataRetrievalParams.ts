import { useCallback, useEffect, useState } from 'react';
import { SortingState, Updater } from '@tanstack/react-table';

import { PaginationState } from '@8x8/oxygen-pagination';
import { FilterType } from '@8x8/oxygen-filter-list';

/**
 * Everything that prompts a new data retrieval for the list
 */
interface DataRetrievalParameters {
  offset: number;
  limit: number;
  sorting?: SortingState;
  search?: string;
  filters?: FilterType[];
}

interface TotalResultsRetrievalParameters {
  /**
   * Useful only if you have separate functions for getData/getTotalResults.
   * If one function retrieves both data and total results, you can ignore this.
   *
   * Otherwise: useAggregateDataRetrieval() hook to compbine getData and getTotalResults.
   * true means => the resulting callback will fetch getTotalResults() also
   */
  shouldGetTotalResults?: boolean;
}

interface DataRetrievalResult {
  dataRetrievalParams: DataRetrievalParameters;
  onPaginationChange: (
    paginationState: PaginationState,
    shouldGetTotalResults?: boolean,
  ) => void;
  onSortingChange: (sortingUpdater: Updater<SortingState>) => void;
  onFiltersChange: (filters: FilterType[]) => void;
  onSearchChange: (search: string) => void;
  onRefreshData: () => void;
}

interface Props {
  initialDataRetrievalParams: DataRetrievalParameters;

  /** should initiate a data retrieval, store results in local state */
  executeDataRetrieval: (
    params: DataRetrievalParameters & TotalResultsRetrievalParameters,
  ) => Promise<void>;
}

const useDataRetrievalParams = ({
  initialDataRetrievalParams,
  executeDataRetrieval,
}: Props): DataRetrievalResult => {
  const [dataRetrievalParams, setDataRetrievalParams] =
    useState<DataRetrievalParameters>({
      ...initialDataRetrievalParams,
    });

  const onPaginationChange = useCallback(
    (paginationState: PaginationState, shouldGetTotalResults = false) => {
      const newParams = {
        ...dataRetrievalParams,
        shouldGetTotalResults,
        offset: (paginationState.pageNumber - 1) * paginationState.rowsPerPage,
        limit: paginationState.rowsPerPage,
      };

      setDataRetrievalParams(newParams);
      executeDataRetrieval(newParams);
    },
    [dataRetrievalParams, executeDataRetrieval],
  );

  const onSortingChange = useCallback(
    (sortingUpdater: Updater<SortingState>) => {
      const newParams = {
        ...dataRetrievalParams,
        shouldGetTotalResults: false,
        // if you are wondering why this is so ugly, it's because this is how the react-table onSortingChange is typed
        sorting:
          typeof sortingUpdater === 'function'
            ? sortingUpdater(dataRetrievalParams.sorting || [])
            : sortingUpdater,
      };

      setDataRetrievalParams(newParams);
      executeDataRetrieval(newParams);
    },
    [dataRetrievalParams, executeDataRetrieval],
  );

  // filtering may cause the total number of results to change, hence we mark the need to retrieve total results
  // and go to the first page, since the current page might be invalid in the context of the new total number of results
  const onFiltersChange = useCallback(
    (filters: FilterType[]) => {
      const newParams = {
        ...dataRetrievalParams,
        shouldGetTotalResults: true,
        offset: 0,
        filters,
      };

      setDataRetrievalParams(newParams);
      executeDataRetrieval(newParams);
    },
    [dataRetrievalParams, executeDataRetrieval],
  );

  // searching may cause the total number of results to change, hence we mark the need to retrieve total results
  // and go to the first page, since the current page might be invalid in the context of the new total number of results
  const onSearchChange = useCallback(
    (search: string) => {
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
    },
    [dataRetrievalParams, executeDataRetrieval],
  );

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

export {
  useDataRetrievalParams,
  DataRetrievalParameters,
  TotalResultsRetrievalParameters,
};
