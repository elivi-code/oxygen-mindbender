import EventKey from '../hooks/eventKeyHandlers/EventKey';
const isArrowUpEvent = (ev) => ev.key === EventKey.ArrowUp;
const isArrowDownEvent = (ev) => ev.key === EventKey.ArrowDown;
const isEnterEvent = (ev) => ev.key === EventKey.Enter;
const isSpaceEvent = (ev) => ev.code === EventKey.Space || ev.key === EventKey.Space;
const isEscapeEvent = (ev) => ev.key === EventKey.Escape;
export { isEnterEvent, isSpaceEvent, isEscapeEvent, isArrowDownEvent, isArrowUpEvent, };
