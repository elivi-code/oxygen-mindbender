import {
  isDateRange,
  isSingleSelection,
  isMultiSelection,
  isNumberOperator,
} from './operatorDetails';

describe('operatorDetails', () => {
  it('should isDateRange return true when operator is dateRange', () => {
    expect(isDateRange({ value: 'dateRange', label: 'dateRange' })).toBe(true);
  });

  it('should isDateRange return false when operator is not dateRange', () => {
    expect(isDateRange({ value: 'is', label: 'is' })).toBe(false);
  });

  it('should isSingleSelection return true when operator is boolean', () => {
    expect(isSingleSelection({ value: 'boolean', label: 'boolean' })).toBe(
      true,
    );
  });

  it('should isSingleSelection return false when operator is not boolean', () => {
    expect(isSingleSelection({ value: 'is', label: 'is' })).toBe(false);
  });

  it('should isMultiSelection return true when operator is is', () => {
    expect(isMultiSelection({ value: 'is', label: 'is' })).toBe(true);
  });

  it('should isMultiSelection return true when operator is isNot', () => {
    expect(isMultiSelection({ value: 'isNot', label: 'isNot' })).toBe(true);
  });

  it('should isMultiSelection return false when operator is not is or isNot', () => {
    expect(isMultiSelection({ value: 'boolean', label: 'boolean' })).toBe(
      false,
    );
  });

  it('should isNumberOperator return true when operator is a number operator', () => {
    expect(
      isNumberOperator({ value: 'greaterThan', label: 'greaterThan' }),
    ).toBe(true);
  });
});
