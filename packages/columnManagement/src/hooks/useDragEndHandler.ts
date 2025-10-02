import { useCallback } from 'react';
import { arrayMove } from '@dnd-kit/sortable';
import { DragEndEvent, UniqueIdentifier } from '@dnd-kit/core';
import { useOxygen } from '@8x8/oxygen-config';

import { findContainer } from '../utils/findContainer';
import {
  ColumnManagementItemsProps,
  ColumnsType,
} from '../types/ColumnManagement';
import { getIndexById } from '../utils/getIndexById';
import { getItemById } from '../utils/getItemById';
import { TelemetryInterface } from '../types/Telemetry';
import { removeItemById } from '../utils/removeItemById';
import { addElementAtPosition } from '../utils/addElementAtPosition';

interface handleDragHandlerProps {
  items: ColumnManagementItemsProps;
  setItems: React.Dispatch<React.SetStateAction<ColumnManagementItemsProps>>;
  activeContainerDragEnd: ColumnsType | undefined;
  setActiveContainerDragEnd: React.Dispatch<
    React.SetStateAction<ColumnsType | undefined>
  >;
  setIsCurrentItemsChanged: React.Dispatch<React.SetStateAction<boolean>>;
  activeId: UniqueIdentifier | undefined;
  setActiveId: React.Dispatch<
    React.SetStateAction<UniqueIdentifier | undefined>
  >;
  telemetryProps?: TelemetryInterface;
  setIsAvailableColumnRemovable: React.Dispatch<React.SetStateAction<boolean>>;
}

export function useDragEndHandler({
  items,
  setItems,
  activeContainerDragEnd,
  setActiveContainerDragEnd,
  setIsCurrentItemsChanged,
  activeId,
  setActiveId,
  telemetryProps,
  setIsAvailableColumnRemovable,
}: handleDragHandlerProps) {
  const { telemetryCallback } = useOxygen();
  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;

      if (!over || !active) return;

      const activeContainer = findContainer(active.id, items);
      const overContainer = findContainer(over.id, items);

      if (!activeContainer || !overContainer) return;

      const activeIndex = getIndexById(active.id, items[activeContainer]);
      const activeItem = getItemById(active.id, items[activeContainer]);
      const overIndex = getIndexById(over.id, items[overContainer]);

      if (!activeItem) return;

      if (
        activeContainer === ColumnsType.CurrentColumns &&
        overContainer === ColumnsType.AvailableColumns
      ) {
        if (telemetryProps && telemetryCallback) {
          telemetryCallback('column_removed', {
            ...telemetryProps,
            columnName: activeItem.name,
            fromPosition: activeIndex,
          });
        }

        setIsAvailableColumnRemovable(false);
        setItems(prev => {
          const activeItems = prev[activeContainer];
          const overItems = prev[overContainer];
          const newOverIndex = getIndexById(over.id, overItems);

          return {
            ...prev,
            [activeContainer]: removeItemById(activeItems, active.id),
            [overContainer]: addElementAtPosition(
              overItems,
              activeItems[activeIndex],
              newOverIndex,
            ),
          };
        });
      }

      if (activeContainerDragEnd === ColumnsType.AvailableColumns) {
        if (telemetryProps && telemetryCallback) {
          telemetryCallback('column_dragged', {
            ...telemetryProps,
            columnName: activeItem.name,
            toPosition: overIndex,
          });
        }
      }

      setActiveContainerDragEnd(activeContainer);
      setIsCurrentItemsChanged(true);
      setIsAvailableColumnRemovable(false);

      if (active.id === over?.id) return;

      if (
        activeIndex !== overIndex &&
        activeContainer === overContainer &&
        activeContainer === ColumnsType.CurrentColumns
      ) {
        if (
          activeContainerDragEnd !== ColumnsType.AvailableColumns &&
          telemetryProps &&
          telemetryCallback
        ) {
          telemetryCallback('edit_columns_order', {
            ...telemetryProps,
            columnName: activeItem.name,
            fromPosition: activeIndex,
            toPosition: overIndex,
          });
        }

        setItems(activeItems => ({
          ...activeItems,
          [overContainer]: arrayMove(
            activeItems[overContainer],
            activeIndex,
            overIndex,
          ),
        }));
      }

      setActiveId(undefined);
      setActiveContainerDragEnd(undefined);
    },
    [activeId, items],
  );

  return handleDragEnd;
}
