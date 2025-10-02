import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Manager, Reference, Popper } from 'react-popper';
import noop from 'lodash.noop';
import isUndefined from 'lodash.isundefined';
import format from 'date-fns/format';

import { withTheme } from '@8x8/oxygen-config';
import { OutsideEventBehavior } from '@8x8/oxygen-utils';
import DateTimeSelectorInput from '@8x8/oxygen-date-time-base';

import DateTimeSelectorDropdown from './DateTimeSelectorDropdown';

function DateTimeSelector({
  closeOnDateChange,
  hasError,
  placeholder,
  finishButtonLabel,
  iconLeft,
  id,
  inputIcon,
  isClearable,
  isDisabled,
  isLoading,
  loadingMessage,
  onBlur,
  onDateChange,
  onFocus,
  otherCalendarProps,
  size,
  testId,
  theme,
  titleFormatPattern,
  titleFormatter,
  value,
}) {
  const inputRef = React.createRef();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleSetIsDropdownVisible = dropDownVisibleValue => {
    if (!dropDownVisibleValue) {
      onBlur();
    }
    setIsDropdownVisible(dropDownVisibleValue);
  };

  const setInputRef = node => {
    inputRef.current = node;
  };

  const onClickOutside = e => {
    // handle clicking on the original input
    if (inputRef?.current?.contains?.(e.target)) {
      return;
    }
    handleSetIsDropdownVisible(false);
  };

  const getTitle = () => {
    if (!value) {
      return placeholder;
    }

    if (titleFormatter) {
      return titleFormatter(value);
    }

    return format(value, titleFormatPattern);
  };

  const onClear = () => {
    onFocus();
    onDateChange(undefined);
    onBlur();
  };

  const onClick = () => {
    if (!isDropdownVisible) {
      onFocus();
    }
    handleSetIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <ThemeProvider theme={theme}>
      <Manager>
        <Reference>
          {({ ref }) => (
            <DateTimeSelectorInput
              hasError={hasError}
              iconLeft={iconLeft}
              id={id}
              isClearable={isClearable}
              isDisabled={isDisabled}
              isOpen={isDropdownVisible}
              inputIcon={inputIcon}
              isValueSelected={!isUndefined(value)}
              onClear={onClear}
              onClick={onClick}
              popperAnchorRef={ref}
              size={size}
              testId={`${testId}_INPUT`}
              theme={theme}
              title={getTitle()}
              setInputRef={setInputRef}
            />
          )}
        </Reference>
        {isDropdownVisible && (
          <Popper placement="bottom" positionFixed>
            {({ ref, style }) => (
              <OutsideEventBehavior onClick={onClickOutside}>
                <DateTimeSelectorDropdown
                  closeOnDateChange={closeOnDateChange}
                  dropdownRef={ref}
                  finishButtonLabel={finishButtonLabel}
                  isLoading={isLoading}
                  loadingMessage={loadingMessage}
                  onDateChange={onDateChange}
                  otherCalendarProps={otherCalendarProps}
                  setIsDropdownVisible={handleSetIsDropdownVisible}
                  style={style}
                  testId={`${testId}_DROPDOWN`}
                  value={value}
                />
              </OutsideEventBehavior>
            )}
          </Popper>
        )}
      </Manager>
    </ThemeProvider>
  );
}

DateTimeSelector.propTypes = {
  closeOnDateChange: PropTypes.bool,
  hasError: PropTypes.bool,
  placeholder: PropTypes.string,
  finishButtonLabel: PropTypes.string,
  inputIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  iconLeft: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
    PropTypes.elementType,
  ]),
  isClearable: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  loadingMessage: PropTypes.string,
  onBlur: PropTypes.func,
  onDateChange: PropTypes.func,
  onFocus: PropTypes.func,
  otherCalendarProps: PropTypes.object,
  id: PropTypes.string,
  size: PropTypes.string,
  testId: PropTypes.string,
  theme: PropTypes.object,
  titleFormatPattern: PropTypes.string,
  titleFormatter: PropTypes.func,
  value: PropTypes.object,
};

DateTimeSelector.defaultProps = {
  closeOnDateChange: true,
  hasError: false,
  placeholder: 'Select Date',
  finishButtonLabel: 'Finish',
  inputIcon: undefined,
  iconLeft: null,
  isClearable: false,
  isDisabled: false,
  isLoading: false,
  loadingMessage: 'Loading...',
  onBlur: noop,
  onDateChange: noop,
  onFocus: noop,
  otherCalendarProps: {},
  id: undefined,
  size: 'large',
  testId: 'DATE_TIME_SELECTOR',
  titleFormatPattern: 'MM/dd/yyyy',
  titleFormatter: undefined,
  value: undefined,
};

export default withTheme(DateTimeSelector, 'dateTimeSelector');
