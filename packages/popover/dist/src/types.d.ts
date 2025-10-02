/// <reference types="react" />
import { type Placement } from '@floating-ui/react';
export interface ListProps extends React.ComponentPropsWithRef<'ul'> {
    testId?: string;
}
export interface ListItemWrapperProps extends React.ComponentPropsWithRef<'li'> {
    isActive?: boolean;
    isDisabled?: boolean;
    testId?: string;
}
export interface ListItemProps extends React.ComponentPropsWithRef<'span'> {
    children: React.ReactNode;
    leadingVisuals?: React.ReactNode;
    secondaryText?: React.ReactNode;
}
export interface PopoverCommonProps extends React.ComponentPropsWithRef<'div'> {
    children: React.ReactElement;
    activeProp?: string;
    disabledProp?: string;
    isDisabled?: boolean;
    placement?: Placement;
    portalTargetRef?: React.RefObject<HTMLElement>;
    testId?: string;
    /**
     * Custom maxHeight, defaults to 400 (px)
     * (note that this does not include 16px padding, for the default 400px height this yields a total maxHeight of 384px)
     */
    maxHeight?: number;
}
export interface PopoverMenuProps extends PopoverCommonProps {
    items: (ListItemWrapperProps | (React.ReactNode | ListItemWrapperProps[]))[];
    header?: React.ReactNode;
    footer?: React.ReactNode;
    onUpdate?: (arg0: ListItemWrapperProps, arg1: number) => void;
    onMenuItemClick?: (event: React.MouseEvent<Element> | React.KeyboardEvent<Element>) => void;
    onMenuOpenToggle?: (isOpen: boolean) => void;
    onCancel?: () => void;
}
export interface PopoverProps extends PopoverCommonProps {
    floatingContent: React.ReactNode;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}
//# sourceMappingURL=types.d.ts.map