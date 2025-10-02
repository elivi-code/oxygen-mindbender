import { CalendarTheme, DateOptions, DateRange, DisplayMode } from '../types';
export interface CalendarProps {
    testId?: string;
    showMonthArrow?: boolean;
    showMonthYearPickers?: boolean;
    months?: number;
    dateOptions?: DateOptions;
    defaultFocusedDate?: Date;
    disabledDates?: Date[];
    enabledDates?: Date[];
    minDate?: Date;
    maxDate?: Date;
    displayMode?: DisplayMode;
    showPreview?: boolean;
    dayNumberFormat?: string;
    weekDayDisplayFormat?: string;
    monthDisplayFormat?: string;
    focusedMonthFormat?: string;
    focusedYearFormat?: string;
    locale?: Locale;
    range?: DateRange;
    onRangeChange?: (range: DateRange) => void;
    date: Date;
    onDateChange?: (date: Date) => void;
    onPreviewChange?: (preview?: DateRange) => void;
    theme?: Partial<CalendarTheme>;
    enableMaxWidth?: boolean;
    prevMonthLabel?: string;
    nextMonthLabel?: string;
}
export type InternalCalendarProps = CalendarProps & {
    theme: CalendarTheme;
};
export type CalendarDefaultProps = Required<Pick<InternalCalendarProps, 'testId' | 'showMonthArrow' | 'showMonthYearPickers' | 'months' | 'dateOptions' | 'disabledDates' | 'enabledDates' | 'minDate' | 'maxDate' | 'displayMode' | 'showPreview' | 'dayNumberFormat' | 'weekDayDisplayFormat' | 'monthDisplayFormat' | 'focusedMonthFormat' | 'focusedYearFormat' | 'enableMaxWidth' | 'prevMonthLabel' | 'nextMonthLabel'>>;
//# sourceMappingURL=CalendarProps.d.ts.map