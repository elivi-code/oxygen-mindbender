import React from 'react';
import { type Theme } from '@8x8/oxygen-theme';
import { button, iconButton } from '@8x8/oxygen-constants';
export declare const buttonSize: {
    readonly small: "small";
    readonly medium: "medium";
    readonly large: "large";
    readonly big: "big";
};
export type ButtonSize = (typeof buttonSize)[keyof typeof buttonSize];
export declare const iconButtonSize: {
    readonly default: "default";
    readonly small2XIconXs: "small2XIconXs";
    readonly smallXIconS: "smallXIconS";
    readonly smallIconM: "smallIconM";
    readonly smallIconS: "smallIconS";
    readonly smallIconXs: "smallIconXs";
    readonly mediumIconL: "mediumIconL";
    readonly mediumIconM: "mediumIconM";
    readonly mediumIconS: "mediumIconS";
    readonly largeIconL: "largeIconL";
    readonly largeIconM: "largeIconM";
};
export type IconButtonSize = (typeof iconButtonSize)[keyof typeof iconButtonSize];
export declare const buttonVariant: {
    readonly primary: "primary";
    readonly secondary: "secondary";
    readonly success: "success";
    /** @deprecated Use isDestructive property instead */
    readonly destructive: "destructive";
    readonly tertiary: "tertiary";
    readonly tertiaryReversed: "tertiaryReversed";
    readonly text: "text";
};
export type ButtonVariant = (typeof buttonVariant)[keyof typeof buttonVariant];
export declare const buttonGroupSpacing: {
    readonly small: "small";
    readonly large: "large";
};
export type ButtonGroupSpacing = (typeof buttonGroupSpacing)[keyof typeof buttonGroupSpacing];
export declare const buttonGroupAlignment: {
    readonly left: "left";
    readonly center: "center";
    readonly right: "right";
};
export type ButtonGroupAlignment = (typeof buttonGroupAlignment)[keyof typeof buttonGroupAlignment];
export type ButtonTheme = typeof button;
export type MergedTheme = Partial<ButtonTheme> & Partial<Theme> & Partial<typeof iconButton>;
export interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
    children: React.ReactNode;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    size?: ButtonSize;
    variant?: ButtonVariant;
    secondary?: boolean;
    isActive?: boolean;
    isDisabled?: boolean;
    isCircular?: boolean;
    hasShadow?: boolean;
    testId?: string;
    forwardedRef?: React.Ref<HTMLButtonElement>;
    theme?: Partial<ButtonTheme>;
    isDestructive?: boolean;
}
export interface StyledButtonProps extends Omit<ButtonProps, 'isDisabled'> {
    isHovered?: boolean;
}
export interface ButtonGroupProps {
    children: React.ReactNode;
    spacing?: ButtonGroupSpacing;
    align?: ButtonGroupAlignment;
    testId?: string;
    theme?: Partial<ButtonTheme>;
}
export interface DropdownButtonProps extends React.ComponentPropsWithRef<'button'> {
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
//# sourceMappingURL=types.d.ts.map