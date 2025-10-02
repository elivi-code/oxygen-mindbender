import React, { useContext } from 'react';
import { useOxygen } from '@8x8/oxygen-config';
import { TrashIcon } from '@8x8/oxygen-icon';
import { ColumnsType } from '../../types/ColumnManagement';
import { SortableItem } from '../SortableList/SortableItem';
import { ColumnItem } from '../ColumnItem/ColumnItem';
import { ColumnManagementContext } from '../../context/ColumnManagementProvider';
import { AvailableContainerActions, AvailableContainerIconDiv, AvailableContainerStyled, AvailableElement, } from './styled/AvailableColumnsItems';
import { EmptyStateMessage } from '../ColumnManagement/EmptyStateMessage';
export const AvailableColumnsItems = ({ items, }) => {
    const { translations: { availableEmptyStateMessage }, telemetryProps, setItems, setActiveId, isAvailableColumnRemovable, setIsCurrentItemsChanged, announceColumnChange, } = useContext(ColumnManagementContext);
    const { telemetryCallback } = useOxygen();
    const onAdd = (item) => {
        if (telemetryProps && telemetryCallback) {
            telemetryCallback('column_added', {
                ...telemetryProps,
                columnName: item.name,
            });
        }
        announceColumnChange(item.name, 'added');
        if (setIsCurrentItemsChanged) {
            setIsCurrentItemsChanged(true);
        }
        if (setActiveId)
            setActiveId(item.id);
        if (setItems) {
            setItems(addItems => {
                return {
                    ...addItems,
                    availableColumns: addItems.availableColumns.filter((itemAvailable) => itemAvailable.id !== item.id),
                    currentColumns: addItems.currentColumns.concat(item),
                };
            });
        }
    };
    return (React.createElement(AvailableContainerStyled, { isRemovable: isAvailableColumnRemovable },
        React.createElement(AvailableContainerActions, { isRemovable: isAvailableColumnRemovable },
            React.createElement(AvailableContainerIconDiv, null,
                React.createElement(TrashIcon, { size: 24, "aria-hidden": true }))),
        React.createElement(EmptyStateMessage, { items: items, message: availableEmptyStateMessage }),
        React.createElement(AvailableElement, null, items.map((item) => (React.createElement(SortableItem, { id: item.id, name: item.name, isDraggable: true, isDroppable: true, key: item.id },
            React.createElement(ColumnItem, { item: item, onAction: onAdd, type: ColumnsType.AvailableColumns })))))));
};
