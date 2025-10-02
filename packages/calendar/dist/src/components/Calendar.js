import React, { PureComponent, Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import memoize from 'memoize-one';
import addMonths from 'date-fns/addMonths';
import addYears from 'date-fns/addYears';
import setMonth from 'date-fns/setMonth';
import setYear from 'date-fns/setYear';
import min from 'date-fns/min';
import max from 'date-fns/max';
import differenceInCalendarMonths from 'date-fns/differenceInCalendarMonths';
import format from 'date-fns/format';
import isBefore from 'date-fns/isBefore';
import { ArrowLeftSolidIcon, ArrowRightSolidIcon, ArrowLeftLongIcon, ArrowRightLongIcon, } from '@8x8/oxygen-icon';
import DropdownButton from '@8x8/oxygen-dropdown-button';
import List, { ListItem } from '@8x8/oxygen-list';
import { getTestAttributes, withTheme } from '@8x8/oxygen-config';
import * as Styled from '../styled/Calendar';
import Month from './Month';
import { handleNavigation } from '../utils/handleKeyboardNavigation';
import { getInterval, getNewStateForDate, getNewStateForRange, } from './CalendarUtils';
class Calendar extends PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            visibleDate: this.props.range?.startDate ||
                this.props.date ||
                this.props.defaultFocusedDate ||
                new Date(),
            focusedDate: undefined,
            preview: undefined,
            monthWrapper: React.createRef(),
            focusedButtonId: undefined,
        };
        this.onDayClick = (day) => {
            const { displayMode, range, onRangeChange, onDateChange } = this.props;
            this.setState({ focusedDate: day });
            if (displayMode === 'date') {
                onDateChange?.(new Date(day));
                return;
            }
            if (!range) {
                onRangeChange?.({ startDate: new Date(day) });
                return;
            }
            let { startDate, endDate } = range;
            if (!startDate) {
                onRangeChange?.({ startDate: new Date(day) });
                return;
            }
            if (!endDate) {
                endDate = new Date(day);
                if (isBefore(endDate, startDate)) {
                    [startDate, endDate] = [endDate, startDate];
                }
                this.setPreviewToDay(day);
                onRangeChange?.({ startDate, endDate });
                return;
            }
            onRangeChange?.({ startDate: new Date(day) });
            this.setPreviewToDay(day);
        };
        this.onPreviewChangeCb = (day) => {
            const { displayMode, range, onPreviewChange, showPreview } = this.props;
            if (!showPreview) {
                return;
            }
            if (!day) {
                const preview = undefined;
                this.setState({ preview });
                onPreviewChange?.(preview);
                return;
            }
            if (displayMode === 'date') {
                const preview = { startDate: new Date(day), endDate: new Date(day) };
                this.setState({ preview });
                onPreviewChange?.(preview);
                return;
            }
            if (!range || !range.startDate) {
                const preview = { startDate: new Date(day), endDate: new Date(day) };
                this.setState({ preview });
                onPreviewChange?.(preview);
                return;
            }
            if (!range.endDate) {
                const preview = {
                    startDate: new Date(range.startDate),
                    endDate: new Date(day),
                };
                this.setState({ preview });
                onPreviewChange?.(preview);
                return;
            }
            const preview = { startDate: new Date(day), endDate: new Date(day) };
            this.setState({ preview });
            onPreviewChange?.(preview);
        };
        this.setPreviewToDay = (day) => this.setState({
            preview: {
                startDate: new Date(day),
                endDate: new Date(day),
            },
        });
        this.isMonthPickerOptionDisabled = (month) => {
            const { visibleDate } = this.state;
            const { minDate, maxDate } = this.props;
            const dateWithMonth = setMonth(visibleDate, month);
            return (differenceInCalendarMonths(dateWithMonth, minDate) < 0 ||
                differenceInCalendarMonths(maxDate, dateWithMonth) < 0);
        };
        this.changeShownDate = (value, mode = 'set') => {
            const { visibleDate } = this.state;
            const { months, minDate, maxDate } = this.props;
            const modeMap = {
                monthOffset: () => addMonths(visibleDate, value),
                setMonth: () => setMonth(visibleDate, value),
                setYear: () => setYear(visibleDate, value),
                set: () => value,
            };
            const newDate = min([
                max([modeMap[mode](), minDate]),
                addMonths(maxDate, -months + 1),
            ]);
            this.setState({ visibleDate: new Date(newDate) });
        };
        this.renderMonthYearPickers = memoize(({ testId, dateOptions, minDate, maxDate, focusedMonthFormat, focusedYearFormat, visibleDate, locale, }) => {
            const formatOptions = {
                ...dateOptions,
                locale,
            };
            const focusedMonth = format(visibleDate, focusedMonthFormat, formatOptions);
            const focusedYear = format(visibleDate, focusedYearFormat, formatOptions);
            let monthDate = new Date();
            const upperYearLimit = maxDate.getFullYear();
            const lowerYearLimit = minDate.getFullYear();
            const yearDate = new Date();
            return (React.createElement(Styled.MonthYearPickers, { ...getTestAttributes(`${testId}_MONTH_YEAR_PICKERS`) },
                React.createElement(Styled.MonthYearPicker, { ...getTestAttributes(`${testId}_MONTH_PICKER`) },
                    React.createElement(DropdownButton, { buttonText: focusedMonth, "aria-controls": `${testId}_MONTH_PICKER_LIST`, renderInPortal: false, ...getTestAttributes(`${testId}_MONTH_PICKER_DROPDOWN_BUTTON`) },
                        React.createElement(List, { id: `${testId}_MONTH_PICKER_LIST` }, new Array(12).fill(null).map((_, i) => {
                            monthDate = setMonth(monthDate, i);
                            return (React.createElement(ListItem, { key: monthDate.toString(), onClick: () => this.changeShownDate(i, 'setMonth'), isDisabled: this.isMonthPickerOptionDisabled(i), ...getTestAttributes(`${testId}_MONTH_PICKER_LIST_ITEM_${i}`) }, format(monthDate, focusedMonthFormat, formatOptions)));
                        })))),
                React.createElement(Styled.MonthYearPicker, { ...getTestAttributes(`${testId}_YEAR_PICKER`) },
                    React.createElement(DropdownButton, { buttonText: focusedYear, renderInPortal: false, ...getTestAttributes(`${testId}_YEAR_PICKER_DROPDOWN_BUTTON`) },
                        React.createElement(List, null, new Array(upperYearLimit - lowerYearLimit + 1)
                            .fill(upperYearLimit)
                            .map((val, i) => {
                            const year = val - i;
                            yearDate.setFullYear(year);
                            return (React.createElement(ListItem, { key: year, onClick: () => this.changeShownDate(year, 'setYear'), ...getTestAttributes(`${testId}_YEAR_PICKER_LIST_ITEM_${year}`) }, format(yearDate, focusedYearFormat)));
                        }))))));
        });
        this.renderHeader = memoize(({ testId, minDate, maxDate, months, showMonthYearPickers, visibleDate, theme, showMonthArrow, dateOptions, focusedMonthFormat, focusedYearFormat, locale, }) => {
            const { prevMonthLabel, nextMonthLabel } = this.props;
            const isPrevDisabled = differenceInCalendarMonths(visibleDate, minDate) <= 0;
            const isNextDisabled = differenceInCalendarMonths(maxDate, visibleDate) <= months - 1;
            const LeftIcon = theme.isClassic ? ArrowLeftSolidIcon : ArrowLeftLongIcon;
            const RightIcon = theme.isClassic
                ? ArrowRightSolidIcon
                : ArrowRightLongIcon;
            const color = theme.arrowColor;
            return (React.createElement(React.Fragment, null,
                showMonthArrow && (React.createElement(Styled.CalendarMonthNavigation, { id: `${testId}_prevMonthBtn`, type: "button", isLeft: true, showMonthYearPickers: showMonthYearPickers && months > 1, "aria-label": prevMonthLabel, onClick: () => this.changeShownDate(-1, 'monthOffset') },
                    React.createElement(LeftIcon, { "aria-labelledby": `${testId}_prevMonthBtn`, link: true, disabled: isPrevDisabled, color: color, role: "img", ...getTestAttributes(`${testId}_PREV_MONTH_ARROW`) }))),
                showMonthYearPickers &&
                    months > 1 &&
                    this.renderMonthYearPickers({
                        testId,
                        dateOptions,
                        minDate,
                        maxDate,
                        focusedMonthFormat,
                        focusedYearFormat,
                        visibleDate,
                        locale,
                    }),
                showMonthArrow && (React.createElement(Styled.CalendarMonthNavigation, { id: `${testId}_nextMonthBtn`, type: "button", showMonthYearPickers: showMonthYearPickers && months > 1, onClick: () => this.changeShownDate(1, 'monthOffset'), "aria-label": nextMonthLabel },
                    React.createElement(RightIcon, { "aria-labelledby": `${testId}_nextMonthBtn`, link: true, disabled: isNextDisabled, color: color, role: "img", ...getTestAttributes(`${testId}_NEXT_MONTH_ARROW`) })))));
        });
        this.onNavigation = (ev) => {
            const { months, showMonthArrow, showMonthYearPickers, minDate, maxDate } = this.props;
            const { visibleDate, focusedDate } = this.state;
            if (ev?.key === 'Enter' || ev?.key === 'Space') {
                return;
            }
            const newDate = handleNavigation({
                ev,
                months,
                visibleDate,
                minDate,
                maxDate,
                changeShownDate: this.changeShownDate,
                focusedDate: focusedDate,
                showMonthArrow,
                showMonthYearPickers,
            });
            this.setState({
                focusedDate: newDate,
                focusedButtonId: newDate
                    ? `#day-${format(newDate, 'dd-MM-yyyy')}`
                    : undefined,
            }, () => {
                const { focusedButtonId, monthWrapper } = this.state;
                if (!focusedButtonId || !monthWrapper.current) {
                    return;
                }
                const buttonToFocus = monthWrapper.current.querySelector(focusedButtonId);
                if (buttonToFocus) {
                    buttonToFocus.focus();
                }
            });
        };
    }
    componentDidUpdate(prevProps) {
        const newState = this.getNewState(prevProps, this.state.visibleDate);
        if (newState) {
            this.setState(newState);
        }
    }
    getNewState(prevProps, visibleDate) {
        const { date, range } = this.props;
        const { displayMode, months } = this.props;
        switch (displayMode) {
            case 'date':
                return getNewStateForDate(date, prevProps.date, getInterval(visibleDate, months));
            case 'dateRange':
                if (!range || !prevProps.range)
                    return null;
                return getNewStateForRange(range, prevProps.range, getInterval(visibleDate, months));
            default:
                return null;
        }
    }
    render() {
        const { visibleDate, preview, monthWrapper, focusedButtonId } = this.state;
        const { dateOptions, locale, theme, enableMaxWidth } = this.props;
        const { testId, minDate, maxDate, months, showMonthYearPickers, showMonthArrow, focusedMonthFormat, focusedYearFormat, } = this.props;
        const { isClassic, arrowColor } = theme;
        return (React.createElement(ThemeProvider, { theme: theme },
            React.createElement(Styled.CalendarWrapper, { ...getTestAttributes(testId) },
                this.renderHeader({
                    testId,
                    minDate,
                    maxDate,
                    months,
                    showMonthYearPickers,
                    visibleDate,
                    theme: { isClassic, arrowColor },
                    showMonthArrow,
                    dateOptions,
                    focusedMonthFormat,
                    focusedYearFormat,
                    locale,
                }),
                React.createElement(Styled.MonthWrapper, { enableMaxWidth: enableMaxWidth, ref: monthWrapper, onKeyDown: this.onNavigation }, new Array(months).fill(null).map((_, i) => {
                    const monthStep = addMonths(visibleDate, i);
                    return (React.createElement(Fragment, { key: monthStep.toString() },
                        React.createElement(Month, { ...this.props, testId: `${testId}_${i}`, month: monthStep, preview: preview, showWeekDays: true, showMonthName: true, locale: locale, onDayClick: this.onDayClick, onPreviewChange: this.onPreviewChangeCb, focusedButtonId: focusedButtonId, onFocus: day => this.setState({ focusedDate: day }) }),
                        React.createElement(Styled.MonthSeparator, null)));
                })))));
    }
}
Calendar.defaultProps = {
    testId: 'CALENDAR',
    showMonthArrow: true,
    showMonthYearPickers: true,
    months: 2,
    dateOptions: { weekStartsOn: 0, customEvenMonths: false },
    disabledDates: [],
    enabledDates: [],
    minDate: addYears(new Date(), -100),
    maxDate: addYears(new Date(), 20),
    displayMode: 'date',
    showPreview: true,
    dayNumberFormat: 'd',
    weekDayDisplayFormat: 'EE',
    monthDisplayFormat: 'MMMM yyyy',
    focusedMonthFormat: 'MMMM',
    focusedYearFormat: 'yyyy',
    enableMaxWidth: true,
    prevMonthLabel: 'Previous month',
    nextMonthLabel: 'Next month',
};
export default withTheme(Calendar, 'calendar');
