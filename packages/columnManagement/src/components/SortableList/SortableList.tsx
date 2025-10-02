import React from 'react';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import { SortableListProps } from '../../types/SortableList';

export const SortableList: React.FC<SortableListProps> = ({
  children,
  items,
  type,
}) => {
  return (
    <SortableContext
      items={items}
      strategy={verticalListSortingStrategy}
      id={type}
    >
      {React.cloneElement(children)}
    </SortableContext>
  );
};
