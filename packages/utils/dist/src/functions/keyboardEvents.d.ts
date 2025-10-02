import React from 'react';
type KeyboardEventType = KeyboardEvent | React.KeyboardEvent;
declare const isArrowUpEvent: (ev: KeyboardEventType) => boolean;
declare const isArrowDownEvent: (ev: KeyboardEventType) => boolean;
declare const isEnterEvent: (ev: KeyboardEventType) => boolean;
declare const isSpaceEvent: (ev: KeyboardEventType) => boolean;
declare const isEscapeEvent: (ev: KeyboardEventType) => boolean;
export { isEnterEvent, isSpaceEvent, isEscapeEvent, isArrowDownEvent, isArrowUpEvent, KeyboardEventType, };
//# sourceMappingURL=keyboardEvents.d.ts.map