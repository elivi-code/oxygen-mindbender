import React from 'react';
import EventKey from '../hooks/eventKeyHandlers/EventKey';

type KeyboardEventType = KeyboardEvent | React.KeyboardEvent;

const isArrowUpEvent = (ev: KeyboardEventType): boolean =>
  ev.key === EventKey.ArrowUp;

const isArrowDownEvent = (ev: KeyboardEventType): boolean =>
  ev.key === EventKey.ArrowDown;

const isEnterEvent = (ev: KeyboardEventType) => ev.key === EventKey.Enter;

const isSpaceEvent = (ev: KeyboardEventType) =>
  ev.code === EventKey.Space || ev.key === EventKey.Space;

const isEscapeEvent = (ev: KeyboardEventType) => ev.key === EventKey.Escape;

export {
  isEnterEvent,
  isSpaceEvent,
  isEscapeEvent,
  isArrowDownEvent,
  isArrowUpEvent,
  KeyboardEventType,
};
