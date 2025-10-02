/// <reference types="react" />
import { type ButtonProps } from '@8x8/oxygen-button';
import { dropdownButtonNovo } from '@8x8/oxygen-constants';
type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
export type Theme = DeepPartial<typeof dropdownButtonNovo>;
export interface CustomCloseHandler {
    target: EventTarget;
    callback: (arg0: Event) => void;
    eventName: string;
    capture: boolean;
}
export declare const directions: {
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
export interface DropdownButtonProps extends ButtonProps {
    children: React.ReactNode;
    buttonText: React.ReactNode;
    indicatorIcon?: React.ComponentType | false;
    idealDirection?: keyof typeof directions;
    shouldCloseOnInsideClick?: boolean;
    isDefaultOpen?: boolean;
    isDisabled?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
    customCloseHandlers?: CustomCloseHandler[];
    invertIconPosition?: boolean;
    forwardedRef?: React.MutableRefObject<HTMLButtonElement>;
    renderInPortal?: boolean;
    theme?: Partial<Theme>;
}
export {};
//# sourceMappingURL=types.d.ts.map