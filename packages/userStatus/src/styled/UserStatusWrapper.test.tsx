import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { userStatus as theme } from '@8x8/oxygen-constants';
import { Status } from '../constants/status';
import UserStatusWrapper, { Props } from './UserStatusWrapper';

const availableStatuses: Status[] = [
  'available',
  'onDirectCall',
  'away',
  'busy',
  'wrapUp',
  'doNotDisturb',
  'onBreak',
  'onCall',
  'offline',
  'workingOffline',
];

describe('<UserStatusWrapper>', () => {
  let wrapper;

  function setup(props?: Partial<Props>) {
    const propsWithDefaults: Props = {
      $size: 'large',
      $status: 'available',
      ...props,
    };

    return renderer
      .create(<UserStatusWrapper theme={theme} {...propsWithDefaults} />)
      .toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when size is large', () => {
    wrapper = setup({ $size: 'large' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when size is small', () => {
    wrapper = setup({ $size: 'small' });
    expect(wrapper).toMatchSnapshot();
  });

  availableStatuses.forEach(status => {
    it(`should render correctly when status is ${status}`, () => {
      wrapper = setup({ $status: status });
      expect(wrapper).toMatchSnapshot();
    });
  });
});
