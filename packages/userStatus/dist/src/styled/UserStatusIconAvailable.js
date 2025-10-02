/* eslint-disable max-len */
import React from 'react';
import themes from '@8x8/oxygen-theme';
import { createSvgIcon } from './utils';
const { colorPalette } = themes;
const UserStatusIconAvailable = (React.createElement("g", null,
    React.createElement("circle", { className: "presence-border", cx: "7", cy: "7", r: "7", fill: "white" }),
    React.createElement("circle", { className: "presence-background", cx: "7", cy: "7", r: "5", fill: colorPalette.green04 }),
    React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.0303 4.96967C10.3232 5.26256 10.3232 5.73744 10.0303 6.03033L6.53033 9.53033C6.38968 9.67098 6.19891 9.75 6 9.75C5.80109 9.75 5.61032 9.67098 5.46967 9.53033L3.96967 8.03033C3.67678 7.73744 3.67678 7.26256 3.96967 6.96967C4.26256 6.67678 4.73744 6.67678 5.03033 6.96967L6 7.93934L8.96967 4.96967C9.26256 4.67678 9.73744 4.67678 10.0303 4.96967Z", fill: "white" })));
export default createSvgIcon(UserStatusIconAvailable);
