import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { userStatus as theme } from '@8x8/oxygen-constants';

import UserStatusIconAvailable from './UserStatusIconAvailable';

describe('<UserStatusIconAvailable>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(<UserStatusIconAvailable theme={theme} {...props} />)
      .toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
