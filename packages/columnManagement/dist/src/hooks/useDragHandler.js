import { useCallback, useEffect, useRef, useState } from 'react';
import { useDragStartHandler } from './useDragStartHandler';
import { useDragOverHandler } from './useDragOverHandler';
import { useDragEndHandler } from './useDragEndHandler';
import { useCollisionDetectionStrategy } from './useCollisionDetectionStrategy';
export function useDragHandler(items, setItems, telemetryProps) {
    const [activeId, setActiveId] = useState(undefined);
    const [isCurrentItemsChanged, setIsCurrentItemsChanged] = useState(false);
    const lastOverId = useRef(undefined);
    // State to keep track of the active container when dragging
    const [activeContainerDragEnd, setActiveContainerDragEnd] = useState(undefined);
    const [isAvailableColumnRemovable, setIsAvailableColumnRemovable] = useState(false);
    const handleDragStart = useDragStartHandler({
        items,
        setActiveContainerDragEnd,
        setIsCurrentItemsChanged,
        setActiveId,
    });
    const handleDragOver = useDragOverHandler({
        items,
        setItems,
        activeContainerDragEnd,
        setIsAvailableColumnRemovable,
    });
    const handleDragEnd = useDragEndHandler({
        items,
        setItems,
        activeContainerDragEnd,
        setActiveContainerDragEnd,
        setIsCurrentItemsChanged,
        activeId,
        setActiveId,
        telemetryProps,
        setIsAvailableColumnRemovable,
    });
    const handleDragCancel = useCallback(() => {
        setActiveId(undefined);
        setIsCurrentItemsChanged(false);
        setActiveContainerDragEnd(undefined);
        setIsAvailableColumnRemovable(false);
    }, [activeId]);
    const collisionDetectionStrategy = useCollisionDetectionStrategy(items, activeId, lastOverId);
    useEffect(() => {
        if (isCurrentItemsChanged) {
            setIsCurrentItemsChanged(false);
        }
    }, [isCurrentItemsChanged]);
    return {
        activeId,
        setActiveId,
        isCurrentItemsChanged,
        setIsCurrentItemsChanged,
        collisionDetectionStrategy,
        handleDragStart,
        handleDragEnd,
        handleDragCancel,
        handleDragOver,
        isAvailableColumnRemovable,
    };
}
