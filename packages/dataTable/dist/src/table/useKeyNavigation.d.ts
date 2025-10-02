import { KeyboardEvent } from 'react';
interface Props {
    blurOnTab: boolean;
}
export declare const useKeyNavigation: ({ blurOnTab }: Props) => {
    firstRowRef: import("react").RefObject<HTMLTableRowElement>;
    hiddenRowRef: import("react").RefObject<HTMLTableRowElement>;
    onKeyDown: (e: KeyboardEvent<HTMLDivElement>) => void;
    onFocus: () => void;
};
export {};
//# sourceMappingURL=useKeyNavigation.d.ts.map