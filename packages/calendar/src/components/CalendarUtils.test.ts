import {
  getInterval,
  getNewStateForDate,
  getNewStateForRange,
} from './CalendarUtils';

describe('CalendarUtils', () => {
  it('should return null for same date', () => {
    const prevDate = new Date(2023, 3, 15); // April 15, 2023
    const newDate = prevDate; // May 20, 2023

    const interval = getInterval(prevDate, 1);
    const result = getNewStateForDate(newDate, prevDate, interval);

    expect(result).toBeNull();
  });

  it('should return new date for different date', () => {
    const prevDate = new Date(2023, 3, 15); // April 15, 2023
    const newDate = new Date(2023, 4, 20); // May 20, 2023

    const interval = getInterval(prevDate, 1);
    const result = getNewStateForDate(newDate, prevDate, interval);

    expect(result).toEqual({ visibleDate: newDate });
  });

  it('should return null for same range', () => {
    const prevRange = {
      startDate: new Date(2023, 3, 15), // April 15, 2023
      endDate: new Date(2023, 4, 20), // May 20, 2023
    };

    const newRange = prevRange;

    const interval = getInterval(prevRange.startDate, 1);
    const result = getNewStateForRange(newRange, prevRange, interval);

    expect(result).toBeNull();
  });

  it('should return new date for different range', () => {
    const prevRange = {
      startDate: new Date(2023, 3, 15), // April 15, 2023
      endDate: new Date(2023, 4, 20), // May 20, 2023
    };

    const newRange = {
      startDate: new Date(2023, 5, 25), // June 25, 2023
      endDate: new Date(2023, 6, 30), // July 30, 2023
    };

    const interval = getInterval(prevRange.startDate, 1);
    const result = getNewStateForRange(newRange, prevRange, interval);

    expect(result).toEqual({ visibleDate: newRange.startDate });
  });
});
