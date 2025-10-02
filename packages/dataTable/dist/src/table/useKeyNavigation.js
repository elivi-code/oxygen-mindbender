import { useRef, useEffect } from 'react';
const isNavigationKey = (key) => ['Tab', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(key);
export const useKeyNavigation = ({ blurOnTab }) => {
    const isKeyboardNavigation = useRef(false);
    const isTableBodyFocused = useRef(false);
    const hiddenRowRef = useRef(null);
    const firstRowRef = useRef(null);
    useEffect(() => {
        const documentOnKeyDown = (e) => {
            if (isNavigationKey(e.key)) {
                isKeyboardNavigation.current = true;
            }
        };
        const documentOnMouseDown = () => {
            isKeyboardNavigation.current = false;
        };
        document.addEventListener('keydown', documentOnKeyDown, true);
        document.addEventListener('mousedown', documentOnMouseDown, true);
        return () => {
            document.removeEventListener('keydown', documentOnKeyDown, true);
            document.removeEventListener('mousedown', documentOnMouseDown, true);
        };
    }, []);
    const onKeyDown = (e) => {
        if (!blurOnTab) {
            return;
        }
        if (e.key === 'Tab' && isTableBodyFocused.current) {
            const tbody = e.currentTarget;
            if (e.shiftKey) {
                // focus tbody and don't call preventDefault() => event will bubble up => focus will move to the element preceeding tbody
                tbody.focus();
                isTableBodyFocused.current = false;
            }
            else {
                // focus hidden row and don't call preventDefault() => focus will move to the element following tbody
                hiddenRowRef.current?.focus();
                isTableBodyFocused.current = false;
            }
        }
    };
    const onFocus = () => {
        if (!blurOnTab) {
            return;
        }
        if (!isKeyboardNavigation.current) {
            return;
        }
        if (!isTableBodyFocused.current) {
            isTableBodyFocused.current = true;
            firstRowRef.current?.focus();
        }
    };
    return {
        firstRowRef,
        hiddenRowRef,
        onKeyDown,
        onFocus,
    };
};
