import { MOCK_COLUMNS } from '../mocks/ColumnManagement';
import { findContainer } from './findContainer';

describe('findContainer', () => {
  it('returns the expected container', () => {
    const result = findContainer('1', MOCK_COLUMNS);

    expect(result).toEqual('currentColumns');
  });

  it('returns undefined when id is not found', () => {
    const result = findContainer('51', MOCK_COLUMNS);

    expect(result).toBeUndefined();
  });

  it('returns the correct container when id is found in nested containers', () => {
    const result = findContainer('currentColumns', MOCK_COLUMNS);

    expect(result).toEqual('currentColumns');
  });
});
