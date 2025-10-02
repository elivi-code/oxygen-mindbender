export default function isAuxiliaryElement(eventTarget, elementRef) {
  if (elementRef.current) {
    return elementRef.current.contains(eventTarget) || elementRef.current === eventTarget;
  }
  return false;
}