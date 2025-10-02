/* eslint-disable max-len */
import React from 'react';
import themes from '@8x8/oxygen-theme';

import { createSvgIcon } from './utils';

const { colorPalette } = themes;

const UserStatusIconWrapUp = (
  <g>
    <circle className="presence-border" cx="7" cy="7" r="7" fill="white" />
    <circle
      className="presence-background"
      cx="7"
      cy="7"
      r="5"
      fill={colorPalette.violet05}
    />
  </g>
);

export default createSvgIcon(UserStatusIconWrapUp);
