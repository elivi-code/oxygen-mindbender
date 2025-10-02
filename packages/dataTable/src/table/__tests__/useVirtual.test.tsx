import { renderHook } from '@testing-library/react-hooks';
import { Row } from '@tanstack/react-table';
import { useVirtual } from '../useVirtual';
import { Person } from '../../__tests__/mockData';
import { BodyRowHeight } from '../../styled/BodyRow';

const NUM_FAKE_ROWS = 3;

jest.mock('@tanstack/react-virtual', () => ({
  useVirtualizer: () => ({
    getVirtualItems: jest.fn(() => [
      { index: 0, start: 0, end: 50, size: 50 },
      { index: 1, start: 50, end: 100, size: 50 },
      { index: 2, start: 100, end: 150, size: 50 },
    ]),
    getTotalSize: jest.fn(() => NUM_FAKE_ROWS * BodyRowHeight),
    isScrolling: false,
  }),
}));

describe('useVirtual', () => {
  it('should return virtualized rows and styles when enableVirtualization is true', () => {
    // should at least have 3 rows like getVirtualItems mock
    const fakeRows: Row<Person>[] = [
      { id: '1', original: { firstName: 'Row 1', lastName: 'Doe' } },
      { id: '2', original: { firstName: 'Row 2', lastName: 'Doe' } },
      { id: '3', original: { firstName: 'Row 3', lastName: 'Doe' } },
    ] as Row<Person>[];

    const { result } = renderHook(() =>
      useVirtual({
        enableVirtualization: true,
        rows: fakeRows,
      }),
    );

    expect(result.current.renderableRows).toHaveLength(fakeRows.length);
    expect(result.current.bodyHeight).toBe(NUM_FAKE_ROWS * BodyRowHeight);
    expect(result.current.isVirtualAndScrolling).toBe(false);
  });

  it('should return all rows and no styles when enableVirtualization is false', () => {
    const fakeRows: Row<Person>[] = [
      { id: '1', original: { firstName: 'Row 1', lastName: 'Doe' } },
      { id: '2', original: { firstName: 'Row 2', lastName: 'Doe' } },
      { id: '3', original: { firstName: 'Row 3', lastName: 'Doe' } },
    ] as Row<Person>[];

    const { result } = renderHook(() =>
      useVirtual({
        enableVirtualization: false,
        rows: fakeRows,
      }),
    );

    expect(result.current.renderableRows).toHaveLength(fakeRows.length);
    expect(result.current.tbodyStyle).toBeUndefined();
    expect(result.current.isVirtualAndScrolling).toBe(false);
  });
});
