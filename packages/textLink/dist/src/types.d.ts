import { textLink } from '@8x8/oxygen-constants';
import React, { ElementType } from 'react';
export declare const color: {
    readonly primary: "primary";
    readonly inherit: "inherit";
};
export type Color = (typeof color)[keyof typeof color];
export declare const size: {
    readonly default: "default";
    readonly inherit: "inherit";
};
export type Size = (typeof size)[keyof typeof size];
export declare const underline: {
    readonly always: "always";
    readonly hover: "hover";
    readonly inherit: "inherit";
    readonly never: "never";
};
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
//# sourceMappingURL=types.d.ts.map