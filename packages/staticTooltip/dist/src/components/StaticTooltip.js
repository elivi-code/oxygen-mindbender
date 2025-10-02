import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { getTestAttributes, withTheme } from '@8x8/oxygen-config';
import { TooltipWrapper, TooltipContent } from '../styled';
const StaticTooltip = ({ children, forwardedRef, renderArrow, testId, theme, ...restProps }) => (React.createElement(ThemeProvider, { theme: theme },
    React.createElement(TooltipWrapper, { ref: forwardedRef, ...restProps, ...getTestAttributes(testId) },
        React.createElement(TooltipContent, null, children),
        renderArrow && renderArrow())));
StaticTooltip.propTypes = {
    children: PropTypes.node.isRequired,
    testId: PropTypes.string,
    renderArrow: PropTypes.func,
};
StaticTooltip.defaultProps = {
    testId: 'STATIC_TOOLTIP',
    renderArrow: undefined,
};
export default withTheme(StaticTooltip, 'staticTooltip');
