import { MOCK_CURRENT_COLUMNS } from '../mocks/ColumnManagement';
import { removeItemById } from './removeItemById';

describe('removeItemById', () => {
  it('removes the expected item', () => {
    const result = removeItemById(MOCK_CURRENT_COLUMNS, '10');

    expect(result).toEqual(
      MOCK_CURRENT_COLUMNS.slice(0, MOCK_CURRENT_COLUMNS.length - 1),
    );
  });
});
