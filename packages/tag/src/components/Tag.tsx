import React from 'react';
import { ThemeProvider } from 'styled-components';

import { withTheme, getTestAttributes } from '@8x8/oxygen-config';
import { useFontSize } from '@8x8/oxygen-utils';
import { AvatarProps } from '@8x8/oxygen-avatar';

import Avatar from './Avatar';
import Wrapper from './Wrapper';
import CloseButton from './CloseButton';

import { HEIGHT, variants } from '../constants';

import type { TagProps } from '../types';

const Tag = ({
  children,
  theme,
  testId = 'TAG',
  isFocused,
  actionProps,
  avatar,
  action,
  hasError,
  variant = variants.light,
  ...rest
}: TagProps) => {
  // These are forced props for the Avatar component which are not allowed to be overridden
  const avatarForcedProps: Pick<
    AvatarProps,
    'hasBorder' | 'size' | 'showEditOverlay' | 'userStatus'
  > = {
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

  return (
    <ThemeProvider theme={theme}>
      <Wrapper {...wrapperProps} {...rest} {...getTestAttributes(testId)}>
        {avatar && (
          <Avatar
            {...avatar}
            {...avatarForcedProps}
            {...getTestAttributes(`${testId}_AVATAR`)}
          />
        )}
        {children}
        {action && (
          <CloseButton
            action={action}
            isFocused={isFocused}
            variant={variant}
            tabIndex={0}
            {...actionProps}
            {...getTestAttributes(`${testId}_ACTION`)}
          />
        )}
      </Wrapper>
    </ThemeProvider>
  );
};

export default withTheme(Tag, 'tag');
