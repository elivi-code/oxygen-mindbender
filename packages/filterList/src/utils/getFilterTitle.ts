import { FilterDefinitionType, FilterType } from '../types';
import extractDataFromFilter from './extractDataFromFilter';

function getFilterTitle(
  filter: FilterType,
  filterDefinition: FilterDefinitionType,
  shouldShowOperator = false,
) {
  const { filterLabel, operatorLabel, valuesLabels } = extractDataFromFilter(
    filter,
    filterDefinition,
  );

  return `${filterLabel}${
    shouldShowOperator && operatorLabel ? ` ${operatorLabel}` : ''
  } ${valuesLabels?.join(', ') || ''}`;
}

export default getFilterTitle;
