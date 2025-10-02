import { useEffect, useRef } from 'react';
const useClickOutside = (onClickOutside) => {
    const containerRef = useRef(null);
    useEffect(() => {
        const handleMouseUp = (event) => {
            if (containerRef &&
                !(containerRef.current instanceof Element &&
                    containerRef.current.contains(event?.target))) {
                onClickOutside(event);
            }
        };
        window.document.addEventListener('mouseup', handleMouseUp);
        return () => window.document.removeEventListener('mouseup', handleMouseUp);
    }, [containerRef, onClickOutside]);
    return containerRef;
};
export default useClickOutside;
