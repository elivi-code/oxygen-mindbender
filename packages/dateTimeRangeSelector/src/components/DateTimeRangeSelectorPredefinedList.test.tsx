import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';

import { dateTimeRangeSelector as theme } from '@8x8/oxygen-constants';

import DateTimeRangeSelectorPredefinedList from './DateTimeRangeSelectorPredefinedList';
import {
  PredefinedListItem,
  PredefinedListInputWrapper,
} from '../styled/StyledDateTimeRangeSelectorPredefinedList';
import CUSTOM_RANGE_ID from '../utils/constants';

jest.mock('@8x8/oxygen-input', () => 'Input');

describe('Date Time Range Selector Predefined List', () => {
  let wrapper;
  const ranges = [
    {
      id: 'TODAY',
      displayName: 'Today',
      dateTimeRange: () => ({ startDate: Date(), endDate: Date() }),
    },
    {
      id: 'LAST_X_WEEKS',
      displayName: 'Last X Weeks',
      selectedDisplayName: ['Last', 'Weeks'],
      dateTimeRange: x => ({ startDate: Date(), endDate: Date(x) }),
      hasArgument: true,
    },
  ];

  function setupShallow(props = {}) {
    return shallow(
      <DateTimeRangeSelectorPredefinedList theme={theme} {...props} />,
    );
  }

  function setupRenderer(props = {}) {
    return renderer
      .create(
        <ThemeProvider theme={theme}>
          <DateTimeRangeSelectorPredefinedList theme={theme} {...props} />
        </ThemeProvider>,
      )
      .toJSON();
  }

  it('should render correctly', () => {
    wrapper = setupRenderer({
      ranges: [],
      selectedRange: { id: CUSTOM_RANGE_ID },
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly all predefined ranges', () => {
    wrapper = setupRenderer({ ranges, selectedRange: { id: CUSTOM_RANGE_ID } });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when selected predefined range has argument', () => {
    wrapper = setupRenderer({
      ranges,
      selectedRange: { id: 'LAST_X_WEEKS', value: 1 },
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('should have at least one predefined range', () => {
    wrapper = setupShallow({
      ranges: [],
      selectedRange: { id: CUSTOM_RANGE_ID },
    });

    expect(wrapper.find(PredefinedListItem)).toHaveLength(1);
  });

  it('should have all predefined ranges from props and the default one', () => {
    wrapper = setupShallow({ ranges, selectedRange: { id: CUSTOM_RANGE_ID } });

    expect(wrapper.find(PredefinedListItem)).toHaveLength(ranges.length + 1);
  });

  it('should not render input box unless clicked', () => {
    wrapper = setupShallow({ ranges, selectedRange: { id: CUSTOM_RANGE_ID } });

    expect(wrapper.find(PredefinedListInputWrapper)).toHaveLength(0);
  });

  it('should call onRangeSelect when a list item is clicked', () => {
    const onRangeSelect = jest.fn();

    wrapper = setupShallow({
      onRangeSelect,
      ranges,
      selectedRange: { id: CUSTOM_RANGE_ID },
    });

    wrapper.find(PredefinedListItem).at(0).simulate('click');

    expect(onRangeSelect).toHaveBeenCalled();
  });

  it('should not call onRangeSelect when clicking an already selected list item', () => {
    const onRangeSelect = jest.fn();

    wrapper = setupShallow({
      onRangeSelect,
      ranges,
      selectedRange: { id: 'TODAY' },
    });

    wrapper.find(PredefinedListItem).at(0).simulate('click');

    expect(onRangeSelect).toHaveBeenCalledTimes(0);
  });

  it('should render an input box when a predefined range with argument is clicked', () => {
    const onRangeSelect = jest.fn();

    wrapper = setupShallow({
      ranges,
      onRangeSelect,
      selectedRange: { id: 'LAST_X_WEEKS', value: 1 },
    });
    wrapper.find(PredefinedListItem).at(1).simulate('click');

    expect(wrapper.find(PredefinedListInputWrapper)).toHaveLength(1);
  });

  it('should call onRangeSelect when predefined range input is changed', () => {
    const onRangeSelect = jest.fn();

    wrapper = setupShallow({
      ranges,
      onRangeSelect,
      selectedRange: { id: 'LAST_X_WEEKS' },
    });

    wrapper
      .find('Input')
      .simulate('change', { target: { value: 1, name: 'LAST_X_WEEKS' } });

    expect(onRangeSelect).toHaveBeenCalled();
  });

  it('should call onRangeSelect with valid input value when input is changed', () => {
    const onRangeSelect = jest.fn();

    wrapper = setupShallow({
      ranges,
      onRangeSelect,
      selectedRange: { id: 'LAST_X_WEEKS' },
    });

    wrapper
      .find('Input')
      .simulate('change', { target: { value: 1, name: 'LAST_X_WEEKS' } });

    expect(onRangeSelect).toHaveBeenCalledWith({
      id: 'LAST_X_WEEKS',
      value: 1,
    });
  });

  it('should set error state when invalid input value', () => {
    const onRangeSelect = jest.fn();

    wrapper = setupShallow({
      ranges,
      onRangeSelect,
      selectedRange: { id: 'LAST_X_WEEKS' },
    });

    wrapper
      .find('Input')
      .simulate('change', { target: { value: 'a', name: 'LAST_X_WEEKS' } });

    expect(wrapper.state('hasError[LAST_X_WEEKS]')).toBe(true);
  });

  it('should update state based on received selectedRange from props', () => {
    wrapper = setupShallow({
      ranges,
      selectedRange: { id: CUSTOM_RANGE_ID },
    });

    wrapper.setProps({
      selectedRange: { id: 'LAST_X_WEEKS', value: 1 },
    });

    expect(wrapper.state('inputValue[LAST_X_WEEKS]')).toBe('1');
  });

  it('should call onRangeSelect with the stored value if selected predefined range with argument has no errors', () => {
    const onRangeSelect = jest.fn();

    wrapper = setupShallow({
      ranges,
      onRangeSelect,
      selectedRange: { id: CUSTOM_RANGE_ID },
    });

    wrapper.setState({
      'inputValue[LAST_X_WEEKS]': '1',
      'hasError[LAST_X_WEEKS]': false,
    });

    wrapper.find(PredefinedListItem).at(1).simulate('click');

    expect(onRangeSelect).toHaveBeenCalledWith({
      id: 'LAST_X_WEEKS',
      value: 1,
    });
  });

  it('should call onRangeSelect with default (1) if selected predefined range with argument has error', () => {
    const onRangeSelect = jest.fn();

    wrapper = setupShallow({
      ranges,
      onRangeSelect,
      selectedRange: { id: CUSTOM_RANGE_ID },
    });

    wrapper.setState({
      'inputValue[LAST_X_WEEKS]': '-1',
      'hasError[LAST_X_WEEKS]': true,
    });

    wrapper.find(PredefinedListItem).at(1).simulate('click');

    expect(onRangeSelect).toHaveBeenCalledWith({
      id: 'LAST_X_WEEKS',
      value: '1',
    });
  });
});
