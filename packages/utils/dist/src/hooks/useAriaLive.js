import { useCallback } from 'react';
const MESSAGE_CLEAR_DELAY = 1000; // ms to clear message
// Container IDs for aria-live regions
export const CONTAINER_IDS = {
    polite: '__oxygen-aria-live-polite__',
    assertive: '__oxygen-aria-live-assertive__',
};
// Timeout references for automatic message clearing
const messageTimeouts = {
    polite: null,
    assertive: null,
};
/**
 * Get or create the DOM container for the specified type
 */
function getOrCreateContainer(type) {
    const containerId = CONTAINER_IDS[type];
    // Check if container already exists
    const existing = document.getElementById(containerId);
    if (existing) {
        return existing;
    }
    // Create new container
    const container = document.createElement('div');
    container.id = containerId;
    container.setAttribute('aria-live', type);
    container.setAttribute('aria-atomic', 'true');
    // Apply offscreen styling
    container.style.position = 'absolute';
    container.style.width = '1px';
    container.style.height = '1px';
    container.style.overflow = 'hidden';
    document.body.appendChild(container);
    return container;
}
/**
 * Announce a message using direct DOM manipulation
 */
function announceMessage(message, type) {
    // Clear any existing timeout for this type
    if (messageTimeouts[type]) {
        clearTimeout(messageTimeouts[type]);
        messageTimeouts[type] = null;
    }
    // Get or create the container on-demand
    const container = getOrCreateContainer(type);
    container.textContent = message;
    // Set timeout to clear the message
    messageTimeouts[type] = setTimeout(() => {
        container.textContent = '';
        messageTimeouts[type] = null;
    }, MESSAGE_CLEAR_DELAY);
}
/**
 * Clean up containers and timeouts (for testing)
 * @internal
 */
export function cleanup() {
    // Clear timeouts
    Object.keys(messageTimeouts).forEach(type => {
        const key = type;
        if (messageTimeouts[key]) {
            clearTimeout(messageTimeouts[key]);
            messageTimeouts[key] = null;
        }
    });
    // Remove DOM containers
    const politeContainer = document.getElementById(CONTAINER_IDS.polite);
    const assertiveContainer = document.getElementById(CONTAINER_IDS.assertive);
    if (politeContainer) {
        politeContainer.remove();
    }
    if (assertiveContainer) {
        assertiveContainer.remove();
    }
}
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
export default function useAriaLive() {
    const announce = useCallback((message, messageOptions = {}) => {
        const type = messageOptions.assertive ? 'assertive' : 'polite';
        announceMessage(message, type);
    }, []);
    return {
        announce,
    };
}
