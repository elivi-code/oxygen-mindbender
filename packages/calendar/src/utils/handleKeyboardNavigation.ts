import { subDays, addDays, addWeeks, subWeeks } from 'date-fns';
import startOfMonth from 'date-fns/startOfMonth';
import endOfMonth from 'date-fns/endOfMonth';
import addMonths from 'date-fns/addMonths';
import isWithinInterval from 'date-fns/isWithinInterval';
import differenceInCalendarMonths from 'date-fns/differenceInCalendarMonths';

interface Props {
  ev: React.KeyboardEvent<HTMLDivElement>;
  months: number;
  visibleDate: Date;
  minDate: Date;
  maxDate: Date;
  changeShownDate: (value: number, type: 'monthOffset') => void;
  focusedDate: Date;
  showMonthArrow?: boolean;
  showMonthYearPickers?: boolean;
}

export const handleNavigation = ({
  ev,
  months,
  visibleDate,
  minDate,
  maxDate,
  changeShownDate,
  focusedDate,
  showMonthArrow,
  showMonthYearPickers,
}: Props) => {
  let newDate = focusedDate;
  let isPrev;

  switch (ev.key) {
    case 'ArrowUp':
      ev.preventDefault();
      newDate = subWeeks(newDate, 1);
      isPrev = true;
      break;
    case 'ArrowDown':
      ev.preventDefault();
      newDate = addWeeks(newDate, 1);
      isPrev = false;
      break;
    case 'ArrowLeft':
      newDate = subDays(newDate, 1);
      isPrev = true;
      break;
    case 'ArrowRight':
      newDate = addDays(newDate, 1);
      isPrev = false;
      break;
    default:
      return focusedDate;
  }

  // if the new date is displayed in the currently visible Months component
  // (can be multiple months visible based on `months` prop)
  // Return the date subject to be focused.
  if (
    isWithinInterval(newDate, {
      start: startOfMonth(visibleDate),
      end: endOfMonth(addMonths(visibleDate, months - 1)),
    })
  ) {
    return newDate;
  }

  // in case of missing arrow navigation and month/year picker
  // return the currently focused date, without considering the Arrow key event
  // since it is not allowed to navigate outside the visible months
  if (!showMonthArrow && !showMonthYearPickers) {
    return focusedDate;
  }

  // check if we can navigate to the previous month
  // in case we can, change the visible months to the previous one and return the new date
  if (isPrev && differenceInCalendarMonths(newDate, minDate) >= 0) {
    changeShownDate(-months, 'monthOffset');

    return newDate;
  }

  // check if we can navigate to the next month
  // in case we can, change the visible months to the next one and return the new date
  if (!isPrev && differenceInCalendarMonths(maxDate, newDate) >= 0) {
    changeShownDate(months, 'monthOffset');

    return newDate;
  }

  // in case the new date is outside the visible months and we can't navigate to the previous/next month
  // return the currently focused date
  return focusedDate;
};
