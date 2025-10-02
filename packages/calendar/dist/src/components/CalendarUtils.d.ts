import { Interval } from 'date-fns';
import { DateRange } from '../types';
export declare function getInterval(date: Date, months: number): {
    start: Date;
    end: Date;
};
export declare function getNewStateForDate(date: Date, prevDate: Date, interval: Interval): {
    visibleDate: Date;
} | null;
export declare function getNewStateForRange(range: DateRange, prevRange: DateRange, interval: Interval): {
    visibleDate: Date;
} | null;
//# sourceMappingURL=CalendarUtils.d.ts.map