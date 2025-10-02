import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { useId } from '@8x8/oxygen-utils';
import { withTheme } from '@8x8/oxygen-config';
import { THEME_NAME } from '../constants/themeName';
import { Bar, ProgressBarText, ProgressBarContainer, } from '../styled/ProgressBar';
import { progressBarSize } from '../types';
const ProgressBar = ({ theme, value, text, ...rest }) => {
    const uniqueId = useId();
    return (React.createElement(ThemeProvider, { theme: theme },
        React.createElement(ProgressBarContainer, { ...(text && { 'aria-labelledby': uniqueId }), ...rest },
            React.createElement(Bar, { value: value, max: 100 }),
            text && React.createElement(ProgressBarText, { id: uniqueId }, text))));
};
ProgressBar.propTypes = {
    /**
     * ProgressBar theme
     */
    theme: PropTypes.object,
    /**
     * Percentage of completed progress
     */
    value: PropTypes.number,
    /**
     * Define ProgressBar size
     */
    size: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.oneOf(Object.values(progressBarSize)),
    ]),
    text: PropTypes.string,
    /**
     * Tell when ProgressBar is stretched to width
     */
    fullWidth: PropTypes.bool,
};
ProgressBar.defaultProps = {
    value: 0,
    size: progressBarSize.default,
    text: '',
    fullWidth: false,
};
export default withTheme(ProgressBar, THEME_NAME);
