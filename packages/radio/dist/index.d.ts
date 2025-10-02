import React from 'react';

export type Value = number | string | boolean | { id: string };

interface RadioProps
  extends Omit<React.ComponentPropsWithRef<'div'>, 'onChange'> {
  /**
   * Radio theme
   */
  theme?: object;
  /**
   * Radio test id
   */
  testId?: string;
  /**
   * Specifies which element the label is bound to
   */
  htmlFor?: string;
  /**
   * Specifies the label content for the radio input
   */
  label?: React.ReactNode;
  /**
   * Radio input value (used to match with the selected value of the group)
   */
  value?: Value;
  /**
   * Specifies the name prop for the radio input
   */
  name?: string;
  /**
   * Shows info icon and renders text inside Tooltip
   */
  infoBoxText?: React.ReactNode;
  /**
   * Radio input props
   */
  inputProps?: object;
  /**
   * Radio label props
   */
  labelProps?: object;
  /**
   * Specifies if the input is checked
   */
  isChecked?: boolean;
  /**
   * Radio inputs to be rendered
   */
  isDisabled?: boolean;
  /**
   * Callback for the radio input
   */
  onChange?(params: Value): void;
}

interface RadioGroupProps
  extends Omit<React.ComponentPropsWithRef<'fieldset'>, 'onChange'> {
  /**
   * Radio inputs to be rendered
   */
  children?: React.ReactNode;
  /**
   * Specifies if the group should be displayed horizontally or vertically
   */
  isHorizontal?: boolean;
  /**
   * Name prop to be passed to the radio inputs
   */
  name?: string;
  /**
   * Callback function to be passed to the radio inputs
   */
  onChange?(params: Value): void;
  /**
   * Radio group theme
   */
  theme?: object;
  /**
   * Specifies the selected value from the radio group
   */
  value?: Value;
}

declare const Radio: React.FunctionComponent<RadioProps>;
declare const RadioGroup: React.FunctionComponent<RadioGroupProps>;

export default Radio;
export { Radio, RadioGroup };
