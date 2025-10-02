/// <reference types="react" />
import { loadersNovo } from '@8x8/oxygen-constants';
export type Theme = Partial<typeof loadersNovo>;
/** @deprecated */
export declare const progressBarSize: {
    readonly small: "small";
    readonly default: "default";
    readonly large: "large";
};
export interface ProgressBarProps {
    value?: number;
    text?: string;
    size?: number | string | keyof typeof progressBarSize;
    fullWidth?: boolean;
    testId?: string;
    theme?: Partial<Theme>;
}
export declare const spinnerSize: {
    readonly small: "small";
    readonly default: "default";
    readonly large2x: "large2x";
};
export interface SpinnerProps extends React.SVGAttributes<SVGElement> {
    size?: number | keyof typeof spinnerSize;
    strokeWidth?: number;
    hasAnimation?: boolean;
    testId?: string;
    theme?: Partial<Theme>;
    text?: string;
}
//# sourceMappingURL=types.d.ts.map