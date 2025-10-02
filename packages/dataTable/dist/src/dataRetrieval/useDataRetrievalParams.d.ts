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
    onPaginationChange: (paginationState: PaginationState, shouldGetTotalResults?: boolean) => void;
    onSortingChange: (sortingUpdater: Updater<SortingState>) => void;
    onFiltersChange: (filters: FilterType[]) => void;
    onSearchChange: (search: string) => void;
    onRefreshData: () => void;
}
interface Props {
    initialDataRetrievalParams: DataRetrievalParameters;
    /** should initiate a data retrieval, store results in local state */
    executeDataRetrieval: (params: DataRetrievalParameters & TotalResultsRetrievalParameters) => Promise<void>;
}
declare const useDataRetrievalParams: ({ initialDataRetrievalParams, executeDataRetrieval, }: Props) => DataRetrievalResult;
export { useDataRetrievalParams, DataRetrievalParameters, TotalResultsRetrievalParameters, };
//# sourceMappingURL=useDataRetrievalParams.d.ts.map