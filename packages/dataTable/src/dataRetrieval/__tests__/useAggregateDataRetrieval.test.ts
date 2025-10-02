import { renderHook } from '@testing-library/react-hooks';
import {
  useAggregateAlwaysGetTotalResults,
  useAggregateDataRetrieval,
} from '../useAggregateDataRetrieval';

describe('useAggregateDataRetrieval', () => {
  it('should call both getData() and getTotalResults() on getDataAndTotalResults()', () => {
    const getData = jest.fn();
    const getTotalResults = jest.fn();

    const { result } = renderHook(() =>
      useAggregateDataRetrieval({
        getData,
        getTotalResults,
      }),
    );

    const getDataAndTotalResults = result.current;

    getDataAndTotalResults({
      offset: 0,
      limit: 10,
      shouldGetTotalResults: true,
    });

    expect(getData).toHaveBeenCalledWith({
      offset: 0,
      limit: 10,
      shouldGetTotalResults: true,
    });

    expect(getTotalResults).toHaveBeenCalled();
  });

  it('should call only getData() on getDataAndTotalResults()', () => {
    const getData = jest.fn();
    const getTotalResults = jest.fn();

    const { result } = renderHook(() =>
      useAggregateDataRetrieval({
        getData,
        getTotalResults,
      }),
    );

    const getDataAndTotalResults = result.current;

    getDataAndTotalResults({
      offset: 0,
      limit: 10,
      shouldGetTotalResults: false,
    });

    expect(getData).toHaveBeenCalledWith({
      offset: 0,
      limit: 10,
      shouldGetTotalResults: false,
    });

    expect(getTotalResults).not.toHaveBeenCalled();
  });
});

describe('useAggregateAlwaysGetTotalResults', () => {
  it('should call both getData() and getTotalResults()', () => {
    const getData = jest.fn();
    const getTotalResults = jest.fn();

    const { result } = renderHook(() =>
      useAggregateAlwaysGetTotalResults({
        getData,
        getTotalResults,
      }),
    );

    const getDataAndTotalResults = result.current;

    getDataAndTotalResults({
      offset: 0,
      limit: 10,
    });

    expect(getData).toHaveBeenCalledWith({
      offset: 0,
      limit: 10,
    });

    expect(getTotalResults).toHaveBeenCalled();
  });
});
