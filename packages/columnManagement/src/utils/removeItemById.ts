import { UniqueIdentifier } from '@dnd-kit/core';
import { ColumnInterface } from '../types/ColumnManagement';

export function removeItemById(list: ColumnInterface[], id: UniqueIdentifier) {
  return list.filter((item: ColumnInterface) => item.id !== id);
}
