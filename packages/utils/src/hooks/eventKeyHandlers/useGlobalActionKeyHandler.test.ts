import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-test-renderer';
import useGlobalActionKeyHandler from './useGlobalActionKeyHandler';
import dispatchKeyDownEvent from './test-utils/dispatchKeyboardEvents';
import EventKey from './EventKey';

describe('useGlobalActionKeyHandler', () => {
  it('should call action handler when pressing Enter key', () => {
    const spy = jest.fn();

    renderHook(() => useGlobalActionKeyHandler({ actionKeyHandler: spy }));

    act(() => {
      dispatchKeyDownEvent(EventKey.Enter);
    });

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should call action handler when pressing Space key', () => {
    const spy = jest.fn();

    renderHook(() => useGlobalActionKeyHandler({ actionKeyHandler: spy }));

    act(() => {
      dispatchKeyDownEvent(EventKey.Space);
    });

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should not call action handler when pressing Escape(or other key)', () => {
    const spy = jest.fn();

    renderHook(() => useGlobalActionKeyHandler({ actionKeyHandler: spy }));

    act(() => {
      dispatchKeyDownEvent(EventKey.Escape);
      dispatchKeyDownEvent(EventKey.Tab);
      dispatchKeyDownEvent(EventKey.ArrowUp);
      dispatchKeyDownEvent(EventKey.ArrowDown);
    });

    expect(spy).not.toHaveBeenCalled();
  });

  it('should only call allowed events - Enter for ex', () => {
    const spy = jest.fn();

    renderHook(() =>
      useGlobalActionKeyHandler({
        actionKeyHandler: spy,
        fireEvents: [EventKey.Enter],
      }),
    );

    act(() => {
      dispatchKeyDownEvent(EventKey.Space);
    });

    expect(spy).not.toHaveBeenCalled();
  });
});
