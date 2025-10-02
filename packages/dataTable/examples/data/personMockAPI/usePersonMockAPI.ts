import { useMemo, useState } from 'react';
import { DataRetrievalParameters } from '@8x8/oxygen-data-table';
import { makeData } from '../makedata';
import { createSortFunction } from './sort';
import { createFilterFunction } from './filter';
import { createSearchFunction } from './search';
import { Person } from '../person';

interface Props {
  /** Generate this amount of mock data */
  numData: number;
  shouldSimulateLag?: boolean;
}

const usePersonMockApi = ({ numData, shouldSimulateLag }: Props) => {
  const [data] = useState(makeData(numData));

  /**
   * "@8x8/data-table" requires reference to both getData() and getTotalResults() to be constant
   * otherwise it'll trigger a re-render
   */
  const mockApi = useMemo(() => {
    const getDataWithoutPagination = (props: DataRetrievalParameters) => {
      let result = data;

      // sort
      const sort = createSortFunction(props);

      result = sort(result);

      // filter
      const filter = createFilterFunction(props);

      result = filter(result);

      // search
      const search = createSearchFunction(props);

      result = search(result);

      return result;
    };

    const getDataMock = (props: DataRetrievalParameters) => {
      const { offset, limit } = props;
      let result = getDataWithoutPagination(props);

      // paginate
      result = result.slice(offset, offset + limit);

      return shouldSimulateLag
        ? new Promise<Person[]>(resolve => {
            setTimeout(() => resolve(result), 500);
          })
        : Promise.resolve(result);
    };

    const getTotalResults = async (props: DataRetrievalParameters) => {
      const dataWithoutPagination = getDataWithoutPagination(props);

      return Promise.resolve(dataWithoutPagination.length);
    };

    return { getData: getDataMock, getTotalResults };
  }, [data, shouldSimulateLag]);

  return mockApi;
};

export { usePersonMockApi };
