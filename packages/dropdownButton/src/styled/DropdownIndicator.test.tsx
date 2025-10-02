import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { dropdownButton as theme } from '@8x8/oxygen-constants';

import DropdownIndicator from './DropdownIndicator';

describe('<DropdownIndicator>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(<DropdownIndicator theme={theme} {...props} />)
      .toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when it isDisabled', () => {
    wrapper = setup({ isDisabled: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when it left', () => {
    wrapper = setup({ isDisabled: true, left: true });
    expect(wrapper).toMatchSnapshot();
  });
});
