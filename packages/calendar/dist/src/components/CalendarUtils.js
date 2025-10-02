import { addMonths, endOfMonth, startOfMonth, isWithinInterval, } from 'date-fns';
export function getInterval(date, months) {
    return {
        start: startOfMonth(date),
        end: endOfMonth(addMonths(date, months - 1)),
    };
}
export function getNewStateForDate(date, prevDate, interval) {
    return date !== prevDate && !isWithinInterval(date, interval)
        ? { visibleDate: date }
        : null;
}
export function getNewStateForRange(range, prevRange, interval) {
    if (range !== prevRange && range?.startDate && range?.endDate) {
        const datesToCheck = [range.startDate, range.endDate];
        if (datesToCheck.every(dateToCheck => !isWithinInterval(dateToCheck, interval))) {
            return { visibleDate: range.startDate };
        }
    }
    return null;
}
