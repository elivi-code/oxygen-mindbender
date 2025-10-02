import { DataRetrievalParameters } from '@8x8/oxygen-data-table';
import { Person } from '../person';

type CompareFn<T> = (a: T, b: T) => number;

const compareString = (a: string, b: string) => a.localeCompare(b);
const comparatorById: Record<string, CompareFn<Person>> = {
  firstName: (a, b) => compareString(a.firstName, b.firstName),
  lastName: (a, b) => compareString(a.lastName, b.lastName),
  age: (a, b) => a.age - b.age,
};

const createComparator = (
  id: string,
  desc = false,
): CompareFn<Person> | undefined => {
  const compare = comparatorById[id];

  return compare ? (a, b) => compare(a, b) * (desc ? -1 : 1) : undefined;
};

const createSortFunction = (props: DataRetrievalParameters) => {
  const { sorting } = props;
  const compare =
    sorting &&
    sorting.length &&
    createComparator(sorting[0].id, sorting[0].desc);

  if (!compare) {
    return (data: Person[]) => data;
  }

  return (data: Person[]) => [...data].sort(compare);
};

export { createSortFunction };
