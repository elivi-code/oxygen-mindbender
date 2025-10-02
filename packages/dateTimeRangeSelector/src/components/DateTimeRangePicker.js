import React, { PureComponent } from 'react';
import { ThemeProvider } from 'styled-components';

import getHours from 'date-fns/getHours';
import getMinutes from 'date-fns/getMinutes';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import format from 'date-fns/format';
import isBefore from 'date-fns/isBefore';
import PropTypes from 'prop-types';
import find from 'lodash.find';

import { getTestAttributes, withTheme } from '@8x8/oxygen-config';
import Label from '@8x8/oxygen-label';
import Input from '@8x8/oxygen-input';
import TimeSelector from '@8x8/oxygen-time-selector';
import Calendar, { DISPLAY_MODE } from '@8x8/oxygen-calendar';

import DateTimeRangeSelectorPredefinedList from './DateTimeRangeSelectorPredefinedList';
import CUSTOM_RANGE_ID from '../utils/constants';
import defaultPredefinedRanges from '../utils/predefinedRanges';
import {
  CalendarContainer,
  CalendarWrapper,
  Content,
  DateInput,
  DateTimeInputContainer,
  DateTimeInputs,
  EndTimeError,
  TimeInput,
  TimeSelectorPortalNode,
} from '../styled';

const setHoursAndMinutes = (date, hours, minutes) =>
  setHours(setMinutes(date, minutes), hours);

export class DateTimeRangePicker extends PureComponent {
  constructor(props) {
    super(props);
    const defaultState = this.getState();

    this.state = {
      isEndTimeValid: true,
      ...defaultState,
    };

    this.portalRef = React.createRef();
  }

  componentDidUpdate(prevProps) {
    // If the component is within its intended parent, we don't want to run this block
    if (!this.props.setOuterState) {
      const { dateTimeRange, predefinedRange } = this.props;
      const {
        dateTimeRange: previousDateTimeRange,
        predefinedRange: previousPredefinedRange,
      } = prevProps;

      if (
        predefinedRange === previousPredefinedRange &&
        dateTimeRange === previousDateTimeRange
      ) {
        return;
      }

      this.updateRangeStates(this.getState());
    }
  }

  updateRangeStates = state => {
    this.setState(state);
  };

  getState = () => {
    const { predefinedRange, predefinedRanges, dateTimeRange } = this.props;

    const { id, value } = predefinedRange;

    if (id !== CUSTOM_RANGE_ID) {
      const currentRange = find(predefinedRanges, { id });

      if (currentRange) {
        const { dateTimeRange: currentDateTimeRange } = currentRange;
        const dateRange = currentDateTimeRange(value);

        return {
          predefinedRange,
          dateRange,
          calendarRange: dateRange,
        };
      }
    }

    if (dateTimeRange) {
      return {
        predefinedRange: { id: CUSTOM_RANGE_ID },
        dateRange: dateTimeRange,
        calendarRange: dateTimeRange,
      };
    }

    return {
      predefinedRange: { id: CUSTOM_RANGE_ID },
      dateRange: {
        startDate: setHoursAndMinutes(new Date(), 0, 0),
        endDate: setHoursAndMinutes(new Date(), 23, 59),
      },
      calendarRange: {
        startDate: setHoursAndMinutes(new Date(), 0, 0),
        endDate: setHoursAndMinutes(new Date(), 23, 59),
      },
    };
  };

  onStartTimeChange = time => {
    if (!time) {
      this.setState(
        ({ dateRange: { startDate, endDate } }) => ({
          dateRange: {
            startDate,
            endDate,
          },
        }),
        this.validateTimeRangeOnDateTimeChange,
      );

      return;
    }

    this.setState(({ dateRange: { startDate, endDate } }) => {
      return {
        dateRange: {
          startDate: setHoursAndMinutes(startDate, time.hours, time.minutes),
          endDate,
        },
        predefinedRange: {
          id: CUSTOM_RANGE_ID,
        },
      };
    }, this.validateTimeRangeOnDateTimeChange);
  };

  onEndTimeChange = time => {
    if (!time) {
      this.setState(
        ({ dateRange: { startDate, endDate } }) => ({
          dateRange: {
            startDate,
            endDate,
          },
        }),
        this.validateTimeRangeOnDateTimeChange,
      );

      return;
    }

    this.setState(({ dateRange: { startDate, endDate } }) => {
      return {
        dateRange: {
          startDate,
          endDate: setHoursAndMinutes(endDate, time.hours, time.minutes),
        },
        predefinedRange: {
          id: CUSTOM_RANGE_ID,
        },
      };
    }, this.validateTimeRangeOnDateTimeChange);
  };

