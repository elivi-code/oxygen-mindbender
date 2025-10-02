import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import SwitchBase from '@8x8/oxygen-switch-base';
import { withTheme, withDeprecation } from '@8x8/oxygen-config';
import { ToggleButtonIcon } from '../styled';
const ToggleButton = (props) => {
    const propsWithDefault = {
        testId: 'TOGGLE_BUTTON',
        value: '',
        isChecked: false,
        isIndeterminate: false,
        isDisabled: false,
        showLabelTooltipOnOverflow: true,
        ...props,
    };
    const { testId, id, label, value, name, infoBoxText, infoBoxButtonLabel, isChecked, isIndeterminate, isDisabled, showLabelTooltipOnOverflow, onBlur, onChange, onFocus, ...rest } = propsWithDefault;
    const theme = propsWithDefault.theme;
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const handleOnBlur = () => {
        onBlur?.();
        setIsFocused(false);
    };
    const handleOnFocus = () => {
        onFocus?.();
        setIsFocused(true);
    };
    return (React.createElement(ThemeProvider, { theme: theme },
        React.createElement(SwitchBase, { theme: theme, icon: React.createElement(ThemeProvider, { theme: theme },
                React.createElement(ToggleButtonIcon, { hasLabel: !!label, isChecked: isChecked, isDisabled: isDisabled, isFocused: isFocused, isHovered: isHovered, isIndeterminate: isIndeterminate })), id: id, label: label, value: value, name: name, testId: testId, infoBoxText: infoBoxText, infoBoxButtonLabel: infoBoxButtonLabel, isChecked: isChecked, isDisabled: isDisabled, isToggleButton: true, showLabelTooltipOnOverflow: showLabelTooltipOnOverflow, onBlur: handleOnBlur, onChange: onChange, onFocus: handleOnFocus, onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false), role: "switch", ...rest })));
};
export { ToggleButton };
export default withTheme(withDeprecation(ToggleButton, `following properties are deprecated and will be removed in next major
    release: "isIndeterminate", theme "backgroundColorFocus" (use outlineColorFocus)`), 'toggleButton');
