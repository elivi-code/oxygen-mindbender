import { textLink } from '@8x8/oxygen-constants';
import React, { ElementType } from 'react';

export const color = {
  primary: 'primary',
  inherit: 'inherit',
} as const;
export type Color = (typeof color)[keyof typeof color];

export const size = {
  default: 'default',
  inherit: 'inherit',
} as const;
export type Size = (typeof size)[keyof typeof size];

export const underline = {
  always: 'always',
  hover: 'hover',
  inherit: 'inherit',
  never: 'never',
} as const;
export type Underline = (typeof underline)[keyof typeof underline];

export type Theme = typeof textLink;

export interface TextLinkProps extends React.ComponentPropsWithRef<'a'> {
  children: React.ReactNode;
  href?: string;
  color?: Color;
  size?: Size;
  underline?: Underline;
  as?: ElementType;
  isBlock?: boolean;
  /** @deprecated */
  isDisabled?: boolean;
  onClick?: (event: React.MouseEvent) => void;
  theme?: Partial<Theme>;
  forwardedRef?: React.Ref<HTMLAnchorElement>;
}
