import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash.noop';
import { ThemeProvider } from 'styled-components';
import { withTheme, getTestAttributes } from '@8x8/oxygen-config';

import TextareaWrapper from '../styled/TextareaWrapper';
import THEME_NAME from '../constants/themeName';

export const Textarea = ({
  theme,
  id,
  forwardedRef,
  name,
  autoComplete,
  autoFocus,
  placeholder,
  value,
  rows,
  cols,
  minLength,
  maxLength,
  resize,
  testId,
  isDisabled,
  isReadOnly,
  hasError,
  onBlur,
  onChange,
  onFocus,
  onKeyUp,
  onKeyDown,
  ...otherProps
}) => (
  <ThemeProvider theme={theme}>
    <TextareaWrapper
      id={id}
      aria-readonly={isReadOnly || isDisabled}
      aria-disabled={isDisabled}
      ref={forwardedRef}
      name={name}
      resize={resize}
      placeholder={placeholder}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      value={value}
      rows={rows}
      cols={cols}
      minLength={minLength}
      maxLength={maxLength}
      isDisabled={isDisabled}
      readOnly={isReadOnly || isDisabled}
      hasError={hasError}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyUp={onKeyUp}
      onKeyDown={onKeyDown}
      onChange={onChange}
      {...getTestAttributes(testId)}
      {...otherProps}
    />
  </ThemeProvider>
);

Textarea.propTypes = {
  /**
   * Textarea theme
   */
  theme: PropTypes.object,
  /**
   * Component ref
   */
  forwardedRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  /**
   * The ID for textarea
   */
  id: PropTypes.string,
  /**
   * The name for textarea
   */
  name: PropTypes.string,
  /**
   * The content for textarea placeholder
   */
  placeholder: PropTypes.string,
  /**
   * Define autocomplete attribute for Textarea
   */
  autoComplete: PropTypes.string,
  /**
   * Define autofocus attribute for Textarea
   */
  autoFocus: PropTypes.bool,
  /**
   * The textarea content value
   */
  value: PropTypes.string,
  /**
   * Describe number of rows in textarea
   */
  rows: PropTypes.number,
  /**
   * Describe number of columns in textarea
   */
  cols: PropTypes.number,
  /**
   * The textarea minimum characters number
   */
  minLength: PropTypes.number,
  /**
   * The textarea maximum characters number
   */
  maxLength: PropTypes.number,
  /**
   * Type of resize textarea
   */
  resize: PropTypes.oneOf([
    'auto',
    'vertical',
    'horizontal',
    'both',
    'none',
    'block',
    'inline',
  ]),
  /**
   * Id for automated tests
   */
  testId: PropTypes.string,
  /**
   * Tell if the textarea is disabled
   */
  isDisabled: PropTypes.bool,
  /**
   * Tell if the textarea is readonly
   */
  isReadOnly: PropTypes.bool,
  /**
   * Tell if value of textarea is valid
   */
  hasError: PropTypes.bool,
  /**
   * Handler to be called when the textarea is blurred
   */
  onBlur: PropTypes.func,
  /**
   * Handler to be called when the textarea change
   */
  onChange: PropTypes.func,
  /**
   * Handler to be called when the textarea is focused
   */
  onFocus: PropTypes.func,
  /**
   * Handler to be called when the key up
   */
  onKeyUp: PropTypes.func,
  /**
   * Handler to be called when the key down
   */
  onKeyDown: PropTypes.func,
};

Textarea.defaultProps = {
  id: undefined,
  forwardedRef: null,
  name: undefined,
  placeholder: undefined,
  autoComplete: 'off',
  autoFocus: false,
  value: undefined,
  isDisabled: false,
  isReadOnly: false,
  hasError: false,
  rows: 3,
  cols: undefined,
  minLength: undefined,
  maxLength: undefined,
  resize: 'vertical',
  testId: 'TEXTAREA',
  onBlur: noop,
  onFocus: noop,
  onChange: noop,
  onKeyUp: noop,
  onKeyDown: noop,
};

export default withTheme(Textarea, THEME_NAME);
