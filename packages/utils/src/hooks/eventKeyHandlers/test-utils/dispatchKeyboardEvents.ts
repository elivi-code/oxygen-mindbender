import EventKey from '../EventKey';

const dispatchKeyDownEvent = (key: EventKey): void => {
  document.dispatchEvent(new KeyboardEvent('keydown', { key }));
};

export default dispatchKeyDownEvent;
