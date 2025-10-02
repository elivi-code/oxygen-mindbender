import React, { useContext, useEffect, useState } from 'react';
import { CSS } from '@dnd-kit/utilities';
import { useSortable } from '@dnd-kit/sortable';
import { getTestAttributes } from '@8x8/oxygen-config';

import { SortableItemProps } from '../../types/SortableList';
import { Item, Wrapper } from './styled/SortableItem';
import { DraggableIcon } from './DraggableIcon';
import { ColumnManagementContext } from '../../context/ColumnManagementProvider';
import { ColumnsType } from '../../types/ColumnManagement';

export const SortableItem = (props: SortableItemProps) => {
  const {
    activeId,
    testId,
    isAvailableColumnRemovable,
    translations: { draggableBtnTitle },
  } = useContext(ColumnManagementContext);

  const [isActionFocused, setIsActionFocused] = useState(false);
  const [isCurrentActive, setIsCurrentActive] = useState(false);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    node,
    over,
    active,
  } = useSortable({
    id: props.id,
    disabled: {
      draggable: !props.isDraggable,
      droppable: !props.isDroppable,
    },
    attributes: {
      role: 'row',
    },
  });

  useEffect(() => {
    if (activeId) node?.current?.focus();
  }, []);

  useEffect(() => {
    setIsCurrentActive(
      active?.data?.current?.sortable.containerId ===
        ColumnsType.CurrentColumns && !isAvailableColumnRemovable,
    );
  }, [over, active]);

  const childrenWithProps = React.Children.map(props.children, child => {
    // Checking isValidElement is the safe way and avoids a typescript error too.
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        setIsActionFocused,
      } as {
        setIsActionFocused: React.Dispatch<React.SetStateAction<boolean>>;
      });
    }

    return child;
  });

  const renderItem = () => (
    <Item
      isDraggable={props.isDraggable}
      isOverlay={props.isOverlay}
      transform={CSS.Translate.toString(isCurrentActive ? transform : null)}
      transition={transition}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      {...getTestAttributes(`${testId}_SORTABLE_ITEM_${props.id}`)}
    >
      {!props.isOverlay && (
        <DraggableIcon
          label={`${draggableBtnTitle} ${props.name}`}
          isActionFocused={isActionFocused}
        />
      )}
      {childrenWithProps}
    </Item>
  );

  return (
    <Wrapper isGhost={over?.id === props.id && isCurrentActive} key={props.id}>
      {renderItem()}
    </Wrapper>
  );
};
