import React from 'react';
import { type Theme } from '@8x8/oxygen-theme';
import { button, iconButton } from '@8x8/oxygen-constants';

export const buttonSize = {
  small: 'small',
  medium: 'medium',
  large: 'large',
  big: 'big', // deprecated
} as const;
export type ButtonSize = (typeof buttonSize)[keyof typeof buttonSize];

export const iconButtonSize = {
  default: 'default',
  small2XIconXs: 'small2XIconXs',
  smallXIconS: 'smallXIconS',
  smallIconM: 'smallIconM',
  smallIconS: 'smallIconS',
  smallIconXs: 'smallIconXs',
  mediumIconL: 'mediumIconL',
  mediumIconM: 'mediumIconM',
  mediumIconS: 'mediumIconS',
  largeIconL: 'largeIconL',
  largeIconM: 'largeIconM',
} as const;

export type IconButtonSize =
  (typeof iconButtonSize)[keyof typeof iconButtonSize];

export const buttonVariant = {
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  /** @deprecated Use isDestructive property instead */
  destructive: 'destructive',
  tertiary: 'tertiary',
  tertiaryReversed: 'tertiaryReversed',
  text: 'text',
} as const;
export type ButtonVariant = (typeof buttonVariant)[keyof typeof buttonVariant];

export const buttonGroupSpacing = {
  small: 'small',
  large: 'large',
} as const;
export type ButtonGroupSpacing =
  (typeof buttonGroupSpacing)[keyof typeof buttonGroupSpacing];

export const buttonGroupAlignment = {
  left: 'left',
  center: 'center',
  right: 'right',
} as const;
export type ButtonGroupAlignment =
  (typeof buttonGroupAlignment)[keyof typeof buttonGroupAlignment];

// hack to have both button theme props and general oxygen theme props together
export type ButtonTheme = typeof button;
export type MergedTheme = Partial<ButtonTheme> &
  Partial<Theme> &
  Partial<typeof iconButton>;

// ButtonProps
export interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  children: React.ReactNode;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  secondary?: boolean; // deprecated, use variant instead
  isActive?: boolean;
  isDisabled?: boolean;
  isCircular?: boolean;
  hasShadow?: boolean; // deprecated
  testId?: string;
  forwardedRef?: React.Ref<HTMLButtonElement>;
  theme?: Partial<ButtonTheme>;
  isDestructive?: boolean;
}

// used internally by the Styled Components
export interface StyledButtonProps extends Omit<ButtonProps, 'isDisabled'> {
  isHovered?: boolean;
}

// ButtonGroupProps
export interface ButtonGroupProps {
  children: React.ReactNode;
  spacing?: ButtonGroupSpacing;
  align?: ButtonGroupAlignment;
  testId?: string;
  theme?: Partial<ButtonTheme>;
}

export interface DropdownButtonProps
  extends React.ComponentPropsWithRef<'button'> {
  children?: React.ReactNode;
  size?: 'large' | 'medium' | 'small';
  isActive?: boolean;
  isDisabled?: boolean;
  fullWidth?: boolean;
  testId?: string;
}

export type IconButtonTheme = Partial<typeof iconButton>;

export interface IconButtonProps extends React.ComponentPropsWithRef<'button'> {
  children: React.ReactNode;
  size?: IconButtonSize;
  forwardedRef?: React.Ref<HTMLButtonElement>;
  isActive?: boolean;
  isDisabled?: boolean;
  isInverted?: boolean;
  testId?: string;
  theme?: Partial<IconButtonTheme>;
  as?: keyof React.JSX.IntrinsicElements | React.ComponentType<any>;
}
