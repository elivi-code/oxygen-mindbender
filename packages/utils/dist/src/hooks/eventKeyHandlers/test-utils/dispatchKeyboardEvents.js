const dispatchKeyDownEvent = (key) => {
    document.dispatchEvent(new KeyboardEvent('keydown', { key }));
};
export default dispatchKeyDownEvent;
