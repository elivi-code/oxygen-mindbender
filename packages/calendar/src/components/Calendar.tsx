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

import {
  ArrowLeftSolidIcon,
  ArrowRightSolidIcon,
  ArrowLeftLongIcon,
  ArrowRightLongIcon,
} from '@8x8/oxygen-icon';

import DropdownButton from '@8x8/oxygen-dropdown-button';
import List, { ListItem } from '@8x8/oxygen-list';
import { getTestAttributes, withTheme } from '@8x8/oxygen-config';

import * as Styled from '../styled/Calendar';
import Month from './Month';
import { handleNavigation } from '../utils/handleKeyboardNavigation';
import { CalendarTheme, DateRange } from '../types';
import {
  CalendarDefaultProps,
  CalendarProps,
  InternalCalendarProps,
} from './CalendarProps';
import {
  getInterval,
  getNewStateForDate,
  getNewStateForRange,
} from './CalendarUtils';

type RenderMonthYearPickersProps = Pick<
  InternalCalendarProps,
  'testId' | 'dateOptions' | 'locale'
> &
  Pick<
    CalendarDefaultProps,
    'focusedMonthFormat' | 'focusedYearFormat' | 'minDate' | 'maxDate'
  > & {
    visibleDate: Date;
  };

type RenderHeaderProps = Pick<
  InternalCalendarProps,
  'testId' | 'dateOptions' | 'locale' | 'theme'
> &
  Pick<
    CalendarDefaultProps,
    | 'focusedMonthFormat'
    | 'focusedYearFormat'
    | 'minDate'
    | 'maxDate'
    | 'months'
    | 'showMonthYearPickers'
    | 'showMonthArrow'
  > & {
    visibleDate: Date;
  };

interface CalendarState {
  visibleDate: Date;
  focusedDate?: Date;
  preview?: DateRange;
  monthWrapper: React.RefObject<HTMLDivElement>;
  focusedButtonId?: string;
}
interface ModeMap {
  monthOffset: () => Date;
  setMonth: () => Date;
  setYear: () => Date;
  set: () => number;
}

