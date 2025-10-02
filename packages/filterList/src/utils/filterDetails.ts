import { FilterType } from '../types';

function isFilterActive(filter: FilterType) {
  return !!filter.values?.length;
}

function getActiveFiltersNumber(filters: FilterType[]) {
  return filters.filter(isFilterActive).length;
}

export { isFilterActive, getActiveFiltersNumber };
