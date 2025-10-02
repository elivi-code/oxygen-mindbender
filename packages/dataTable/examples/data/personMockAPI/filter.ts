import { DataRetrievalParameters } from '@8x8/oxygen-data-table';
import { FilterType } from '@8x8/oxygen-filter-list';
import { Person } from '../person';

type PersonFilterFunction<T> = (record: T) => boolean;

const createAgeFilterFunction = (
  filter: FilterType,
): PersonFilterFunction<Person> | undefined => {
  if (!filter.operator?.value || !filter.values?.at(0)?.value) {
    return undefined;
  }

  const operator = filter.operator?.value;
  const referenceAge = filter.values[0].value as number;

  const ageFilterFunction = (record: Person) => {
    switch (operator) {
      case 'lessThan':
        return record.age < referenceAge;
      case 'greaterThan':
        return record.age > referenceAge;
      default:
        return true;
    }
  };

  return ageFilterFunction;
};

const createPredicates = (
  filters: FilterType[],
): PersonFilterFunction<Person>[] => {
  return filters
    .map(filter => {
      switch (filter.id) {
        case 'age':
          return createAgeFilterFunction(filter);
        default:
          return undefined;
      }
    })
    .filter(Boolean) as PersonFilterFunction<Person>[];
};

const createFilterFunction = (props: DataRetrievalParameters) => {
  const { filters } = props;
  const predicates = createPredicates(filters || []);

  if (!predicates.length) {
    return (data: Person[]) => data;
  }

  const filterFunction = (data: Person[]) =>
    data.filter(record => predicates.every(predicate => predicate(record)));

  return filterFunction;
};

export { createFilterFunction };
