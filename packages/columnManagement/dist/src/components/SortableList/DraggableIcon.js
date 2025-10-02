import React from 'react';
import { DotsDoubleVerticalIcon } from '@8x8/oxygen-icon';
import { DraggableIconButton } from './styled/SortableItem';
export const DraggableIcon = ({ isActionFocused, label, }) => {
    return (React.createElement(DraggableIconButton, { "aria-label": label, isActionFocused: isActionFocused },
        React.createElement(DotsDoubleVerticalIcon, { size: 16 })));
};
