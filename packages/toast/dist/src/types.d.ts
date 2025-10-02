/// <reference types="react" />
import { toastNovo } from '@8x8/oxygen-constants';
export declare const toastSizes: {
    readonly small: "small";
    readonly medium: "medium";
    readonly large: "large";
};
export declare const toastTypes: {
    readonly success: "success";
    readonly error: "error";
    readonly warning: "warning";
    readonly info: "info";
    readonly loading: "loading";
};
export type ToastSize = (typeof toastSizes)[keyof typeof toastSizes];
export type ToastType = (typeof toastTypes)[keyof typeof toastTypes];
export interface ActionType {
    title: string;
    id?: string;
    callback: () => void;
}
export type Theme = Partial<typeof toastNovo>;
export interface ToastProps {
    title?: React.ReactNode;
    description?: React.ReactNode;
    children?: React.ReactNode;
    actions?: Array<ActionType>;
    type?: ToastType;
    size?: ToastSize;
    hideCloseControl?: boolean;
    onCloseControlClick?: () => void;
    theme?: Partial<Theme>;
    isToast?: boolean;
    iconTitle?: string;
    closeButtonLabel?: string;
}
export interface ToastStackProps {
    children: React.ReactNode;
    theme?: Partial<Theme>;
}
//# sourceMappingURL=types.d.ts.map