import React from 'react';
import { mount } from 'enzyme';

import format from 'date-fns/format';
import subWeeks from 'date-fns/subWeeks';
import startOfDay from 'date-fns/startOfDay';
import endOfDay from 'date-fns/endOfDay';

import { dateTimeRangeSelector as theme } from '@8x8/oxygen-constants';

import DateTimeRangeSelector from './DateTimeRangeSelector';
import CUSTOM_RANGE_ID from '../utils/constants';

jest.mock('react-popper', () => ({
  __esModule: true,
  Manager: ({ children }) => children,
  Reference: ({ children }) => children({}),
  Popper: ({ children }) => children({}),
}));
jest.mock('@8x8/oxygen-date-time-base', () => 'Input');
jest.mock('./DateTimeRangeSelectorDropdown', () => 'Dropdown');
jest.mock('date-fns/format', () =>
  jest.fn().mockImplementation(date => {
    if (!date) {
      return new Date(NaN);
    }
    const timeOfDay = date.getUTCHours() < 12 ? 'AM' : 'PM';
    const leadingMonthZero = date.getUTCMonth() < 9 ? '0' : '';
    const month = `${leadingMonthZero}${date.getUTCMonth() + 1}`;
    const leadingDayZero = date.getUTCDate() < 10 ? '0' : '';
    const day = `${leadingDayZero}${date.getUTCDate()}`;
    const year = `${date.getUTCFullYear()}`;
    const absHour =
      date.getUTCHours() < 12 ? date.getUTCHours() : date.getUTCHours() - 12;
    const leadingHourZero = absHour > 0 && absHour < 10 ? '0' : '';
    const hour = `${leadingHourZero}${absHour === 0 ? '12' : `${absHour}`}`;
    const leadingMinutesZero = date.getUTCMinutes() < 10 ? '0' : '';
    const minute = `${leadingMinutesZero}${date.getUTCMinutes()}`;

    return `${month}/${day}/${year} ${hour}:${minute} ${timeOfDay}`;
  }),
);

describe('Date Time Range Selector', () => {
  let wrapper;

  function setupMount(props = {}) {
    return mount(<DateTimeRangeSelector theme={theme} {...props} />);
  }

  const now = startOfDay(new Date('1 jan 19'));
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

  const dateTimeRange = {
    startDate: new Date('12 february 98 UTC'),
    endDate: new Date('13 february 98 UTC'),
  };

  it('should render correctly', () => {
    wrapper = setupMount({ dateTimeRange });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with placeholder', () => {
    wrapper = setupMount({ placeholder: 'TestTitle', dateTimeRange });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when dropdown is open', () => {
    wrapper = setupMount({ dateTimeRange });
    wrapper.find('Input').simulate('click', {});
    expect(wrapper).toMatchSnapshot();
  });

  it('should have an Input', () => {
    wrapper = setupMount();
    expect(wrapper.find('Input')).toHaveLength(1);
  });

  it('should have a Popper when input is open', () => {
    wrapper = setupMount();
    wrapper.find('Input').simulate('click', {});
    expect(wrapper.find('Popper')).toHaveLength(1);
  });

  it('should show the dropdown when the input button is clicked', () => {
    wrapper = setupMount();
    wrapper.find('Input').simulate('click');
    expect(wrapper.find('Dropdown')).toHaveLength(1);
  });

  it('should execute the `onOpen` callback fn after showing the dropdown', () => {
    const onOpenMock = jest.fn();

    wrapper = setupMount({ onOpen: onOpenMock });
    wrapper.find('Input').simulate('click');

    expect(onOpenMock).toHaveBeenCalledTimes(1);
  });

  it('should hide the dropdown when the input button is clicked and the dropdown is shown', () => {
    wrapper = setupMount();
    wrapper.find('Input').simulate('click');
    wrapper.find('Input').simulate('click');
    expect(wrapper.find('Dropdown')).toHaveLength(0);
  });

  it('should execute the `onClose` callback fn after hiding the dropdown', () => {
    const onCloseMock = jest.fn();

    wrapper = setupMount({ onClose: onCloseMock });
    wrapper.find('Input').simulate('click');
    wrapper.find('Input').simulate('click');

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('should set the title to placeholder when rendered', () => {
    wrapper = setupMount({ placeholder: 'TestTitle' });
    expect(wrapper.find('Input').props().title).toBe('TestTitle');
  });

  it('should render a custom input when inputRenderer is provided', () => {
    wrapper = setupMount({
      inputRenderer: () => <div id="customInputRender" />,
    });
    expect(wrapper.find('#customInputRender')).toHaveLength(1);
  });

  it('should set title to the predefined range name when a selected predefined range is supplied', () => {
    wrapper = setupMount({
      predefinedRange: { id: 'TODAY' },
      predefinedRanges: ranges,
    });
    expect(wrapper.find('Input').props().title).toBe('Today');
  });

  it('should set title to the correct value when a predefined range with argument is supplied and has value', () => {
    wrapper = setupMount({
      predefinedRange: { id: 'LAST_X_WEEKS', value: 1 },
      predefinedRanges: ranges,
    });
    expect(wrapper.find('Input').props().title).toBe('Last 1 Weeks');
  });

  it('should set title to the correct value when a predefined range with argument is supplied and has no value', () => {
    wrapper = setupMount({
      predefinedRange: { id: 'LAST_X_WEEKS' },
      predefinedRanges: ranges,
    });
    expect(wrapper.find('Input').props().title).toBe('Last X Weeks');
  });

  it('should set the title to placeholder if a predefined range has no displayName', () => {
    const predefinedRanges = [
      ...ranges,
      {
        id: 'TEST_NO_DISPLAY',
        displayName: undefined,
        dateTimeRange: () => ({
          startDate: now,
          endDate: endOfDay(now),
        }),
      },
    ];

    wrapper = setupMount({
      predefinedRange: { id: 'TEST_NO_DISPLAY' },
      predefinedRanges,
      placeholder: 'Default Title',
    });
    expect(wrapper.find('Input').props().title).toBe(`Default Title`);
  });

  it('should set title to the correct value when CUSTOM range is selected', () => {
    wrapper = setupMount({
      predefinedRange: { id: CUSTOM_RANGE_ID },
      dateTimeRange: { startDate: startOfDay(now), endDate: endOfDay(now) },
      dateFormat: 'MM/dd/yyyy',
      timeFormat: 'hh:mm a',
      predefinedRanges: ranges,
    });
    expect(wrapper.find('Input').props().title).toBe(
      `${format(startOfDay(now), 'MM/dd/yyyy hh:mm a')} - ${format(
        endOfDay(now),
        'MM/dd/yyyy hh:mm a',
      )}`,
    );
  });

  it('should set the title to the correct value when predefinedRange is undefined', () => {
    wrapper = setupMount({
      predefinedRange: undefined,
      dateTimeRange: { startDate: startOfDay(now), endDate: endOfDay(now) },
      dateFormat: 'MM/dd/yyyy',
      timeFormat: 'hh:mm a',
      predefinedRanges: ranges,
    });
    expect(wrapper.find('Input').props().title).toBe(
      `${format(startOfDay(now), 'MM/dd/yyyy hh:mm a')} - ${format(
        endOfDay(now),
        'MM/dd/yyyy hh:mm a',
      )}`,
    );
  });

  it('should add event listeners to the document when the dropdown is opened', () => {
    const spy = jest.spyOn(document.body, 'addEventListener');

    wrapper = setupMount();
    wrapper.find('Input').simulate('click', { target: {} });

    expect(spy).toHaveBeenCalled();
  });
});
