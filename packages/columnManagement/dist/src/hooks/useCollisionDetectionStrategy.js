import { useCallback } from 'react';
import { closestCenter, getFirstCollision, pointerWithin, rectIntersection, } from '@dnd-kit/core';
import { ColumnsType, } from '../types/ColumnManagement';
/* eslint-disable no-param-reassign */
export function useCollisionDetectionStrategy(items, activeId, lastOverId) {
    /**
     * Custom collision detection strategy optimized for multiple containers
     *
     * - First, find any droppable containers intersecting with the pointer.
     * - If there are none, find intersecting containers with the active draggable.
     * - If there are no intersecting containers, return the last matched intersection
     *
     *  This function is based on the example provided from the library on storybook
     *  https://github.com/clauderic/dnd-kit/blob/master/stories/2%20-%20Presets/Sortable/MultipleContainers.tsx#L195
     */
    const collisionDetectionStrategy = useCallback(args => {
        // Start by finding any intersecting droppable
        const intersections = args.pointerCoordinates
            ? pointerWithin(args)
            : rectIntersection(args);
        let overId = getFirstCollision(intersections, 'id');
        // If no droppable is matched, return the last match
        if (overId === null) {
            return lastOverId.current ? [{ id: lastOverId.current }] : [];
        }
        // No container is matched
        if (!(overId in items)) {
            lastOverId.current = overId;
            return [{ id: overId }];
        }
        const containerItems = items[overId];
        // If a container is matched
        if (containerItems.length > 0) {
            if (overId === ColumnsType.CurrentColumns &&
                containerItems.every(item => item.isLocked)) {
                return [{ id: overId }];
            }
            overId = closestCenter({
                ...args,
                droppableContainers: args.droppableContainers.filter(container => container.id !== overId &&
                    containerItems.some((item) => item.id === container.id)),
            })[0]?.id;
        }
        lastOverId.current = overId;
        return [{ id: overId }];
    }, [activeId, items]);
    return collisionDetectionStrategy;
}
