import React, { PureComponent } from 'react';
import { DateRange } from '../types';
import { CalendarDefaultProps, CalendarProps, InternalCalendarProps } from './CalendarProps';
type RenderMonthYearPickersProps = Pick<InternalCalendarProps, 'testId' | 'dateOptions' | 'locale'> & Pick<CalendarDefaultProps, 'focusedMonthFormat' | 'focusedYearFormat' | 'minDate' | 'maxDate'> & {
    visibleDate: Date;
};
type RenderHeaderProps = Pick<InternalCalendarProps, 'testId' | 'dateOptions' | 'locale' | 'theme'> & Pick<CalendarDefaultProps, 'focusedMonthFormat' | 'focusedYearFormat' | 'minDate' | 'maxDate' | 'months' | 'showMonthYearPickers' | 'showMonthArrow'> & {
    visibleDate: Date;
};
interface CalendarState {
    visibleDate: Date;
    focusedDate?: Date;
    preview?: DateRange;
    monthWrapper: React.RefObject<HTMLDivElement>;
    focusedButtonId?: string;
}
interface ModeMap {
    monthOffset: () => Date;
    setMonth: () => Date;
    setYear: () => Date;
    set: () => number;
}
declare class Calendar extends PureComponent<InternalCalendarProps, CalendarState> {
    static defaultProps: CalendarDefaultProps;
    state: CalendarState;
    componentDidUpdate(prevProps: CalendarProps): void;
    getNewState(prevProps: CalendarProps, visibleDate: Date): {
        visibleDate: Date;
    } | null;
    onDayClick: (day: Date) => void;
    onPreviewChangeCb: (day?: Date) => void;
    setPreviewToDay: (day: Date) => void;
    isMonthPickerOptionDisabled: (month: number) => boolean;
    changeShownDate: (value: number, mode?: keyof ModeMap) => void;
    renderMonthYearPickers: import("memoize-one").MemoizedFn<({ testId, dateOptions, minDate, maxDate, focusedMonthFormat, focusedYearFormat, visibleDate, locale, }: RenderMonthYearPickersProps) => React.JSX.Element>;
    renderHeader: import("memoize-one").MemoizedFn<({ testId, minDate, maxDate, months, showMonthYearPickers, visibleDate, theme, showMonthArrow, dateOptions, focusedMonthFormat, focusedYearFormat, locale, }: RenderHeaderProps) => React.JSX.Element>;
    onNavigation: (ev: React.KeyboardEvent<HTMLDivElement>) => void;
    render(): React.JSX.Element;
}
declare const _default: typeof Calendar & React.ForwardRefExoticComponent<CalendarProps & {
    theme: import("@8x8/oxygen-constants/dist/src/decisions/calendar.const").CalendarTheme;
} & React.RefAttributes<unknown>>;
export default _default;
//# sourceMappingURL=Calendar.d.ts.map