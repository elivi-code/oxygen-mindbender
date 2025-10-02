import EventKey from './EventKey';
export interface HookProps {
    actionKeyHandler: () => void;
    windowContext?: Window;
    fireEvents?: EventKey[];
}
/**
 * A hook that binds to global action key events (example: Enter or Space) and calls the provided handler once any of the specified keys have been pressed
 * @param { Function } actionKeyHandler The handler to be called when Enter or Space has been pressed
 * @param fireEvents specify the events
 * @param windowContext
 * @returns { void }
 */
declare const useGlobalActionKeyHandler: ({ actionKeyHandler, windowContext, fireEvents, }: HookProps) => void;
export default useGlobalActionKeyHandler;
//# sourceMappingURL=useGlobalActionKeyHandler.d.ts.map