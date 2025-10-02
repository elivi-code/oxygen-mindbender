import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';

import dateFormat from 'date-fns/format';
import addMinutes from 'date-fns/addMinutes';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import addDays from 'date-fns/addDays';
import subWeeks from 'date-fns/subWeeks';
import startOfDay from 'date-fns/startOfDay';
import endOfDay from 'date-fns/endOfDay';

import { dateTimeRangeSelector as theme } from '@8x8/oxygen-constants';

import DateTimeRangeSelectorDropdown from './DateTimeRangeSelectorDropdown';
import { EndTimeError } from '../styled';
import CUSTOM_RANGE_ID from '../utils/constants';

jest.mock('date-fns/startOfDay', () =>
  jest.fn().mockImplementation(date => new Date(date.setUTCHours(0, 0, 0, 0))),
);
jest.mock('date-fns/isDate', () => jest.fn().mockImplementation(() => true));
jest.mock('date-fns/isSameDay', () =>
  jest.fn().mockImplementationOnce(() => false),
);
jest.mock('date-fns/setHours', () =>
  jest
    .fn()
    .mockImplementation(
      (date, hours) => new Date(new Date(date).setUTCHours(hours)),
    ),
);
jest.mock('date-fns/getHours', () =>
  jest.fn().mockImplementation(date => (date ? date.getUTCHours() : NaN)),
);
jest.mock('date-fns/setMinutes', () =>
  jest
    .fn()
    .mockImplementation(
      (date, minutes) => new Date(new Date(date).setUTCMinutes(minutes)),
    ),
);
jest.mock('date-fns/getMinutes', () =>
  jest.fn().mockImplementation(date => (date ? date.getUTCMinutes() : NaN)),
);
jest.mock('date-fns/format', () => {
  return jest.fn().mockImplementation((date, format) => {
    if (!date) {
      return new Date(NaN);
    }
    const timeOfDay = date.getUTCHours() < 12 ? 'AM' : 'PM';

    if (format === 'MM/dd/yyyy') {
      const leadingMonthZero = date.getUTCMonth() < 9 ? '0' : '';
      const month = `${leadingMonthZero}${date.getUTCMonth() + 1}`;
      const leadingDayZero = date.getUTCDate() < 10 ? '0' : '';
      const day = `${leadingDayZero}${date.getUTCDate()}`;
      const year = `${date.getUTCFullYear()}`;

      return `${month}/${day}/${year}`;
    }
    const absHour =
      date.getUTCHours() < 12 ? date.getUTCHours() : date.getUTCHours() - 12;
    const leadingHourZero = absHour > 0 && absHour < 10 ? '0' : '';
    const hour = `${leadingHourZero}${absHour === 0 ? '12' : `${absHour}`}`;
    const leadingMinutesZero = date.getUTCMinutes() < 10 ? '0' : '';
    const minute = `${leadingMinutesZero}${date.getUTCMinutes()}`;

    return `${hour}:${minute} ${timeOfDay}`;
  });
});
jest.mock('./DateTimeRangeSelectorPredefinedList', () => 'PredefinedList');
jest.mock('@8x8/oxygen-label', () => 'Label');
jest.mock('@8x8/oxygen-input', () => 'Input');
jest.mock('@8x8/oxygen-time-selector', () => 'TimeSelector');
jest.mock('@8x8/oxygen-calendar', () => ({
  __esModule: true,
  default: 'Calendar',
  DISPLAY_MODE: () => ({
    DATE_RANGE: 'dateRange',
  }),
}));
jest.mock('@8x8/oxygen-button', () => ({
  __esModule: true,
  default: 'Button',
  ButtonGroup: 'ButtonGroup',
  buttonSize: () => ({
    small: 'small',
  }),
  buttonVariant: {
    primary: 'primary',
    secondary: 'secondary',
  },
}));

