import React from 'react';
import { UserStatusTheme } from '../types';
import { Size } from '../constants/size';
import { Status } from '../constants/status';
export interface UserStatusProps extends React.ComponentPropsWithRef<'div'> {
    theme?: Partial<UserStatusTheme>;
    size?: Size;
    status?: Status;
    title?: string;
}
declare const _default: React.FC<UserStatusProps> & React.ForwardRefExoticComponent<Omit<UserStatusProps, "ref"> & React.RefAttributes<unknown>>;
export default _default;
//# sourceMappingURL=UserStatus.d.ts.map