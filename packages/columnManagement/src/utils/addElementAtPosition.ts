import { ColumnInterface } from '../types/ColumnManagement';

export function addElementAtPosition(
  list: ColumnInterface[],
  element: ColumnInterface,
  overIndex: number,
) {
  const overContainerLength = list.length;

  if (overIndex !== overContainerLength - 1)
    return [
      ...list.slice(0, overIndex),
      element,
      ...list.slice(overIndex, overContainerLength),
    ];

  return [...list.slice(0, overIndex + 1), element];
}
