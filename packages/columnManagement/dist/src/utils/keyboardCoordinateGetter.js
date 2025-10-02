import { KeyboardCode, closestCorners, getFirstCollision, } from '@dnd-kit/core';
import { ColumnsType } from '../types/ColumnManagement';
const directions = [
    KeyboardCode.Down,
    KeyboardCode.Right,
    KeyboardCode.Up,
    KeyboardCode.Left,
];
/**
 * This function is based on the example provided on SB from `dnd-kit`
 * https://github.com/clauderic/dnd-kit/blob/master/stories/2%20-%20Presets/Sortable/multipleContainersKeyboardCoordinates.ts
 */
export const keyboardCoordinateGetter = (event, { context: { active, over, droppableRects, droppableContainers, collisionRect, }, }) => {
    if (directions.includes(event.code)) {
        event.preventDefault();
        if (!active || !collisionRect) {
            return;
        }
        const filteredContainers = getFilteredCollisions(active, droppableContainers, droppableRects, event.code, collisionRect);
        if (!filteredContainers)
            return;
        const collisions = closestCorners({
            active,
            collisionRect,
            droppableRects,
            droppableContainers: filteredContainers,
            pointerCoordinates: null,
        });
        let closestId = getFirstCollision(collisions, 'id');
        /**
         *  This is a workaround to fix the issue when zoom in is used - preventing the item to be moved properly.
         *  Based on https://github.com/clauderic/dnd-kit/blob/master/packages/sortable/src/sensors/keyboard/sortableKeyboardCoordinates.ts#L86
         */
        if (closestId === over?.id && collisions.length > 1) {
            closestId = collisions[1].id;
        }
        if (closestId != null) {
            // eslint-disable-next-line consistent-return
            return getRectPosition(droppableContainers, closestId);
        }
    }
};
// eslint-disable-next-line consistent-return
function getRectPosition(droppableContainers, closestId) {
    const newDroppable = droppableContainers.get(closestId);
    const newNode = newDroppable?.node.current;
    const newRect = newDroppable?.rect.current;
    if (newNode && newRect) {
        const yOffset = newDroppable.data.current?.type === 'container' ? 80 : 0;
        return {
            x: newRect.left,
            y: newRect.top + yOffset,
        };
    }
}
function getFilteredCollisions(active, droppableContainers, droppableRects, eventCode, collisionRect) {
    if (!active || !collisionRect) {
        return;
    }
    const filteredContainers = [];
    droppableContainers.forEach(entry => {
        if (!entry || entry?.disabled) {
            return;
        }
        const rect = droppableRects.get(entry.id);
        if (!rect) {
            return;
        }
        const data = entry.data.current;
        if (data &&
            data.type === 'container' &&
            data.children?.length > 0 &&
            active.data.current?.type !== 'container' &&
            !data.children.every((child) => child.isLocked === true)) {
            return;
        }
        const isSortingFromCurrentToAvailable = active?.data?.current?.sortable.containerId ===
            ColumnsType.CurrentColumns &&
            data?.sortable.containerId === ColumnsType.AvailableColumns;
        const keyActions = {
            [KeyboardCode.Down]: () => {
                if (isSortingFromCurrentToAvailable)
                    return;
                if (collisionRect.top < rect.top) {
                    filteredContainers.push(entry);
                }
            },
            [KeyboardCode.Up]: () => {
                if (isSortingFromCurrentToAvailable)
                    return;
                if (collisionRect.top > rect.top) {
                    filteredContainers.push(entry);
                }
            },
            [KeyboardCode.Left]: () => {
                if (collisionRect.left >= rect.left + rect.width) {
                    filteredContainers.push(entry);
                }
            },
            [KeyboardCode.Right]: () => {
                if (collisionRect.left + collisionRect.width <= rect.left) {
                    filteredContainers.push(entry);
                }
            },
        };
        keyActions[eventCode]();
    });
    // eslint-disable-next-line consistent-return
    return filteredContainers;
}
