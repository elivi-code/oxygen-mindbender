import React from 'react';
import { DragOverlay, defaultDropAnimationSideEffects, useDndContext, } from '@dnd-kit/core';
import { isKeyboardEvent } from '@dnd-kit/utilities';
export function SortableOverlay({ children }) {
    const { activeNodeRect, activatorEvent } = useDndContext();
    const isKeyboardSorting = isKeyboardEvent(activatorEvent);
    const dropAnimationConfig = {
        duration: 500,
        sideEffects: defaultDropAnimationSideEffects({
            styles: {
                active: {
                    opacity: '1',
                },
            },
        }),
    };
    return (React.createElement(DragOverlay, { zIndex: isKeyboardSorting ? 1 : undefined, dropAnimation: dropAnimationConfig, style: {
            cursor: 'grabbing',
            visibility: 'visible',
            width: activeNodeRect?.width,
        } }, children));
}
