import React from 'react';

import { getTestAttributes } from '@8x8/oxygen-config';
import { ColumnItemOverlayProps } from '../../types/ColumnItem';
import { Item, Label } from './styled/ColumnItem';
import { Item as Wrapper } from '../SortableList/styled/SortableItem';
import { getItemById } from '../../utils/getItemById';

export const ColumnItemOverlay = ({
  items,
  activeId,
  type,
  testId,
}: ColumnItemOverlayProps) => {
  const activeItem = getItemById(activeId, items[type]);

  if (!activeItem) return null;

  return (
    <Wrapper isOverlay>
      <Item {...getTestAttributes(`${testId}_COLUMN_ITEM_OVERLAY`)}>
        <Label>{activeItem.name}</Label>
      </Item>
    </Wrapper>
  );
};
