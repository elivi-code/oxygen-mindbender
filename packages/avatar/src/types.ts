/* eslint-disable */
import React from 'react';
import { avatarNovo, avatarStackNovo } from '@8x8/oxygen-constants';

import { avatarSize, avatarUserStatus } from './constants';

type AvatarSizeKeys = keyof typeof avatarSize;
type AvatarUserStatusKeys = keyof typeof avatarUserStatus;

export type AvatarTheme = Partial<typeof avatarNovo>;

export type AvatarSize = (typeof avatarSize)[AvatarSizeKeys];

export type AvatarUserStatus = (typeof avatarUserStatus)[AvatarUserStatusKeys];

export type AvatarStackTheme = Partial<typeof avatarStackNovo>;

export interface AvatarProps
  extends Omit<React.ComponentPropsWithRef<'div'>, 'onClick'> {
  children?: React.ReactNode;
  /**
   * Avatar theme
   */
  theme?: Partial<AvatarTheme>;
  /**
   * Specifies the size of the avatar
   */
  size?: AvatarSize | number;
  /**
   * Specifies the user status or a render-able element. User status is available only for sizes between xs and 2xl
   */
  userStatus?: AvatarUserStatus | React.ReactElement;
  /**
   * Specifies if the group placeholder should be used
   */
  hasBorder?: boolean;
  isGroup?: boolean;
  /**
   * Specifies the name after which the initials are computed
   */
  name?: string;
  /**
   * How many initials to show
   */
  maxInitials?: number;
  /**
   * Callback for the avatar on-click event
   */
  onClick?: (e?: React.MouseEvent<HTMLDivElement>) => void;
  /**
   * Callback for the edit overlay on-click event
   */
  onEdit?: (e?: React.MouseEvent<HTMLDivElement>) => void;
  /**
   * Specifies the image source
   */
  src?: string;
  imageProps?: Omit<React.ComponentPropsWithRef<'img'>, 'src' | 'alt'>;
  /**
   * Specifies if the edit overlay should be displayed. The edit overlay is available only for sizes between l and 3xl
   */
  showEditOverlay?: boolean;
  /**
   * Test ID
   */
  testId?: string;
  hasStatusBorder?: boolean;
  isActive?: boolean;
  forwardedRef?: any;
}

export interface AvatarStackProps
  extends React.ComponentPropsWithRef<'button'> {
  avatars?: Pick<AvatarProps, 'name' | 'src' | 'isGroup'>[];
  children?: React.ReactElement<AvatarProps>[];
  maxAvatars?: number;
  testId?: string;
  theme?: Partial<AvatarStackTheme>;
}
