/* eslint-disable react/default-props-match-prop-types */
import React, { MutableRefObject, PureComponent } from 'react';
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
import { InputDefaultProps, InputProps } from './InputProps';
import { InputTheme } from '../types';

export interface InputState {
  focused: boolean;
}

class Input extends PureComponent<InputProps, InputState> {
  static defaultProps: InputDefaultProps = {
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

  state: InputState = { focused: false };
  inputFieldRef: MutableRefObject<HTMLInputElement | null>;

  constructor(props: InputProps) {
    super(props);

    this.inputFieldRef = { current: null };
  }

  componentDidMount() {
    if (this.props.focus && this.inputFieldRef) {
      this.inputFieldRef.current?.focus();
    }
  }

  setInputFieldRef = (element: HTMLInputElement | null) => {
    const { inputRef } = this.props;

    this.inputFieldRef.current = element;

    if (isFunction(inputRef)) {
      inputRef(element);
    }

    if (isObject(inputRef)) {
      inputRef.current = element;
    }
  };

  handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    this.setState({ focused: true });

    this.props.onFocus?.(event);
  };

  handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    this.setState({ focused: false });

    this.props.onBlur?.(event);
  };

  render() {
    const {
      id,
      name,
      value,
      max,
      min,
      maxLength,
      placeholder,
      type,
      autoComplete,
      autoFocus,
      size,
      prefix,
      suffix,
      iconLeft: IconLeft,
      iconRight: IconRight,
      fixed,
      hasError,
      isDisabled,
      isReadOnly,
      isRequired,
      fullWidth,
      onKeyUp,
      onKeyDown,
      onChange,
      onFocus,
      onBlur,
      forwardedRef,
      autoPrefixWidth,
      autoSuffixWidth,
      inputProps,
      theme: themeProp,
      ...otherProps
    } = this.props;

    const theme = themeProp as InputTheme; // theme is full theme object as injected by withTheme
    const { testId } = this.props as InputDefaultProps;

    const { focused } = this.state;
    const isValuePresent = Boolean(value);

    return (
      <ThemeProvider theme={theme}>
        <InputWrapper
          {...getTestAttributes(testId)}
          ref={forwardedRef}
          size={size}
          isDisabled={isDisabled}
          isReadOnly={isReadOnly}
          fixed={fixed}
          fullWidth={fullWidth}
          {...otherProps}
        >
          {prefix && !theme.prefixSuffixInsideInput && (
            <InputDecorator
              focused={focused}
              hasError={hasError}
              isReadOnly={isReadOnly}
              autoWidth={autoPrefixWidth}
              isPrefix={!!prefix}
            >
              <span>{prefix}</span>
            </InputDecorator>
          )}
          <InputFieldWrapper
            isDisabled={isDisabled}
            withPrefix={!!prefix}
            withSuffix={!!suffix}
            fixed={fixed}
            isReadOnly={isReadOnly}
            focused={focused}
            hasError={hasError}
            iconLeft={!!IconLeft}
            iconRight={!!IconRight}
          >
            {prefix && theme.prefixSuffixInsideInput && (
              <InputDecorator
                focused={focused}
                hasError={hasError}
                isReadOnly={isReadOnly}
                autoWidth={autoPrefixWidth}
                isPrefix={!!prefix}
              >
                <span>{prefix}</span>
              </InputDecorator>
            )}
            {IconLeft && (
              <InputIcon>
                <IconLeft
                  size={theme.iconSize}
                  color={
                    !isValuePresent ? theme.colorPlaceholder : theme.colorIcon
                  }
                />
              </InputIcon>
            )}
            <InputField
              ref={this.setInputFieldRef}
              id={id}
              max={max}
              min={min}
              maxLength={maxLength}
              aria-disabled={isDisabled}
              aria-invalid={hasError}
              aria-required={isRequired}
              aria-readonly={isReadOnly || isDisabled}
              name={name}
              type={type}
              autoComplete={autoComplete}
              autoFocus={autoFocus}
              value={value}
              placeholder={placeholder}
              fixed={fixed}
              readOnly={isReadOnly || isDisabled}
              isDisabled={Boolean(fixed) || Boolean(isDisabled)}
              onKeyUp={onKeyUp}
              onKeyDown={onKeyDown}
              onChange={onChange}
              {...inputProps}
              onBlur={this.handleBlur}
              onFocus={this.handleFocus}
              {...getTestAttributes(`${testId}_FIELD`)}
            />
            {IconRight && (
              <InputIcon>
                <IconRight
                  size={theme.iconSize}
                  color={
                    !isValuePresent ? theme.colorPlaceholder : theme.colorIcon
                  }
                />
              </InputIcon>
            )}
            {suffix && theme.prefixSuffixInsideInput && (
              <InputDecorator
                autoWidth={autoSuffixWidth}
                focused={focused}
                hasError={hasError}
                isSuffix={!!suffix}
                isReadOnly={isReadOnly}
              >
                <span>{suffix}</span>
              </InputDecorator>
            )}
          </InputFieldWrapper>
          {suffix && !theme.prefixSuffixInsideInput && (
            <InputDecorator
              autoWidth={autoSuffixWidth}
              focused={focused}
              hasError={hasError}
              isSuffix={!!suffix}
              isReadOnly={isReadOnly}
            >
              <span>{suffix}</span>
            </InputDecorator>
          )}
        </InputWrapper>
      </ThemeProvider>
    );
  }
}

export default withTheme(Input, THEME_NAME);