  onPredefinedListItemChange = ({ id, value }) => {
    const { predefinedRanges } = this.props;

    const currentRange = find(predefinedRanges, { id });

    if (!currentRange) {
      this.setState(
        {
          predefinedRange: {
            id: CUSTOM_RANGE_ID,
          },
        },
        () => {
          if (this.props.setOuterState) {
            this.props.setOuterState({
              predefinedRange: this.state.predefinedRange,
            });
          }

          if (this.props.onRangeChange)
            this.props.onRangeChange({
              dateTime: {
                startDate: new Date(this.state.dateRange.startDate),
                endDate: new Date(this.state.dateRange.endDate),
              },
              predefinedRange: this.state.predefinedRange,
            });

          this.validateTimeRangeOnDateTimeChange();
        },
      );

      return;
    }

    const { dateTimeRange } = currentRange;
    const dateRange = dateTimeRange(value);

    this.setState(
      {
        predefinedRange: {
          id,
          value,
        },
        dateRange,
        calendarRange: dateRange,
      },
      () => {
        if (this.props.setOuterState)
          this.props.setOuterState({
            predefinedRange: {
              id,
              value,
            },
            dateRange,
            calendarRange: dateRange,
          });

        if (this.props.onRangeChange)
          this.props.onRangeChange({
            dateTime: {
              startDate: new Date(this.state.dateRange.startDate),
              endDate: new Date(this.state.dateRange.endDate),
            },
            predefinedRange: this.state.predefinedRange,
          });

        this.validateTimeRangeOnDateTimeChange();
      },
    );
  };

  onCalendarRangeChange = ({ startDate, endDate }) => {
    const {
      dateRange: { startDate: currentStartDate, endDate: currentEndDate },
    } = this.state;

    const startHours = getHours(currentStartDate);
    const startMinutes = getMinutes(currentStartDate);
    const endHours = getHours(currentEndDate);
    const endMinutes = getMinutes(currentEndDate);

    this.setState(
      {
        dateRange: {
          startDate: setHoursAndMinutes(startDate, startHours, startMinutes),
          endDate: setHoursAndMinutes(
            endDate || startDate,
            endHours,
            endMinutes,
          ),
        },
        predefinedRange: {
          id: CUSTOM_RANGE_ID,
        },
        calendarRange: { startDate, endDate },
      },
      this.validateTimeRangeOnDateTimeChange,
    );
  };

  timeRangeIsInvalid = () => {
    const {
      dateRange: { startDate, endDate },
    } = this.state;

    return endDate && isBefore(endDate, startDate);
  };

  validateTimeRangeOnDateTimeChange = () => {
    const { isEndTimeValid } = this.state;

    const isTimeRangeInvalid = this.timeRangeIsInvalid();

    this.setState(
      {
        isEndTimeValid: !isTimeRangeInvalid,
      },
      this.props.setOuterState &&
        this.props.setOuterState({ isEndTimeValid: !isTimeRangeInvalid }),
    );

    if (isTimeRangeInvalid) return;

    if (this.props.setOuterState)
      this.props.setOuterState({
        predefinedRange: this.state.predefinedRange,
        dateRange: this.state.dateRange,
      });

    if (isEndTimeValid) {
      if (this.props.setOuterState)
        this.props.setOuterState({
          isEndTimeValid: true,
          dateRange: this.state.dateRange,
          predefinedRange: this.state.predefinedRange,
        });

      if (this.props.onRangeChange) {
        if (this.state.predefinedRange.id === CUSTOM_RANGE_ID) {
          this.props.onRangeChange({
            dateTime: {
              startDate: new Date(this.state.dateRange.startDate),
              endDate: new Date(this.state.dateRange.endDate),
            },
          });
        } else {
          this.props.onRangeChange({
            predefinedRange: this.state.predefinedRange,
          });
        }
      }
    }
  };

