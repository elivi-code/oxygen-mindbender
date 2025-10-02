import { useCallback, useEffect, useState } from 'react';
import focusNextElementHandler from './focusNextElementHandler';
import { isArrowDownEvent, isArrowUpEvent, } from '../../functions/keyboardEvents';
/**
 * A hook that uses arrow key logic to compute the index of a highlighted element within a list
 * @param { number } elementCount The total number of elements from the list
 * @param { number } initialHighlightedElementIndex index of the initial highlighted element.
 * initialHighlightedElementIndex = -1 means there is no initial highlighted element.
 * @returns { number } The index of the element that should be highlighted
 */
const useArrowKeyListIndex = ({ elementCount, windowContext, initialHighlightedElementIndex = 0, }) => {
    const [focusedId, setFocusedId] = useState(initialHighlightedElementIndex);
    const handleElementCountChanged = () => {
        // Case when elemnet count is smaller than the current focused index -> update focus index to the last element
        if (focusedId >= elementCount) {
            setFocusedId(elementCount - 1);
        }
    };
    const handleArrow = useCallback((event) => {
        if (isArrowDownEvent(event)) {
            focusNextElementHandler(true, elementCount, setFocusedId);
            return;
        }
        if (isArrowUpEvent(event)) {
            focusNextElementHandler(false, elementCount, setFocusedId);
        }
    }, [elementCount]);
    useEffect(() => {
        (windowContext || window).document.addEventListener('keydown', handleArrow);
        return () => {
            (windowContext || window).document.removeEventListener('keydown', handleArrow);
        };
    }, [elementCount]);
    useEffect(() => {
        // Update focused index when element count is changed
        handleElementCountChanged();
    }, [elementCount]);
    return {
        focusedElementIndex: focusedId,
    };
};
export default useArrowKeyListIndex;
