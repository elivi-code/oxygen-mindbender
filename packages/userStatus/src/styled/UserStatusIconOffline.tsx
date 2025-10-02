/* eslint-disable max-len */
import React from 'react';
import themes from '@8x8/oxygen-theme';

import { createSvgIcon } from './utils';

const { colorPalette } = themes;

const UserStatusIconOffline = (
  <g>
    <circle className="presence-border" cx="7" cy="7" r="7" fill="white" />
    <circle
      className="presence-background"
      cx="7"
      cy="7"
      r="5"
      fill={colorPalette.gray05}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.53033 5.53033C9.82322 5.23744 9.82322 4.76256 9.53033 4.46967C9.23744 4.17678 8.76256 4.17678 8.46967 4.46967L7 5.93934L5.53033 4.46967C5.23744 4.17678 4.76256 4.17678 4.46967 4.46967C4.17678 4.76256 4.17678 5.23744 4.46967 5.53033L5.93934 7L4.46967 8.46967C4.17678 8.76256 4.17678 9.23744 4.46967 9.53033C4.76256 9.82322 5.23744 9.82322 5.53033 9.53033L7 8.06066L8.46967 9.53033C8.76256 9.82322 9.23744 9.82322 9.53033 9.53033C9.82322 9.23744 9.82322 8.76256 9.53033 8.46967L8.06066 7L9.53033 5.53033Z"
      fill="white"
    />
  </g>
);

export default createSvgIcon(UserStatusIconOffline);
