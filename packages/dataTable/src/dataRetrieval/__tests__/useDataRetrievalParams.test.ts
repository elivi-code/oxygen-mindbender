import { SortingState } from '@tanstack/react-table';
import { renderHook, act } from '@testing-library/react-hooks';
import { FilterType } from '@8x8/oxygen-filter-list';
import { useDataRetrievalParams } from '../useDataRetrievalParams';

describe('useDataRetrievalParams', () => {
  const initialDataRetrievalParams = {
    offset: 0,
    limit: 0,
  };

  it('should call executeDataRetrieval() on first call', () => {
    const executeDataRetrieval = jest.fn();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { result } = renderHook(() => {
      return useDataRetrievalParams({
        initialDataRetrievalParams,
        executeDataRetrieval,
      });
    });

    expect(executeDataRetrieval).toHaveBeenNthCalledWith(1, {
      ...initialDataRetrievalParams,
      shouldGetTotalResults: true,
    });
  });

  it('should call executeDataRetrieval with appropriate params, on onPaginationChange', () => {
    const paginationState = {
      pageNumber: 1,
      rowsPerPage: 10,
    };
    const executeDataRetrieval = jest.fn();

    const { result } = renderHook(() => {
      return useDataRetrievalParams({
        initialDataRetrievalParams,
        executeDataRetrieval,
      });
    });

    const { onPaginationChange } = result.current;

    act(() => {
      onPaginationChange({
        pageNumber: paginationState.pageNumber,
        rowsPerPage: paginationState.rowsPerPage,
      });
    });

    expect(executeDataRetrieval).toHaveBeenLastCalledWith({
      ...initialDataRetrievalParams,
      offset: (paginationState.pageNumber - 1) * paginationState.rowsPerPage,
      limit: paginationState.rowsPerPage,
      shouldGetTotalResults: false,
    });
  });

  it('should call executeDataRetrieval with appropriate params, on onSortingChange', () => {
    const sortingUpdater: SortingState = [
      {
        id: 'name',
        desc: true,
      },
    ];
    const executeDataRetrieval = jest.fn();

    const { result } = renderHook(() => {
      return useDataRetrievalParams({
        initialDataRetrievalParams,
        executeDataRetrieval,
      });
    });

    const { onSortingChange } = result.current;

    act(() => {
      onSortingChange(sortingUpdater);
    });

    expect(executeDataRetrieval).toHaveBeenLastCalledWith({
      ...initialDataRetrievalParams,
      sorting: sortingUpdater,
      shouldGetTotalResults: false,
    });
  });

  it('should call executeDataRetrieval with appropriate params, on onFiltersChange', () => {
    const filters: FilterType[] = [
      {
        id: 'name',
        values: [{ value: 'test' }],
      },
    ];
    const executeDataRetrieval = jest.fn();

    const { result } = renderHook(() => {
      return useDataRetrievalParams({
        initialDataRetrievalParams,
        executeDataRetrieval,
      });
    });

    const { onFiltersChange } = result.current;

    act(() => {
      onFiltersChange(filters);
    });

    expect(executeDataRetrieval).toHaveBeenLastCalledWith({
      ...initialDataRetrievalParams,
      filters,
      shouldGetTotalResults: true,
      offset: 0,
    });
  });

  it('should call executeDataRetrieval with appropriate params, on onSearchChange', () => {
    const search = 'test';
    const executeDataRetrieval = jest.fn();

    const { result } = renderHook(() => {
      return useDataRetrievalParams({
        initialDataRetrievalParams,
        executeDataRetrieval,
      });
    });

    const { onSearchChange } = result.current;

    act(() => {
      onSearchChange(search);
    });

    expect(executeDataRetrieval).toHaveBeenLastCalledWith({
      ...initialDataRetrievalParams,
      search,
      shouldGetTotalResults: true,
      offset: 0,
    });
  });

  it('should call executeDataRetrieval with appropriate params, on onRefreshData', () => {
    const executeDataRetrieval = jest.fn();

    const { result } = renderHook(() => {
      return useDataRetrievalParams({
        initialDataRetrievalParams,
        executeDataRetrieval,
      });
    });

    const { onRefreshData } = result.current;

    act(() => {
      onRefreshData();
    });

    expect(executeDataRetrieval).toHaveBeenLastCalledWith({
      ...initialDataRetrievalParams,
      shouldGetTotalResults: true,
      offset: 0,
    });
  });
});
