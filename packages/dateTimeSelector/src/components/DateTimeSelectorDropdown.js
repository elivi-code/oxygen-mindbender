import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Calendar, { DISPLAY_MODE } from '@8x8/oxygen-calendar';
import Button, { buttonSize } from '@8x8/oxygen-button';
import {
  BaseDropdownContainer,
  BaseDropdownFooter,
  BasePopperContainer,
} from '@8x8/oxygen-date-time-base';
import { DropdownSpinner } from '../styled/DropdownSpinner';

function DateTimeSelectorDropDown(props) {
  const {
    closeOnDateChange,
    dropdownRef,
    isLoading,
    loadingMessage,
    onDateChange,
    otherCalendarProps,
    finishButtonLabel,
    setIsDropdownVisible,
    style,
    testId,
    value,
  } = props;
  const [selectedValue, setSelectedValue] = useState(value);

  const changeDate = date => {
    setIsDropdownVisible(false);
    onDateChange(date);
  };

  return (
    <BasePopperContainer ref={dropdownRef} style={style}>
      <BaseDropdownContainer>
        {isLoading ? (
          <DropdownSpinner loadingMessage={loadingMessage} />
        ) : (
          <Calendar
            testId={`${testId}_CALENDAR`}
            months={1}
            showMonthYearPickers={false}
            {...otherCalendarProps}
            date={selectedValue}
            displayMode={DISPLAY_MODE.DATE}
            onDateChange={closeOnDateChange ? changeDate : setSelectedValue}
          />
        )}
        {!closeOnDateChange && (
          <BaseDropdownFooter>
            <Button
              testId={`${testId}_FINISH_BUTTON`}
              onClick={() => changeDate(selectedValue)}
              size={buttonSize.small}
            >
              {finishButtonLabel}
            </Button>
          </BaseDropdownFooter>
        )}
      </BaseDropdownContainer>
    </BasePopperContainer>
  );
}

DateTimeSelectorDropDown.propTypes = {
  closeOnDateChange: PropTypes.bool.isRequired,
  dropdownRef: PropTypes.func.isRequired,
  finishButtonLabel: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  loadingMessage: PropTypes.string,
  onDateChange: PropTypes.func.isRequired,
  otherCalendarProps: PropTypes.object.isRequired,
  setIsDropdownVisible: PropTypes.func.isRequired,
  style: PropTypes.object.isRequired,
  testId: PropTypes.string,
  value: PropTypes.object,
};

DateTimeSelectorDropDown.defaultProps = {
  testId: 'DATE_TIME_SELECTOR_DROPDOWN',
  value: undefined,
};

export default DateTimeSelectorDropDown;
