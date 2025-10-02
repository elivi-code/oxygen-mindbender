/* eslint-disable max-len */
import React from 'react';
import themes from '@8x8/oxygen-theme';

import { createSvgIcon } from './utils';

const { colorPalette } = themes;

const UserStatusIconDoNotDisturb = (
  <g>
    <circle className="presence-border" cx="7" cy="7" r="7" fill="white" />
    <circle
      className="presence-background"
      cx="7"
      cy="7"
      r="5"
      fill={colorPalette.red05}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.25 7C3.25 6.58579 3.58579 6.25 4 6.25H10C10.4142 6.25 10.75 6.58579 10.75 7C10.75 7.41421 10.4142 7.75 10 7.75H4C3.58579 7.75 3.25 7.41421 3.25 7Z"
      fill="white"
    />
  </g>
);

export default createSvgIcon(UserStatusIconDoNotDisturb);
