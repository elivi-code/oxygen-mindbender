import { DataRetrievalParameters } from '@8x8/oxygen-data-table';
import { Person } from '../person';

const createSearchFunction = (props: DataRetrievalParameters) => {
  const { search } = props;
  const searchValue = search?.toLowerCase();

  if (!searchValue) {
    return (data: Person[]) => data;
  }

  /**
   * This is an arbitrary mock BE implementation
   * for simplicity firstName and lastName are searched
   */
  const searchFunction = (data: Person[]) =>
    data.filter(record => {
      return (
        record.firstName.toLowerCase().includes(searchValue) ||
        record.lastName.toLowerCase().includes(searchValue)
      );
    });

  return searchFunction;
};

export { createSearchFunction };
