import * as userStatusSize from './constants/sizeLegacy';
import * as userStatusType from './constants/statusTypeLegacy';

import { Size } from './constants/size';
import { Status } from './constants/status';
import UserStatus, { UserStatusProps } from './components/UserStatus';

/** @deprecated use named export instead */
export default UserStatus;
export { UserStatus, type UserStatusProps };
export { Size, Status };

export {
  /** @deprecated use exported type Size instead */
  userStatusSize,
  /** @deprecated use exported type Status instead */
  userStatusType,
};
