/* eslint-disable react/default-props-match-prop-types */
import React, { PureComponent } from 'react';
import { ThemeProvider } from 'styled-components';
import startOfDay from 'date-fns/startOfDay';
import format from 'date-fns/format';
import isSameDay from 'date-fns/isSameDay';
import isAfter from 'date-fns/isAfter';
import isBefore from 'date-fns/isBefore';
import endOfDay from 'date-fns/endOfDay';
import { getTestAttributes, withTheme } from '@8x8/oxygen-config';
import * as StyledDay from '../styled/DayCell';
class Day extends PureComponent {
    constructor() {
        super(...arguments);
        this.onKeyEvent = (event) => {
            const { day, isPassive, isDisabled, onClick } = this.props;
            if (isPassive || isDisabled) {
                return;
            }
            if (event.key === 'Enter' || event.key === 'Space') {
                onClick?.(day);
            }
        };
        this.onMouseEvent = ({ type }) => {
            const { day, isPassive, isDisabled, onClick, onPreviewChange, onFocus } = this.props;
            if (isPassive) {
                onPreviewChange?.();
                return;
            }
            switch (type) {
                case 'click':
                    if (isPassive || isDisabled) {
                        break;
                    }
                    onClick?.(day);
                    break;
                case 'focus':
                case 'mouseenter':
                    onFocus?.(day);
                    onPreviewChange?.(day);
                    break;
                case 'blur':
                case 'mouseleave':
                    onPreviewChange?.();
                    break;
                default:
            }
        };
        this.getSelectionProps = () => {
            const { day, displayMode, date, range } = this.props;
            if (displayMode === 'date') {
                if (isSameDay(day, date)) {
                    return {
                        isInRange: true,
                        isStartEdge: true,
                        isEndEdge: true,
                        isVisible: true,
                    };
                }
                return {};
            }
            if (!range) {
                return {};
            }
            const { startDate, endDate } = range;
            return this.getRangeProps(startDate, endDate);
        };
        this.getPreviewProps = () => {
            const { preview } = this.props;
            if (!preview) {
                return {};
            }
            const { startDate, endDate } = preview;
            return this.getRangeProps(startDate, endDate);
        };
        this.getRangeProps = (start, end) => {
            const { day } = this.props;
            let startDate;
            let endDate;
            if (start && end && isBefore(end, start)) {
                startDate = end;
                endDate = start;
            }
            else {
                startDate = start;
                endDate = end;
            }
            startDate = startDate ? endOfDay(startDate) : undefined;
            endDate = endDate ? startOfDay(endDate) : startOfDay(startDate);
            const isInRange = (!startDate || isAfter(day, startDate)) &&
                (!endDate || isBefore(day, endDate));
            const isStartEdge = !isInRange && isSameDay(day, startDate);
            const isEndEdge = !isInRange && isSameDay(day, endDate);
            const isVisible = isInRange || isStartEdge || isEndEdge;
            return {
                isInRange,
                isStartEdge,
                isEndEdge,
                isVisible,
            };
        };
        this.getDayTabIndex = (dayId) => {
            const { isToday, focusedButtonId, isStartOfMonth, isDisabled, isPassive } = this.props;
            if (isDisabled || isPassive) {
                return -1;
            }
            if (focusedButtonId && focusedButtonId === dayId) {
                return 0;
            }
            if (isToday) {
                return 0;
            }
            return isStartOfMonth ? 0 : -1;
        };
    }
    render() {
        const { day, isToday, isPassive, isDisabled, locale, theme, preview } = this.props;
        const { testId, dayNumberFormat } = this.props;
        const selectionProps = this.getSelectionProps();
        const previewProps = this.getPreviewProps();
        const isEdge = selectionProps.isStartEdge || selectionProps.isEndEdge;
        const dayId = `day-${format(day, 'dd-MM-yyyy')}`;
        return (React.createElement(ThemeProvider, { theme: theme },
            React.createElement(StyledDay.DayCell, { tabIndex: this.getDayTabIndex(dayId), onClick: this.onMouseEvent, onMouseEnter: this.onMouseEvent, onMouseLeave: this.onMouseEvent, onFocus: this.onMouseEvent, onBlur: this.onMouseEvent, onKeyUp: this.onKeyEvent, isSelected: selectionProps.isVisible, isPassive: isPassive, isDisabled: isDisabled, isEdge: isEdge, id: !isPassive ? dayId : undefined, "aria-disabled": isDisabled || isPassive, "aria-selected": selectionProps.isVisible, role: "gridcell", ...getTestAttributes(testId) },
                !isPassive && (React.createElement(React.Fragment, null,
                    selectionProps.isVisible && (React.createElement(StyledDay.SelectionRange, { ...selectionProps, isDisabled: isDisabled, ...getTestAttributes(`${testId}_SELECTION_RANGE_MIDDLE`) })),
                    preview && (React.createElement(StyledDay.PreviewRange, { ...previewProps, ...getTestAttributes(`${testId}_PREVIEW_RANGE`) })),
                    isEdge && (React.createElement(StyledDay.SelectionRangeEdge, { ...selectionProps, isDisabled: isDisabled, ...getTestAttributes(`${testId}_SELECTION_RANGE_EDGE`) })))),
                React.createElement(StyledDay.NumberContainer, null,
                    React.createElement(StyledDay.DayNumber, { "aria-label": format(day, 'EEEE, MMMM do', locale ? { locale } : undefined), isToday: isToday, ...getTestAttributes(`${testId}_NUMBER`) }, format(day, dayNumberFormat, locale ? { locale } : undefined)),
                    isToday && (React.createElement(StyledDay.TodayLine, { isSelected: selectionProps.isVisible, isEdge: isEdge, isPassive: isPassive, ...getTestAttributes(`${testId}_TODAY_LINE`) }))))));
    }
}
Day.defaultProps = {
    testId: 'CALENDAR_DAY',
    displayMode: 'date',
    isPassive: false,
    isDisabled: false,
    isToday: false,
    isWeekend: false,
    isStartOfWeek: false,
    isEndOfWeek: false,
    isStartOfMonth: false,
    isEndOfMonth: false,
    dayNumberFormat: 'd',
};
export default withTheme(Day, 'calendar');
