import subHours from 'date-fns/subHours';
import startOfYesterday from 'date-fns/startOfYesterday';
import endOfYesterday from 'date-fns/endOfYesterday';
import startOfMonth from 'date-fns/startOfMonth';
import subMonths from 'date-fns/subMonths';
import endOfMonth from 'date-fns/endOfMonth';
import startOfYear from 'date-fns/startOfYear';
import subYears from 'date-fns/subYears';
import endOfYear from 'date-fns/endOfYear';
import startOfToday from 'date-fns/startOfToday';
import endOfToday from 'date-fns/endOfToday';
import subDays from 'date-fns/subDays';
import startOfDay from 'date-fns/startOfDay';
import startOfWeek from 'date-fns/startOfWeek';
import MockDate from 'mockdate';

import predefinedRanges from './predefinedRanges';

describe('predefinedRanges', () => {
  beforeAll(() => {
    MockDate.set('1 january 99');
  });

  afterAll(() => {
    MockDate.reset();
  });

  it('should calculate date correctly for `Today` range', () => {
    const range = predefinedRanges.find(({ id }) => id === 'TODAY');
    const { dateTimeRange } = range;
    const today = dateTimeRange();

    expect(today).toMatchObject({
      startDate: startOfToday(),
      endDate: endOfToday(),
    });
  });

  it('should calculate date correctly for `Last Hour` range', () => {
    const range = predefinedRanges.find(({ id }) => id === 'LAST_HOUR');
    const { dateTimeRange } = range;
    const lastHour = dateTimeRange();
    const now = new Date();

    expect(lastHour).toMatchObject({
      startDate: subHours(now, 1),
      endDate: now,
    });
  });

  it('should calculate date correctly for `Yesterday` range', () => {
    const range = predefinedRanges.find(({ id }) => id === 'YESTERDAY');
    const { dateTimeRange } = range;
    const yesterday = dateTimeRange();

    expect(yesterday).toMatchObject({
      startDate: startOfYesterday(),
      endDate: endOfYesterday(),
    });
  });

  it('should calculate date correctly for `Last X Days` range', () => {
    const range = predefinedRanges.find(({ id }) => id === 'LAST_X_DAYS');
    const { dateTimeRange } = range;
    const lastXDays = dateTimeRange(2);
    const now = new Date();

    expect(lastXDays).toMatchObject({
      startDate: startOfDay(subDays(now, 2)),
      endDate: endOfToday(),
    });
  });
  it('should calculate date correctly for `Last X Days` range with no value', () => {
    const range = predefinedRanges.find(({ id }) => id === 'LAST_X_DAYS');
    const { dateTimeRange } = range;
    const lastXDays = dateTimeRange();
    const now = new Date();

    expect(lastXDays).toMatchObject({
      startDate: startOfDay(subDays(now, 1)),
      endDate: endOfToday(),
    });
  });

  it('should calculate date correctly for `This Week` range', () => {
    const range = predefinedRanges.find(({ id }) => id === 'THIS_WEEK');
    const { dateTimeRange } = range;
    const thisWeek = dateTimeRange();
    const now = new Date();

    expect(thisWeek).toMatchObject({
      startDate: startOfWeek(now, { weekStartsOn: 0 }),
      endDate: endOfToday(),
    });
  });

  it('should calculate date correctly for `This Month` range', () => {
    const range = predefinedRanges.find(({ id }) => id === 'THIS_MONTH');
    const { dateTimeRange } = range;
    const thisMonth = dateTimeRange();
    const now = new Date();

    expect(thisMonth).toMatchObject({
      startDate: startOfMonth(now),
      endDate: endOfToday(),
    });
  });

  it('should calculate date correctly for `Last Month` range', () => {
    const range = predefinedRanges.find(({ id }) => id === 'LAST_MONTH');
    const { dateTimeRange } = range;
    const lastMonth = dateTimeRange();
    const now = new Date();

    expect(lastMonth).toMatchObject({
      startDate: subMonths(startOfMonth(now), 1),
      endDate: endOfMonth(subMonths(now, 1)),
    });
  });

  it('should calculate date correctly for `Last X Months` range', () => {
    const range = predefinedRanges.find(({ id }) => id === 'LAST_X_MONTHS');
    const { dateTimeRange } = range;
    const lastXMonths = dateTimeRange(2);
    const now = new Date();

    expect(lastXMonths).toMatchObject({
      startDate: startOfDay(subMonths(now, 2)),
      endDate: endOfToday(),
    });
  });

  it('should calculate date correctly for `Last X Months` range with no value', () => {
    const range = predefinedRanges.find(({ id }) => id === 'LAST_X_MONTHS');
    const { dateTimeRange } = range;
    const lastXMonths = dateTimeRange();
    const now = new Date();

    expect(lastXMonths).toMatchObject({
      startDate: startOfDay(subMonths(now, 1)),
      endDate: endOfToday(),
    });
  });

  it('should calculate date correctly for `This Year` range', () => {
    const range = predefinedRanges.find(({ id }) => id === 'THIS_YEAR');
    const { dateTimeRange } = range;
    const thisYear = dateTimeRange();
    const now = new Date();

    expect(thisYear).toMatchObject({
      startDate: startOfYear(now),
      endDate: endOfToday(),
    });
  });

  it('should calculate date correctly for `Last Year` range', () => {
    const range = predefinedRanges.find(({ id }) => id === 'LAST_YEAR');
    const { dateTimeRange } = range;
    const lastYear = dateTimeRange();
    const now = new Date();

    expect(lastYear).toMatchObject({
      startDate: subYears(startOfYear(now), 1),
      endDate: endOfYear(subYears(now, 1)),
    });
  });
});
