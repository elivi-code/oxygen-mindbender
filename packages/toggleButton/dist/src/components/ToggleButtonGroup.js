import React from 'react';
import { ThemeProvider } from 'styled-components';
import { withTheme } from '@8x8/oxygen-config';
import { SwitchBaseGroup } from '@8x8/oxygen-switch-base';
const ToggleButtonGroup = props => {
    const { children, isHorizontal = false, theme, ...rest } = props;
    return (React.createElement(ThemeProvider, { theme: theme },
        React.createElement(SwitchBaseGroup, { isHorizontal: isHorizontal, ...rest }, children)));
};
export { ToggleButtonGroup };
export default withTheme(ToggleButtonGroup, 'toggleButtonGroup');
