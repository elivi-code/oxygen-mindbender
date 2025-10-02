import { useEffect, useMemo, useRef, useState } from 'react';

const useHorizontalScroll = () => {
  const ref = useRef(null);
  const [hasHorizontalScroll, setHasOverflow] = useState(false);

  const resizeObserver = useMemo(
    () =>
      new ResizeObserver(entries => {
        for (const entry of entries) {
          const hasOverflow =
            entry.target.clientWidth < entry.target.scrollWidth;

          setHasOverflow(hasOverflow);
        }
      }),
    [],
  );

  useEffect(() => {
    if (ref.current) {
      resizeObserver.observe(ref.current);

      return () => resizeObserver.disconnect();
    }

    return undefined;
  }, [resizeObserver]);

  return { hasHorizontalScroll, ref };
};

export { useHorizontalScroll };
