import React from 'react';
import renderer from 'react-test-renderer';

import { avatar as theme } from '@8x8/oxygen-constants';

import {
  StyledAvatarImage,
  StyledAvatar,
  EditOverlay,
  UserStatusWrapper,
} from './StyledAvatar';

describe('<StyledAvatar />', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(<StyledAvatar theme={theme} size="medium" {...props} />)
      .toJSON();
  }

  it('should style correctly the avatar for 3xsmall size', () => {
    wrapper = setup({ size: '3xsmall' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly the avatar for 2xsmall size', () => {
    wrapper = setup({ size: '2xsmall' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly the avatar for xsmall size', () => {
    wrapper = setup({ size: 'xsmall' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly the avatar for small size', () => {
    wrapper = setup({ size: 'small' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly the avatar for medium size', () => {
    wrapper = setup({ size: 'medium' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly the avatar for large size', () => {
    wrapper = setup({ size: 'large' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly the avatar for xlarge size', () => {
    wrapper = setup({ size: 'xlarge' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly the avatar for 2xlarge size', () => {
    wrapper = setup({ size: '2xlarge' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly the avatar for 3xlarge size', () => {
    wrapper = setup({ size: '3xlarge' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly the interactive avatar', () => {
    wrapper = setup({ onClick: jest.fn() });
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<EditOverlay />', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<EditOverlay theme={theme} {...props} />).toJSON();
  }

  it('should style correctly the avatar overlay for large size', () => {
    wrapper = setup({ size: 'large' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly the avatar overlay for xlarge size', () => {
    wrapper = setup({ size: 'xlarge' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly the avatar overlay for 2xlarge size', () => {
    wrapper = setup({ size: '2xlarge' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly the avatar overlay for 3xlarge size', () => {
    wrapper = setup({ size: '3xlarge' });
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<StyledAvatarImage />', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(<StyledAvatarImage theme={theme} {...props} />)
      .toJSON();
  }

  it('should style correctly the avatar image for 3xsmall size', () => {
    wrapper = setup({ size: '3xsmall' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly the avatar image for 2xsmall size', () => {
    wrapper = setup({ size: '2xsmall' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly the avatar image for xsmall size', () => {
    wrapper = setup({ size: 'xsmall' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly the avatar image for small size', () => {
    wrapper = setup({ size: 'small' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly the avatar image for medium size', () => {
    wrapper = setup({ size: 'medium' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly the avatar image for large size', () => {
    wrapper = setup({ size: 'large' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly the avatar image for xlarge size', () => {
    wrapper = setup({ size: 'xlarge' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly the avatar image for 2xlarge size', () => {
    wrapper = setup({ size: '2xlarge' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly the avatar image for 3xlarge size', () => {
    wrapper = setup({ size: '3xlarge' });
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<UserStatusWrapper />', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(<UserStatusWrapper theme={theme} {...props} />)
      .toJSON();
  }

  it('should style correctly the avatar user status', () => {
    wrapper = setup({});
    expect(wrapper).toMatchSnapshot();
  });
});
