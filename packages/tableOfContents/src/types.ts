/** Properties for a TOC Item */
export interface ItemProps {
  /** true means it is rendered as an active item */
  isActive?: boolean;
  /** mouse click event and keyboard (space, enter) calls this callback */
  onClick?: () => void;
  testId?: string;
}
