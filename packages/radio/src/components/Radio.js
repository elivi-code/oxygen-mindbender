import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { withTheme } from '@8x8/oxygen-config';
import Label from '@8x8/oxygen-label';

import { LabelTextWrapper, RadioContainer } from '../styled';

import RadioInput from './RadioInput';
import { RadioGroupContext } from './RadioGroup';

const Radio = ({
  theme,
  testId,
  htmlFor,
  label,
  value,
  name,
  infoBoxText,
  infoBoxButtonLabel,
  isChecked,
  isDisabled,
  onChange,
  inputProps,
  labelProps,
  ...rest
}) => {
  const [isFocused, setFocus] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    if (isDisabled) {
      return;
    }
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    if (isDisabled) {
      return;
    }
    setIsHovered(false);
  };

  const handleOnChange = onChangeCb => {
    onChangeCb(value);
  };

  const handleClick = ev => {
    // this is to make the difference between actual click event and the other one caused by pressing UP/DOWN arrow keys
    if (ev.nativeEvent.clientX) {
      setIsPressed(true);
    } else if (isPressed) {
      setIsPressed(false);
    }
  };

  return (
    <RadioGroupContext.Consumer>
      {radioGroup => {
        let radioChecked = isChecked;
        let radioName = name;
        let radioOnChange = onChange;

        if (radioGroup) {
          // if the radio is not used as standalone component, and it's controlled through the group
          // we must use the props from group context
          radioChecked =
            typeof radioGroup.selectedValue === 'object' &&
            typeof value === 'object'
              ? radioGroup.selectedValue.id === value.id
              : radioGroup.selectedValue === value;
          radioName = radioGroup.name;
          radioOnChange = radioGroup.onChange;
        }

        return (
          <ThemeProvider theme={theme}>
            <RadioContainer
              isDisabled={isDisabled}
              isFocused={isFocused}
              {...rest}
            >
              <Label
                theme={theme.label}
                htmlFor={htmlFor}
                value={
                  <ThemeProvider theme={theme}>
                    <RadioInput
                      {...inputProps}
                      testId={testId}
                      name={radioName}
                      isChecked={radioChecked}
                      isDisabled={isDisabled}
                      isFocused={isFocused}
                      isHovered={isHovered}
                      isPressed={isPressed}
                      hasLabel={!!label}
                      onBlur={() => setFocus(false)}
                      onChange={() => handleOnChange(radioOnChange)}
                      onClick={handleClick}
                      onFocus={() => setFocus(true)}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    />
                    {!!label && (
                      <LabelTextWrapper
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        {label}
                      </LabelTextWrapper>
                    )}
                  </ThemeProvider>
                }
                infoBoxText={infoBoxText}
                infoBoxButtonLabel={infoBoxButtonLabel}
                isDisabled={isDisabled}
                shouldWrapText
                {...labelProps}
              />
            </RadioContainer>
          </ThemeProvider>
        );
      }}
    </RadioGroupContext.Consumer>
  );
};

Radio.propTypes = {
  /**
   * Radio theme
   */
  theme: PropTypes.object,
  /**
   * Radio test id
   */
  testId: PropTypes.string,
  /**
   * Specifies which element the label is bound to
   */
  htmlFor: PropTypes.string,
  /**
   * Specifies the label content for the radio input
   */
  label: PropTypes.node,
  /**
   * Radio input value (used to match with the selected value of the group)
   */
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.bool,
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ]),
  /**
   * Specifies the name prop for the radio input
   */
  name: PropTypes.string,
  /**
   * Shows info icon and renders text inside Tooltip
   */
  infoBoxText: PropTypes.node,
  /**
   * Add accessible name to info button label
   */
  infoBoxButtonLabel: PropTypes.string,
  /**
   * Specifies if the input is checked
   */
  isChecked: PropTypes.bool,
  /**
   * Radio inputs to be rendered
   */
  isDisabled: PropTypes.bool,
  /**
   * Callback for the radio input
   */
  onChange: PropTypes.func,
  /**
   * Rest of props pass into Input component
   */
  inputProps: PropTypes.object,
  /**
   * Rest of props pass into Label component
   */
  labelProps: PropTypes.object,
};

Radio.defaultProps = {
  theme: {},
  testId: 'RADIO',
  htmlFor: null,
  label: '',
  value: '',
  name: undefined,
  infoBoxText: undefined,
  infoBoxButtonLabel: undefined,
  inputProps: undefined,
  labelProps: undefined,
  isChecked: false,
  isDisabled: false,
  onChange: () => false,
};

// for testing only
export { Radio };

export default withTheme(Radio, 'radio');