class Calendar extends PureComponent<InternalCalendarProps, CalendarState> {
  static defaultProps: CalendarDefaultProps = {
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

  state: CalendarState = {
    visibleDate:
      this.props.range?.startDate ||
      this.props.date ||
      this.props.defaultFocusedDate ||
      new Date(),
    focusedDate: undefined,
    preview: undefined,
    monthWrapper: React.createRef(),
    focusedButtonId: undefined,
  };

  componentDidUpdate(prevProps: CalendarProps) {
    const newState = this.getNewState(prevProps, this.state.visibleDate);

    if (newState) {
      this.setState(newState);
    }
  }

  getNewState(prevProps: CalendarProps, visibleDate: Date) {
    const { date, range } = this.props;
    const { displayMode, months } = this.props as CalendarDefaultProps;

    switch (displayMode) {
      case 'date':
        return getNewStateForDate(
          date,
          prevProps.date,
          getInterval(visibleDate, months),
        );

      case 'dateRange':
        if (!range || !prevProps.range) return null;

        return getNewStateForRange(
          range,
          prevProps.range,
          getInterval(visibleDate, months),
        );

      default:
        return null;
    }
  }

  onDayClick = (day: Date) => {
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

  onPreviewChangeCb = (day?: Date) => {
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

  setPreviewToDay = (day: Date) =>
    this.setState({
      preview: {
        startDate: new Date(day),
        endDate: new Date(day),
      },
    });

  isMonthPickerOptionDisabled = (month: number) => {
    const { visibleDate } = this.state;
    const { minDate, maxDate } = this.props as CalendarDefaultProps;
    const dateWithMonth = setMonth(visibleDate, month);

    return (
      differenceInCalendarMonths(dateWithMonth, minDate) < 0 ||
      differenceInCalendarMonths(maxDate, dateWithMonth) < 0
    );
  };

  changeShownDate = (value: number, mode: keyof ModeMap = 'set') => {
    const { visibleDate } = this.state;
    const { months, minDate, maxDate } = this.props as CalendarDefaultProps;
    const modeMap: ModeMap = {
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

  renderMonthYearPickers = memoize(
    ({
      testId,
      dateOptions,
      minDate,
      maxDate,
      focusedMonthFormat,
      focusedYearFormat,
      visibleDate,
      locale,
    }: RenderMonthYearPickersProps) => {
      const formatOptions = {
        ...dateOptions,
        locale,
      };
      const focusedMonth = format(
        visibleDate,
        focusedMonthFormat,
        formatOptions,
      );
      const focusedYear = format(visibleDate, focusedYearFormat, formatOptions);
      let monthDate = new Date();
      const upperYearLimit = maxDate.getFullYear();
      const lowerYearLimit = minDate.getFullYear();
      const yearDate = new Date();

      return (
        <Styled.MonthYearPickers
          {...getTestAttributes(`${testId}_MONTH_YEAR_PICKERS`)}
        >
          <Styled.MonthYearPicker
            {...getTestAttributes(`${testId}_MONTH_PICKER`)}
          >
            <DropdownButton
              buttonText={focusedMonth}
              aria-controls={`${testId}_MONTH_PICKER_LIST`}
              renderInPortal={false}
              {...getTestAttributes(`${testId}_MONTH_PICKER_DROPDOWN_BUTTON`)}
            >
              <List id={`${testId}_MONTH_PICKER_LIST`}>
                {new Array(12).fill(null).map((_, i) => {
                  monthDate = setMonth(monthDate, i);

                  return (
                    <ListItem
                      key={monthDate.toString()}
                      onClick={() => this.changeShownDate(i, 'setMonth')}
                      isDisabled={this.isMonthPickerOptionDisabled(i)}
                      {...getTestAttributes(
                        `${testId}_MONTH_PICKER_LIST_ITEM_${i}`,
                      )}
                    >
                      {format(monthDate, focusedMonthFormat, formatOptions)}
                    </ListItem>
                  );
                })}
              </List>
            </DropdownButton>
          </Styled.MonthYearPicker>

          <Styled.MonthYearPicker
            {...getTestAttributes(`${testId}_YEAR_PICKER`)}
          >
            <DropdownButton
              buttonText={focusedYear}
              renderInPortal={false}
              {...getTestAttributes(`${testId}_YEAR_PICKER_DROPDOWN_BUTTON`)}
            >
              <List>
                {new Array(upperYearLimit - lowerYearLimit + 1)
                  .fill(upperYearLimit)
                  .map((val, i) => {
                    const year = val - i;

                    yearDate.setFullYear(year);

                    return (
                      <ListItem
                        key={year}
                        onClick={() => this.changeShownDate(year, 'setYear')}
                        {...getTestAttributes(
                          `${testId}_YEAR_PICKER_LIST_ITEM_${year}`,
                        )}
                      >
                        {format(yearDate, focusedYearFormat)}
                      </ListItem>
                    );
                  })}
              </List>
            </DropdownButton>
          </Styled.MonthYearPicker>
        </Styled.MonthYearPickers>
      );
    },
  );

  renderHeader = memoize(
    ({
      testId,
      minDate,
      maxDate,
      months,
      showMonthYearPickers,
      visibleDate,
      theme,
      showMonthArrow,
      dateOptions,
      focusedMonthFormat,
      focusedYearFormat,
      locale,
    }: RenderHeaderProps) => {
      const { prevMonthLabel, nextMonthLabel } = this.props;
      const isPrevDisabled =
        differenceInCalendarMonths(visibleDate, minDate) <= 0;
      const isNextDisabled =
        differenceInCalendarMonths(maxDate, visibleDate) <= months - 1;

      const LeftIcon = theme.isClassic ? ArrowLeftSolidIcon : ArrowLeftLongIcon;
      const RightIcon = theme.isClassic
        ? ArrowRightSolidIcon
        : ArrowRightLongIcon;
      const color = theme.arrowColor;

      return (
        <>
          {showMonthArrow && (
            <Styled.CalendarMonthNavigation
              id={`${testId}_prevMonthBtn`}
              type="button"
              isLeft
              showMonthYearPickers={showMonthYearPickers && months > 1}
              aria-label={prevMonthLabel}
              onClick={() => this.changeShownDate(-1, 'monthOffset')}
            >
              <LeftIcon
                aria-labelledby={`${testId}_prevMonthBtn`}
                link
                disabled={isPrevDisabled}
                color={color}
                role="img"
                {...getTestAttributes(`${testId}_PREV_MONTH_ARROW`)}
              />
            </Styled.CalendarMonthNavigation>
          )}
          {showMonthYearPickers &&
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
            })}
          {showMonthArrow && (
            <Styled.CalendarMonthNavigation
              id={`${testId}_nextMonthBtn`}
              type="button"
              showMonthYearPickers={showMonthYearPickers && months > 1}
              onClick={() => this.changeShownDate(1, 'monthOffset')}
              aria-label={nextMonthLabel}
            >
              <RightIcon
                aria-labelledby={`${testId}_nextMonthBtn`}
                link
                disabled={isNextDisabled}
                color={color}
                role="img"
                {...getTestAttributes(`${testId}_NEXT_MONTH_ARROW`)}
              />
            </Styled.CalendarMonthNavigation>
          )}
        </>
      );
    },
  );

  onNavigation = (ev: React.KeyboardEvent<HTMLDivElement>) => {
    const { months, showMonthArrow, showMonthYearPickers, minDate, maxDate } =
      this.props as CalendarDefaultProps;
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
      focusedDate: focusedDate as Date,
      showMonthArrow,
      showMonthYearPickers,
    });

    this.setState(
      {
        focusedDate: newDate,
        focusedButtonId: newDate
          ? `#day-${format(newDate, 'dd-MM-yyyy')}`
          : undefined,
      },
      () => {
        const { focusedButtonId, monthWrapper } = this.state;

        if (!focusedButtonId || !monthWrapper.current) {
          return;
        }

        const buttonToFocus = monthWrapper.current.querySelector(
          focusedButtonId,
        ) as HTMLElement;

        if (buttonToFocus) {
          buttonToFocus.focus();
        }
      },
    );
  };

  render() {
    const { visibleDate, preview, monthWrapper, focusedButtonId } = this.state;
    const { dateOptions, locale, theme, enableMaxWidth } = this.props;
    const {
      testId,
      minDate,
      maxDate,
      months,
      showMonthYearPickers,
      showMonthArrow,
      focusedMonthFormat,
      focusedYearFormat,
    } = this.props as CalendarDefaultProps;

    const { isClassic, arrowColor } = theme;

    return (
      <ThemeProvider theme={theme}>
        <Styled.CalendarWrapper {...getTestAttributes(testId)}>
          {this.renderHeader({
            testId,
            minDate,
            maxDate,
            months,
            showMonthYearPickers,
            visibleDate,
            theme: { isClassic, arrowColor } as CalendarTheme,
            showMonthArrow,
            dateOptions,
            focusedMonthFormat,
            focusedYearFormat,
            locale,
          })}

          <Styled.MonthWrapper
            enableMaxWidth={enableMaxWidth}
            ref={monthWrapper}
            onKeyDown={this.onNavigation}
          >
            {new Array(months).fill(null).map((_, i) => {
              const monthStep = addMonths(visibleDate, i);

              return (
                <Fragment key={monthStep.toString()}>
                  <Month
                    {...this.props}
                    testId={`${testId}_${i}`}
                    month={monthStep}
                    preview={preview}
                    showWeekDays
                    showMonthName
                    locale={locale}
                    onDayClick={this.onDayClick}
                    onPreviewChange={this.onPreviewChangeCb}
                    focusedButtonId={focusedButtonId}
                    onFocus={day => this.setState({ focusedDate: day })}
                  />

                  <Styled.MonthSeparator />
                </Fragment>
              );
            })}
          </Styled.MonthWrapper>
        </Styled.CalendarWrapper>
      </ThemeProvider>
    );
  }
}

export default withTheme(Calendar, 'calendar');
