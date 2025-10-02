import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash.noop';
import { ThemeProvider } from 'styled-components';

import { actionTargets } from '@8x8/oxygen-label';
import Input, { inputType } from '@8x8/oxygen-input';
import { withTheme, getTestAttributes } from '@8x8/oxygen-config';
import { inputSize } from '@8x8/oxygen-constants';

import THEME_NAME from '../constants/themeName';

import {
  TextFieldLabel,
  TextFieldWrapper,
  TextFieldDescription,
  TextFieldContainer,
} from '../styled';

const TextField = ({
  action,
  actionLabel,
  actionTarget,
  description,
  fixed,
  focus,
  fullWidth,
  hasError,
  iconLeft,
  iconRight,
  id,
  infoBoxText,
  infoBoxButtonLabel,
  isDisabled,
  isReadOnly,
  isRequired,
  label,
  labelOrientation,
  name,
  onBlur,
  onChange,
  onFocus,
  onKeyDown,
  onKeyUp,
  otherActionProps,
  otherInputProps,
  otherLabelProps,
  actionProps,
  inputProps,
  labelProps,
  placeholder,
  prefix,
  size,
  suffix,
  testId,
  theme,
  type,
  value,
  ...restProps
}) => {
  // Preserve otherInputProps, otherActionProps, otherLabelProps for backwards compatibility
  const finalInputProps = {
    ...otherInputProps,
    ...inputProps,
  };
  const finalActionProps = {
    ...otherActionProps,
    ...actionProps,
  };
  const finalLabelProps = {
    ...otherLabelProps,
    ...labelProps,
  };

  return (
    <ThemeProvider theme={theme}>
      <TextFieldWrapper
        fullWidth={fullWidth}
        labelOrientation={labelOrientation}
        {...getTestAttributes(testId)}
        {...restProps}
      >
        {(label || actionLabel) && (
          <TextFieldLabel
            theme={theme.label}
            htmlFor={id}
            value={label}
            infoBoxText={infoBoxText}
            infoBoxButtonLabel={infoBoxButtonLabel}
            action={action}
            actionLabel={actionLabel}
            actionTarget={actionTarget}
            isRequired={isRequired}
            isDisabled={fixed || isDisabled}
            otherActionProps={finalActionProps}
            testId={`${testId}_LABEL`}
            {...finalLabelProps}
          />
        )}
        <TextFieldContainer>
          <Input
            fixed={fixed}
            focus={focus}
            fullWidth={fullWidth}
            hasError={hasError}
            iconLeft={iconLeft}
            iconRight={iconRight}
            id={id}
            isDisabled={isDisabled}
            isReadOnly={isReadOnly}
            isRequired={isRequired}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            onFocus={onFocus}
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
            placeholder={placeholder}
            prefix={prefix}
            size={size}
            suffix={suffix}
            testId={`${testId}_INPUT`}
            theme={theme.input}
            type={type}
            value={value}
            {...finalInputProps}
          />
          {description && (
            <TextFieldDescription
              {...getTestAttributes(`${testId}_DESCRIPTION`)}
            >
              {description}
            </TextFieldDescription>
          )}
        </TextFieldContainer>
      </TextFieldWrapper>
    </ThemeProvider>
  );
};

TextField.propTypes = {
  /**
   * Input theme
   */
  theme: PropTypes.object,
  /**
   * Define id attribute for input element
   */
  id: PropTypes.string,
  /**
   * Define name attribute for input element
   */
  name: PropTypes.string,
  /**
   * Value / Initial value of the input
   */
  value: PropTypes.string,
  /**
   * Render placeholder text inside input
   */
  placeholder: PropTypes.string,
  /**
   * Define type of Input
   */
  type: PropTypes.oneOf(Object.values(inputType)),
  /**
   * Define Input size
   */
  size: PropTypes.oneOf(Object.values(inputSize)),
  /**
   * Show text in front of input
   */
  prefix: PropTypes.string,
  /**
   * Show text just after input
   */
  suffix: PropTypes.string,
  /**
   * Show icon inside input on the left side
   */
  iconLeft: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
    PropTypes.element,
  ]),
  /**
   * Show icon inside input on the right side
   */
  iconRight: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
    PropTypes.element,
  ]),
  /**
   * Tell when Input is focus
   */
  focus: PropTypes.bool,
  /**
   * Render input as pure text
   */
  fixed: PropTypes.bool,
  /**
   * Tell when Input has error
   */
  hasError: PropTypes.bool,
  /**
   * Tell when Input is disabled
   */
  isDisabled: PropTypes.bool,
  /**
   * Tell when Input is read only
   */
  isReadOnly: PropTypes.bool,
  /**
   * Tell when Input is stretched
   */
  fullWidth: PropTypes.bool,
  /**
   * Tell when required sight is visible
   */
  isRequired: PropTypes.bool,
  /**
   * Tell where label is render: top or before Input
   */
  labelOrientation: PropTypes.oneOf(['row', 'column']),
  /**
   * Renders label text
   */
  label: PropTypes.string,
  /**
   * Defines callback onClick event on label action
   */
  action: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  /**
   * Renders text inside action element
   */
  actionLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Specifies type of target on action element
   */
  actionTarget: PropTypes.oneOf(Object.values(actionTargets)),
  /**
   * Renders text inside Tooltip on Label Info Box icon
   */
  infoBoxText: PropTypes.node,
  /**
   * Add accessible name to info button label
   */
  infoBoxButtonLabel: PropTypes.string,
  /**
   * Renders text just below Input
   */
  description: PropTypes.node,
  /**
   * Rest of props pass into Action component (deprecated)
   */
  otherActionProps: PropTypes.object,
  /**
   * Rest of props pass into Action component
   */
  actionProps: PropTypes.object,
  /**
   * Rest of props pass into Label component (deprecated)
   */
  otherLabelProps: PropTypes.object,
  /**
   * Rest of props pass into Label component
   */
  labelProps: PropTypes.object,
  /**
   * Rest of props pass into InputField component
   */
  inputProps: PropTypes.object,
  /**
   * Rest of props pass into InputWrapper component (deprecated)
   */
  otherInputProps: PropTypes.object,
  /**
   * Text field testId
   */
  testId: PropTypes.string,
  /**
   * Callback when the input change
   */
  onChange: PropTypes.func,
  /**
   * Standard input onkeyup event
   */
  onKeyUp: PropTypes.func,
  /**
   * Standard input onkeydown event
   */
  onKeyDown: PropTypes.func,
  /**
   * Callback when input is blurred
   */
  onBlur: PropTypes.func,
  /**
   * Callback when input is focused
   */
  onFocus: PropTypes.func,
};

TextField.defaultProps = {
  action: '',
  actionLabel: '',
  actionTarget: null,
  description: '',
  fixed: false,
  focus: false,
  fullWidth: false,
  hasError: false,
  iconLeft: null,
  iconRight: null,
  id: undefined,
  infoBoxText: undefined,
  isDisabled: false,
  isReadOnly: false,
  isRequired: false,
  label: '',
  labelOrientation: 'column',
  name: undefined,
  onChange: noop,
  onKeyDown: noop,
  onKeyUp: noop,
  onFocus: noop,
  onBlur: noop,
  otherActionProps: undefined,
  actionProps: undefined,
  inputProps: undefined,
  otherInputProps: undefined,
  labelProps: undefined,
  otherLabelProps: undefined,
  placeholder: '',
  prefix: '',
  size: inputSize.default,
  suffix: '',
  testId: 'TEXT_FIELD',
  type: inputType.TEXT,
  value: undefined,
};

export default withTheme(TextField, THEME_NAME);
