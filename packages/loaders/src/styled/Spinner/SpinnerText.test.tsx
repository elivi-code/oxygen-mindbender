import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { loaders as theme } from '@8x8/oxygen-constants';

import SpinnerText from './SpinnerText';

describe('<SpinnerText>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<SpinnerText theme={theme} {...props} />).toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
