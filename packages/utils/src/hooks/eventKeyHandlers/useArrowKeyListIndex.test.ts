import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-test-renderer';
import EventKey from './EventKey';
import useArrowKeyListIndex from './useArrowKeyListIndex';
import dispatchKeyDownEvent from './test-utils/dispatchKeyboardEvents';

describe('useArrowKeyListIndex', () => {
  it('should return the current highlighted element', () => {
    const elementCount = 4;
    const initialHighlightedElementIndex = 2;

    const { result } = renderHook(() =>
      useArrowKeyListIndex({ elementCount, initialHighlightedElementIndex }),
    );

    expect(result.current.focusedElementIndex).toEqual(
      initialHighlightedElementIndex,
    );
  });

  it('should update highlighted index on arrow up', () => {
    const elementCount = 4;
    const initialHighlightedElementIndex = 2;

    const { result } = renderHook(() =>
      useArrowKeyListIndex({ elementCount, initialHighlightedElementIndex }),
    );

    act(() => {
      dispatchKeyDownEvent(EventKey.ArrowUp);
    });

    expect(result.current.focusedElementIndex).toEqual(
      initialHighlightedElementIndex - 1,
    );
  });

  it('should update highlighted index on arrow down', () => {
    const elementCount = 4;
    const initialHighlightedElementIndex = 2;

    const { result } = renderHook(() =>
      useArrowKeyListIndex({ elementCount, initialHighlightedElementIndex }),
    );

    act(() => {
      dispatchKeyDownEvent(EventKey.ArrowDown);
    });

    expect(result.current.focusedElementIndex).toEqual(
      initialHighlightedElementIndex + 1,
    );
  });

  it('should highlight last element when pressing arrow up and first element is highlighted', () => {
    const elementCount = 4;
    const initialHighlightedElementIndex = 0;

    const { result } = renderHook(() =>
      useArrowKeyListIndex({ elementCount, initialHighlightedElementIndex }),
    );

    act(() => {
      dispatchKeyDownEvent(EventKey.ArrowUp);
    });

    expect(result.current.focusedElementIndex).toEqual(elementCount - 1);
  });

  it('should highlight first element when pressing arrow down and last element is highlighted', () => {
    const elementCount = 4;
    const initialHighlightedElementIndex = elementCount - 1;

    const { result } = renderHook(() =>
      useArrowKeyListIndex({ elementCount, initialHighlightedElementIndex }),
    );

    act(() => {
      dispatchKeyDownEvent(EventKey.ArrowDown);
    });

    expect(result.current.focusedElementIndex).toEqual(0);
  });
});
