/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { icon as theme } from '@8x8/oxygen-constants';
import InboundEmailIcon from './InboundEmailIcon';

describe('<InboundEmailIcon>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<InboundEmailIcon theme={theme} {...props} />).toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
/* eslint-enable */
