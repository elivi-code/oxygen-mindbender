import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { loaders as theme } from '@8x8/oxygen-constants';
import { Bar } from './Bar';

describe('<Bar>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<Bar theme={theme} {...props} />).toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should use a different color when at 100', () => {
    wrapper = setup({ value: 100 });
    expect(wrapper).toMatchSnapshot();
  });
});
