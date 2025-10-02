/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { icon as theme } from '@8x8/oxygen-constants';
import BargeCallIcon from './BargeCallIcon';

describe('<BargeCallIcon>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<BargeCallIcon theme={theme} {...props} />).toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
/* eslint-enable */
