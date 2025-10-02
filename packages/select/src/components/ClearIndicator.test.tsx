import React from 'react';
import { shallow } from 'enzyme';

import { select as theme } from '@8x8/oxygen-constants';

import { ClearIndicator } from './ClearIndicator';

jest.mock('react-select', () => ({
  components: {
    ClearIndicator: 'ClearIndicator',
  },
}));

jest.mock('../styled', () => ({
  CloseIcon: 'CloseIcon',
}));

describe('<ClearIndicator />', () => {
  let wrapper;

  function setupShallow(props = {}) {
    return shallow(<ClearIndicator theme={theme} {...props} />);
  }

  it('renders correctly the clear indicator', () => {
    wrapper = setupShallow({
      selectProps: {},
      getStyles: jest.fn(),
      innerProps: { ref: jest.fn() },
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly the clear indicator when input is focused', () => {
    wrapper = setupShallow({
      isFocused: true,
      selectProps: {},
      getStyles: jest.fn(),
      innerProps: { ref: jest.fn() },
    });
    expect(wrapper).toMatchSnapshot();
  });
});
