import { isFilterActive, getActiveFiltersNumber } from './filterDetails';
import { mockFilters } from './mockData/filters';

describe('filterDetails', () => {
  it('should isFilterActive return true when values are present', () => {
    expect(isFilterActive(mockFilters[0])).toBe(true);
  });

  it('should isFilterActive return false when values array is empth', () => {
    expect(isFilterActive({ ...mockFilters[0], values: [] })).toBe(false);
  });

  it('should isFilterActive return false when values array is undefined', () => {
    expect(isFilterActive({ ...mockFilters[0], values: undefined })).toBe(
      false,
    );
  });

  it('should getActiveFiltersNumber return the number of active filters', () => {
    expect(getActiveFiltersNumber([mockFilters[0]])).toBe(1);
  });

  it('should getActiveFiltersNumber return the number of active filters and ignore not active ones', () => {
    expect(getActiveFiltersNumber([mockFilters[0], mockFilters[1]])).toBe(1);
  });
});
