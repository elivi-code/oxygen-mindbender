import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { withTheme } from '@8x8/oxygen-config';
import THEME_NAME from '../constants/themeName';
import { DARK, LIGHT } from '../constants/colorTypes';
import TabsBar from '../styled/TabsBar';
const Tabs = ({ theme, children, forwardedRef, ...otherProps }) => {
    return (React.createElement(ThemeProvider, { theme: theme },
        React.createElement(TabsBar, { role: "tablist", ref: forwardedRef, ...otherProps }, children)));
};
Tabs.propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.object,
    color: PropTypes.oneOf([DARK, LIGHT]),
};
Tabs.defaultProps = {
    theme: {},
    color: LIGHT,
};
export default withTheme(Tabs, THEME_NAME);
