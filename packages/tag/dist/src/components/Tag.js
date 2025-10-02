import React from 'react';
import { ThemeProvider } from 'styled-components';
import { withTheme, getTestAttributes } from '@8x8/oxygen-config';
import { useFontSize } from '@8x8/oxygen-utils';
import Avatar from './Avatar';
import Wrapper from './Wrapper';
import CloseButton from './CloseButton';
import { HEIGHT, variants } from '../constants';
const Tag = ({ children, theme, testId = 'TAG', isFocused, actionProps, avatar, action, hasError, variant = variants.light, ...rest }) => {
    // These are forced props for the Avatar component which are not allowed to be overridden
    const avatarForcedProps = {
        hasBorder: false,
        size: useFontSize(HEIGHT),
        showEditOverlay: false,
        userStatus: null,
    };
    const wrapperProps = {
        $avatar: avatar,
        $action: action,
        $hasError: hasError,
        variant,
    };
    return (React.createElement(ThemeProvider, { theme: theme },
        React.createElement(Wrapper, { ...wrapperProps, ...rest, ...getTestAttributes(testId) },
            avatar && (React.createElement(Avatar, { ...avatar, ...avatarForcedProps, ...getTestAttributes(`${testId}_AVATAR`) })),
            children,
            action && (React.createElement(CloseButton, { action: action, isFocused: isFocused, variant: variant, tabIndex: 0, ...actionProps, ...getTestAttributes(`${testId}_ACTION`) })))));
};
export default withTheme(Tag, 'tag');
