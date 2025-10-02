import { type Theme } from '@8x8/oxygen-theme';
import React from 'react';

export type Size = 'large' | 'small';

export interface GetSizeProps {
  size: Size;
  theme: Theme;
}

export const iconSizeMap: Record<Size, number> = {
  small: 20,
  large: 24,
};

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

// Base props common to both variants
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

// Props for inline links
export interface InlineLinkProps extends BaseLinkProps {
  standalone?: false;
  size?: never;
}

// Props for standalone links
export interface StandaloneLinkProps extends BaseLinkProps {
  standalone: true;
  /**
   * Size variant (defaults to 'small')
   */
  size?: 'small' | 'large';
}

export type LinkProps = InlineLinkProps | StandaloneLinkProps;
