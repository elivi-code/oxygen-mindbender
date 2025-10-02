import React from 'react';
import { getTestAttributes } from '@8x8/oxygen-config';
import { Item, Label } from './styled/ColumnItem';
import { Item as Wrapper } from '../SortableList/styled/SortableItem';
import { getItemById } from '../../utils/getItemById';
export const ColumnItemOverlay = ({ items, activeId, type, testId, }) => {
    const activeItem = getItemById(activeId, items[type]);
    if (!activeItem)
        return null;
    return (React.createElement(Wrapper, { isOverlay: true },
        React.createElement(Item, { ...getTestAttributes(`${testId}_COLUMN_ITEM_OVERLAY`) },
            React.createElement(Label, null, activeItem.name))));
};
