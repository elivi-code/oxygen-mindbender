import React from 'react';

interface ListProps {
  /**
   * List theme
   */
  theme?: object;
  /**
   * Rendered item content should be `ListItem` component
   */
  children: React.ReactNode;
  /**
   * Tell when list is styled as a group
   */
  isGroup?: boolean;
  /**
   * Tell when list is ordered
   */
  isOrdered?: boolean;
  /**
   * Tell when list has background
   */
  withBackground?: boolean;

  id?: string;
}

interface ListItemProps {
  /**
   * Rendered text inside list item
   */
  children: React.ReactNode;
  /**
   * Add title attribute to list item
   */
  title?: string;
  /**
   * Tell when list item is disabled
   */
  isDisabled?: boolean;
  /**
   * Tell when list item is active
   */
  isActive?: boolean;
  /**
   * Tell when list item should wrap text
   */
  shouldWrapText?: boolean;
  /**
   * Callback when clicking the item
   */
  onClick?(): void;
}

declare const List: React.FunctionComponent<ListProps>;
declare const ListItem: React.FunctionComponent<ListItemProps>;

export default List;
export { ListItem };
