import { OffsetOptions } from '@floating-ui/react';
export interface Handler {
    target: HTMLElement;
    eventName: keyof HTMLElementEventMap;
    capture: boolean;
}
export interface HandlerWithCallback extends Handler {
    callback: (arg0: Event) => void;
}
/**
 * Calls addEventListener on the provided handlers
 * @deprecated
 */
export declare const registerEventHandlers: (handlers: HandlerWithCallback[]) => void;
/**
 * Calls removeEventListener on the provided handlers
 * @deprecated
 */
export declare const unregisterEventHandlers: (handlers: HandlerWithCallback[]) => void;
type Modifiers = {
    offset?: {
        offset?: OffsetOptions | string;
    };
};
/**
 * This method exists as a best effort to parse old style modifiers for offset into the new format.
 * It's not exhaustive and will not work in all cases.
 *
 * We only provided modifiers of form: { offset: { offset: '0, 7' } } even though old popper (v1)
 * suppored additional formats, see https://popper.js.org/docs/v1/#modifiers..offset
 *
 * New format docs https://floating-ui.com/docs/offset
 * @deprecated
 */
export declare const parseModifiers: (modifiers?: Modifiers) => OffsetOptions;
export {};
//# sourceMappingURL=utils.d.ts.map