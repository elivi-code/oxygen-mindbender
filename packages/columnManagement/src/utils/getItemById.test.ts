import { getItemById } from './getItemById';
import { MOCK_CURRENT_COLUMNS } from '../mocks/ColumnManagement';

describe('getItemById', () => {
  it('returns the expected Item', () => {
    const result = getItemById('1', MOCK_CURRENT_COLUMNS);

    expect(result).toEqual(MOCK_CURRENT_COLUMNS[0]);
  });
});
