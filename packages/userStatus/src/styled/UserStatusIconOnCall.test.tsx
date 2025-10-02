import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { userStatus as theme } from '@8x8/oxygen-constants';

import UserStatusIconOnCall from './UserStatusIconOnCall';

describe('<UserStatusIconOnCall>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(<UserStatusIconOnCall theme={theme} {...props} />)
      .toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
