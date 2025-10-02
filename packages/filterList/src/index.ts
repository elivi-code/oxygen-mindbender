import { predefinedRanges } from '@8x8/oxygen-date-time-range-selector';

import FilterList from './components/FilterList';
import {
  OPERATOR_TYPES,
  OperatorValueType,
  OperatorType,
  FilterListInterface,
  FilterValueType,
  FilterValueObjectType,
  FilterType,
  FilterDefinitionType,
  GroupFilterDefinitionType,
  Translations,
} from './types';
import { isFilterActive, getActiveFiltersNumber } from './utils/filterDetails';

export default FilterList;

export type {
  FilterDefinitionType,
  FilterListInterface,
  FilterType,
  FilterValueObjectType,
  FilterValueType,
  GroupFilterDefinitionType,
  OperatorType,
  OperatorValueType,
  Translations,
};

export {
  OPERATOR_TYPES,
  predefinedRanges,
  isFilterActive,
  getActiveFiltersNumber,
};
