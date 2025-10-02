import React, { useContext, useEffect, useMemo, useState } from 'react';
import differenceBy from 'lodash.differenceby';
import {
  DndContext,
  KeyboardSensor,
  MeasuringStrategy,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';

import { getTestAttributes } from '@8x8/oxygen-config';
import { useAriaLive } from '@8x8/oxygen-utils';

import {
  ColumnManagementProps,
  ColumnManagementItemsProps,
  ColumnsType,
} from '../../types/ColumnManagement';
import { CurrentColumns } from '../CurrentColumns/CurrentColumns';
import { AvailableColumns } from '../AvailableColumns/AvailableColumns';
import { Wrapper } from './styled/ColumnManagement';
import { useDragHandler } from '../../hooks/useDragHandler';
import {
  ColumnManagementContext,
  ColumnManagementContextProps,
} from '../../context/ColumnManagementProvider';
import { DEFAULT_TRANSLATIONS } from '../../constants/translations';
import { ModalColumnManagementContext } from '../../context/ModalColumnManagementProvider';
import { Container } from '../SortableList/Container';
import { SortableOverlay } from '../SortableList/SortableOverlay';
import { ColumnItemOverlay } from '../ColumnItem/ColumnItemOverlay';
import { findContainer } from '../../utils/findContainer';
import { keyboardCoordinateGetter } from '../../utils/keyboardCoordinateGetter';

export const ColumnManagement = ({
  availableColumns,
  currentColumns,
  onUpdate,
  testId = 'COLUMN_MANAGEMENT',
  translations,
  telemetryProps,
}: ColumnManagementProps) => {
  const { isResetBtnTriggered, defaultColumns, initialCurrentColumns } =
    useContext(ModalColumnManagementContext);
  const [items, setItems] = useState<ColumnManagementItemsProps>({
    currentColumns,
    availableColumns: differenceBy(availableColumns, currentColumns, 'name'),
  });
  const containers = Object.keys(items);
  const { announce } = useAriaLive();

  const {
    activeId,
    setActiveId,
    isCurrentItemsChanged,
    setIsCurrentItemsChanged,
    collisionDetectionStrategy,
    handleDragStart,
    handleDragEnd,
    handleDragCancel,
    handleDragOver,
    isAvailableColumnRemovable,
  } = useDragHandler(items, setItems, telemetryProps);

  const containerType = activeId ? findContainer(activeId, items) : undefined;

  const announceColumnChange = (
    columnName: string,
    action: 'added' | 'removed',
  ) => {
    const getMessage =
      action === 'added'
        ? translations?.getColumnAddedMessage ||
          DEFAULT_TRANSLATIONS.getColumnAddedMessage
        : translations?.getColumnRemovedMessage ||
          DEFAULT_TRANSLATIONS.getColumnRemovedMessage;

    const message = getMessage ? getMessage(columnName) : '';

    announce(message);
  };

  const columnManagementContextValues: ColumnManagementContextProps =
    useMemo(() => {
      return {
        translations: {
          addBtnTitle:
            translations?.addBtnTitle || DEFAULT_TRANSLATIONS.addBtnTitle,
          availableTitle:
            translations?.availableTitle || DEFAULT_TRANSLATIONS.availableTitle,
          currentTitle:
            translations?.currentTitle || DEFAULT_TRANSLATIONS.currentTitle,
          draggableBtnTitle:
            translations?.draggableBtnTitle ||
            DEFAULT_TRANSLATIONS.draggableBtnTitle,
          availableEmptyStateMessage:
            translations?.availableEmptyStateMessage ||
            DEFAULT_TRANSLATIONS.availableEmptyStateMessage,
          currentEmptyStateMessage:
            translations?.currentEmptyStateMessage ||
            DEFAULT_TRANSLATIONS.currentEmptyStateMessage,
          lockIconTitle:
            translations?.lockIconTitle || DEFAULT_TRANSLATIONS.lockIconTitle,
          removeBtnTitle:
            translations?.removeBtnTitle || DEFAULT_TRANSLATIONS.removeBtnTitle,
          getColumnAddedMessage:
            translations?.getColumnAddedMessage ||
            DEFAULT_TRANSLATIONS.getColumnAddedMessage,
          getColumnRemovedMessage:
            translations?.getColumnRemovedMessage ||
            DEFAULT_TRANSLATIONS.getColumnRemovedMessage,
        },
        items,
        setItems,
        setIsCurrentItemsChanged,
        isAvailableColumnRemovable,
        activeId,
        setActiveId,
        testId,
        telemetryProps,
        announceColumnChange,
      };
    }, [
      items,
      setItems,
      setActiveId,
      activeId,
      testId,
      isAvailableColumnRemovable,
      telemetryProps,
      translations,
    ]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        // Require pointer to move by 5 pixels before activating draggable
        // Allows nested onClicks/buttons/interactions to be accessed
        distance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: keyboardCoordinateGetter,
    }),
  );

  useEffect(() => {
    onUpdate(items.currentColumns);
  }, [isCurrentItemsChanged, isResetBtnTriggered]);

  useEffect(() => {
    if (!isResetBtnTriggered) {
      return;
    }

    const resetCurrentItems = !defaultColumns
      ? initialCurrentColumns
      : defaultColumns;

    setItems(resetItems => {
      return {
        ...resetItems,
        currentColumns: resetCurrentItems,
        availableColumns: differenceBy(
          availableColumns,
          resetCurrentItems,
          'name',
        ),
      };
    });
  }, [isResetBtnTriggered]);

  return (
    <ColumnManagementContext.Provider value={columnManagementContextValues}>
      <Wrapper {...getTestAttributes(testId)}>
        <DndContext
          sensors={sensors}
          collisionDetection={collisionDetectionStrategy}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDragCancel={handleDragCancel}
          onDragOver={handleDragOver}
          measuring={{
            droppable: {
              strategy: MeasuringStrategy.Always,
            },
          }}
        >
          <SortableContext items={containers}>
            <Container
              id={ColumnsType.CurrentColumns}
              items={items.currentColumns}
            >
              <CurrentColumns />
            </Container>
            <Container
              id={ColumnsType.AvailableColumns}
              items={items.availableColumns}
            >
              <AvailableColumns />
            </Container>
          </SortableContext>
          <SortableOverlay>
            {activeId && containerType ? (
              <ColumnItemOverlay
                testId={testId}
                type={containerType}
                items={items}
                activeId={activeId}
              />
            ) : null}
          </SortableOverlay>
        </DndContext>
      </Wrapper>
    </ColumnManagementContext.Provider>
  );
};
