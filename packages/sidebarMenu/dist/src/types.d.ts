import type { ReactElement, ReactNode, Dispatch, SetStateAction, ComponentType, MouseEvent } from 'react';
/**
 * Position of the sidebar - it can be on the left or right side of the screen
 */
export type SidebarPosition = 'left' | 'right';
/**
 * Public badge interface for menu items
 */
export interface BadgeProps {
    /** whether the menu item should display a badge */
    hasBadge?: boolean;
    /** the content that will be rendered inside the badge */
    badgeChildren?: ReactNode;
    /** custom aria-label override for the menu when we have badge */
    badgeAriaLabel?: string;
}
/**
 * Properties for a SubItem
 */
export interface MenuItemProps extends BadgeProps {
    /** an internationalized string */
    label: string;
    /** true means SubItem is rendered as an active item */
    isActive?: boolean;
    /** mouse click event and keyboard (space, enter) calls this callback */
    onTrigger?: (event: MouseEvent<HTMLElement>) => void;
    /** Path  */
    link?: string;
    position?: SidebarPosition;
    /** Custom link component */
    linkComponent?: ComponentType<any>;
    /** Custom prop for the link path. Defaults to "to" for ReactRouter */
    linkProp?: string;
    /** data-test-id value */
    testId?: string;
}
export interface MenuProps extends MenuItemProps {
    as?: keyof JSX.IntrinsicElements;
    icon?: ReactElement;
    /** only children of type SubMenuItem are allowed */
    children?: ReactElement<MenuItemProps> | ReactElement<MenuItemProps>[];
}
export interface SidebarItemProps extends MenuItemProps {
    /** for a SubItem can be omitted */
    icon?: ReactElement;
    /** true means item will appear below the collapse button */
    isFooter?: boolean;
    /** if subItems are present, it becomes a Menu */
    subItems?: SidebarItemProps[];
}
/** Properties of Sidebar component */
export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    /** all the items and subitems on the sidebar */
    items: SidebarItemProps[];
    /** Initial value for collapsed state */
    initialCollapsedState?: boolean;
    /** label for collapse button or null to omit collapse button */
    collapseLabel?: string;
    /** label for collapse button when the sidebar is collapsed (both `collapseLabel` and `expandLabel` are needed for collapse button to be rendered) */
    expandLabel?: string;
    /** position of the sidebar */
    position?: SidebarPosition;
    /** callback for collapse change */
    onCollapseChange?: (collapsed: boolean) => void;
    /** Custom link Component. Used to render items instead of Button */
    linkComponent?: ComponentType<any>;
    /** Custom prop for the link path. Defaults to "to" for ReactRouter */
    linkProp?: string;
    /** data-test-id value */
    testId?: string;
}
export interface SidebarProviderProps extends Pick<SidebarProps, 'initialCollapsedState' | 'linkComponent' | 'linkProp'> {
    children?: ReactNode;
}
export interface SidebarContextType extends Pick<SidebarProps, 'linkComponent' | 'linkProp'> {
    isSidebarCollapsed: boolean;
    setSidebarCollapsed: Dispatch<SetStateAction<boolean>>;
}
//# sourceMappingURL=types.d.ts.map