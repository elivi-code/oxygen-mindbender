import { isGroupFilterDefinitionType } from './getFilterType';
import { FilterDefinitionType, GroupFilterDefinitionType } from '../types';

describe('isGroupFilterDefinitionType', () => {
  it('returns true for GroupFilterDefinitionType', () => {
    const subFilterDefinition: GroupFilterDefinitionType = {
      id: 'subFilter1',
      label: 'SubFilter 1',
      subFilterOperators: {},
      subFilters: {},
    };

    expect(isGroupFilterDefinitionType(subFilterDefinition)).toBe(true);
  });

  it('returns false for FilterDefinitionType', () => {
    const filterDefinition: FilterDefinitionType = {
      id: 'filter1',
      label: 'Filter 1',
    };

    expect(isGroupFilterDefinitionType(filterDefinition)).toBe(false);
  });
});
