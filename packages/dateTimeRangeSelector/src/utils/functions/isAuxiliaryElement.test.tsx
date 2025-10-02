import isAuxiliaryElement from './isAuxiliaryElement';

describe('isAuxiliaryElement', () => {
  const container = document.createElement('div');
  const innerBox = document.createElement('div');
  const outerBox = document.createElement('div');
  const elementRef = {
    current: container,
  };

  container.appendChild(innerBox);
  document.body.appendChild(container);
  document.body.appendChild(outerBox);

  it('should return true when the target is the element', () => {
    const eventTarget = container;

    expect(isAuxiliaryElement(eventTarget, elementRef)).toBe(true);
  });

  it('should return true when the target is contained by the element', () => {
    const eventTarget = innerBox;

    expect(isAuxiliaryElement(eventTarget, elementRef)).toBe(true);
  });

  it('should return false when the target is outside the element', () => {
    const eventTarget = outerBox;

    expect(isAuxiliaryElement(eventTarget, elementRef)).toBe(false);
  });

  it('should return false when there is no element ref', () => {
    expect(isAuxiliaryElement(container, {})).toBe(false);
  });
});
