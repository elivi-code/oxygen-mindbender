import React, { useContext } from 'react';

import { useOxygen } from '@8x8/oxygen-config';
import { TrashIcon } from '@8x8/oxygen-icon';
import { ColumnInterface, ColumnsType } from '../../types/ColumnManagement';
import { SortableItem } from '../SortableList/SortableItem';
import { ColumnItem } from '../ColumnItem/ColumnItem';
import { ColumnManagementContext } from '../../context/ColumnManagementProvider';

import {
  AvailableContainerActions,
  AvailableContainerIconDiv,
  AvailableContainerStyled,
  AvailableElement,
} from './styled/AvailableColumnsItems';
import { EmptyStateMessage } from '../ColumnManagement/EmptyStateMessage';

export const AvailableColumnsItems = ({
  items,
}: {
  items: ColumnInterface[];
}) => {
  const {
    translations: { availableEmptyStateMessage },
    telemetryProps,
    setItems,
    setActiveId,
    isAvailableColumnRemovable,
    setIsCurrentItemsChanged,
    announceColumnChange,
  } = useContext(ColumnManagementContext);
  const { telemetryCallback } = useOxygen();

  const onAdd = (item: ColumnInterface) => {
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

    if (setActiveId) setActiveId(item.id);

    if (setItems) {
      setItems(addItems => {
        return {
          ...addItems,
          availableColumns: addItems.availableColumns.filter(
            (itemAvailable: ColumnInterface) => itemAvailable.id !== item.id,
          ),
          currentColumns: addItems.currentColumns.concat(item),
        };
      });
    }
  };

  return (
    <AvailableContainerStyled isRemovable={isAvailableColumnRemovable}>
      <AvailableContainerActions isRemovable={isAvailableColumnRemovable}>
        <AvailableContainerIconDiv>
          <TrashIcon size={24} aria-hidden />
        </AvailableContainerIconDiv>
      </AvailableContainerActions>
      <EmptyStateMessage items={items} message={availableEmptyStateMessage} />
      <AvailableElement>
        {items.map((item: ColumnInterface) => (
          <SortableItem
            id={item.id}
            name={item.name}
            isDraggable
            isDroppable
            key={item.id}
          >
            <ColumnItem
              item={item}
              onAction={onAdd}
              type={ColumnsType.AvailableColumns}
            />
          </SortableItem>
        ))}
      </AvailableElement>
    </AvailableContainerStyled>
  );
};
