import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Status } from '../constants/status';

import UserStatusIcon from './UserStatusIcon';

jest.mock('../styled/UserStatusIconAvailable', () => 'UserStatusIconAvailable');
jest.mock('../styled/UserStatusIconAway', () => 'UserStatusIconAway');
jest.mock('../styled/UserStatusIconBusy', () => 'UserStatusIconBusy');
jest.mock(
  '../styled/UserStatusIconDoNotDisturb',
  () => 'UserStatusIconDoNotDisturb',
);
jest.mock('../styled/UserStatusIconWrapUp', () => 'UserStatusIconWrapUp');
jest.mock('../styled/UserStatusIconOffline', () => 'UserStatusIconOffline');
jest.mock('../styled/UserStatusIconOnBreak', () => 'UserStatusIconOnBreak');
jest.mock('../styled/UserStatusIconOnCall', () => 'UserStatusIconOnCall');
jest.mock(
  '../styled/UserStatusIconOnDirectCall',
  () => 'UserStatusIconOnDirectCall',
);
jest.mock(
  '../styled/UserStatusIconWorkingOffline',
  () => 'UserStatusIconWorkingOffline',
);

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

describe('<UserStatusIcon>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(<UserStatusIcon status="available" {...props} />)
      .toJSON();
  }

  availableStatuses.forEach(status => {
    it(`should render correctly when status is ${status}`, () => {
      wrapper = setup({ status });
      expect(wrapper).toMatchSnapshot();
    });
  });
});
