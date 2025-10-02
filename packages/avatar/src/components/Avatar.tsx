import React, { useCallback, useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { getTestAttributes, withTheme } from '@8x8/oxygen-config';
import { UserStatus } from '@8x8/oxygen-user-status';
import { CameraIcon, UserIcon, UsersIcon } from '@8x8/oxygen-icon';

import { avatarSize, avatarUserStatus } from '../constants';
import { AvatarProps, AvatarSize } from '../types';
import {
  StyledAvatar,
  StyledAvatarImage,
  EditOverlay,
  UserStatusWrapper,
  EditOverlayWrapper,
} from '../styled/StyledAvatar';

import getIconSizePx from '../utils/getIconSizePx';
import getInitials from '../utils/getInitials';

function Avatar({
  children = null,
  theme = {},
  size = 'medium',
  userStatus = null,
  hasBorder = false,
  isGroup = false,
  name = '',
  maxInitials = 2,
  onClick = undefined,
  onEdit = () => false,
  src = '',
  imageProps = {},
  showEditOverlay = false,
  testId = 'AVATAR',
  hasStatusBorder = false,
  isActive = false,
  forwardedRef,
  ...rest
}: AvatarProps) {
  const [imageOpacity, setImageOpacity] = useState(0);

  const handleEdit = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      return onEdit(e);
    },
    [onEdit],
  );

  // reset the image opacity when the src changes
  useEffect(() => {
    if (!src) {
      setImageOpacity(0);
    }
  }, [src]);

  const shouldShowStatusBorder =
    hasStatusBorder &&
    typeof userStatus === 'string' &&
    Object.values(avatarUserStatus).includes(userStatus);

  const renderImage = () => {
    const { onLoad, ...imagePropsRest } = imageProps || {};

    if (src) {
      return (
        <StyledAvatarImage
          {...getTestAttributes(`${testId}_IMAGE`)}
          size={size}
          src={src}
          alt={name}
          opacity={imageOpacity}
          onLoad={event => {
            setImageOpacity(1);
            onLoad?.(event);
          }}
          {...imagePropsRest}
        />
      );
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

    return <Icon size={getIconSizePx({ size, theme })} aria-hidden="true" />;
  };

  const renderEditOverlay = () => {
    if (typeof size === 'number') {
      return null;
    }

    if (
      showEditOverlay &&
      (
        [
          avatarSize.sizeLarge,
          avatarSize.sizeXlarge,
          avatarSize.size2xlarge,
          avatarSize.size3xlarge,
        ] as AvatarSize[]
      ).includes(size)
    ) {
      return (
        <EditOverlayWrapper>
          <EditOverlay onClick={handleEdit} size={size}>
            <CameraIcon />
          </EditOverlay>
        </EditOverlayWrapper>
      );
    }

    return null;
  };

  const renderUserStatus = () => {
    if (!userStatus) {
      return false;
    }

    if (typeof userStatus !== 'string') {
      return <UserStatusWrapper>{userStatus}</UserStatusWrapper>;
    }

    if (
      (
        [
          avatarSize.size2xsmall,
          avatarSize.sizeXsmall,
          avatarSize.sizeSmall,
          avatarSize.sizeMedium,
          avatarSize.sizeLarge,
          avatarSize.sizeXlarge,
          avatarSize.size2xlarge,
        ] as AvatarSize[]
      ).includes(size as AvatarSize)
    ) {
      const statusSize = (
        [
          avatarSize.size2xsmall,
          avatarSize.sizeXsmall,
          avatarSize.sizeSmall,
          avatarSize.sizeMedium,
        ] as AvatarSize[]
      ).includes(size as AvatarSize)
        ? 'small'
        : 'large';

      return (
        <UserStatusWrapper>
          <UserStatus size={statusSize} status={userStatus} />
        </UserStatusWrapper>
      );
    }

    return false;
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledAvatar
        {...getTestAttributes(testId)}
        hasBorder={hasBorder}
        hasStatusBorder={shouldShowStatusBorder}
        isActive={isActive}
        size={size}
        userStatus={typeof userStatus === 'string' ? userStatus : undefined}
        onClick={onClick}
        tabIndex={onClick && 0}
        role={onClick && 'button'}
        ref={forwardedRef}
        {...rest}
      >
        {!imageOpacity && renderAvatar()}
        {renderImage()}
        {renderEditOverlay()}
        {renderUserStatus()}
      </StyledAvatar>
    </ThemeProvider>
  );
}

export default withTheme(Avatar, 'avatar');