  render() {
    const {
      otherCalendarProps,
      hidePredefinedRanges,
      hideTime,
      fromLabel,
      startTimeLabel,
      toLabel,
      endTimeLabel,
      endTimeErrorMessage,
      predefinedRanges,
      testId,
      theme,
      dateFormat,
      timeFormat,
      locale,
      headerRenderer,
      customPredefinedRangeLabel,
    } = this.props;

    const {
      predefinedRange,
      isEndTimeValid,
      dateRange: { startDate, endDate },
      calendarRange,
    } = this.state;

    const startTimeValue = {
      hours: getHours(startDate),
      minutes: getMinutes(startDate),
      seconds: 0,
    };

    const endTimeValue = {
      hours: getHours(endDate),
      minutes: getMinutes(endDate),
      seconds: 0,
    };

    return (
      <ThemeProvider theme={theme}>
        <Content {...getTestAttributes(`${testId}_CONTENT`)}>
          {!hidePredefinedRanges && (
            <DateTimeRangeSelectorPredefinedList
              theme={theme}
              testId={`${testId}_PREDEFINED_LIST`}
              ranges={predefinedRanges}
              selectedRange={predefinedRange}
              customPredefinedRangeLabel={customPredefinedRangeLabel}
              onRangeSelect={this.onPredefinedListItemChange}
            />
          )}

          <CalendarContainer
            {...getTestAttributes(`${testId}_CALENDAR_CONTAINER`)}
          >
            {headerRenderer && headerRenderer(this.props)}
            {!hideTime && !headerRenderer && (
              <DateTimeInputs
                {...getTestAttributes(`${testId}_DATE_TIME_INPUTS`)}
              >
                <DateTimeInputContainer
                  {...getTestAttributes(
                    `${testId}_DATE_TIME_INPUT_CONTAINER_START`,
                  )}
                >
                  <TimeSelectorPortalNode ref={this.portalRef} />
                  <DateInput
                    {...getTestAttributes(`${testId}_DATE_INPUT_START`)}
                  >
                    <Label
                      htmlFor={`${testId}_DATE_INPUT_START_FIELD`}
                      value={fromLabel}
                      testId={`${testId}_DATE_INPUT_START_LABEL`}
                    />
                    <Input
                      id={`${testId}_DATE_INPUT_START_FIELD`}
                      {...getTestAttributes(`${testId}_DATE_INPUT_START_FIELD`)}
                      fixed
                      value={format(startDate, dateFormat, { locale })}
                      size="small"
                    />
                  </DateInput>

                  <TimeInput
                    {...getTestAttributes(`${testId}_TIME_INPUT_START`)}
                  >
                    <Label
                      value={startTimeLabel}
                      testId={`${testId}_TIME_INPUT_START_LABEL`}
                    />

                    <TimeSelector
                      timeDisplayFormat={timeFormat}
                      size="small"
                      placeholder={startTimeLabel}
                      value={startTimeValue}
                      testId={`${testId}_START_TIME_SELECTOR`}
                      onChange={this.onStartTimeChange}
                      portalRef={this.portalRef}
                    />
                  </TimeInput>
                </DateTimeInputContainer>

                <DateTimeInputContainer
                  {...getTestAttributes(
                    `${testId}_DATE_TIME_INPUT_CONTAINER_END`,
                  )}
                >
                  <DateInput {...getTestAttributes(`${testId}_DATE_INPUT_END`)}>
                    <Label
                      htmlFor={`${testId}_DATE_INPUT_END_FIELD`}
                      value={toLabel}
                      testId={`${testId}_DATE_INPUT_END_LABEL`}
                    />

                    <Input
                      id={`${testId}_DATE_INPUT_END_FIELD`}
                      {...getTestAttributes(`${testId}_DATE_INPUT_END_FIELD`)}
                      fixed
                      value={format(endDate, dateFormat, { locale })}
                      size="small"
                    />
                  </DateInput>

                  <TimeInput {...getTestAttributes(`${testId}_TIME_INPUT_END`)}>
                    <Label
                      value={endTimeLabel}
                      testId={`${testId}_TIME_INPUT_END_LABEL`}
                    />

                    <TimeSelector
                      hasError={!isEndTimeValid}
                      timeDisplayFormat={timeFormat}
                      size="small"
                      placeholder={endTimeLabel}
                      value={endTimeValue}
                      testId={`${testId}_END_TIME_SELECTOR`}
                      onChange={this.onEndTimeChange}
                      portalRef={this.portalRef}
                    />
                  </TimeInput>

                  {!isEndTimeValid && (
                    <EndTimeError
                      {...getTestAttributes(`${testId}_DATE_TIME_INPUTS_ERROR`)}
                    >
                      {endTimeErrorMessage}
                    </EndTimeError>
                  )}
                </DateTimeInputContainer>
              </DateTimeInputs>
            )}

            <CalendarWrapper
              {...getTestAttributes(`${testId}_CALENDAR_WRAPPER`)}
            >
              <Calendar
                showMonthYearPickers={false}
                {...otherCalendarProps}
                testId={`${testId}_CALENDAR`}
                displayMode={DISPLAY_MODE.DATE_RANGE}
                locale={locale}
                range={calendarRange}
                onRangeChange={this.onCalendarRangeChange}
                enableMaxWidth={false}
              />
            </CalendarWrapper>
          </CalendarContainer>
        </Content>
      </ThemeProvider>
    );
  }
}

DateTimeRangePicker.propTypes = {
  dateTimeRange: PropTypes.object,
  otherCalendarProps: PropTypes.object,
  hidePredefinedRanges: PropTypes.bool,
  hideTime: PropTypes.bool,
  endTimeErrorMessage: PropTypes.string.isRequired,
  fromLabel: PropTypes.string.isRequired,
  startTimeLabel: PropTypes.string.isRequired,
  toLabel: PropTypes.string.isRequired,
  endTimeLabel: PropTypes.string.isRequired,
  predefinedRanges: PropTypes.array,
  predefinedRange: PropTypes.object,
  customPredefinedRangeLabel: PropTypes.string.isRequired,
  testId: PropTypes.string,
  dateFormat: PropTypes.string.isRequired,
  timeFormat: PropTypes.string.isRequired,
  locale: PropTypes.object,
  headerRenderer: PropTypes.func,
  setOuterState: PropTypes.func,
  theme: PropTypes.object,
  onRangeChange: PropTypes.func,
};

DateTimeRangePicker.defaultProps = {
  otherCalendarProps: {},
  hidePredefinedRanges: false,
  hideTime: false,
  testId: 'DATE_TIME_RANGE_SELECTOR_DROPDOWN',
  locale: undefined,
  headerRenderer: undefined,
  predefinedRange: { id: CUSTOM_RANGE_ID },
  predefinedRanges: defaultPredefinedRanges,
};

export default withTheme(DateTimeRangePicker, 'dateTimeRangeSelector');
