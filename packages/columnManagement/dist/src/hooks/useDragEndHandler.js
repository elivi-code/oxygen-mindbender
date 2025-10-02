import { useCallback } from 'react';
import { arrayMove } from '@dnd-kit/sortable';
import { useOxygen } from '@8x8/oxygen-config';
import { findContainer } from '../utils/findContainer';
import { ColumnsType, } from '../types/ColumnManagement';
import { getIndexById } from '../utils/getIndexById';
import { getItemById } from '../utils/getItemById';
import { removeItemById } from '../utils/removeItemById';
import { addElementAtPosition } from '../utils/addElementAtPosition';
export function useDragEndHandler({ items, setItems, activeContainerDragEnd, setActiveContainerDragEnd, setIsCurrentItemsChanged, activeId, setActiveId, telemetryProps, setIsAvailableColumnRemovable, }) {
    const { telemetryCallback } = useOxygen();
    const handleDragEnd = useCallback((event) => {
        const { active, over } = event;
        if (!over || !active)
            return;
        const activeContainer = findContainer(active.id, items);
        const overContainer = findContainer(over.id, items);
        if (!activeContainer || !overContainer)
            return;
        const activeIndex = getIndexById(active.id, items[activeContainer]);
        const activeItem = getItemById(active.id, items[activeContainer]);
        const overIndex = getIndexById(over.id, items[overContainer]);
        if (!activeItem)
            return;
        if (activeContainer === ColumnsType.CurrentColumns &&
            overContainer === ColumnsType.AvailableColumns) {
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
                    [overContainer]: addElementAtPosition(overItems, activeItems[activeIndex], newOverIndex),
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
        if (active.id === over?.id)
            return;
        if (activeIndex !== overIndex &&
            activeContainer === overContainer &&
            activeContainer === ColumnsType.CurrentColumns) {
            if (activeContainerDragEnd !== ColumnsType.AvailableColumns &&
                telemetryProps &&
                telemetryCallback) {
                telemetryCallback('edit_columns_order', {
                    ...telemetryProps,
                    columnName: activeItem.name,
                    fromPosition: activeIndex,
                    toPosition: overIndex,
                });
            }
            setItems(activeItems => ({
                ...activeItems,
                [overContainer]: arrayMove(activeItems[overContainer], activeIndex, overIndex),
            }));
        }
        setActiveId(undefined);
        setActiveContainerDragEnd(undefined);
    }, [activeId, items]);
    return handleDragEnd;
}
