import React, { useLayoutEffect, useState } from 'react';

const useHasOverflow = (
  ref: React.MutableRefObject<HTMLElement | null>,
  callback?: (isOverflow: boolean) => void,
) => {
  const [isOverflow, setIsOverflow] = useState(undefined);

  useLayoutEffect(() => {
    const { current } = ref;

    const trigger = () => {
      const hasOverflow = current.offsetWidth < current.scrollWidth;

      setIsOverflow(hasOverflow);

      if (callback) {
        callback(hasOverflow);
      }
    };

    let observer: ResizeObserver | undefined;

    if (current) {
      if ('ResizeObserver' in window) {
        observer = new ResizeObserver(trigger);
        observer.observe(current);
      }
      trigger();
    }

    return () => {
      observer?.disconnect();
    };
  }, [callback, ref]);

  return isOverflow;
};

export default useHasOverflow;
