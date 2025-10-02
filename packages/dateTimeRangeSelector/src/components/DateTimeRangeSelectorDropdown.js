import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash.noop';
import find from 'lodash.find';

import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import isBefore from 'date-fns/isBefore';

import { getTestAttributes } from '@8x8/oxygen-config';
import Button, {
  ButtonGroup,
  buttonSize,
  buttonVariant,
} from '@8x8/oxygen-button';
import {
  BaseDropdownContainer,
  BaseDropdownFooter,
  BasePopperContainer,
} from '@8x8/oxygen-date-time-base';

import { DateTimeRangePicker } from './DateTimeRangePicker';
import CUSTOM_RANGE_ID from '../utils/constants';

const setHoursAndMinutes = (date, hours, minutes) =>
  setHours(setMinutes(date, minutes), hours);

class DateTimeRangeSelectorDropdown extends PureComponent {
  constructor(props) {
    super(props);

    const defaultState = this.getState();

    this.state = {
      isEndTimeValid: true,
      ...defaultState,
    };
  }

  componentDidUpdate(prevProps) {
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

  onApply = () => {
    const { onClose, onRangeChange } = this.props;
    const {
      predefinedRange,
      dateRange: { startDate, endDate },
    } = this.state;

    if (this.timeRangeIsInvalid()) {
      this.setState({ isEndTimeValid: false });

      return;
    }

    onClose();

    const { id } = predefinedRange;

    if (id !== CUSTOM_RANGE_ID) {
      onRangeChange({
        predefinedRange: { ...predefinedRange },
      });

      return;
    }

    onRangeChange({
      dateTime: {
        startDate: new Date(startDate),
        endDate: new Date(endDate),
      },
    });
  };

  onClear = () => {
    const { onClose, onRangeChange } = this.props;

    onClose();

    onRangeChange({});
  };

  timeRangeIsInvalid = () => {
    const {
      dateRange: { startDate, endDate },
    } = this.state;

    return endDate && isBefore(endDate, startDate);
  };

  setOuterState = stateProp => {
    this.setState({ ...stateProp });
  };

  render() {
    const {
      dateTimeRange,
      clearButtonLabel,
      otherCalendarProps,
      finishButtonLabel,
      hidePredefinedRanges,
      hideTime,
      fromLabel,
      startTimeLabel,
      toLabel,
      endTimeLabel,
      endTimeErrorMessage,
      predefinedRanges,
      predefinedRange,
      testId,
      dateFormat,
      timeFormat,
      locale,
      dropdownRef,
      style,
      headerRenderer,
      customPredefinedRangeLabel,
      onClose,
      theme,
    } = this.props;

    const { isEndTimeValid } = this.state;

    return (
      <BasePopperContainer ref={dropdownRef} style={style}>
        <BaseDropdownContainer {...getTestAttributes(`${testId}`)}>
          <DateTimeRangePicker
            theme={theme}
            dateTimeRange={dateTimeRange}
            otherCalendarProps={otherCalendarProps}
            hidePredefinedRanges={hidePredefinedRanges}
            hideTime={hideTime}
            endTimeErrorMessage={endTimeErrorMessage}
            predefinedRanges={predefinedRanges}
            predefinedRange={predefinedRange}
            testId={testId}
            dateFormat={dateFormat}
            timeFormat={timeFormat}
            locale={locale}
            headerRenderer={headerRenderer}
            customPredefinedRangeLabel={customPredefinedRangeLabel}
            fromLabel={fromLabel}
            startTimeLabel={startTimeLabel}
            toLabel={toLabel}
            endTimeLabel={endTimeLabel}
            onClose={onClose}
            setOuterState={this.setOuterState}
          />
          <BaseDropdownFooter {...getTestAttributes(`${testId}_FOOTER`)}>
            <ButtonGroup {...getTestAttributes(`${testId}_BUTTON_GROUP`)} small>
              <Button
                testId={`${testId}_FINISH_BUTTON`}
                size={buttonSize.small}
                onClick={this.onApply}
                isDisabled={!isEndTimeValid}
              >
                {finishButtonLabel}
              </Button>
              <Button
                testId={`${testId}_CLEAR_BUTTON`}
                variant={buttonVariant.secondary}
                size={buttonSize.small}
                onClick={this.onClear}
              >
                {clearButtonLabel}
              </Button>
            </ButtonGroup>
          </BaseDropdownFooter>
        </BaseDropdownContainer>
      </BasePopperContainer>
    );
  }
}

DateTimeRangeSelectorDropdown.propTypes = {
  theme: PropTypes.object,
  clearButtonLabel: PropTypes.string.isRequired,
  finishButtonLabel: PropTypes.string.isRequired,
  otherCalendarProps: PropTypes.object,
  hidePredefinedRanges: PropTypes.bool,
  hideTime: PropTypes.bool,
  endTimeErrorMessage: PropTypes.string.isRequired,
  fromLabel: PropTypes.string.isRequired,
  startTimeLabel: PropTypes.string.isRequired,
  toLabel: PropTypes.string.isRequired,
  endTimeLabel: PropTypes.string.isRequired,
  predefinedRanges: PropTypes.array.isRequired,
  predefinedRange: PropTypes.object.isRequired,
  customPredefinedRangeLabel: PropTypes.string.isRequired,
  onClose: PropTypes.func,
  onRangeChange: PropTypes.func.isRequired,
  dateTimeRange: PropTypes.object,
  testId: PropTypes.string,
  dateFormat: PropTypes.string.isRequired,
  timeFormat: PropTypes.string.isRequired,
  locale: PropTypes.object,
  dropdownRef: PropTypes.func,
  style: PropTypes.object.isRequired,
  headerRenderer: PropTypes.func,
};

DateTimeRangeSelectorDropdown.defaultProps = {
  otherCalendarProps: {},
  hidePredefinedRanges: false,
  hideTime: false,
  onClose: noop,
  testId: 'DATE_TIME_RANGE_SELECTOR_DROPDOWN',
  dropdownRef: undefined,
  dateTimeRange: undefined,
  locale: undefined,
  headerRenderer: undefined,
};

export default DateTimeRangeSelectorDropdown;
