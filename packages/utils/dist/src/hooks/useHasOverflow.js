import { useLayoutEffect, useState } from 'react';
const useHasOverflow = (ref, callback) => {
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
        let observer;
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
