import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { userStatus as theme } from '@8x8/oxygen-constants';
import UserStatusIconWrapUp from './UserStatusIconWrapUp';

describe('<UserStatusIconWrapUp>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(<UserStatusIconWrapUp theme={theme} {...props} />)
      .toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
