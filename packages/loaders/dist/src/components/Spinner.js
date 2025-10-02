import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { getTestAttributes, withTheme } from '@8x8/oxygen-config';
import { useId } from '@8x8/oxygen-utils';
import StyledSvg from '../styled/Spinner/StyledSvg';
import { THEME_NAME } from '../constants/themeName';
import { spinnerSize } from '../types';
import SpinnerContainer from '../styled/Spinner/SpinnerContainer';
import SpinnerText from '../styled/Spinner/SpinnerText';
const safeNum = 0.1;
const sizeToBorderRatio = 24;
const GAP_PERCENTAGE = 0.83;
const getSize = ({ theme, size }) => {
    if (typeof size === 'number') {
        return size;
    }
    if (size === spinnerSize.small) {
        return theme.widthSpinnerSmall;
    }
    if (size === spinnerSize.large2x) {
        return theme.widthSpinnerExtraLarge;
    }
    return theme.widthSpinnerDefault;
};
const Spinner = ({ testId, text, theme, size, strokeWidth, ...rest }) => {
    const computedSize = getSize({ theme, size });
    const finalStrokeWidth = strokeWidth || computedSize / sizeToBorderRatio;
    const computedSizeHalf = Math.max(safeNum, Math.floor(computedSize / 2));
    const computedSizeQuarter = Math.max(safeNum, Math.floor(computedSizeHalf / 2));
    const computedRadius = Math.max(safeNum, computedSizeQuarter - finalStrokeWidth);
    // computed value for circle gap to create spinner ilussion
    // GAP_PERCENTAGE is how much of the circle should be visible
    const computedStrokeGap = 2 * Math.PI * computedRadius * GAP_PERCENTAGE;
    const uniqueId = useId();
    const getStyledSvg = () => (React.createElement(StyledSvg, { ...getTestAttributes(testId), role: "img", ...(text && { 'aria-labelledby': uniqueId }), ...rest, fill: "none", xmlns: "http://www.w3.org/2000/svg", preserveAspectRatio: "xMidYMid", viewBox: `0 0 ${computedSizeHalf} ${computedSizeHalf}`, height: `${computedSize}px`, width: `${computedSize}px` },
        React.createElement("circle", { r: computedRadius, cx: computedSizeQuarter, cy: computedSizeQuarter, fill: "none", stroke: theme.withSpinnerBackground ? theme.backgroundContainer : 'none', strokeWidth: finalStrokeWidth }),
        React.createElement("circle", { r: computedRadius, cx: computedSizeQuarter, cy: computedSizeQuarter, fill: "none", stroke: theme.backgroundFiller, strokeWidth: finalStrokeWidth, strokeLinecap: "round", strokeDasharray: computedStrokeGap })));
    return (React.createElement(ThemeProvider, { theme: theme }, text ? (React.createElement(SpinnerContainer, null,
        getStyledSvg(),
        text && React.createElement(SpinnerText, { id: uniqueId }, text))) : (getStyledSvg())));
};
Spinner.propTypes = {
    /**
     * Spinner test id
     */
    testId: PropTypes.string,
    /**
     * Spinner text
     */
    text: PropTypes.string,
    /**
     * Spinner theme
     */
    theme: PropTypes.object,
    /**
     * Define Spinner size
     */
    size: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(Object.values(spinnerSize)),
    ]),
    /**
     * Define Spinner stroke size
     */
    strokeWidth: PropTypes.number,
    /**
     * Tell when Spinner is animated
     */
    hasAnimation: PropTypes.bool,
};
Spinner.defaultProps = {
    testId: 'SPINNER',
    text: '',
    size: 'default',
    strokeWidth: undefined,
    hasAnimation: true,
};
export default withTheme(Spinner, THEME_NAME);
