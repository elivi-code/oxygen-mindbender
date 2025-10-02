/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { icon as theme } from '@8x8/oxygen-constants';
import GearSolidIcon from './GearSolidIcon';

describe('<GearSolidIcon>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<GearSolidIcon theme={theme} {...props} />).toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
/* eslint-enable */
