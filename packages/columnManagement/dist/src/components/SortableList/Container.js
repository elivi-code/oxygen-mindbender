import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { ContainerWrapper as Wrapper } from './styled/SortableItem';
export const Container = (props) => {
    const { setNodeRef } = useSortable({
        id: props.id,
        data: {
            type: 'container',
            children: props.items,
        },
    });
    return React.createElement(Wrapper, { ref: setNodeRef }, props.children);
};
