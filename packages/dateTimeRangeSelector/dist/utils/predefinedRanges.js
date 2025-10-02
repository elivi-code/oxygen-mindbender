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
var predefinedRanges = [{
  id: 'TODAY',
  displayName: 'Today',
  dateTimeRange: function dateTimeRange() {
    var today = {
      startDate: startOfToday(),
      endDate: endOfToday()
    };
    return today;
  }
}, {
  id: 'LAST_HOUR',
  displayName: 'Last Hour',
  dateTimeRange: function dateTimeRange() {
    var now = new Date();
    var lastHour = {
      startDate: subHours(now, 1),
      endDate: now
    };
    return lastHour;
  }
}, {
  id: 'YESTERDAY',
  displayName: 'Yesterday',
  dateTimeRange: function dateTimeRange() {
    var yesterday = {
      startDate: startOfYesterday(),
      endDate: endOfYesterday()
    };
    return yesterday;
  }
}, {
  id: 'LAST_X_DAYS',
  displayName: 'Last X Days',
  selectedDisplayName: ['Last', 'Days'],
  dateTimeRange: function dateTimeRange(x) {
    var now = new Date();
    var lastXDays = {
      startDate: startOfDay(subDays(now, x || 1)),
      endDate: endOfToday()
    };
    return lastXDays;
  },
  hasArgument: true
}, {
  id: 'THIS_WEEK',
  displayName: 'This Week',
  dateTimeRange: function dateTimeRange() {
    var now = new Date();
    var thisWeek = {
      startDate: startOfWeek(now, {
        weekStartsOn: 0
      }),
      endDate: endOfToday()
    };
    return thisWeek;
  }
}, {
  id: 'THIS_MONTH',
  displayName: 'This Month',
  dateTimeRange: function dateTimeRange() {
    var now = new Date();
    var thisMonth = {
      startDate: startOfMonth(now),
      endDate: endOfToday()
    };
    return thisMonth;
  }
}, {
  id: 'LAST_MONTH',
  displayName: 'Last Month',
  dateTimeRange: function dateTimeRange() {
    var now = new Date();
    var lastMonth = {
      startDate: subMonths(startOfMonth(now), 1),
      endDate: endOfMonth(subMonths(now, 1))
    };
    return lastMonth;
  }
}, {
  id: 'LAST_X_MONTHS',
  displayName: 'Last X Months',
  selectedDisplayName: ['Last', 'Months'],
  dateTimeRange: function dateTimeRange(x) {
    var now = new Date();
    var lastXMonths = {
      startDate: startOfDay(subMonths(now, x || 1)),
      endDate: endOfToday()
    };
    return lastXMonths;
  },
  hasArgument: true
}, {
  id: 'THIS_YEAR',
  displayName: 'This Year',
  dateTimeRange: function dateTimeRange() {
    var now = new Date();
    var thisYear = {
      startDate: startOfYear(now),
      endDate: endOfToday()
    };
    return thisYear;
  }
}, {
  id: 'LAST_YEAR',
  displayName: 'Last Year',
  dateTimeRange: function dateTimeRange() {
    var now = new Date();
    var lastYear = {
      startDate: subYears(startOfYear(now), 1),
      endDate: endOfYear(subYears(now, 1))
    };
    return lastYear;
  }
}];
export default predefinedRanges;