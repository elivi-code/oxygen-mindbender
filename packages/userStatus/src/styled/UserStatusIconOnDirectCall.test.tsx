import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { userStatus as theme } from '@8x8/oxygen-constants';

import UserStatusIconOnDirectCall from './UserStatusIconOnDirectCall';

describe('<UserStatusIconOnDirectCall>', () => {
  const setup = (props = {}) => {
    return renderer
      .create(<UserStatusIconOnDirectCall theme={theme} {...props} />)
      .toJSON();
  };

  it('should render correctly', () => {
    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();
  });
});
