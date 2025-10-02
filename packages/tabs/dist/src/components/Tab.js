import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { withTheme, getTestAttributes } from '@8x8/oxygen-config';
import TabItem from '../styled/TabItem';
import THEME_NAME from '../constants/themeName';
import { DARK, LIGHT } from '../constants/colorTypes';
import { ARIA_CONTROLS_WARNING_MSG } from '../constants/messages';
import TabItemText from '../styled/TabItemText';
const Tab = ({ theme, children, color, value, isActive, isDisabled, isStretched, onClick, testId, ...otherProps }) => {
    if (!otherProps['aria-controls']) {
        console.warn(ARIA_CONTROLS_WARNING_MSG);
    }
    const handleOnClick = (e) => {
        if (isDisabled) {
            e.preventDefault();
        }
        if (isDisabled) {
            return;
        }
        onClick?.(e, value);
    };
    return (React.createElement(ThemeProvider, { theme: theme },
        React.createElement(TabItem, { role: "tab", color: color, isActive: isActive, isDisabled: isDisabled, isStretched: isStretched, ...getTestAttributes(`${testId}_TAB`), ...otherProps, onClick: handleOnClick },
            React.createElement(TabItemText, null, children))));
};
Tab.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.oneOf([DARK, LIGHT]),
    // eslint-disable-next-line react/forbid-prop-types
    value: PropTypes.any,
    isActive: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isStretched: PropTypes.bool,
    onClick: PropTypes.func,
    theme: PropTypes.object,
    testId: PropTypes.string,
};
Tab.defaultProps = {
    color: LIGHT,
    value: undefined,
    isActive: false,
    isDisabled: false,
    isStretched: false,
    onClick: undefined,
    theme: {},
    testId: 'TABS',
};
export default withTheme(Tab, THEME_NAME);
