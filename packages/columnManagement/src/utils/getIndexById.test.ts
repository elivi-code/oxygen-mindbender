import { MOCK_CURRENT_COLUMNS } from '../mocks/ColumnManagement';
import { getIndexById } from './getIndexById';

describe('getIndexById', () => {
  it('returns the expected container', () => {
    const result = getIndexById('1', MOCK_CURRENT_COLUMNS);

    expect(result).toEqual(0);
  });
});
