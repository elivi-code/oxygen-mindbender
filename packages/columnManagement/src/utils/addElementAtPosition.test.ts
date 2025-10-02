import {
  MOCK_AVAILABLE_COLUMNS,
  MOCK_CURRENT_COLUMNS,
} from '../mocks/ColumnManagement';
import { addElementAtPosition } from './addElementAtPosition';

describe('addElementAtPosition', () => {
  it('returns the expected array', () => {
    const result = addElementAtPosition(
      MOCK_CURRENT_COLUMNS,
      MOCK_AVAILABLE_COLUMNS[0],
      1,
    );

    expect(result).toEqual([
      MOCK_CURRENT_COLUMNS[0],
      MOCK_AVAILABLE_COLUMNS[0],
      ...MOCK_CURRENT_COLUMNS.slice(1, MOCK_CURRENT_COLUMNS.length),
    ]);
  });

  it('returns the expected array when overIndex is the last index', () => {
    const list = [
      { id: 1, name: 'Column 1' },
      { id: 2, name: 'Column 2' },
      { id: 3, name: 'Column 3' },
    ];
    const element = { id: 4, name: 'Column 4' };
    const overIndex = 2;

    const result = addElementAtPosition(list, element, overIndex);

    expect(result).toEqual([
      { id: 1, name: 'Column 1' },
      { id: 2, name: 'Column 2' },
      { id: 3, name: 'Column 3' },
      { id: 4, name: 'Column 4' },
    ]);
  });
});
