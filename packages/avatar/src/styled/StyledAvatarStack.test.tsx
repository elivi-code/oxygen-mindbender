import React from 'react';
import renderer from 'react-test-renderer';

import { avatarStackNovo as theme } from '@8x8/oxygen-constants';

import {
  StyledAvatarStackButton,
  StyledAvatarStackDiv,
} from './StyledAvatarStack';

describe('<StyledAvatarStackButton />', () => {
  it('should render with theme', () => {
    const wrapper = renderer
      .create(<StyledAvatarStackButton theme={theme} />)
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});

describe('<StyledAvatarStackDiv />', () => {
  it('should render with theme', () => {
    const wrapper = renderer
      .create(<StyledAvatarStackDiv theme={theme} />)
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
