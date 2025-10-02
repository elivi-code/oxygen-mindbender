import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
// @todo delegate to react useId hook when React 18 is minimally supported
const useId = () => {
    const ref = useRef(null);
    const getUniqueId = () => {
        if (ref.current === null) {
            ref.current = uuidv4();
        }
        return ref.current;
    };
    return getUniqueId();
};
export default useId;
