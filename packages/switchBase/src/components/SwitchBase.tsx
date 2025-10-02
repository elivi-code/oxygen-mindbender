/* eslint-disable react/default-props-match-prop-types */

import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import Label from '@8x8/oxygen-label';

import { LabelTextWrapper, SwitchBaseWrapper } from '../styled';
import SwitchBaseInput from './SwitchBaseInput';
import { SwitchBaseCommonProps } from './SwitchBaseCommonProps';
import { InputValue } from '../types';

export interface SwitchBaseProps<T extends InputValue>
  extends SwitchBaseCommonProps<T> {
  inputProps?: Record<string, unknown>;
  labelProps?: Record<string, unknown>;
  showLabelTooltipOnOverflow?: boolean;
  label?: React.ReactNode;
  infoBoxText?: React.ReactNode;
  infoBoxButtonLabel?: string;
  htmlFor?: string;
  theme?: Partial<DefaultTheme>;
  onChange?: (value?: T) => void;
  isToggleButton?: boolean;
}

interface SwitchBaseState {
  id: string;
  isFocused: boolean;
}

class SwitchBase<T extends InputValue> extends React.Component<
  SwitchBaseProps<T>,
  SwitchBaseState
> {
  static defaultProps = {
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

  state: SwitchBaseState = {
    id: uuidv4(),
    isFocused: false,
  };

  /**
   * On change handler
   */
  handleOnChange = (event: React.SyntheticEvent): void => {
    const { onChange, value, isDisabled } = this.props;

    // stop propagation, as we want to send only a change with value
    event.stopPropagation();

    if (isDisabled) return;
    onChange?.(value);
  };

  handleOnKeyPress = (event: React.KeyboardEvent): void => {
    const { isDisabled } = this.props;

    if (isDisabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  render() {
    const {
      theme,
      testId,
      id,
      htmlFor,
      icon,
      label,
      value,
      name,
      infoBoxText,
      infoBoxButtonLabel,
      isChecked,
      isDisabled,
      isToggleButton,
      showLabelTooltipOnOverflow,
      onBlur,
      onFocus,
      onChange,
      onMouseEnter,
      onMouseLeave,
      inputProps,
      labelProps,
      role,
      ...rest
    } = this.props;
    const uid = id || htmlFor || this.state.id;
    const hasLabel = !!label;
    const wrapperRef = React.createRef<HTMLDivElement>();
    const handleOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      onBlur?.(event);
      this.setState({ isFocused: false });
    };

    const handleOnFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      onFocus?.(event);
      this.setState({ isFocused: true });
    };

    return (
      <ThemeProvider theme={theme as DefaultTheme}>
        <SwitchBaseWrapper
          theme={theme as DefaultTheme}
          isDisabled={isDisabled}
          isFocused={this.state.isFocused}
          hasLabel={hasLabel}
          isToggleButton={isToggleButton}
          ref={wrapperRef}
          {...rest}
        >
          <Label
            isDisabled={isDisabled}
            htmlFor={uid}
            infoBoxText={infoBoxText}
            infoBoxButtonLabel={infoBoxButtonLabel}
            theme={(theme as any).label}
            showTooltipOnOverflow={showLabelTooltipOnOverflow}
            shouldWrapText
            {...labelProps}
            value={
              <ThemeProvider theme={theme as DefaultTheme}>
                <SwitchBaseInput
                  testId={testId as string}
                  id={uid}
                  value={value}
                  name={name}
                  role={role}
                  isChecked={isChecked}
                  isDisabled={isDisabled}
                  onChange={this.handleOnChange}
                  onBlur={handleOnBlur}
                  onFocus={handleOnFocus}
                  onKeyPress={this.handleOnKeyPress}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  icon={icon}
                  {...inputProps}
                />
                {!!label && (
                  <LabelTextWrapper
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                  >
                    {label}
                  </LabelTextWrapper>
                )}
              </ThemeProvider>
            }
          />
        </SwitchBaseWrapper>
      </ThemeProvider>
    );
  }
}

export default SwitchBase;
