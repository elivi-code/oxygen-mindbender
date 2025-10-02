/**
 * Components for building sidebar declaratively
 */
export { SidebarProvider } from './components/Sidebar/SidebarProvider';
export { MenuItem } from './components/Menu/MenuItem';
export { SubMenuItem } from './components/Menu/SubMenuItem';
export { CollapseItem } from './components/Menu/CollapseItem';

/**
 * styled components
 */
export { SidebarContainer } from './styled/SidebarContainer';
export { Ul as MenuList } from './styled/Menu';

/**
 * Sidebar from configuration object
 */
export { Sidebar } from './components/Sidebar/Sidebar';

// types
export type {
  MenuProps,
  MenuItemProps,
  SidebarItemProps,
  SidebarProps,
  SidebarPosition,
} from './types';

/**
 * hooks
 */
export { useSidebar } from './hooks/useSidebar';
