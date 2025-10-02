import { DragOverEvent } from '@dnd-kit/core';
import { findContainer } from '../utils/findContainer';
import {
  ColumnManagementItemsProps,
  ColumnsType,
} from '../types/ColumnManagement';
import { getIndexById } from '../utils/getIndexById';
import { getItemById } from '../utils/getItemById';
import { removeItemById } from '../utils/removeItemById';
import { addElementAtPosition } from '../utils/addElementAtPosition';

interface dragOverHandlerProps {
  items: ColumnManagementItemsProps;
  setItems: React.Dispatch<React.SetStateAction<ColumnManagementItemsProps>>;
  activeContainerDragEnd: ColumnsType | undefined;
  setIsAvailableColumnRemovable: React.Dispatch<React.SetStateAction<boolean>>;
}

export function useDragOverHandler({
  items,
  setItems,
  activeContainerDragEnd,
  setIsAvailableColumnRemovable,
}: dragOverHandlerProps) {
  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;

    setIsAvailableColumnRemovable(false);

    if (!over || !active || active.id === over?.id) return;

    const activeContainer = findContainer(active.id, items);
    const overContainer = findContainer(over.id, items);

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer === overContainer
    ) {
      return;
    }

    // ignore if dragged from currentItems and dropped in availableItems, unless item it's not dropped yet
    if (
      activeContainer === ColumnsType.CurrentColumns &&
      overContainer === ColumnsType.AvailableColumns &&
      activeContainerDragEnd !== ColumnsType.AvailableColumns
    ) {
      setIsAvailableColumnRemovable(true);

      return;
    }

    const activeIndex = getIndexById(active.id, items[activeContainer]);
    const activeItem = getItemById(active.id, items[activeContainer]);

    if (!activeItem) {
      return;
    }

    setItems(prev => {
      const activeItems = prev[activeContainer];
      const overItems = prev[overContainer];
      const overIndex = getIndexById(over.id, overItems);

      let newIndex: number;

      if (over.id in items) {
        newIndex = overItems.length + 1;
      } else {
        const isBelowOverItem =
          over &&
          active.rect.current.translated &&
          active.rect.current.translated.top > over.rect.top + over.rect.height;

        const modifier = isBelowOverItem ? 1 : 0;

        newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
      }

      return {
        ...prev,
        [activeContainer]: removeItemById(activeItems, active.id),
        [overContainer]: addElementAtPosition(
          overItems,
          activeItems[activeIndex],
          newIndex,
        ),
      };
    });
  };

  return handleDragOver;
}
