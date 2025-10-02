/* eslint-disable */
import React from 'react';
import { InputType, Targets } from '@8x8/oxygen-constants';

type LabelOrientations = 'row' | 'column';

interface TextFieldProps {
  /**
   * Input theme
   */
  theme?: object;
  /**
   * Define id attribute for input element
   */
  id?: string;
  /**
   * Define name attribute for input element
   */
  name?: string;
  /**
   * Value / Initial value of the input
   */
  value?: string;
  /**
   * Render placeholder text inside input
   */
  placeholder?: string;
  /**
   * Define type of Input
   */
  type?: InputType;
  /**
   * Define Input size
   */
  size?: InputSize;
  /**
   * Show text in front of input
   */
  prefix?: string;
  /**
   * Show text just after input
   */
  suffix?: string;
  /**
   * Show icon inside input on the left side
   */
  iconLeft?: React.ReactNode | Function;
  /**
   * Show icon inside input on the right side
   */
  iconRight?: React.ReactNode | Function;
  /**
   * Tell when Input is focus
   */
  focus?: boolean;
  /**
   * Render input as pure text
   */
  fixed?: boolean;
  /**
   * Tell when Input has error
   */
  hasError?: boolean;
  /**
   * Tell when Input is disabled
   */
  isDisabled?: boolean;
  /**
   * Tell when Input is stretched
   */
  fullWidth?: boolean;
  /**
   * Tell when Input is read only
   */
  isReadOnly?: boolean;
  /**
   * Tell when required sight is visible
   */
  isRequired?: boolean;
  /**
   * Tell where label is render: top or before Input
   */
  labelOrientation?: LabelOrientations;
  /**
   * Renders label text
   */
  label?: string;
  /**
   * Defines callback onClick event on label action
   */
  action?: string | Function;
  /**
   * Renders text inside action element
   */
  actionLabel?: string | number;
  /**
   * Specifies type of target on action element
   */
  actionTarget?: Targets;
  /**
   * Renders text inside Tooltip on Label Info Box icon
   */
  infoBoxText?: React.ReactNode;
  /**
   * Renders text just below Input
   */
  description?: React.ReactNode;
  /**
   * Rest of props pass into Action component
   */
  otherActionProps?: object;
  /**
   * Rest of props pass into Label component
   */
  otherLabelProps?: object;
  /**
   * Rest of props pass into Input component
   */
  otherInputProps?: object;
  /**
   * Text field testId
   */
  testId?: string;
  /**
   * Callback when the input change
   */
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
  /**
   * Standard input onkeyup event
   */
  onKeyUp?(event: React.KeyboardEvent<HTMLInputElement>): void;
  /**
   * Standard input onkeydown event
   */
  onKeyDown?(event: React.KeyboardEvent<HTMLInputElement>): void;
  /**
   * Handler to be called when input is blurred
   */
  onBlur?(event: React.FocusEvent<HTMLInputElement>): void;
  /**
   * Handler to be called when input is focused
   */
  onFocus?(event: React.FocusEvent<HTMLInputElement>): void;
}

declare const TextField: React.FunctionComponent<TextFieldProps>;

export default TextField;
