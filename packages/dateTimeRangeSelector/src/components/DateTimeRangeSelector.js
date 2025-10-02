import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import noop from 'lodash.noop';
import find from 'lodash.find';
import isObject from 'lodash.isobject';
import { ThemeProvider } from 'styled-components';
import { Manager, Reference, Popper } from 'react-popper';

import { withTheme } from '@8x8/oxygen-config';
import DateTimeSelectorInput from '@8x8/oxygen-date-time-base';

import defaultPredefinedRanges from '../utils/predefinedRanges';
import CUSTOM_RANGE_ID from '../utils/constants';

import DateTimeRangeSelectorDropdown from './DateTimeRangeSelectorDropdown';

const registerEventHandlers = handlers => {
  if (!Array.isArray(handlers)) {
    return;
  }

  for (const handler of handlers) {
    handler.target.addEventListener(
      handler.eventName,
      handler.callback,
      handler.capture,
    );
  }
};

const unregisterEventHandlers = handlers => {
  if (!Array.isArray(handlers)) {
    return;
  }

  for (const handler of handlers) {
    handler.target.removeEventListener(
      handler.eventName,
      handler.callback,
      handler.capture,
    );
  }
};

const hasValueSelected = (predefinedRange, dateTimeRange) =>
  predefinedRange.id !== CUSTOM_RANGE_ID || isObject(dateTimeRange);

class DateTimeRangeSelector extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    const { customCloseHandlers } = this.props;

    this.inputRef = React.createRef();
    this.dropdownRef = React.createRef();
    this.closeHandlers = [
      {
        target: document.body,
        eventName: 'click',
        callback: this.onHideDropdown,
        capture: true,
      },
      {
        target: document.body,
        eventName: 'contextmenu',
        callback: this.onHideDropdown,
        capture: true,
      },
      ...this.addOnHideCallback(customCloseHandlers),
    ];
  }

  onHideDropdown = ({ target }) => {
    if (
      this.inputRef.current.contains(target) ||
      this.inputRef.current === target ||
      this.dropdownRef.current.contains(target) ||
      this.dropdownRef.current === target
    ) {
      return;
    }

    this.closeDropdown();
  };

  getDateTimeRangeTitle = () => {
    const {
      placeholder,
      predefinedRanges,
      predefinedRange: { id, value } = {},
      dateTimeRange: { startDate, endDate } = {},
      dateFormat,
      timeFormat,
    } = this.props;

    const currentRange = find(predefinedRanges, { id });

    if (currentRange) {
      const { displayName, selectedDisplayName } = currentRange;

      if (selectedDisplayName) {
        const displayValue = value || 'X';
        const [firstLabel, secondLabel] = selectedDisplayName;

        return `${firstLabel} ${displayValue} ${secondLabel}`;
      }

      if (displayName) {
        return displayName;
      }
    }

    if (startDate && endDate) {
      return `${format(startDate, `${dateFormat} ${timeFormat}`)} - ${format(
        endDate,
        `${dateFormat} ${timeFormat}`,
      )}`;
    }

    return placeholder || '';
  };

  setDropdownRef = node => {
    this.dropdownRef.current = node;
  };

  setInputRef = node => {
    this.inputRef.current = node;
  };
  closeDropdown = () => {
    unregisterEventHandlers(this.closeHandlers);
    this.setState(
      {
        isOpen: false,
      },
      this.props.onClose,
    );
  };

  openDropdown = () => {
    registerEventHandlers(this.closeHandlers);
    this.setState(
      {
        isOpen: true,
      },
      this.props.onOpen,
    );
  };

  toggleDateRangeSelectorDropdown = () => {
    const { isOpen } = this.state;

    if (!isOpen) {
      this.openDropdown();
    } else {
      this.closeDropdown();
    }
  };

  addOnHideCallback = customCloseHandlers =>
    customCloseHandlers.map(handler => ({
      ...handler,
      callback: this.closeDropdown,
    }));

  render() {
    const {
      hasError,
      iconLeft,
      id,
      otherCalendarProps,
      hidePredefinedRanges,
      hideTime,
      theme,
      size,
      inputIcon,
      isDisabled,
      clearButtonLabel,
      finishButtonLabel,
      fromLabel,
      startTimeLabel,
      toLabel,
      endTimeLabel,
      endTimeErrorMessage,
      predefinedRanges,
      predefinedRange,
      dateTimeRange,
      testId,
      dateFormat,
      timeFormat,
      locale,
      onRangeChange,
      inputRenderer,
      headerRenderer,
      customPredefinedRangeLabel,
    } = this.props;

    const { isOpen } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <Manager>
          <Reference>
            {({ ref }) => {
              const inputProps = {
                hasError,
                id,
                isOpen,
                isDisabled,
                size,
                testId: `${testId}_INPUT`,
                isValueSelected: hasValueSelected(
                  predefinedRange,
                  dateTimeRange,
                ),
                onClick: this.toggleDateRangeSelectorDropdown,
              };

              if (inputRenderer) {
                inputProps.ref = ref;

                return inputRenderer(inputProps);
              }
              const dateTimeRangeTitle = this.getDateTimeRangeTitle();

              return (
                <DateTimeSelectorInput
                  {...inputProps}
                  iconLeft={iconLeft}
                  inputIcon={inputIcon}
                  theme={theme}
                  popperAnchorRef={ref}
                  setInputRef={this.setInputRef}
                  title={dateTimeRangeTitle}
                />
              );
            }}
          </Reference>
          {isOpen && (
            <Popper
              placement="bottom-start"
              positionFixed
              innerRef={this.setDropdownRef}
            >
              {({ ref, style }) => (
                <DateTimeRangeSelectorDropdown
                  headerRenderer={headerRenderer}
                  otherCalendarProps={otherCalendarProps}
                  hidePredefinedRanges={hidePredefinedRanges}
                  hideTime={hideTime}
                  theme={theme}
                  testId={`${testId}_DROPDOWN`}
                  onClose={this.closeDropdown}
                  clearButtonLabel={clearButtonLabel}
                  finishButtonLabel={finishButtonLabel}
                  endTimeErrorMessage={endTimeErrorMessage}
                  fromLabel={fromLabel}
                  startTimeLabel={startTimeLabel}
                  toLabel={toLabel}
                  endTimeLabel={endTimeLabel}
                  predefinedRanges={predefinedRanges}
                  predefinedRange={predefinedRange}
                  customPredefinedRangeLabel={customPredefinedRangeLabel}
                  onRangeChange={onRangeChange}
                  dateTimeRange={dateTimeRange}
                  dateFormat={dateFormat}
                  timeFormat={timeFormat}
                  locale={locale}
                  dropdownRef={ref}
                  style={style}
                />
              )}
            </Popper>
          )}
        </Manager>
      </ThemeProvider>
    );
  }
}

