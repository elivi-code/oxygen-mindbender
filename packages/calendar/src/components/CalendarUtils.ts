import {
  addMonths,
  endOfMonth,
  startOfMonth,
  Interval,
  isWithinInterval,
} from 'date-fns';
import { DateRange } from '../types';

export function getInterval(date: Date, months: number) {
  return {
    start: startOfMonth(date),
    end: endOfMonth(addMonths(date, months - 1)),
  };
}

export function getNewStateForDate(
  date: Date,
  prevDate: Date,
  interval: Interval,
) {
  return date !== prevDate && !isWithinInterval(date, interval)
    ? { visibleDate: date }
    : null;
}

export function getNewStateForRange(
  range: DateRange,
  prevRange: DateRange,
  interval: Interval,
) {
  if (range !== prevRange && range?.startDate && range?.endDate) {
    const datesToCheck = [range.startDate, range.endDate];

    if (
      datesToCheck.every(
        dateToCheck => !isWithinInterval(dateToCheck, interval),
      )
    ) {
      return { visibleDate: range.startDate };
    }
  }

  return null;
}
