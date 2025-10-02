import React from 'react';
import { ThemeProvider } from 'styled-components';

import { withTheme } from '@8x8/oxygen-config';
import { THEME_NAME } from '../constants/themeName';

import UserStatusIcon from './UserStatusIcon';
import UserStatusWrapper from '../styled/UserStatusWrapper';
import { UserStatusTheme } from '../types';
import { Size } from '../constants/size';
import { Status } from '../constants/status';

export interface UserStatusProps extends React.ComponentPropsWithRef<'div'> {
  theme?: Partial<UserStatusTheme>;
  size?: Size;
  status?: Status;
  title?: string;
}

const UserStatus: React.FC<UserStatusProps> = props => {
  const {
    theme, // theme is full theme object as injected by withTheme
    size = 'large',
    status = 'available',
    title,
    children,
    ...otherProps
  } = props;

  return (
    <ThemeProvider theme={theme as UserStatusTheme}>
      <UserStatusWrapper
        $size={size}
        $status={status}
        title={title}
        {...otherProps}
      >
        {children || <UserStatusIcon status={status} />}
      </UserStatusWrapper>
    </ThemeProvider>
  );
};

export default withTheme(UserStatus, THEME_NAME);