DateTimeRangeSelector.propTypes = {
  otherCalendarProps: PropTypes.object,
  customCloseHandlers: PropTypes.array,
  hasError: PropTypes.bool,
  hidePredefinedRanges: PropTypes.bool,
  hideTime: PropTypes.bool,
  predefinedRanges: PropTypes.array,
  predefinedRange: PropTypes.object,
  dateTimeRange: PropTypes.object,
  size: PropTypes.oneOf(['large', 'small']),
  clearButtonLabel: PropTypes.string,
  finishButtonLabel: PropTypes.string,
  fromLabel: PropTypes.string,
  startTimeLabel: PropTypes.string,
  toLabel: PropTypes.string,
  endTimeLabel: PropTypes.string,
  customPredefinedRangeLabel: PropTypes.string,
  endTimeErrorMessage: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  testId: PropTypes.string,
  dateFormat: PropTypes.string,
  timeFormat: PropTypes.string,
  inputIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  iconLeft: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
    PropTypes.elementType,
  ]),
  isDisabled: PropTypes.bool,
  locale: PropTypes.object,
  onRangeChange: PropTypes.func,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  theme: PropTypes.object,
  inputRenderer: PropTypes.func,
  headerRenderer: PropTypes.func,
};

DateTimeRangeSelector.defaultProps = {
  otherCalendarProps: {},
  customCloseHandlers: [],
  hasError: false,
  hidePredefinedRanges: false,
  hideTime: false,
  predefinedRanges: defaultPredefinedRanges,
  predefinedRange: { id: CUSTOM_RANGE_ID },
  dateTimeRange: undefined,
  size: 'large',
  clearButtonLabel: 'Clear',
  finishButtonLabel: 'Finish',
  fromLabel: 'From',
  startTimeLabel: 'Start Time',
  toLabel: 'To',
  endTimeLabel: 'End Time',
  customPredefinedRangeLabel: 'Custom',
  endTimeErrorMessage: 'Cannot be before start time',
  placeholder: 'Select Date Range',
  id: undefined,
  testId: 'DATE_TIME_RANGE_SELECTOR',
  dateFormat: 'MM/dd/yyyy',
  timeFormat: 'hh:mm a',
  inputIcon: undefined,
  iconLeft: null,
  isDisabled: false,
  locale: undefined,
  onRangeChange: noop,
  onOpen: noop,
  onClose: noop,
  inputRenderer: undefined,
  headerRenderer: undefined,
};

export default withTheme(DateTimeRangeSelector, 'dateTimeRangeSelector');
