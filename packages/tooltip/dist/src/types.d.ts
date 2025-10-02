/// <reference types="react" />
import { OffsetOptions } from '@floating-ui/react';
import { staticTooltip } from '@8x8/oxygen-constants';
import { Handler } from './utils';
export type Theme = typeof staticTooltip;
export declare const orientation: {
    readonly top: "top";
    readonly right: "right";
    readonly bottom: "bottom";
    readonly left: "left";
    readonly 'top-start': "top-start";
    readonly 'top-end': "top-end";
    readonly 'bottom-start': "bottom-start";
    readonly 'bottom-end': "bottom-end";
    readonly 'left-start': "left-start";
    readonly 'left-end': "left-end";
    readonly 'right-start': "right-start";
    readonly 'right-end': "right-end";
};
export type Orientation = (typeof orientation)[keyof typeof orientation];
export declare const showOn: {
    readonly hover: "hover";
    readonly click: "click";
};
export type ShowOn = (typeof showOn)[keyof typeof showOn];
export declare const defaultModifiers: {
    offset: {
        offset: string;
    };
};
export interface TooltipProps {
    children?: React.ReactNode;
    title: React.ReactNode;
    delay?: number;
    orientation?: Orientation;
    offset?: OffsetOptions;
    showOn?: 'hover' | 'click';
    disableInteractive?: boolean;
    enableArrow?: boolean;
    triggerRef?: HTMLElement;
    customCloseHandlers?: Handler[];
    renderContainer?: HTMLElement;
    renderContainerId?: string;
    includeWrapper?: boolean;
    modifiers?: {
        offset?: {
            offset?: number | string;
        };
    };
    testId?: string;
    theme?: Partial<Theme>;
    forwardedRef?: React.Ref<HTMLDivElement>;
}
//# sourceMappingURL=types.d.ts.map