import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StyledSwitchBaseGroup } from '../styled';
const SwitchBaseGroup = props => {
    const { children, isHorizontal = false, theme = {}, ...rest } = props;
    return (React.createElement(ThemeProvider, { theme: theme },
        React.createElement(StyledSwitchBaseGroup, { isHorizontal: isHorizontal, ...rest }, children)));
};
export default SwitchBaseGroup;
