import React, { PureComponent } from 'react';
import { DateRange } from '../types';
import { InternalCalendarProps } from './CalendarProps';
interface OwnProps {
    month: Date;
    preview?: DateRange;
    showWeekDays?: boolean;
    showMonthName?: boolean;
    onDayClick?: (date: Date) => void;
    onPreviewChange?: (day?: Date) => void;
    focusedButtonId?: string;
    onFocus?: (day: Date) => void;
}
export type MonthProps = OwnProps & Pick<InternalCalendarProps, 'testId' | 'dateOptions' | 'disabledDates' | 'enabledDates' | 'minDate' | 'maxDate' | 'displayMode' | 'showPreview' | 'range' | 'dayNumberFormat' | 'weekDayDisplayFormat' | 'date' | 'monthDisplayFormat' | 'locale' | 'theme'>;
type MonthDefaultProps = Required<Pick<MonthProps, 'testId' | 'dateOptions' | 'disabledDates' | 'enabledDates' | 'displayMode' | 'showPreview' | 'dayNumberFormat' | 'showWeekDays' | 'weekDayDisplayFormat' | 'showMonthName' | 'monthDisplayFormat'>>;
declare class Month extends PureComponent<MonthProps> {
    static defaultProps: MonthDefaultProps;
    isDayDisabled: (day: Date) => boolean;
    renderMonthName: () => React.JSX.Element;
    renderWeekDays: () => React.JSX.Element;
    render(): React.JSX.Element;
}
declare const _default: typeof Month & React.ForwardRefExoticComponent<OwnProps & Pick<InternalCalendarProps, "date" | "theme" | "testId" | "dateOptions" | "disabledDates" | "enabledDates" | "minDate" | "maxDate" | "displayMode" | "showPreview" | "dayNumberFormat" | "weekDayDisplayFormat" | "monthDisplayFormat" | "locale" | "range"> & React.RefAttributes<unknown>>;
export default _default;
//# sourceMappingURL=Month.d.ts.map