import { useCallback } from 'react';
import { DragStartEvent, UniqueIdentifier } from '@dnd-kit/core';

import { findContainer } from '../utils/findContainer';
import {
  ColumnManagementItemsProps,
  ColumnsType,
} from '../types/ColumnManagement';

interface dragStartHandlerProps {
  items: ColumnManagementItemsProps;
  setActiveContainerDragEnd: React.Dispatch<
    React.SetStateAction<ColumnsType | undefined>
  >;
  setIsCurrentItemsChanged: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveId: React.Dispatch<
    React.SetStateAction<UniqueIdentifier | undefined>
  >;
}

export function useDragStartHandler({
  items,
  setActiveContainerDragEnd,
  setIsCurrentItemsChanged,
  setActiveId,
}: dragStartHandlerProps) {
  const handleDragStart = useCallback(
    ({ active }: DragStartEvent) => {
      const { id } = active;

      const activeContainer = findContainer(id, items);

      setActiveContainerDragEnd(activeContainer);
      setIsCurrentItemsChanged(false);
      setActiveId(id);
    },
    [items],
  );

  return handleDragStart;
}
