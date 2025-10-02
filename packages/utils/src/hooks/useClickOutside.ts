import { useEffect, RefObject, useRef } from 'react';

const useClickOutside = <RefType>(
  onClickOutside: (event: MouseEvent) => void,
): RefObject<RefType> => {
  const containerRef = useRef<RefType>(null);

  useEffect(() => {
    const handleMouseUp = (event: MouseEvent): void => {
      if (
        containerRef &&
        !(
          containerRef.current instanceof Element &&
          containerRef.current.contains(event?.target as HTMLElement)
        )
      ) {
        onClickOutside(event);
      }
    };

    window.document.addEventListener('mouseup', handleMouseUp);

    return () => window.document.removeEventListener('mouseup', handleMouseUp);
  }, [containerRef, onClickOutside]);

  return containerRef;
};

export default useClickOutside;
