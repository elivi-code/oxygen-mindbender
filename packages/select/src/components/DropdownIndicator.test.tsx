import React from 'react';
import { shallow } from 'enzyme';

import { select as theme } from '@8x8/oxygen-constants';

import DropdownIndicator from './DropdownIndicator';

jest.mock('react-select', () => ({
  components: {
    DropdownIndicator: 'DropdownIndicator',
  },
}));

jest.mock('@8x8/oxygen-icon', () => ({
  ArrowDownSolidIcon: 'ArrowDownSolidIcon',
  ArrowUpSolidIcon: 'ArrowUpSolidIcon',
}));

describe('<DropdownIndicator />', () => {
  let wrapper;

  function setupShallow(props = {}) {
    return shallow(<DropdownIndicator theme={theme} {...props} />);
  }

  it('renders correctly the dropdown indicator with select closed', () => {
    wrapper = setupShallow({ selectProps: {}, getStyles: jest.fn(() => ({})) });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly the dropdown indicator with select open', () => {
    wrapper = setupShallow({
      selectProps: { menuIsOpen: true },
      getStyles: jest.fn(() => ({})),
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly the dropdown indicator with select disabled', () => {
    wrapper = setupShallow({
      selectProps: {},
      getStyles: jest.fn(() => ({})),
      isDisabled: true,
    });
    expect(wrapper).toMatchSnapshot();
  });
});
