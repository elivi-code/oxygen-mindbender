import React from 'react';

interface DateTimeSelectorProps {
  closeOnDateChange?: boolean;
  placeholder?: string;
  finishButtonLabel?: string;
  inputIcon?: React.ReactNode;
  iconLeft?: React.ReactNode | React.ElementType;
  isDisabled?: boolean;
  onDateChange?(): void;
  otherCalendarProps?: object;
  size?: string;
  testId?: string;
  theme?: object;
  titleFormatPattern?: string;
  titleFormatter?(value: object): string;
  value?: object;
}

declare const DateTimeSelector: React.FunctionComponent<DateTimeSelectorProps>;

export default DateTimeSelector;
