import React from 'react';

import { Status } from '../constants/status';

import {
  UserStatusIconAvailable,
  UserStatusIconAway,
  UserStatusIconDoNotDisturb,
  UserStatusIconOnBreak,
  UserStatusIconOnCall,
  UserStatusIconOffline,
  UserStatusIconWorkingOffline,
  UserStatusIconBusy,
  UserStatusIconWrapUp,
  UserStatusIconOnDirectCall,
} from '../styled';

const getIcon = (status: Status) => {
  switch (status) {
    case 'available':
      return UserStatusIconAvailable;
    case 'onDirectCall':
      return UserStatusIconOnDirectCall;
    case 'away':
      return UserStatusIconAway;
    case 'busy':
      return UserStatusIconBusy;
    case 'wrapUp':
      return UserStatusIconWrapUp;
    case 'doNotDisturb':
      return UserStatusIconDoNotDisturb;
    case 'offline':
      return UserStatusIconOffline;
    case 'onBreak':
      return UserStatusIconOnBreak;
    case 'onCall':
      return UserStatusIconOnCall;
    case 'workingOffline':
      return UserStatusIconWorkingOffline;
    default:
      return null;
  }
};

interface Props {
  status: Status;
}

export function UserStatusIcon({ status }: Props) {
  const UserStatusSvg = getIcon(status);

  return UserStatusSvg ? <UserStatusSvg aria-hidden="true" /> : null;
}

export default UserStatusIcon;
