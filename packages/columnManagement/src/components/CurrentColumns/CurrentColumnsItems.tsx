import React, { useContext } from 'react';

import { useOxygen } from '@8x8/oxygen-config';
import { SortableItem } from '../SortableList/SortableItem';
import { ColumnItem } from '../ColumnItem/ColumnItem';
import { ColumnInterface, ColumnsType } from '../../types/ColumnManagement';
import { ColumnManagementContext } from '../../context/ColumnManagementProvider';
import { getIndexById } from '../../utils/getIndexById';
import { EmptyStateMessage } from '../ColumnManagement/EmptyStateMessage';

export const CurrentColumnsItems = () => {
  const {
    translations: { currentEmptyStateMessage },
    telemetryProps,
    setItems,
    setActiveId,
    setIsCurrentItemsChanged,
    announceColumnChange,
    items: { currentColumns },
  } = useContext(ColumnManagementContext);
  const { telemetryCallback } = useOxygen();

  const onRemove = (item: ColumnInterface) => {
    if (telemetryProps && telemetryCallback) {
      telemetryCallback('column_removed', {
        ...telemetryProps,
        columnName: item.name,
        fromPosition: getIndexById(item.id, currentColumns),
      });
    }

    announceColumnChange(item.name, 'removed');

    if (setIsCurrentItemsChanged) {
      setIsCurrentItemsChanged(true);
    }

    if (setActiveId) setActiveId(item.id);

    if (setItems) {
      setItems(removeItems => {
        return {
          ...removeItems,
          currentColumns: removeItems.currentColumns.filter(
            (itemActive: ColumnInterface) => itemActive.id !== item.id,
          ),
          availableColumns: removeItems.availableColumns.concat(item),
        };
      });
    }
  };

  return (
    <>
      <EmptyStateMessage
        items={currentColumns}
        message={currentEmptyStateMessage}
      />
      {currentColumns.map(item => (
        <SortableItem
          id={item.id}
          name={item.name}
          isDraggable={!item.isLocked}
          isDroppable={!item.isLocked}
          key={item.id}
        >
          <ColumnItem
            item={item}
            onAction={onRemove}
            type={ColumnsType.CurrentColumns}
          />
        </SortableItem>
      ))}
    </>
  );
};
