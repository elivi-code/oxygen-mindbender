/* eslint-disable max-len */
import React from 'react';
import themes from '@8x8/oxygen-theme';

import { createSvgIcon } from './utils';

const { colorPalette } = themes;

const UserStatusIconWorkingOffline = (
  <g>
    <circle className="presence-border" cx="7" cy="7" r="7" fill="white" />
    <circle
      className="presence-background"
      cx="7"
      cy="7"
      r="5"
      fill={colorPalette.orange06}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.53033 4.46967C9.82322 4.76256 9.82322 5.23744 9.53033 5.53033L5.53033 9.53033C5.23744 9.82322 4.76256 9.82322 4.46967 9.53033C4.17678 9.23744 4.17678 8.76256 4.46967 8.46967L8.46967 4.46967C8.76256 4.17678 9.23744 4.17678 9.53033 4.46967Z"
      fill="white"
    />
  </g>
);

export default createSvgIcon(UserStatusIconWorkingOffline);
