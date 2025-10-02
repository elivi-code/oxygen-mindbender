import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { input as theme } from '@8x8/oxygen-constants';

import InputIcon from './InputIcon';

describe('<InputIcon>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<InputIcon theme={theme} {...props} />).toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with marginLeft', () => {
    wrapper = setup({ marginLeft: true });
    expect(wrapper).toMatchSnapshot();
  });
});
