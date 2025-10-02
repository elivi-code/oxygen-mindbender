import { useEffect } from 'react';
import EventKey from './EventKey';
/**
 * A hook that binds to global action key events (example: Enter or Space) and calls the provided handler once any of the specified keys have been pressed
 * @param { Function } actionKeyHandler The handler to be called when Enter or Space has been pressed
 * @param fireEvents specify the events
 * @param windowContext
 * @returns { void }
 */
const useGlobalActionKeyHandler = ({ actionKeyHandler, windowContext, fireEvents = [EventKey.Enter, EventKey.Space], }) => {
    const handleKeyPress = (event) => {
        if (fireEvents.includes(event.key)) {
            // eslint-disable-next-line no-unused-expressions
            actionKeyHandler && actionKeyHandler();
        }
    };
    useEffect(() => {
        (windowContext || window).document.addEventListener('keydown', handleKeyPress);
        return () => {
            (windowContext || window).document.removeEventListener('keydown', handleKeyPress);
        };
    }, [handleKeyPress]);
};
export default useGlobalActionKeyHandler;
