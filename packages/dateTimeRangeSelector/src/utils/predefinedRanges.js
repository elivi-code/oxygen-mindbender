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

const predefinedRanges = [
  {
    id: 'TODAY',
    displayName: 'Today',
    dateTimeRange: () => {
      const today = {
        startDate: startOfToday(),
        endDate: endOfToday(),
      };

      return today;
    },
  },
  {
    id: 'LAST_HOUR',
    displayName: 'Last Hour',
    dateTimeRange: () => {
      const now = new Date();
      const lastHour = {
        startDate: subHours(now, 1),
        endDate: now,
      };

      return lastHour;
    },
  },
  {
    id: 'YESTERDAY',
    displayName: 'Yesterday',
    dateTimeRange: () => {
      const yesterday = {
        startDate: startOfYesterday(),
        endDate: endOfYesterday(),
      };

      return yesterday;
    },
  },
  {
    id: 'LAST_X_DAYS',
    displayName: 'Last X Days',
    selectedDisplayName: ['Last', 'Days'],
    dateTimeRange: x => {
      const now = new Date();
      const lastXDays = {
        startDate: startOfDay(subDays(now, x || 1)),
        endDate: endOfToday(),
      };

      return lastXDays;
    },
    hasArgument: true,
  },
  {
    id: 'THIS_WEEK',
    displayName: 'This Week',
    dateTimeRange: () => {
      const now = new Date();
      const thisWeek = {
        startDate: startOfWeek(now, { weekStartsOn: 0 }),
        endDate: endOfToday(),
      };

      return thisWeek;
    },
  },
  {
    id: 'THIS_MONTH',
    displayName: 'This Month',
    dateTimeRange: () => {
      const now = new Date();
      const thisMonth = {
        startDate: startOfMonth(now),
        endDate: endOfToday(),
      };

      return thisMonth;
    },
  },
  {
    id: 'LAST_MONTH',
    displayName: 'Last Month',
    dateTimeRange: () => {
      const now = new Date();
      const lastMonth = {
        startDate: subMonths(startOfMonth(now), 1),
        endDate: endOfMonth(subMonths(now, 1)),
      };

      return lastMonth;
    },
  },
  {
    id: 'LAST_X_MONTHS',
    displayName: 'Last X Months',
    selectedDisplayName: ['Last', 'Months'],
    dateTimeRange: x => {
      const now = new Date();
      const lastXMonths = {
        startDate: startOfDay(subMonths(now, x || 1)),
        endDate: endOfToday(),
      };

      return lastXMonths;
    },
    hasArgument: true,
  },
  {
    id: 'THIS_YEAR',
    displayName: 'This Year',
    dateTimeRange: () => {
      const now = new Date();
      const thisYear = {
        startDate: startOfYear(now),
        endDate: endOfToday(),
      };

      return thisYear;
    },
  },
  {
    id: 'LAST_YEAR',
    displayName: 'Last Year',
    dateTimeRange: () => {
      const now = new Date();
      const lastYear = {
        startDate: subYears(startOfYear(now), 1),
        endDate: endOfYear(subYears(now, 1)),
      };

      return lastYear;
    },
  },
];

export default predefinedRanges;
