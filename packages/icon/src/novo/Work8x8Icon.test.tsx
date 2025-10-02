/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { icon as theme } from '@8x8/oxygen-constants';
import Work8x8Icon from './Work8x8Icon';

describe('<Work8x8Icon>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<Work8x8Icon theme={theme} {...props} />).toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
/* eslint-enable */
