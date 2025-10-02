/// <reference types="react" />
interface Props {
    ev: React.KeyboardEvent<HTMLDivElement>;
    months: number;
    visibleDate: Date;
    minDate: Date;
    maxDate: Date;
    changeShownDate: (value: number, type: 'monthOffset') => void;
    focusedDate: Date;
    showMonthArrow?: boolean;
    showMonthYearPickers?: boolean;
}
export declare const handleNavigation: ({ ev, months, visibleDate, minDate, maxDate, changeShownDate, focusedDate, showMonthArrow, showMonthYearPickers, }: Props) => Date;
export {};
//# sourceMappingURL=handleKeyboardNavigation.d.ts.map