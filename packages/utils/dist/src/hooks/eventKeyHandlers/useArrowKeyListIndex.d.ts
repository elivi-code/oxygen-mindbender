export interface HookProps {
    elementCount: number;
    initialHighlightedElementIndex?: number;
    windowContext?: Window;
}
export interface HookReturnType {
    focusedElementIndex: number;
}
/**
 * A hook that uses arrow key logic to compute the index of a highlighted element within a list
 * @param { number } elementCount The total number of elements from the list
 * @param { number } initialHighlightedElementIndex index of the initial highlighted element.
 * initialHighlightedElementIndex = -1 means there is no initial highlighted element.
 * @returns { number } The index of the element that should be highlighted
 */
declare const useArrowKeyListIndex: ({ elementCount, windowContext, initialHighlightedElementIndex, }: HookProps) => HookReturnType;
export default useArrowKeyListIndex;
//# sourceMappingURL=useArrowKeyListIndex.d.ts.map