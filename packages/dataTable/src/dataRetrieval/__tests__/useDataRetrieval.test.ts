import { renderHook, act, RenderResult } from '@testing-library/react-hooks';
import { waitFor } from '@testing-library/react';
import { SortingState } from '@tanstack/react-table';
import { useDataRetrieval } from '../useDataRetrieval';

jest.useFakeTimers();

interface MockItem {
  name: string;
  age?: number;
}

const data: MockItem[] = [{ name: 'n1' }];
const dataLen2: MockItem[] = [{ name: 'n2' }, { name: 'n3' }];

describe('useDataRetrieval', () => {
  it('should call getDataAndTotalResults() on first call', async () => {
    const getDataAndTotalResults = jest.fn().mockResolvedValue(data);
    const onDataRetrievalError = jest.fn();

    await act(async () => {
      renderHook(() => {
        return useDataRetrieval({
          getDataAndTotalResults,
          initialDataRetrievalParams: {
            limit: 10,
            offset: 0,
          },
          onDataRetrievalError,
        });
      });
    });

    expect(getDataAndTotalResults).toHaveBeenNthCalledWith(1, {
      limit: 10,
      offset: 0,
      shouldGetTotalResults: true,
    });
  });

  it('should set loadingData to true when getDataAndTotalResults() is pending', async () => {
    const getDataAndTotalResults = jest.fn().mockImplementation(() => {
      return new Promise(() => {
        // leave the promise unresolved
      });
    });
    const onDataRetrievalError = jest.fn();
    let result: RenderResult<ReturnType<typeof useDataRetrieval>> | undefined;

    await act(async () => {
      const resultPromise = renderHook(() => {
        return useDataRetrieval({
          getDataAndTotalResults,
          initialDataRetrievalParams: {
            limit: 10,
            offset: 0,
          },
          onDataRetrievalError,
        });
      });

      result = resultPromise.result;
    });

    // Advance timers to let any setTimeouts execute
    act(() => jest.runAllTimers());
    expect(result?.current.loadingData).toBe(true);
  });

  it('should set loadingData to false when getDataAndTotalResults() is resolved', async () => {
    let resolveGetDataAndTotalResults: undefined | ((value: any) => void);

    const getDataAndTotalResults = jest.fn().mockImplementation(() => {
      return new Promise((resolve, reject) => {
        resolveGetDataAndTotalResults = resolve;
      });
    });
    const onDataRetrievalError = jest.fn();
    let result: RenderResult<ReturnType<typeof useDataRetrieval>> | undefined;

    await act(async () => {
      const resultPromise = renderHook(() => {
        return useDataRetrieval({
          getDataAndTotalResults,
          initialDataRetrievalParams: {
            limit: 10,
            offset: 0,
          },
          onDataRetrievalError,
        });
      });

      result = resultPromise.result;
    });

    // Advance timers to let any setTimeouts execute
    act(() => jest.runAllTimers());

    // at this moment getDataAndTotalResults() is pending (see test above)

    // resolve getDataAndTotalResults() promise
    await act(async () => resolveGetDataAndTotalResults?.(data));
    expect(result?.current.loadingData).toBe(false);
  });

  it('should call onDataRetrievalError() on getDataAndTotalResults() rejected', async () => {
    const getDataAndTotalResults = jest
      .fn()
      .mockRejectedValue(new Error('Data retrieval failed'));
    const onDataRetrievalError = jest.fn();

    await act(async () => {
      renderHook(() => {
        return useDataRetrieval({
          getDataAndTotalResults,
          initialDataRetrievalParams: {
            limit: 10,
            offset: 0,
          },
          onDataRetrievalError,
        });
      });
    });

    expect(onDataRetrievalError).toHaveBeenCalled();
  });

  it('should NOT change limit/offset on getDataAndTotalResults() rejected', async () => {
    const paginationState = {
      pageNumber: 1, // 1-based
      rowsPerPage: 1,
    };
    const initialOffset = 0;

    const getDataAndTotalResults = jest
      .fn()
      .mockResolvedValueOnce([{ name: 'n1' }] as MockItem[])
      .mockRejectedValueOnce(new Error('Data retrieval failed'));
    const onDataRetrievalError = jest.fn();

    const { result, waitForNextUpdate } = renderHook(() =>
      useDataRetrieval({
        getDataAndTotalResults,
        initialDataRetrievalParams: {
          limit: paginationState.rowsPerPage,
          offset: initialOffset,
        },
        onDataRetrievalError,
      }),
    );

    await waitForNextUpdate();

    const { onPaginationChange } = result.current;

    act(() => {
      // simulate next page request
      onPaginationChange({
        pageNumber: paginationState.pageNumber + 1,
        rowsPerPage: paginationState.rowsPerPage,
      });
    });

    const { limit, offset } = result.current;

    expect(limit).toBe(paginationState.rowsPerPage);
    expect(offset).toBe(initialOffset);
  });

  it('should change limit/offset on getData() resolved', async () => {
    const paginationState = {
      pageNumber: 1,
      rowsPerPage: 1,
    };
    const nextPaginationState = {
      ...paginationState,
      pageNumber: paginationState.pageNumber + 1,
    };
    const initialOffset = 0;
    const nextOffset =
      (nextPaginationState.pageNumber - 1) * nextPaginationState.rowsPerPage;

    const getDataAndTotalResults = jest.fn().mockResolvedValue(dataLen2);
    const onDataRetrievalError = jest.fn();

    const { result, waitForNextUpdate } = renderHook(() =>
      useDataRetrieval({
        getDataAndTotalResults,
        initialDataRetrievalParams: {
          limit: paginationState.rowsPerPage,
          offset: initialOffset,
        },
        onDataRetrievalError,
      }),
    );

    await waitForNextUpdate();

    const { onPaginationChange } = result.current;

    act(() => {
      // simulate next page request
      onPaginationChange({
        pageNumber: nextPaginationState.pageNumber,
        rowsPerPage: nextPaginationState.rowsPerPage,
      });
    });

    await waitForNextUpdate();

    await waitFor(() => {
      const { limit, offset } = result.current;

      expect(limit).toBe(nextPaginationState.rowsPerPage);
      expect(offset).toBe(nextOffset);
    });
  });

  it('should NOT change sorting on getData() rejected', async () => {
    const initialSorting: SortingState = [{ id: 'name', desc: false }];

    const getDataAndTotalResults = jest
      .fn()
      .mockResolvedValueOnce(data)
      .mockRejectedValueOnce(new Error('Data retrieval failed'));
    const onDataRetrievalError = jest.fn();

    const { result, waitForNextUpdate } = renderHook(() =>
      useDataRetrieval({
        getDataAndTotalResults,
        initialDataRetrievalParams: {
          limit: 10,
          offset: 0,
          sorting: initialSorting,
        },
        onDataRetrievalError,
      }),
    );

    await waitForNextUpdate();

    const { onSortingChange } = result.current;

    act(() => {
      // simulate sorting change
      onSortingChange([{ id: 'name', desc: true }]);
    });

    const { sorting } = result.current;

    expect(sorting).toEqual(initialSorting);
  });

  it('should change sorting on getData() resolved', async () => {
    const initialSorting: SortingState = [{ id: 'name', desc: false }];
    const nextSorting: SortingState = [{ id: 'age', desc: true }];

    const getDataAndTotalResults = jest.fn().mockReturnValue(data);
    const onDataRetrievalError = jest.fn();

    const { result, waitForNextUpdate } = renderHook(() =>
      useDataRetrieval({
        getDataAndTotalResults,
        initialDataRetrievalParams: {
          limit: 10,
          offset: 0,
          sorting: initialSorting,
        },
        onDataRetrievalError,
      }),
    );

    await waitForNextUpdate();

    const { onSortingChange } = result.current;

    act(() => {
      // simulate sorting change
      onSortingChange(nextSorting);
    });

    await waitForNextUpdate();
    const { sorting } = result.current;

    expect(sorting).toEqual(nextSorting);
  });
});
