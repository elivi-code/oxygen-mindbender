/* eslint-disable */
import React from 'react';

interface ContextMenuProps {
  theme?: object;
  children: React.ReactNode;
  id: string;
  testId?: string;
  onShow?(): void;
  onHide?(): void;
  customCloseHandlers?: any[];
  onInsideClick?(): void;
}

interface ContextMenuItemProps {
  theme?: object;
  children: React.ReactNode;
  isDisabled?: boolean;
  testId?: string;
  className?: string;
}

interface ContextMenuTriggerProps {
  id: string;
  children: React.ReactNode;
  onContextMenu?(): void;
  testId?: string;
}

declare class ContextMenu extends React.Component<ContextMenuProps, any> {}
declare class ContextMenuItem extends React.Component<
  ContextMenuItemProps,
  any
> {}
declare class ContextMenuTrigger extends React.PureComponent<
  ContextMenuTriggerProps,
  any
> {}
declare function show(id: string, coords: { x: number; y: number }): void;
declare function hide(id: string): void;

export { ContextMenu, ContextMenuItem, ContextMenuTrigger, show, hide };
