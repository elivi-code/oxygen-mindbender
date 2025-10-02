import { DataRetrievalParameters, TotalResultsRetrievalParameters } from './useDataRetrievalParams';
/**
 * Props for the useDataRetrieval hook
 */
interface UseDataRetrievalProps<TData> {
    initialDataRetrievalParams: DataRetrievalParameters;
    onDataRetrievalError: (error: unknown) => void;
    getDataAndTotalResults: (dataRetrievalParams: DataRetrievalParameters & TotalResultsRetrievalParameters) => Promise<{
        data: TData[];
        totalResults?: number /** if DataRetrievalProps.shouldGetTotalResults is not set to true => totalResults will be undefined */;
    }>;
}
/**
 * This hook encapsulates the following UX logic:
 * - pagination updates only happen after successful data retrieval, on error keep the pagination unchanged
 * - sorting updates only happen after successful data retrieval, on error keep the sorting unchanged
 * - when filtering / searching change total results need to be fetched again since these may have changes
 * and pagination also needs to be reset to the first page as the current page may be invalid
 * */
declare const useDataRetrieval: <TData>({ initialDataRetrievalParams, getDataAndTotalResults, onDataRetrievalError, }: UseDataRetrievalProps<TData>) => {
    refreshData: () => void;
    hasNoData: boolean;
    data: TData[];
    totalResults: number | undefined;
    loadingData: boolean;
    onSortingChange: (sortingUpdater: import("@tanstack/table-core").Updater<import("@tanstack/table-core").SortingState>) => void;
    onFiltersChange: (filters: import("@8x8/oxygen-filter-list").FilterType[]) => void;
    onSearchChange: (search: string) => void;
    sorting: import("@tanstack/table-core").SortingState | undefined;
    filters: import("@8x8/oxygen-filter-list").FilterType[] | undefined;
    search: string | undefined;
    limit: number;
    offset: number;
    loadingTotalResults: boolean;
    onPaginationChange: (paginationState: import("@8x8/oxygen-pagination").PaginationState, shouldGetTotalResults?: boolean | undefined) => void;
};
export { useDataRetrieval, UseDataRetrievalProps };
//# sourceMappingURL=useDataRetrieval.d.ts.map