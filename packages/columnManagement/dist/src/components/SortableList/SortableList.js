import React from 'react';
import { SortableContext, verticalListSortingStrategy, } from '@dnd-kit/sortable';
export const SortableList = ({ children, items, type, }) => {
    return (React.createElement(SortableContext, { items: items, strategy: verticalListSortingStrategy, id: type }, React.cloneElement(children)));
};
