/* eslint-disable max-len */
import React from 'react';
import themes from '@8x8/oxygen-theme';
import { createSvgIcon } from './utils';
const { colorPalette } = themes;
const UserStatusIconWrapUp = (React.createElement("g", null,
    React.createElement("circle", { className: "presence-border", cx: "7", cy: "7", r: "7", fill: "white" }),
    React.createElement("circle", { className: "presence-background", cx: "7", cy: "7", r: "5", fill: colorPalette.violet05 })));
export default createSvgIcon(UserStatusIconWrapUp);
