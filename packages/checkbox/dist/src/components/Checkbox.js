import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import SwitchBase from '@8x8/oxygen-switch-base';
import { withTheme } from '@8x8/oxygen-config';
import { CheckboxIconWrapper } from '../styled/CheckboxIconWrapper';
import CheckboxIcon from './CheckboxIcon';
const Checkbox = (props) => {
    const propsWithDefault = {
        testId: 'CHECKBOX',
        value: '',
        isChecked: false,
        isIndeterminate: false,
        isDisabled: false,
        showLabelTooltipOnOverflow: true,
        ...props,
    };
    const { theme, testId, id, label, value, name, infoBoxText, infoBoxButtonLabel, isChecked, isIndeterminate, isDisabled, showLabelTooltipOnOverflow, onChange, onBlur, onFocus, ...rest } = propsWithDefault;
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const handleOnBlur = (event) => {
        onBlur?.(event);
        setIsFocused(false);
    };
    const handleOnFocus = (event) => {
        onFocus?.(event);
        setIsFocused(true);
    };
    return (React.createElement(ThemeProvider, { theme: theme },
        React.createElement(SwitchBase, { testId: testId, theme: theme, id: id, icon: React.createElement(CheckboxIconWrapper, { hasLabel: !!label, isChecked: isChecked, isDisabled: isDisabled, isFocused: isFocused, isHovered: isHovered, isIndeterminate: isIndeterminate },
                React.createElement(CheckboxIcon, { isNovo: theme?.iconSet === 'novo', isChecked: isChecked, isIndeterminate: isIndeterminate })), label: label, value: value, name: name, infoBoxText: infoBoxText, infoBoxButtonLabel: infoBoxButtonLabel, isChecked: isChecked, isDisabled: isDisabled, showLabelTooltipOnOverflow: showLabelTooltipOnOverflow, onChange: onChange, onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false), onBlur: handleOnBlur, onFocus: handleOnFocus, ...rest })));
};
export { Checkbox };
export default withTheme(Checkbox, 'checkbox');
