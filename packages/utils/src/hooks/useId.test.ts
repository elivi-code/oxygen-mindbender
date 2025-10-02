import { renderHook } from '@testing-library/react-hooks';
import { v4 } from 'uuid';

import useId from './useId';

jest.mock('uuid', () => ({
  v4: jest.mocked(jest.fn()),
}));

describe('useId', () => {
  it('should generate and return unique id', () => {
    const id = '1';

    jest.mocked(v4).mockReturnValue(id);

    const { result, rerender } = renderHook(() => useId());

    expect(result.current).toEqual(id);

    jest.mocked(v4).mockReturnValue('2');
    rerender();

    expect(result.current).toEqual(id);
  });
});
