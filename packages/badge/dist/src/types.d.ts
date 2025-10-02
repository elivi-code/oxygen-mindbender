/// <reference types="react" />
import { badgeNovo } from '@8x8/oxygen-constants';
export type BadgeTheme = Partial<typeof badgeNovo>;
export declare const badgeType: {
    readonly primary: "primary";
    readonly secondary: "secondary";
};
export declare const badgeSize: {
    readonly small: "small";
    readonly medium: "medium";
    /** @deprecated */
    readonly big: "big";
};
export declare const badgePosition: {
    /** @deprecated */
    readonly topLeft: "tl";
    /** @deprecated */
    readonly topRight: "tr";
    /** @deprecated */
    readonly bottomLeft: "bl";
    /** @deprecated */
    readonly bottomRight: "br";
    readonly 'top-start': "top-start";
    readonly 'top-end': "top-end";
    readonly 'bottom-start': "bottom-start";
    readonly 'bottom-end': "bottom-end";
};
export interface BadgeProps {
    theme?: BadgeTheme;
    children?: React.ReactNode;
    type?: (typeof badgeType)[keyof typeof badgeType];
    size?: (typeof badgeSize)[keyof typeof badgeSize];
    position?: (typeof badgePosition)[keyof typeof badgePosition];
    isInner?: boolean;
    testId?: string;
}
export interface AIBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    testId?: string;
}
//# sourceMappingURL=types.d.ts.map