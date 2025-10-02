import { useCallback } from 'react';
import { findContainer } from '../utils/findContainer';
export function useDragStartHandler({ items, setActiveContainerDragEnd, setIsCurrentItemsChanged, setActiveId, }) {
    const handleDragStart = useCallback(({ active }) => {
        const { id } = active;
        const activeContainer = findContainer(id, items);
        setActiveContainerDragEnd(activeContainer);
        setIsCurrentItemsChanged(false);
        setActiveId(id);
    }, [items]);
    return handleDragStart;
}
