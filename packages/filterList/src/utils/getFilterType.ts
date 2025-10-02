import { FilterDefinitionType, GroupFilterDefinitionType } from '../types';

export function isGroupFilterDefinitionType(
  filterDefinition: FilterDefinitionType | GroupFilterDefinitionType,
): filterDefinition is GroupFilterDefinitionType {
  return !!(filterDefinition as GroupFilterDefinitionType).subFilters;
}
