export interface UseAriaLiveReturn {
    /**
     * Announce a message to screen readers
     */
    announce: (message: string, options?: {
        assertive?: boolean;
    }) => void;
}
export declare const CONTAINER_IDS: {
    readonly polite: "__oxygen-aria-live-polite__";
    readonly assertive: "__oxygen-aria-live-assertive__";
};
/**
 * Clean up containers and timeouts (for testing)
 * @internal
 */
export declare function cleanup(): void;
/**
 * Hook for managing aria-live status messages with automatic DOM injection.
 * Messages are announced to screen readers via direct DOM manipulation.
 * Containers are created on-demand when messages are announced.
 *
 * @returns Object with message control functions
 *
 * @example
 * ```tsx
 * const { announce } = useAriaLive();
 *
 * const handleSave = () => {
 *   // ... save logic
 *   announce('Item saved successfully');
 * };
 *
 * const handleError = () => {
 *   // ... error handling
 *   announce('Connection failed!', { assertive: true });
 * };
 *
 * return (
 *   <div>
 *     <button onClick={handleSave}>Save</button>
 *   </div>
 * );
 * ```
 */
export default function useAriaLive(): UseAriaLiveReturn;
//# sourceMappingURL=useAriaLive.d.ts.map