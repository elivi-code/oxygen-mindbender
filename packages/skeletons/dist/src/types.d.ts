/// <reference types="react" />
export declare const typographySizes: readonly ["label01", "body01", "body02", "bulletList01", "heading01", "heading02"];
export declare const avatarSizes: readonly ["xlarge", "large", "medium", "small", "xsmall"];
export declare const avatarSizeMap: Record<(typeof avatarSizes)[number], number>;
export declare const sizes: readonly ["label01", "body01", "body02", "bulletList01", "heading01", "heading02", "xlarge", "large", "medium", "small", "xsmall"];
export type SkeletonSize = (typeof sizes)[number] | string;
export interface SkeletonProps extends React.ComponentPropsWithRef<'div'> {
    size?: SkeletonSize;
    testId?: string;
}
//# sourceMappingURL=types.d.ts.map