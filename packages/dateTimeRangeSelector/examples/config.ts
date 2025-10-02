import { localeSelect, iconSelect } from '@8x8/oxygen-storybook-utils';

export const argsConfig = {
  iconLeft: 'None',
  inputIcon: true,
  hasError: false,
  id: 'id',
  size: 'large',
  placeholder: 'Date Time Range Selector Placeholder',
  clearButtonLabel: 'Clear',
  finishButtonLabel: 'Ok',
  hidePredefinedRanges: false,
  hideTime: false,
  fromLabel: 'From',
  startTimeLabel: 'Start Time',
  toLabel: 'To',
  endTimeLabel: 'End Time',
  customPredefinedRangeLabel: 'Custom',
  endTimeErrorMessage: 'Cannot be before start time',
  dateFormat: 'MM/dd/yyyy',
  timeFormat: 'hh:mm a',
  isDisabled: false,
  locale: undefined,
  testId: 'DATE_TIME_RANGE_SELECTOR',
  otherCalendarProps: {},
};

export const argTypesConfig = {
  iconLeft: iconSelect,
  size: {
    options: ['small', 'large'],
    control: {
      type: 'select',
    },
  },
  locale: localeSelect,
};