describe('Date Time Range Selector Dropdown', () => {
  let wrapper;

  const mockPopperStyle = {
    left: 0,
    top: 0,
    opacity: 0,
    pointerEvents: 'none',
    position: 'absolute',
  };

  const now = startOfDay(new Date('1 jan 19 UTC'));
  const ranges = [
    {
      id: 'TODAY',
      displayName: 'Today',
      dateTimeRange: () => ({
        startDate: now,
        endDate: endOfDay(now),
      }),
    },
    {
      id: 'LAST_X_WEEKS',
      displayName: 'Last X Weeks',
      selectedDisplayName: ['Last', 'Weeks'],
      dateTimeRange: x => ({
        startDate: subWeeks(now, x),
        endDate: endOfDay(now),
      }),
      hasArgument: true,
    },
  ];

  const defaultProps = {
    finishButtonLabel: 'Finish',
    clearButtonLabel: 'Clear',
    endTimeErrorMessage: 'Cannot Be Before Start Time',
    predefinedRanges: [],
    onRangeChange: () => {},
    dateFormat: 'MM/dd/yyyy',
    timeFormat: 'hh:mm a',
  };

  const dateTimeRange = {
    startDate: new Date('12 february 98 UTC'),
    endDate: new Date('13 february 98 UTC'),
  };

  const snapshotDateTimeRange = {
    startDate: new Date('12 february 98 UTC'),
    endDate: new Date('13 february 98 UTC'),
  };

  function setupShallow(props = {}) {
    return mount(
      <DateTimeRangeSelectorDropdown
        style={mockPopperStyle}
        theme={theme}
        {...defaultProps}
        {...props}
      />,
    );
  }

  function setupRenderer(props = {}) {
    return renderer
      .create(
        <ThemeProvider theme={theme}>
          <DateTimeRangeSelectorDropdown
            style={mockPopperStyle}
            theme={theme}
            {...defaultProps}
            {...props}
          />
        </ThemeProvider>,
      )
      .toJSON();
  }

  function setupTestInstance(props = {}) {
    const testRenderer = renderer.create(
      <ThemeProvider theme={theme}>
        <DateTimeRangeSelectorDropdown
          style={mockPopperStyle}
          theme={theme}
          predefinedRange={{ id: CUSTOM_RANGE_ID }}
          {...defaultProps}
          {...props}
        />
      </ThemeProvider>,
    );

    return testRenderer.root;
  }

  it('should render correctly', () => {
    wrapper = setupRenderer({
      dateTimeRange: snapshotDateTimeRange,
      predefinedRange: { id: CUSTOM_RANGE_ID },
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with labels', () => {
    jest.clearAllMocks();
    wrapper = setupRenderer({
      dateTimeRange: snapshotDateTimeRange,
      clearButtonLabel: 'Clear',
      finishButtonLabel: 'Ok',
      predefinedRange: { id: CUSTOM_RANGE_ID },
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a predefined range list', () => {
    wrapper = setupShallow({ predefinedRange: { id: CUSTOM_RANGE_ID } });
    expect(wrapper.find('PredefinedList')).toHaveLength(1);
  });

  it('should have a calendar', () => {
    wrapper = setupShallow({ predefinedRange: { id: CUSTOM_RANGE_ID } });
    expect(wrapper.find('Calendar')).toHaveLength(1);
  });

  it('should have two time selectors', () => {
    wrapper = setupShallow({ predefinedRange: { id: CUSTOM_RANGE_ID } });
    expect(wrapper.find('TimeSelector')).toHaveLength(2);
  });

  it(`should show the start and the end time of the day when no date range or predefined range is selected`, () => {
    wrapper = setupTestInstance();

    expect(wrapper.findAllByType('TimeSelector')[0].props.value).toEqual({
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
    expect(wrapper.findAllByType('TimeSelector')[1].props.value).toEqual({
      hours: 23,
      minutes: 59,
      seconds: 0,
    });
  });

  it('should render the custom header if headerRenderer is provided', () => {
    wrapper = setupShallow({
      predefinedRange: { id: CUSTOM_RANGE_ID },
      headerRenderer: () => <div id="customHeaderRenderer" />,
    });
    expect(wrapper.find('#customHeaderRenderer')).toHaveLength(1);
  });

  it('should not render the time selector if headerRenderer is provided', () => {
    wrapper = setupShallow({
      predefinedRange: { id: CUSTOM_RANGE_ID },
      headerRenderer: () => <div id="customHeaderRenderer" />,
    });
    expect(wrapper.find('TimeSelector')).toHaveLength(0);
  });

  it('should have four labels', () => {
    wrapper = setupShallow({ predefinedRange: { id: CUSTOM_RANGE_ID } });
    expect(wrapper.find('Label')).toHaveLength(4);
  });

  it('should have two inputs', () => {
    wrapper = setupShallow({ predefinedRange: { id: CUSTOM_RANGE_ID } });
    expect(wrapper.find('Input')).toHaveLength(2);
  });

  it('should have one button group with two buttons', () => {
    wrapper = setupShallow({ predefinedRange: { id: CUSTOM_RANGE_ID } });
    expect(wrapper.find('ButtonGroup')).toHaveLength(1);
    expect(wrapper.find('Button')).toHaveLength(2);
  });

  it('should not have end time error by default', () => {
    wrapper = setupShallow({ predefinedRange: { id: CUSTOM_RANGE_ID } });
    expect(wrapper.find(EndTimeError)).toHaveLength(0);
  });

  it('should have end time error when error state is true', () => {
    wrapper = setupShallow({ predefinedRange: { id: CUSTOM_RANGE_ID } });
    wrapper.find('DateTimeRangePicker').setState({ isEndTimeValid: false });

    expect(wrapper.find(EndTimeError)).toHaveLength(1);
  });

  it('should call onClose when the finish button is clicked', () => {
    const onClose = jest.fn();

    wrapper = setupShallow({
      dateTimeRange,
      onClose,
      predefinedRange: { id: CUSTOM_RANGE_ID },
    });

    wrapper.find('Button').first().simulate('click');

    expect(onClose).toHaveBeenCalled();
  });

  it('should call onClose when the clear button is clicked', () => {
    const onClose = jest.fn();

    wrapper = setupShallow({
      onClose,
      predefinedRange: { id: CUSTOM_RANGE_ID },
    });

    wrapper.find('Button').last().simulate('click');

    expect(onClose).toHaveBeenCalled();
  });

  it('should call onRangeChange when finish button is clicked', () => {
    const onRangeChange = jest.fn();

    wrapper = setupShallow({
      dateTimeRange,
      onRangeChange,
      predefinedRange: { id: CUSTOM_RANGE_ID },
    });

    wrapper.find('Button').first().simulate('click');

    expect(onRangeChange).toHaveBeenCalled();
  });

  it('should not call onRangeChange when finish button is clicked and start time is after end time', () => {
    const onRangeChange = jest.fn();
    const time = now;
    const timeRange = {
      startDate: addMinutes(time, 1),
      endDate: time,
    };

    wrapper = setupShallow({
      onRangeChange,
      dateTimeRange: timeRange,
      predefinedRange: { id: CUSTOM_RANGE_ID },
    });

    wrapper.find('Button').first().simulate('click');

    expect(onRangeChange).toHaveBeenCalledTimes(0);
  });

  it('should call onRangeChange with empty object when clear button is clicked', () => {
    const onRangeChange = jest.fn();

    wrapper = setupShallow({
      onRangeChange,
      predefinedRange: { id: CUSTOM_RANGE_ID },
    });

    wrapper.find('Button').last().simulate('click');

    expect(onRangeChange).toHaveBeenCalledWith({});
  });

  it('should update predefinedRange state when a predefined range is clicked in the predefined list', () => {
    wrapper = setupShallow({
      predefinedRanges: ranges,
      predefinedRange: { id: CUSTOM_RANGE_ID },
    });

    wrapper.find('PredefinedList').props().onRangeSelect({ id: 'TODAY' });

    expect(wrapper.state('predefinedRange')).toMatchObject({
      id: 'TODAY',
    });
  });

  it('should update predefinedRange state when `CUSTOM` predefined range is clicked', () => {
    wrapper = setupShallow({
      predefinedRanges: ranges,
      predefinedRange: { id: CUSTOM_RANGE_ID },
    });

    wrapper
      .find('PredefinedList')
      .props()
      .onRangeSelect({ id: CUSTOM_RANGE_ID });

    expect(wrapper.state('predefinedRange')).toMatchObject({
      id: CUSTOM_RANGE_ID,
    });
  });

  it('should update predefinedRange state when a value is put in to a predefined range with argument', () => {
    wrapper = setupShallow({
      predefinedRanges: ranges,
      predefinedRange: { id: CUSTOM_RANGE_ID },
    });

    wrapper
      .find('PredefinedList')
      .props()
      .onRangeSelect({ id: 'LAST_X_WEEKS', value: 1 });

    expect(wrapper.state('predefinedRange')).toMatchObject({
      id: 'LAST_X_WEEKS',
      value: 1,
    });
  });

  it('should update dateRange when a predefined range with no argument is clicked', () => {
    wrapper = setupShallow({
      predefinedRanges: ranges,
      predefinedRange: { id: CUSTOM_RANGE_ID },
    });

    const testDateRange = ranges[0].dateTimeRange();

    wrapper.find('PredefinedList').props().onRangeSelect({ id: 'TODAY' });

    expect(wrapper.state('dateRange')).toMatchObject(testDateRange);
  });

  it('should update dateRange when a predefined range with an argument gets a new input', () => {
    wrapper = setupShallow({
      predefinedRanges: ranges,
      predefinedRange: { id: CUSTOM_RANGE_ID },
    });

    const testDateRange = ranges[1].dateTimeRange(5);

    wrapper
      .find('PredefinedList')
      .props()
      .onRangeSelect({ id: 'LAST_X_WEEKS', value: 5 });

    expect(wrapper.state('dateRange')).toMatchObject(testDateRange);
  });

  it('should change selected predefined range to CUSTOM when a date in the calendar is selected', () => {
    wrapper = setupShallow({
      predefinedRanges: ranges,
      predefinedRange: {
        id: 'TODAY',
      },
    });

    wrapper.find('Calendar').props().onRangeChange({});

    expect(wrapper.state('predefinedRange')).toMatchObject({
      id: CUSTOM_RANGE_ID,
    });
  });

  it('should update state when selecting a range in the calendar', () => {
    wrapper = setupShallow({
      dateTimeRange,
      predefinedRange: { id: CUSTOM_RANGE_ID },
    });

    const testRange = { startDate: now, endDate: addDays(now, 2) };

    wrapper.find('Calendar').props().onRangeChange(testRange);

    expect(wrapper.state('dateRange')).toMatchObject(testRange);
  });

  it('should set endDate to startDate if no endDate specified', () => {
    wrapper = setupShallow({
      dateTimeRange,
      predefinedRange: { id: CUSTOM_RANGE_ID },
    });

    const testRange = { startDate: now };

    wrapper.find('Calendar').props().onRangeChange(testRange);

    expect(wrapper.state('dateRange').endDate).toMatchObject(now);
  });

  it('should update the dateRange when the startDate TimeSelector was changed', () => {
    wrapper = setupShallow({
      dateTimeRange,
      predefinedRange: { id: CUSTOM_RANGE_ID },
    });

    const { startDate, endDate } = dateTimeRange;

    wrapper
      .find('TimeSelector')
      .first()
      .simulate('change', { hours: 14, minutes: 44, seconds: 43 });

    expect(wrapper.state('dateRange')).toMatchObject({
      startDate: setHours(setMinutes(startDate, 44), 14),
      endDate,
    });
  });

  it('should update the dateRange when clicking an item in the end time dropdown list', () => {
    wrapper = setupShallow({
      dateTimeRange,
      predefinedRange: { id: CUSTOM_RANGE_ID },
    });

    const { startDate, endDate } = dateTimeRange;

    wrapper
      .find('TimeSelector')
      .last()
      .simulate('change', { hours: 17, minutes: 11, seconds: 43 });

    expect(wrapper.state('dateRange')).toMatchObject({
      startDate,
      endDate: setHours(setMinutes(endDate, 11), 17),
    });
  });

  it('should reset isEndTimeValid error state if valid input has been introduced by the calendar', () => {
    const testRange = {
      startDate: now,
      endDate: now,
    };

    wrapper = setupShallow({
      dateTimeRange: testRange,
      predefinedRange: { id: CUSTOM_RANGE_ID },
    });

    wrapper.setState({ isEndTimeValid: false });

    wrapper
      .find('Calendar')
      .props()
      .onRangeChange({ startDate: now, endDate: addDays(now, 1) });

    expect(wrapper.state('isEndTimeValid')).toBe(true);
  });

  it('should reset isEndTimeValid error state if valid input has been introduced by the dropdown list', () => {
    wrapper = setupShallow({
      dateTimeRange,
      predefinedRange: { id: CUSTOM_RANGE_ID },
    });

    wrapper.setState({ isEndTimeValid: false });

    wrapper
      .find('TimeSelector')
      .last()
      .props()
      .onChange({ hours: 23, minutes: 50, seconds: 0 });

    expect(wrapper.state('isEndTimeValid')).toBe(true);
  });

  it('should keep isEndTimeValid error state if invalid input has been introduced by the dropdown list', () => {
    const testRange = {
      startDate: new Date(now.setMinutes(now.getMinutes() + 1)),
      endDate: now,
    };

    wrapper = setupShallow({
      dateTimeRange: testRange,
      predefinedRange: { id: CUSTOM_RANGE_ID },
    });

    wrapper.setState({ isEndTimeValid: false });

    wrapper
      .find('TimeSelector')
      .last()
      .props()
      .onChange({ hours: 0, minutes: 0, seconds: 0 });

    expect(wrapper.state('isEndTimeValid')).toBe(false);
  });

  it('should pass the locale object to the Calendar component', () => {
    const customLocale = { custom: 'locale' };

    wrapper = setupShallow({
      dateTimeRange: snapshotDateTimeRange,
      predefinedRange: { id: CUSTOM_RANGE_ID },
      locale: customLocale,
    });

    expect(wrapper.find('Calendar').props().locale).toEqual(customLocale);
  });

  it('should execute the date format functions with the provided locale object', () => {
    const customLocale = { customProp: 'my-locale' };

    wrapper = setupShallow({
      dateTimeRange: snapshotDateTimeRange,
      predefinedRange: { id: CUSTOM_RANGE_ID },
      locale: customLocale,
    });

    const mockCalls = jest.mocked(dateFormat).mock.calls;

    expect(mockCalls[mockCalls.length - 1][2]).toEqual({
      locale: customLocale,
    });
  });
});
