import { useMemo, useState, useEffect } from 'react';
import throttle from 'lodash.throttle';
function useElementSize(throttleTimeout = 300) {
    const [ref, setRef] = useState(null);
    const [size, setSize] = useState({
        height: 0,
        width: 0,
    });
    const handleSize = useMemo(() => throttle(() => {
        setSize({
            height: ref?.offsetHeight || 0,
            width: ref?.offsetWidth || 0,
        });
    }, throttleTimeout), [throttleTimeout, ref?.offsetHeight, ref?.offsetWidth]);
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
