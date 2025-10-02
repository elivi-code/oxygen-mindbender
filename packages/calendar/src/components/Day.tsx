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
import { DateRange } from '../types';
import { InternalCalendarProps } from './CalendarProps';

export interface OwnProps {
  day: Date;
  preview?: DateRange;
  isPassive?: boolean;
  isDisabled?: boolean;
  isToday?: boolean;
  isWeekend?: boolean;
  isStartOfWeek?: boolean;
  isEndOfWeek?: boolean;
  isStartOfMonth?: boolean;
  isEndOfMonth?: boolean;
  onClick?: (day: Date) => void;
  onPreviewChange?: (day?: Date) => void;
  focusedButtonId?: string;
  onFocus?: (day: Date) => void;
}

export type DayProps = OwnProps &
  Pick<
    InternalCalendarProps,
    | 'testId'
    | 'displayMode'
    | 'range'
    | 'date'
    | 'dayNumberFormat'
    | 'locale'
    | 'theme'
  >;

type DayDefaultProps = Required<
  Pick<
    DayProps,
    | 'testId'
    | 'displayMode'
    | 'isPassive'
    | 'isDisabled'
    | 'isToday'
    | 'isWeekend'
    | 'isStartOfWeek'
    | 'isEndOfWeek'
    | 'isStartOfMonth'
    | 'isEndOfMonth'
    | 'dayNumberFormat'
  >
>;

class Day extends PureComponent<DayProps> {
  static defaultProps: DayDefaultProps = {
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

  onKeyEvent = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const { day, isPassive, isDisabled, onClick } = this.props;

    if (isPassive || isDisabled) {
      return;
    }

    if (event.key === 'Enter' || event.key === 'Space') {
      onClick?.(day);
    }
  };

  onMouseEvent = ({ type }: { type: string }) => {
    const { day, isPassive, isDisabled, onClick, onPreviewChange, onFocus } =
      this.props;

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

  getSelectionProps = () => {
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

  getPreviewProps = () => {
    const { preview } = this.props;

    if (!preview) {
      return {};
    }

    const { startDate, endDate } = preview;

    return this.getRangeProps(startDate, endDate);
  };

  getRangeProps = (start: Date, end?: Date) => {
    const { day } = this.props;
    let startDate: Date | undefined;
    let endDate;

    if (start && end && isBefore(end, start)) {
      startDate = end;
      endDate = start;
    } else {
      startDate = start;
      endDate = end;
    }

    startDate = startDate ? endOfDay(startDate) : undefined;
    endDate = endDate ? startOfDay(endDate) : startOfDay(startDate as Date);

    const isInRange =
      (!startDate || isAfter(day, startDate)) &&
      (!endDate || isBefore(day, endDate));
    const isStartEdge = !isInRange && isSameDay(day, startDate as Date);
    const isEndEdge = !isInRange && isSameDay(day, endDate);
    const isVisible = isInRange || isStartEdge || isEndEdge;

    return {
      isInRange,
      isStartEdge,
      isEndEdge,
      isVisible,
    };
  };

  getDayTabIndex = (dayId: string) => {
    const { isToday, focusedButtonId, isStartOfMonth, isDisabled, isPassive } =
      this.props;

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

  render() {
    const { day, isToday, isPassive, isDisabled, locale, theme, preview } =
      this.props;
    const { testId, dayNumberFormat } = this.props as DayDefaultProps;
    const selectionProps = this.getSelectionProps();
    const previewProps = this.getPreviewProps();

    const isEdge = selectionProps.isStartEdge || selectionProps.isEndEdge;
    const dayId = `day-${format(day, 'dd-MM-yyyy')}`;

    return (
      <ThemeProvider theme={theme}>
        <StyledDay.DayCell
          tabIndex={this.getDayTabIndex(dayId)}
          onClick={this.onMouseEvent}
          onMouseEnter={this.onMouseEvent}
          onMouseLeave={this.onMouseEvent}
          onFocus={this.onMouseEvent}
          onBlur={this.onMouseEvent}
          onKeyUp={this.onKeyEvent}
          isSelected={selectionProps.isVisible}
          isPassive={isPassive}
          isDisabled={isDisabled}
          isEdge={isEdge}
          id={!isPassive ? dayId : undefined}
          aria-disabled={isDisabled || isPassive}
          aria-selected={selectionProps.isVisible}
          role="gridcell"
          {...getTestAttributes(testId)}
        >
          {!isPassive && (
            <>
              {selectionProps.isVisible && (
                <StyledDay.SelectionRange
                  {...selectionProps}
                  isDisabled={isDisabled}
                  {...getTestAttributes(`${testId}_SELECTION_RANGE_MIDDLE`)}
                />
              )}
              {preview && (
                <StyledDay.PreviewRange
                  {...previewProps}
                  {...getTestAttributes(`${testId}_PREVIEW_RANGE`)}
                />
              )}
              {isEdge && (
                <StyledDay.SelectionRangeEdge
                  {...selectionProps}
                  isDisabled={isDisabled}
                  {...getTestAttributes(`${testId}_SELECTION_RANGE_EDGE`)}
                />
              )}
            </>
          )}
          <StyledDay.NumberContainer>
            <StyledDay.DayNumber
              aria-label={format(
                day,
                'EEEE, MMMM do',
                locale ? { locale } : undefined,
              )}
              isToday={isToday}
              {...getTestAttributes(`${testId}_NUMBER`)}
            >
              {format(day, dayNumberFormat, locale ? { locale } : undefined)}
            </StyledDay.DayNumber>
            {isToday && (
              <StyledDay.TodayLine
                isSelected={selectionProps.isVisible}
                isEdge={isEdge}
                isPassive={isPassive}
                {...getTestAttributes(`${testId}_TODAY_LINE`)}
              />
            )}
          </StyledDay.NumberContainer>
        </StyledDay.DayCell>
      </ThemeProvider>
    );
  }
}

export default withTheme(Day, 'calendar');
