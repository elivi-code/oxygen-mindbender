/* eslint-disable */
import React from 'react';

type Resize =
  | 'auto'
  | 'vertical'
  | 'horizontal'
  | 'both'
  | 'none'
  | 'block'
  | 'inline';

interface TextareaProps {
  /**
   * Textarea theme
   */
  theme?: object;
  /**
   * Component ref
   */
  forwardedRef?: React.Ref<any> | Function;
  /**
   * The ID for textarea
   */
  id?: string;
  /**
   * The name for textarea
   */
  name?: string;
  /**
   * The content for textarea placeholder
   */
  placeholder?: string;
  /**
   * Define autocomplete attribute for Textarea
   */
  autoComplete?: string;
  /**
   * Define autofocus attribute for Textarea
   */
  autoFocus?: boolean;
  /**
   * The textarea content value
   */
  value?: string;
  /**
   * Describe number of rows in textarea
   */
  rows?: number;
  /**
   * Describe number of columns in textarea
   */
  cols?: number;
  /**
   * The textarea minimum characters number
   */
  minLength?: number;
  /**
   * The textarea maximum characters number
   */
  maxLength?: number;
  /**
   * Type of resize textarea
   */
  resize?: Resize;
  /**
   * Id for automated tests
   */
  testId?: string;
  /**
   * Tell if the textarea is disabled
   */
  isDisabled?: boolean;
  /**
   * Tell if the textarea is readonly
   */
  isReadOnly?: boolean;
  /**
   * Tell if value of textarea is valid
   */
  hasError?: boolean;
  /**
   * Handler to be called when the textarea is blurred
   */
  onBlur?(): void;
  /**
   * Handler to be called when the textarea change
   */
  onChange?(ev?: React.ChangeEvent<HTMLTextAreaElement>): void;
  /**
   * Handler to be called when the textarea is focused
   */
  onFocus?(): void;
  /**
   * Handler to be called when the key up
   */
  onKeyUp?(): void;
  /**
   * Handler to be called when the key down
   */
  onKeyDown?(): void;
}

declare const Textarea: React.FunctionComponent<TextareaProps>;

export default Textarea;
