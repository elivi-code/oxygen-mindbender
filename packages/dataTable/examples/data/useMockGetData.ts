import { useMemo } from 'react';

interface Props<T> {
  data: T;
  shouldSimulateLag?: boolean;
}

/**
 * Simulated delay of data
 */
const useMockGetData = <T extends any[]>({
  data,
  shouldSimulateLag = false,
}: Props<T>) => {
  /**
   * "@8x8/data-table" requires reference to both getData() and getTotalResults() to be constant
   * otherwise it'll trigger a re-render
   */
  const mockApi = useMemo(() => {
    const getData = () => {
      if (shouldSimulateLag) {
        return new Promise<T>(resolve => {
          setTimeout(() => resolve(data), 1300);
        });
      }

      return Promise.resolve(data);
    };

    const getTotalResults = () => Promise.resolve(data.length);

    return { getData, getTotalResults };
  }, [data, shouldSimulateLag]);

  return mockApi;
};

export { useMockGetData };
