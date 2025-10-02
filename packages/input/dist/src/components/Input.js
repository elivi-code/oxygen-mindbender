/* eslint-disable react/default-props-match-prop-types */
import React, { PureComponent } from 'react';
import { ThemeProvider } from 'styled-components';
import isFunction from 'lodash.isfunction';
import isObject from 'lodash.isobject';
import { withTheme, getTestAttributes } from '@8x8/oxygen-config';
import { TEXT } from '../constants/types';
import { THEME_NAME } from '../constants/themeName';
import InputIcon from '../styled/InputIcon';
import InputField from '../styled/InputField';
import InputWrapper from '../styled/InputWrapper';
import InputDecorator from '../styled/InputDecorator';
import InputFieldWrapper from '../styled/InputFieldWrapper';
class Input extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { focused: false };
        this.setInputFieldRef = (element) => {
            const { inputRef } = this.props;
            this.inputFieldRef.current = element;
            if (isFunction(inputRef)) {
                inputRef(element);
            }
            if (isObject(inputRef)) {
                inputRef.current = element;
            }
        };
        this.handleFocus = (event) => {
            this.setState({ focused: true });
            this.props.onFocus?.(event);
        };
        this.handleBlur = (event) => {
            this.setState({ focused: false });
            this.props.onBlur?.(event);
        };
        this.inputFieldRef = { current: null };
    }
    componentDidMount() {
        if (this.props.focus && this.inputFieldRef) {
            this.inputFieldRef.current?.focus();
        }
    }
    render() {
        const { id, name, value, max, min, maxLength, placeholder, type, autoComplete, autoFocus, size, prefix, suffix, iconLeft: IconLeft, iconRight: IconRight, fixed, hasError, isDisabled, isReadOnly, isRequired, fullWidth, onKeyUp, onKeyDown, onChange, onFocus, onBlur, forwardedRef, autoPrefixWidth, autoSuffixWidth, inputProps, theme: themeProp, ...otherProps } = this.props;
        const theme = themeProp; // theme is full theme object as injected by withTheme
        const { testId } = this.props;
        const { focused } = this.state;
        const isValuePresent = Boolean(value);
        return (React.createElement(ThemeProvider, { theme: theme },
            React.createElement(InputWrapper, { ...getTestAttributes(testId), ref: forwardedRef, size: size, isDisabled: isDisabled, isReadOnly: isReadOnly, fixed: fixed, fullWidth: fullWidth, ...otherProps },
                prefix && !theme.prefixSuffixInsideInput && (React.createElement(InputDecorator, { focused: focused, hasError: hasError, isReadOnly: isReadOnly, autoWidth: autoPrefixWidth, isPrefix: !!prefix },
                    React.createElement("span", null, prefix))),
                React.createElement(InputFieldWrapper, { isDisabled: isDisabled, withPrefix: !!prefix, withSuffix: !!suffix, fixed: fixed, isReadOnly: isReadOnly, focused: focused, hasError: hasError, iconLeft: !!IconLeft, iconRight: !!IconRight },
                    prefix && theme.prefixSuffixInsideInput && (React.createElement(InputDecorator, { focused: focused, hasError: hasError, isReadOnly: isReadOnly, autoWidth: autoPrefixWidth, isPrefix: !!prefix },
                        React.createElement("span", null, prefix))),
                    IconLeft && (React.createElement(InputIcon, null,
                        React.createElement(IconLeft, { size: theme.iconSize, color: !isValuePresent ? theme.colorPlaceholder : theme.colorIcon }))),
                    React.createElement(InputField, { ref: this.setInputFieldRef, id: id, max: max, min: min, maxLength: maxLength, "aria-disabled": isDisabled, "aria-invalid": hasError, "aria-required": isRequired, "aria-readonly": isReadOnly || isDisabled, name: name, type: type, autoComplete: autoComplete, autoFocus: autoFocus, value: value, placeholder: placeholder, fixed: fixed, readOnly: isReadOnly || isDisabled, isDisabled: Boolean(fixed) || Boolean(isDisabled), onKeyUp: onKeyUp, onKeyDown: onKeyDown, onChange: onChange, ...inputProps, onBlur: this.handleBlur, onFocus: this.handleFocus, ...getTestAttributes(`${testId}_FIELD`) }),
                    IconRight && (React.createElement(InputIcon, null,
                        React.createElement(IconRight, { size: theme.iconSize, color: !isValuePresent ? theme.colorPlaceholder : theme.colorIcon }))),
                    suffix && theme.prefixSuffixInsideInput && (React.createElement(InputDecorator, { autoWidth: autoSuffixWidth, focused: focused, hasError: hasError, isSuffix: !!suffix, isReadOnly: isReadOnly },
                        React.createElement("span", null, suffix)))),
                suffix && !theme.prefixSuffixInsideInput && (React.createElement(InputDecorator, { autoWidth: autoSuffixWidth, focused: focused, hasError: hasError, isSuffix: !!suffix, isReadOnly: isReadOnly },
                    React.createElement("span", null, suffix))))));
    }
}
Input.defaultProps = {
    autoFocus: false,
    autoPrefixWidth: false,
    autoSuffixWidth: false,
    fixed: false,
    focus: false,
    fullWidth: true,
    hasError: false,
    isDisabled: false,
    isReadOnly: false,
    isRequired: false,
    placeholder: '',
    prefix: '',
    size: 'default',
    suffix: '',
    testId: 'INPUT',
    type: TEXT,
};
export default withTheme(Input, THEME_NAME);
