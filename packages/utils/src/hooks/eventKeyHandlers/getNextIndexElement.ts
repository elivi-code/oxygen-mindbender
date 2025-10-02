/**
 * @param {boolean} direction - true for down arrow, false for up arrow
 * @param {number} elementCount - list size
 * @param {number} currentIndex - current element index
 * @returns {number} represents the index of the next focusable element
 */
const getNextIndexElement = (
  direction: boolean,
  elementCount: number,
  currentIndex: number,
): number => {
  let prevIndex = currentIndex;

  if (prevIndex >= elementCount) {
    prevIndex = elementCount - 1;
  }

  if (prevIndex <= 0 && !direction) {
    // Focus last element of the list if we reached the first element and direction is upwards
    return elementCount - 1;
  }

  if (prevIndex === elementCount - 1 && direction) {
    // Focus first element if we reached the end of the list and direction is downwards
    return 0;
  }

  if (direction) {
    return prevIndex + 1;
  }

  return prevIndex - 1;
};

export default getNextIndexElement;
