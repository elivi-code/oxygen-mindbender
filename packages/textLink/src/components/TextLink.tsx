import React from 'react';
import { ThemeProvider } from 'styled-components';

import { withTheme } from '@8x8/oxygen-config';

import type { TextLinkProps } from '../types';

import TextLinkWrapper from '../styled/TextLinkWrapper';

const TextLink: React.FunctionComponent<TextLinkProps> = ({
  theme,
  isDisabled,
  onClick,
  href,
  forwardedRef,
  color,
  size = 'default',
  underline = 'hover',
  ...rest
}) => {
  const handleOnClick = (event: React.MouseEvent) => {
    if (isDisabled) {
      event.preventDefault();

      return;
    }

    if (onClick !== undefined) {
      event.preventDefault();
      onClick(event);
    }
  };
  const props = {
    tabIndex: 0,
    ...(isDisabled && { 'aria-disabled': true, role: 'link' }),
    ...(!isDisabled && href && { href }),
    ...(onClick && { onClick: handleOnClick }),
    ref: forwardedRef,
    $color: color,
    $size: size,
    $underline: underline,
    ...rest,
  };

  return (
    <ThemeProvider theme={theme}>
      <TextLinkWrapper {...props} />
    </ThemeProvider>
  );
};

export default withTheme(TextLink, 'textLink');
