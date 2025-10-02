import { OffsetOptions } from '@floating-ui/react';

export interface Handler {
  target: HTMLElement;
  eventName: keyof HTMLElementEventMap;
  capture: boolean;
}

export interface HandlerWithCallback extends Handler {
  // eslint-disable-next-line @typescript-eslint/ban-types
  callback: (arg0: Event) => void;
}

/**
 * Calls addEventListener on the provided handlers
 * @deprecated
 */
export const registerEventHandlers: (
  handlers: HandlerWithCallback[],
) => void = handlers => {
  if (!Array.isArray(handlers)) {
    return;
  }

  for (const handler of handlers) {
    handler.target.addEventListener(
      handler.eventName,
      handler.callback,
      handler.capture,
    );
  }
};

/**
 * Calls removeEventListener on the provided handlers
 * @deprecated
 */
export const unregisterEventHandlers: (
  handlers: HandlerWithCallback[],
) => void = handlers => {
  if (!Array.isArray(handlers)) {
    return;
  }

  for (const handler of handlers) {
    handler.target.removeEventListener(
      handler.eventName,
      handler.callback,
      handler.capture,
    );
  }
};

type Modifiers = { offset?: { offset?: OffsetOptions | string } };

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
export const parseModifiers: (
  modifiers?: Modifiers,
) => OffsetOptions = modifiers => {
  const offsetValue = modifiers?.offset?.offset;

  // no offset value
  if (!offsetValue) {
    return null;
  }

  // if number, return it
  if (typeof offsetValue === 'number') {
    return offsetValue;
  }

  // if function, return it
  if (typeof offsetValue === 'function') {
    return offsetValue;
  }

  // if not string, return null
  if (typeof offsetValue !== 'string') {
    return null;
  }

  // if string, parse it and return an AxesOffset compatible object https://floating-ui.com/docs/offset
  if (offsetValue.includes(',')) {
    const [crossAxis, mainAxis] = offsetValue.split(',');

    return {
      mainAxis: parseInt(mainAxis, 10),
      crossAxis: parseInt(crossAxis, 10),
    };
  }

  // if string, return it as number
  return parseInt(offsetValue, 10);
};
