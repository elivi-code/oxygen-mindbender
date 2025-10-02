import React from 'react';
import { EmptyMessage } from './styled/EmptyStateMessage';
export const EmptyStateMessage = ({ items, message, }) => {
    if (items.length === 0 && message) {
        return (React.createElement(EmptyMessage, { role: "row" },
            React.createElement("div", { role: "gridcell" }, message)));
    }
    return null;
};
