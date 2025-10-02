import FilterList, {
  type OperatorValueType,
  type OperatorType,
  type FilterListInterface,
  type FilterValueType,
  type FilterValueObjectType,
  type FilterType,
  type FilterDefinitionType,
  type Translations,
  OPERATOR_TYPES,
  predefinedRanges,
  isFilterActive,
  getActiveFiltersNumber,
} from '.';

describe('FilterList top level exports', () => {
  it('exposes a default export with the component', () => {
    expect(FilterList).toBeDefined();
  });
  it('exposes a named export predefinedRanges which comes from the DateTimeRangeSelector component', () => {
    expect(predefinedRanges).toBeDefined();
    expect(predefinedRanges).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(String),
          displayName: expect.any(String),
          dateTimeRange: expect.any(Function),
        }),
      ]),
    );
  });
  it('exposes a named export isFilterActive', () => {
    expect(isFilterActive).toBeDefined();
  });
  it('exposes a named export getActiveFiltersNumber', () => {
    expect(getActiveFiltersNumber).toBeDefined();
  });
  it('exposes a named export OPERATOR_TYPES', () => {
    expect(OPERATOR_TYPES).toEqual({
      BOOLEAN: 'boolean',
      CONTAINS: 'contains',
      DATE_RANGE: 'dateRange',
      ENDS_WITH: 'endsWith',
      EQUALS: 'equals',
      GREATER_THAN: 'greaterThan',
      GREATER_THAN_OR_EQUAL: 'greaterThanOrEqual',
      IS: 'is',
      IS_NOT: 'isNot',
      LESS_THAN: 'lessThan',
      LESS_THAN_OR_EQUAL: 'lessThanOrEqual',
      NOT_CONTAINS: 'notContains',
      NOT_ENDS_WITH: 'notEndsWith',
      NOT_EQUALS: 'notEquals',
      NOT_STARTS_WITH: 'notStartsWith',
      STARTS_WITH: 'startsWith',
    });
  });
});
