import React, { useCallback, useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { getTestAttributes, withTheme } from '@8x8/oxygen-config';
import { UserStatus } from '@8x8/oxygen-user-status';
import { CameraIcon, UserIcon, UsersIcon } from '@8x8/oxygen-icon';
import { avatarSize, avatarUserStatus } from '../constants';
import { StyledAvatar, StyledAvatarImage, EditOverlay, UserStatusWrapper, EditOverlayWrapper, } from '../styled/StyledAvatar';
import getIconSizePx from '../utils/getIconSizePx';
import getInitials from '../utils/getInitials';
function Avatar({ children = null, theme = {}, size = 'medium', userStatus = null, hasBorder = false, isGroup = false, name = '', maxInitials = 2, onClick = undefined, onEdit = () => false, src = '', imageProps = {}, showEditOverlay = false, testId = 'AVATAR', hasStatusBorder = false, isActive = false, forwardedRef, ...rest }) {
    const [imageOpacity, setImageOpacity] = useState(0);
    const handleEdit = useCallback((e) => {
        e.stopPropagation();
        return onEdit(e);
    }, [onEdit]);
    // reset the image opacity when the src changes
    useEffect(() => {
        if (!src) {
            setImageOpacity(0);
        }
    }, [src]);
    const shouldShowStatusBorder = hasStatusBorder &&
        typeof userStatus === 'string' &&
        Object.values(avatarUserStatus).includes(userStatus);
    const renderImage = () => {
        const { onLoad, ...imagePropsRest } = imageProps || {};
        if (src) {
            return (React.createElement(StyledAvatarImage, { ...getTestAttributes(`${testId}_IMAGE`), size: size, src: src, alt: name, opacity: imageOpacity, onLoad: event => {
                    setImageOpacity(1);
                    onLoad?.(event);
                }, ...imagePropsRest }));
        }
        return null;
    };
    const renderAvatar = () => {
        if (children) {
            return children;
        }
        const trimmedName = name.trim();
        if (trimmedName) {
            return getInitials(trimmedName, maxInitials);
        }
        const Icon = isGroup ? UsersIcon : UserIcon;
        return React.createElement(Icon, { size: getIconSizePx({ size, theme }), "aria-hidden": "true" });
    };
    const renderEditOverlay = () => {
        if (typeof size === 'number') {
            return null;
        }
        if (showEditOverlay &&
            [
                avatarSize.sizeLarge,
                avatarSize.sizeXlarge,
                avatarSize.size2xlarge,
                avatarSize.size3xlarge,
            ].includes(size)) {
            return (React.createElement(EditOverlayWrapper, null,
                React.createElement(EditOverlay, { onClick: handleEdit, size: size },
                    React.createElement(CameraIcon, null))));
        }
        return null;
    };
    const renderUserStatus = () => {
        if (!userStatus) {
            return false;
        }
        if (typeof userStatus !== 'string') {
            return React.createElement(UserStatusWrapper, null, userStatus);
        }
        if ([
            avatarSize.size2xsmall,
            avatarSize.sizeXsmall,
            avatarSize.sizeSmall,
            avatarSize.sizeMedium,
            avatarSize.sizeLarge,
            avatarSize.sizeXlarge,
            avatarSize.size2xlarge,
        ].includes(size)) {
            const statusSize = [
                avatarSize.size2xsmall,
                avatarSize.sizeXsmall,
                avatarSize.sizeSmall,
                avatarSize.sizeMedium,
            ].includes(size)
                ? 'small'
                : 'large';
            return (React.createElement(UserStatusWrapper, null,
                React.createElement(UserStatus, { size: statusSize, status: userStatus })));
        }
        return false;
    };
    return (React.createElement(ThemeProvider, { theme: theme },
        React.createElement(StyledAvatar, { ...getTestAttributes(testId), hasBorder: hasBorder, hasStatusBorder: shouldShowStatusBorder, isActive: isActive, size: size, userStatus: typeof userStatus === 'string' ? userStatus : undefined, onClick: onClick, tabIndex: onClick && 0, role: onClick && 'button', ref: forwardedRef, ...rest },
            !imageOpacity && renderAvatar(),
            renderImage(),
            renderEditOverlay(),
            renderUserStatus())));
}
export default withTheme(Avatar, 'avatar');
