import React from 'react';

import { withTheme, withDeprecation } from '@8x8/oxygen-config';

import THEME_NAME from '../constants/themeName';

import BadgeWrapper from '../styled/BadgeWrapper';

import { BadgeProps } from '../types';

const Badge = ({ children, ...passThroughProps }: BadgeProps) => {
  const defaultProps = {
    ...passThroughProps,
    type: passThroughProps.type ?? 'primary',
    size: passThroughProps.size ?? 'medium',
    isInner: passThroughProps.isInner ?? false,
    testId: passThroughProps.testId ?? 'BADGE',
  };

  return <BadgeWrapper {...defaultProps}>{children}</BadgeWrapper>;
};

Badge.displayName = 'Badge';

export default withDeprecation(
  withTheme(Badge, THEME_NAME),
  `The following items are deprecated:
    - "position: 'tl'" (use instead: "position: 'top-start'")
    - "position: 'tr'" (use instead: "position: 'top-end'")
    - "position: 'bl'" (use instead: "position: 'bottom-start'")
    - "position: 'br'" (use instead: "position: 'bottom-end'")
    - "type: secondary" (with novo this already renders the same as "primary")
    - "size: big" (with novo this already renders the same as "medium" which is the default)
  `,
);
