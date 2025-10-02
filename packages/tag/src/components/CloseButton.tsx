import React from 'react';
import styled, { css, useTheme } from 'styled-components';
import themes from '@8x8/oxygen-theme';
import { useFontSize } from '@8x8/oxygen-utils';
import { CloseLargeIcon } from '@8x8/oxygen-icon';

import { selectTextColor } from '../utils';
import { HEIGHT, HEIGHT_REM } from '../constants';
import type { TagProps } from '../types';

const focusStyle = css`
  border: 2px solid ${themes.light.focus01};
  box-shadow: inset 0 0 0 2px ${themes.light.icon02};
`;

const CloseButtonWrapper = styled.div<{ $isFocused: TagProps['isFocused'] }>`
  align-items: center;
  background: transparent;
  box-sizing: border-box;
  border-radius: 50%;
  border: 0;
  cursor: pointer;
  display: flex;
  height: ${HEIGHT_REM};
  justify-content: center;
  min-width: ${HEIGHT_REM};
  outline: 0;
  padding: 0;
  width: ${HEIGHT_REM};
  ${({ $isFocused }) => $isFocused && focusStyle}
  :focus-visible {
    ${focusStyle}
  }
`;

type CloseButtonProps = TagProps['actionProps'] & {
  action: TagProps['action'];
  isFocused: TagProps['isFocused'];
  variant: TagProps['variant'];
};

const CloseButton = ({
  action,
  isFocused,
  variant,
  ...rest
}: CloseButtonProps) => {
  // icon size is approx 2/3 of the height of the tag
  const size = 0.66 * useFontSize(HEIGHT);
  const theme = useTheme();

  return (
    <CloseButtonWrapper onClick={action} $isFocused={isFocused} {...rest}>
      <CloseLargeIcon size={size} color={selectTextColor({ theme, variant })} />
    </CloseButtonWrapper>
  );
};

export default CloseButton;
