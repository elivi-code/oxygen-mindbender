import React from 'react';

import { DotsDoubleVerticalIcon } from '@8x8/oxygen-icon';

import { DraggableIconButton } from './styled/SortableItem';

export const DraggableIcon = ({
  isActionFocused,
  label,
}: {
  isActionFocused: boolean;
  label: string;
}) => {
  return (
    <DraggableIconButton aria-label={label} isActionFocused={isActionFocused}>
      <DotsDoubleVerticalIcon size={16} />
    </DraggableIconButton>
  );
};
