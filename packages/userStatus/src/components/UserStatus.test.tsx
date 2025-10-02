import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import UserStatus from './UserStatus';

jest.mock('./UserStatusIcon', () => 'UserStatusIcon');

describe('<UserStatus>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<UserStatus {...props} />).toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when size is small', () => {
    wrapper = setup({ size: 'small' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when status is away', () => {
    wrapper = setup({ status: 'away' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when status is busy', () => {
    wrapper = setup({ status: 'busy' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when status is doNotDisturb', () => {
    wrapper = setup({ status: 'doNotDisturb' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when status is onBreak', () => {
    wrapper = setup({ status: 'onBreak' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when status is onCall', () => {
    wrapper = setup({ status: 'onCall' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when status is offline', () => {
    wrapper = setup({ status: 'offline' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when status is workingOffline', () => {
    wrapper = setup({ status: 'workingOffline' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when aria-label prop are provided', () => {
    wrapper = setup({
      'aria-label': 'User status aria-label',
    }) as renderer.ReactTestRendererJSON;

    expect(wrapper?.props['aria-label']).toEqual('User status aria-label');
  });
});
