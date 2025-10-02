import { useMemo, useState, useEffect } from 'react';
import throttle from 'lodash.throttle';

type Size = {
  width: number;
  height: number;
};

type ElementSize<T> = [(node: T | null) => void, Size];

function useElementSize<T extends HTMLElement>(
  throttleTimeout = 300,
): ElementSize<T> {
  const [ref, setRef] = useState<T | null>(null);
  const [size, setSize] = useState<Size>({
    height: 0,
    width: 0,
  });

  const handleSize = useMemo(
    () =>
      throttle(() => {
        setSize({
          height: ref?.offsetHeight || 0,
          width: ref?.offsetWidth || 0,
        });
      }, throttleTimeout),
    [throttleTimeout, ref?.offsetHeight, ref?.offsetWidth],
  );

  useEffect(() => {
    window.addEventListener('resize', handleSize);

    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, [handleSize]);

  useEffect(() => {
    if (ref) {
      handleSize();
    }
  }, [handleSize, ref?.offsetHeight, ref?.offsetWidth]);

  return [setRef, size];
}

export default useElementSize;
