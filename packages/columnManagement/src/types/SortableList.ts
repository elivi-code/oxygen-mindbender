import { ReactElement, ReactNode } from 'react';
import { UniqueIdentifier } from '@dnd-kit/core';

import { ColumnInterface, ColumnsType } from './ColumnManagement';

export interface SortableItemProps {
  children?: ReactNode;
  id: UniqueIdentifier;
  name: string;
  isDraggable?: boolean;
  isDroppable?: boolean;
  isOverlay?: boolean;
}

export interface ContainerProps {
  children: ReactNode;
  id: UniqueIdentifier;
  items: ColumnInterface[];
}
export interface ChildrenProps {
  items: ColumnInterface[];
}
export interface SortableListProps {
  children: ReactElement<ColumnInterface[]>;
  items: ColumnInterface[];
  type: ColumnsType;
}
