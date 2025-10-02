import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { ContainerProps } from '../../types/SortableList';
import { ContainerWrapper as Wrapper } from './styled/SortableItem';

export const Container = (props: ContainerProps) => {
  const { setNodeRef } = useSortable({
    id: props.id,
    data: {
      type: 'container',
      children: props.items,
    },
  });

  return <Wrapper ref={setNodeRef}>{props.children}</Wrapper>;
};
