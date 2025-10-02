/* eslint-disable */
import React from 'react';

type Size = 'large' | 'small';

interface DateTimeRangeSelectorProps {
  clearButtonLabel?: string;
  customCloseHandlers?: any[];
  dateFormat?: string;
  dateTimeRange?: object;
  endTimeErrorMessage?: string;
  finishButtonLabel?: string;
  fromLabel?: string;
  hasError?: boolean;
  headerRenderer?(): any;
  hidePredefinedRanges?: boolean;
  hideTime?: boolean;
  iconLeft?: React.ReactNode | React.ElementType;
  id?: string;
  inputIcon?: React.ReactNode;
  inputRenderer?(): any;
  isDisabled?: boolean;
  locale?: object;
  onClose?(): void;
  onOpen?(): void;
  onRangeChange?(): void;
  otherCalendarProps?: object;
  placeholder?: string;
  predefinedRange?: object;
  predefinedRanges?: any[];
  size?: Size;
  startTimeLabel?: string;
  testId?: string;
  theme?: object;
  timeFormat?: string;
  toLabel?: string;
}

 interface DateTimeRangePickerProps {
  theme?: object;
  dateTimeRange?: object;
  otherCalendarProps?: object;
  hidePredefinedRanges?: boolean;
  hideTime?: boolean;
  endTimeErrorMessage?: string;
  predefinedRanges?: any[];
  predefinedRange?: object;
  testId?: string;
  dateFormat?: string;
  timeFormat?: string;
  locale?: object;
  headerRenderer?(): any;
  customPredefinedRangeLabel?: string;
  fromLabel?: string;
  startTimeLabel?: string;
  toLabel?: string;
  endTimeLabel?: string;
  onRangeChange?(object): void;
  id?: string;
  setOuterState?(object): void;
}

interface DateTimeRangeSelectorPredefinedListProps {
  theme?: object;
  ranges: any[];
  selectedRange: object;
  onRangeSelect?(): void;
  testId?: string;
  hideCustomRange?: boolean;
}

declare class DateTimeRangeSelector extends React.PureComponent<
  DateTimeRangeSelectorProps,
  any
> {}

declare class DateTimeRangeSelectorPredefinedList extends React.PureComponent<
  DateTimeRangeSelectorPredefinedListProps,
  any
> {}

declare class DateTimeRangePicker extends React.PureComponent<
  DateTimeRangePickerProps,
  any
> {}

interface PredefinedRange {
  id: string;
  displayName: string;
  selectedDisplayName?: string[];
  dateTimeRange(): { startDate: Date; endDate: Date };
  hasArgument?: boolean;
}

declare const predefinedRanges: Array<PredefinedRange>;

export default DateTimeRangeSelector;
export {
  predefinedRanges,
  DateTimeRangeSelectorPredefinedList,
  DateTimeRangePicker,
  DateTimeRangePickerProps
};
