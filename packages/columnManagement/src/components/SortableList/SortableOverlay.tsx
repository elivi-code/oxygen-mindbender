import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  DragOverlay,
  DropAnimation,
  defaultDropAnimationSideEffects,
  useDndContext,
} from '@dnd-kit/core';
import { isKeyboardEvent } from '@dnd-kit/utilities';

export function SortableOverlay({ children }: PropsWithChildren) {
  const { activeNodeRect, activatorEvent } = useDndContext();
  const isKeyboardSorting = isKeyboardEvent(activatorEvent);

  const dropAnimationConfig: DropAnimation = {
    duration: 500,
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: '1',
        },
      },
    }),
  };

  return (
    <DragOverlay
      zIndex={isKeyboardSorting ? 1 : undefined}
      dropAnimation={dropAnimationConfig}
      style={{
        cursor: 'grabbing',
        visibility: 'visible',
        width: activeNodeRect?.width,
      }}
    >
      {children}
    </DragOverlay>
  );
}
