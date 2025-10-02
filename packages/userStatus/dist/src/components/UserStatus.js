import React from 'react';
import { ThemeProvider } from 'styled-components';
import { withTheme } from '@8x8/oxygen-config';
import { THEME_NAME } from '../constants/themeName';
import UserStatusIcon from './UserStatusIcon';
import UserStatusWrapper from '../styled/UserStatusWrapper';
const UserStatus = props => {
    const { theme, // theme is full theme object as injected by withTheme
    size = 'large', status = 'available', title, children, ...otherProps } = props;
    return (React.createElement(ThemeProvider, { theme: theme },
        React.createElement(UserStatusWrapper, { "$size": size, "$status": status, title: title, ...otherProps }, children || React.createElement(UserStatusIcon, { status: status }))));
};
export default withTheme(UserStatus, THEME_NAME);
