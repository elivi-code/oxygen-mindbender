import { UniqueIdentifier } from '@dnd-kit/core';
import {
  ColumnManagementItemsProps,
  ColumnsType,
} from '../types/ColumnManagement';

export const findContainer = (
  id: UniqueIdentifier,
  items: ColumnManagementItemsProps,
): ColumnsType | undefined => {
  const keys = Object.keys(items) as Array<keyof ColumnManagementItemsProps>;

  if (id in items) {
    return id as ColumnsType;
  }

  for (const key of keys) {
    const container = items[key];
    const foundItem = container.find(item => item.id === id);

    if (foundItem) {
      return key as ColumnsType;
    }
  }

  return undefined;
};
