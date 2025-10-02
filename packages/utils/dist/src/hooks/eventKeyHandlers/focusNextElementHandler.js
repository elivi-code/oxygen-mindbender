import getNextIndexElement from './getNextIndexElement';
const focusNextElementHandler = (direction, elementCount, setFocusIdHandler) => {
    setFocusIdHandler((prevState) => getNextIndexElement(direction, elementCount, prevState));
};
export default focusNextElementHandler;
