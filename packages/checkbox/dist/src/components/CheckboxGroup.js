import React from 'react';
import { ThemeProvider } from 'styled-components';
import { withTheme } from '@8x8/oxygen-config';
import { SwitchBaseGroup } from '@8x8/oxygen-switch-base';
const CheckboxGroup = props => {
    const propsWithDefault = {
        isHorizontal: false,
        ...props,
    };
    const { children, isHorizontal, theme, ...rest } = propsWithDefault;
    return (React.createElement(ThemeProvider, { theme: theme },
        React.createElement(SwitchBaseGroup, { theme: theme, isHorizontal: isHorizontal, ...rest }, children)));
};
export { CheckboxGroup };
export default withTheme(CheckboxGroup, 'checkboxGroup');
