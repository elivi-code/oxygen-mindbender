import { type Theme } from '@8x8/oxygen-theme';
import React from 'react';
export type Size = 'large' | 'small';
export interface GetSizeProps {
    size: Size;
    theme: Theme;
}
export declare const iconSizeMap: Record<Size, number>;
export interface GetIconColorProps {
    isChat?: boolean;
    isHovered?: boolean;
    isFocused?: boolean;
    isActive?: boolean;
    theme: Theme;
}
export interface StyledLinkBaseProps {
    isChat?: boolean;
    standalone?: boolean;
    size?: Size;
}
interface BaseLinkProps extends React.ComponentPropsWithRef<'a'> {
    /**
     * Link content. Optional when icon is provided.
     * Can include React components for enhanced content structure.
     */
    children?: React.ReactNode;
    /**
     * Whether the link is in a chat context
     */
    isChat?: boolean;
    /**
     * Icon to display
     */
    icon?: React.ReactNode;
    /**
     * Parameter used for testing purposes
     */
    testId?: string;
}
export interface InlineLinkProps extends BaseLinkProps {
    standalone?: false;
    size?: never;
}
export interface StandaloneLinkProps extends BaseLinkProps {
    standalone: true;
    /**
     * Size variant (defaults to 'small')
     */
    size?: 'small' | 'large';
}
export type LinkProps = InlineLinkProps | StandaloneLinkProps;
export {};
//# sourceMappingURL=types.d.ts.map