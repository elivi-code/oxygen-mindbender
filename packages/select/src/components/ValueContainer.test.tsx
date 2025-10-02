import React from 'react';
import { shallow } from 'enzyme';

import { select as theme } from '@8x8/oxygen-constants';
import { CalendarIcon } from '@8x8/oxygen-icon';

import { ValueContainer, formatShortDisplay } from './ValueContainer';

jest.mock('react-select', () => ({
  components: {
    ValueContainer: 'ValueContainer',
  },
}));

jest.mock('../styled', () => ({
  IconLeftWrapper: 'IconLeftWrapper',
}));

describe('<ValueContainer />', () => {
  let wrapper;

  function setupShallow(props = {}) {
    return shallow(<ValueContainer theme={theme} {...props} />);
  }

  it('renders correctly the value container without icon', () => {
    wrapper = setupShallow({ selectProps: {} });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly the value container with icon', () => {
    wrapper = setupShallow({ selectProps: { iconLeft: CalendarIcon } });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly the value container with icon and input value', () => {
    wrapper = setupShallow({
      selectProps: { iconLeft: CalendarIcon, inputValue: 'test-value' },
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders short multi display with count', () => {
    wrapper = setupShallow({
      selectProps: {
        hasShortMultiDisplay: true,
        inputValue: 'test-value',
      },
      isMulti: true,
      children: [
        [{ props: { children: '1' } }, { props: { children: '2' } }],
        'test',
      ],
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders short multi display', () => {
    wrapper = setupShallow({
      selectProps: {
        hasShortMultiDisplay: true,
        inputValue: 'test-value',
      },
      isMulti: true,
      children: [[{ props: { children: '1' } }], 'test'],
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the regular children', () => {
    wrapper = setupShallow({
      selectProps: {
        hasShortMultiDisplay: true,
        inputValue: 'test-value',
      },
      isMulti: true,
      children: [[], 'test'],
    });
    expect(wrapper).toMatchSnapshot();
  });
});

describe('formatShortDisplay', () => {
  it('should return the provided text', () => {
    expect(formatShortDisplay('test')).toBe('test');
  });
  it('should not append a count if the second argument length is zero', () => {
    expect(formatShortDisplay('test', [])).toBe('test');
  });
  it('should append a count for the second argument length', () => {
    expect(formatShortDisplay('test', [1, 2])).toBe('test +2');
  });
});
