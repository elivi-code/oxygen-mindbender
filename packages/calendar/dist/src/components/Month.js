/* eslint-disable react/default-props-match-prop-types */
import React, { PureComponent } from 'react';
import { ThemeProvider } from 'styled-components';
import format from 'date-fns/format';
import startOfDay from 'date-fns/startOfDay';
import endOfDay from 'date-fns/endOfDay';
import startOfMonth from 'date-fns/startOfMonth';
import endOfMonth from 'date-fns/endOfMonth';
import startOfWeek from 'date-fns/startOfWeek';
import endOfWeek from 'date-fns/endOfWeek';
import isBefore from 'date-fns/isBefore';
import isSameDay from 'date-fns/isSameDay';
import isAfter from 'date-fns/isAfter';
import isWeekend from 'date-fns/isWeekend';
import isWithinInterval from 'date-fns/isWithinInterval';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import differenceInWeeks from 'date-fns/differenceInWeeks';
import addWeeks from 'date-fns/addWeeks';
import getWeek from 'date-fns/getWeek';
import { eachWeekOfInterval } from 'date-fns';
import { getTestAttributes, withTheme } from '@8x8/oxygen-config';
import * as StyledMonth from '../styled/MonthGrid';
import * as StyledWeek from '../styled/WeekRow';
import Day from './Day';
function getMonthDisplayRange(date, dateOptions) {
    const startDateOfMonth = startOfMonth(date);
    const endDateOfMonth = endOfMonth(date);
    const start = startOfWeek(startDateOfMonth, dateOptions);
    let end = endOfWeek(endDateOfMonth, dateOptions);
    if (dateOptions?.customEvenMonths) {
        const diff = differenceInWeeks(end, start);
        end = endOfWeek(addWeeks(end, 5 - diff), dateOptions);
    }
    return { start, end, startDateOfMonth, endDateOfMonth };
}
class Month extends PureComponent {
    constructor() {
        super(...arguments);
        this.isDayDisabled = (day) => {
            const { disabledDates, enabledDates } = this.props;
            if (disabledDates?.length) {
                return disabledDates.some(disabledDate => isSameDay(disabledDate, day));
            }
            return (!!enabledDates?.length &&
                enabledDates.every(enabledDate => !isSameDay(enabledDate, day)));
        };
        this.renderMonthName = () => {
            const { testId, month, dateOptions, monthDisplayFormat, locale } = this.props;
            const formatOptions = {
                ...dateOptions,
                locale,
            };
            return (React.createElement(StyledMonth.MonthName, { ...getTestAttributes(`${testId}_MONTH_NAME`), role: "row" },
                React.createElement("div", { role: "cell" }, format(month, monthDisplayFormat, formatOptions))));
        };
        this.renderWeekDays = () => {
            const { testId, dateOptions, weekDayDisplayFormat, locale } = this.props;
            const now = Date.now();
            const formatOptions = {
                ...dateOptions,
                locale,
            };
            return (React.createElement(StyledMonth.WeekDays, { ...getTestAttributes(`${testId}_WEEK_DAYS`), role: "row" }, eachDayOfInterval({
                start: startOfWeek(now, dateOptions),
                end: endOfWeek(now, dateOptions),
            }).map(day => (React.createElement(StyledMonth.WeekDay, { key: day.toString(), role: "columnheader" }, format(day, weekDayDisplayFormat, formatOptions))))));
        };
    }
    render() {
        const now = Date.now();
        const { month, testId, dateOptions, displayMode, showPreview, preview, range, date, dayNumberFormat, locale, showWeekDays, showMonthName, onDayClick, onPreviewChange, theme, focusedButtonId, onFocus, } = this.props;
        let { minDate, maxDate } = this.props;
        minDate = minDate && startOfDay(minDate);
        maxDate = maxDate && endOfDay(maxDate);
        const monthDisplay = getMonthDisplayRange(month, dateOptions);
        const monthTestId = `${testId}_MONTH_${month.getMonth()}_${month.getFullYear()}`;
        return (React.createElement(ThemeProvider, { theme: theme },
            React.createElement(StyledMonth.MonthGrid, { ...getTestAttributes(monthTestId), role: "grid" },
                showMonthName && this.renderMonthName(),
                showWeekDays && this.renderWeekDays(),
                eachWeekOfInterval({
                    start: monthDisplay.start,
                    end: monthDisplay.end,
                }, dateOptions).map(week => {
                    const weekTestId = `${testId}_WEEK_${getWeek(week, dateOptions)}_${month.getFullYear()}`;
                    return (React.createElement(StyledWeek.WeekRow, { ...getTestAttributes(weekTestId), role: "row", key: weekTestId }, eachDayOfInterval({
                        start: startOfWeek(week, dateOptions),
                        end: endOfWeek(week, dateOptions),
                    }).map(day => {
                        const isStartOfMonth = isSameDay(day, monthDisplay.startDateOfMonth);
                        const isEndOfMonth = isSameDay(day, monthDisplay.endDateOfMonth);
                        const isOutsideMinMax = (minDate && isBefore(day, minDate)) ||
                            (maxDate && isAfter(day, maxDate));
                        const dayDisabled = this.isDayDisabled(day);
                        return (React.createElement(Day, { theme: theme, key: day.toString(), day: day, testId: `${testId}_MONTH_${day.getMonth()}_${day.getFullYear()}_DAY_${day.getDate()}`, displayMode: displayMode, preview: showPreview ? preview : undefined, range: range, date: date, isPassive: !isWithinInterval(day, {
                                start: monthDisplay.startDateOfMonth,
                                end: monthDisplay.endDateOfMonth,
                            }), isDisabled: isOutsideMinMax || dayDisabled, isToday: isSameDay(day, now), isWeekend: isWeekend(day), isStartOfWeek: isSameDay(day, startOfWeek(day, dateOptions)), isEndOfWeek: isSameDay(day, endOfWeek(day, dateOptions)), isStartOfMonth: isStartOfMonth, isEndOfMonth: isEndOfMonth, dayNumberFormat: dayNumberFormat, locale: locale, onClick: onDayClick, onPreviewChange: onPreviewChange, onFocus: onFocus, focusedButtonId: focusedButtonId }));
                    })));
                }))));
    }
}
Month.defaultProps = {
    testId: 'CALENDAR_MONTH',
    dateOptions: { weekStartsOn: 0, customEvenMonths: false },
    disabledDates: [],
    enabledDates: [],
    displayMode: 'date',
    showPreview: true,
    dayNumberFormat: 'd',
    showWeekDays: true,
    weekDayDisplayFormat: 'EE',
    showMonthName: false,
    monthDisplayFormat: 'MMMM yyyy',
};
export default withTheme(Month, 'calendar');
