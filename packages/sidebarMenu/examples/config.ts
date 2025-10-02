import { SidebarPosition } from '@8x8/oxygen-sidebar-menu';

export interface Props {
  initialCollapsedState: boolean;
  collapseLabel: string;
  expandLabel: string;
  onCollapseChange: (collapsed: boolean) => void;
  initialRoute: string;
  badgeOnMenuLinks: string;
  badgeChildren: string;
  badgeAriaLabel: string;
  position: SidebarPosition;
}

export const argsConfig = {
  initialCollapsedState: false,
  collapseLabel: 'Collapse',
  expandLabel: 'Expand',
  position: undefined as SidebarPosition,
};
export const argTypesConfig = {
  position: {
    options: ['left', 'right'],
    control: { type: 'select' },
  },
};
