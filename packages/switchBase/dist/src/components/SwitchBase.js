/* eslint-disable react/default-props-match-prop-types */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ThemeProvider } from 'styled-components';
import Label from '@8x8/oxygen-label';
import { LabelTextWrapper, SwitchBaseWrapper } from '../styled';
import SwitchBaseInput from './SwitchBaseInput';
class SwitchBase extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            id: uuidv4(),
            isFocused: false,
        };
        /**
         * On change handler
         */
        this.handleOnChange = (event) => {
            const { onChange, value, isDisabled } = this.props;
            // stop propagation, as we want to send only a change with value
            event.stopPropagation();
            if (isDisabled)
                return;
            onChange?.(value);
        };
        this.handleOnKeyPress = (event) => {
            const { isDisabled } = this.props;
            if (isDisabled) {
                event.preventDefault();
                event.stopPropagation();
            }
        };
    }
    render() {
        const { theme, testId, id, htmlFor, icon, label, value, name, infoBoxText, infoBoxButtonLabel, isChecked, isDisabled, isToggleButton, showLabelTooltipOnOverflow, onBlur, onFocus, onChange, onMouseEnter, onMouseLeave, inputProps, labelProps, role, ...rest } = this.props;
        const uid = id || htmlFor || this.state.id;
        const hasLabel = !!label;
        const wrapperRef = React.createRef();
        const handleOnBlur = (event) => {
            onBlur?.(event);
            this.setState({ isFocused: false });
        };
        const handleOnFocus = (event) => {
            onFocus?.(event);
            this.setState({ isFocused: true });
        };
        return (React.createElement(ThemeProvider, { theme: theme },
            React.createElement(SwitchBaseWrapper, { theme: theme, isDisabled: isDisabled, isFocused: this.state.isFocused, hasLabel: hasLabel, isToggleButton: isToggleButton, ref: wrapperRef, ...rest },
                React.createElement(Label, { isDisabled: isDisabled, htmlFor: uid, infoBoxText: infoBoxText, infoBoxButtonLabel: infoBoxButtonLabel, theme: theme.label, showTooltipOnOverflow: showLabelTooltipOnOverflow, shouldWrapText: true, ...labelProps, value: React.createElement(ThemeProvider, { theme: theme },
                        React.createElement(SwitchBaseInput, { testId: testId, id: uid, value: value, name: name, role: role, isChecked: isChecked, isDisabled: isDisabled, onChange: this.handleOnChange, onBlur: handleOnBlur, onFocus: handleOnFocus, onKeyPress: this.handleOnKeyPress, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, icon: icon, ...inputProps }),
                        !!label && (React.createElement(LabelTextWrapper, { onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave }, label))) }))));
    }
}
SwitchBase.defaultProps = {
    theme: {},
    testId: 'SWITCH',
    value: '',
    isChecked: false,
    isDisabled: false,
    isToggleButton: false,
    showLabelTooltipOnOverflow: true,
    inputProps: {},
    labelProps: {},
};
export default SwitchBase;
