/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-empty-function */
import { act, cleanup, renderHook } from '@testing-library/react-hooks';
import useHasOverflow from './useHasOverflow';

describe('useHasOverflow', () => {
  describe('with ResizeObserver', () => {
    let observerCallback;

    beforeEach(() => {
      global.ResizeObserver = class ResizeObserver {
        constructor(args) {
          observerCallback = args;
        }
        observe() {}
        unobserve() {}
        disconnect() {}
      };
      jest.spyOn(global.ResizeObserver.prototype, 'disconnect');
      jest.mocked(global.ResizeObserver.prototype.disconnect).mockClear();
    });

    it.each`
      scrollWidth | offsetWidth | expected
      ${100}      | ${90}       | ${true}
      ${100}      | ${100}      | ${false}
      ${100}      | ${110}      | ${false}
    `(
      'returns $expected depeding on overflow based on scrollWidth: $scrollWidth and offsetWidth: $offsetWidth',
      ({ scrollWidth, offsetWidth, expected }) => {
        const el = document.createElement('div');

        jest.spyOn(el, 'scrollWidth', 'get').mockReturnValue(scrollWidth);
        jest.spyOn(el, 'offsetWidth', 'get').mockReturnValue(offsetWidth);
        const ref = { current: el };
        const { result } = renderHook(() => useHasOverflow(ref));

        expect(result.current).toBe(expected);
      },
    );

    it.each`
      scrollWidth | offsetWidth | expected
      ${100}      | ${90}       | ${true}
      ${100}      | ${100}      | ${false}
      ${100}      | ${110}      | ${false}
    `('calls the callback', ({ scrollWidth, offsetWidth, expected }) => {
      const callback = jest.fn();
      const el = document.createElement('div');

      jest.spyOn(el, 'scrollWidth', 'get').mockReturnValue(scrollWidth);
      jest.spyOn(el, 'offsetWidth', 'get').mockReturnValue(offsetWidth);
      const ref = { current: el };

      renderHook(() => useHasOverflow(ref, callback));
      expect(callback).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenCalledWith(expected);
    });

    it('updates the state in case of a resize', () => {
      const callback = jest.fn();
      const el = document.createElement('div');

      // mock initial dimensions
      jest.spyOn(el, 'scrollWidth', 'get').mockReturnValue(10);
      jest.spyOn(el, 'offsetWidth', 'get').mockReturnValue(20);
      // mock ref and render hook
      const ref = { current: el };
      const { result } = renderHook(() => useHasOverflow(ref, callback));

      // assert
      expect(result.current).toBe(false);
      expect(callback).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenCalledWith(false);

      // mock resized dimensions
      jest.spyOn(el, 'scrollWidth', 'get').mockReturnValue(21);
      jest.spyOn(el, 'offsetWidth', 'get').mockReturnValue(20);
      // trigger resize from mocked observer
      act(() => {
        observerCallback();
      });
      // assert
      expect(result.current).toBe(true);
      expect(callback).toHaveBeenCalledTimes(2);
      expect(callback).toHaveBeenCalledWith(true);

      // cleanup after unmount
      cleanup();
      expect(global.ResizeObserver.prototype.disconnect).toBeCalledTimes(1);
    });
  });

  describe('without ResizeObserver', () => {
    beforeEach(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      delete global.ResizeObserver;
    });
    // same tests as above
    it('updates the state in case of a resize', () => {
      const callback = jest.fn();
      const el = document.createElement('div');

      // mock initial dimensions
      jest.spyOn(el, 'scrollWidth', 'get').mockReturnValue(10);
      jest.spyOn(el, 'offsetWidth', 'get').mockReturnValue(20);
      // mock ref and render hook
      const ref1 = { current: el };
      const { result, rerender } = renderHook(
        (ref: React.MutableRefObject<HTMLElement | null>) =>
          useHasOverflow(ref, callback),
        { initialProps: ref1 },
      );

      // assert
      expect(result.current).toBe(false);
      expect(callback).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenCalledWith(false);

      // mock resized dimensions
      jest.spyOn(el, 'scrollWidth', 'get').mockReturnValue(21);
      jest.spyOn(el, 'offsetWidth', 'get').mockReturnValue(20);
      // there is no ResizeObserver, this will only fire when the ref changes
      const ref2 = { current: el };

      rerender(ref2);
      // assert
      expect(result.current).toBe(true);
      expect(callback).toHaveBeenCalledTimes(2);
      expect(callback).toHaveBeenCalledWith(true);
    });
  });
});
