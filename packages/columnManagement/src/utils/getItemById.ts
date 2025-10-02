import { UniqueIdentifier } from '@dnd-kit/core';
import { ColumnInterface } from '../types/ColumnManagement';

export function getItemById(id: UniqueIdentifier, list: ColumnInterface[]) {
  return list.find(item => item.id === id);
}
