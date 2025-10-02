import { UniqueIdentifier } from '@dnd-kit/core';
import { ColumnInterface } from '../types/ColumnManagement';

export function getIndexById(
  id: UniqueIdentifier,
  items: ColumnInterface[],
): number {
  return items.findIndex(item => item.id === id);
}
