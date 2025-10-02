import React, { createContext } from 'react';
import PropTypes from 'prop-types';

import { withTheme } from '@8x8/oxygen-config';

import { RadioGroupWrapper } from '../styled';

const RadioGroupContext = createContext(null);

const RadioGroup = props => {
  const { children, isHorizontal, name, onChange, theme, value, ...rest } =
    props;

  return (
    <RadioGroupContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        selectedValue: value,
        name,
        onChange,
      }}
    >
      <RadioGroupWrapper theme={theme} isHorizontal={isHorizontal} {...rest}>
        {children}
      </RadioGroupWrapper>
    </RadioGroupContext.Provider>
  );
};

RadioGroup.propTypes = {
  /**
   * Radio inputs to be rendered
   */
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]),
  /**
   * Specifies if the group should be displayed horizontally or vertically
   */
  isHorizontal: PropTypes.bool,
  /**
   * Name prop to be passed to the radio inputs
   */
  name: PropTypes.string,
  /**
   * Callback function to be passed to the radio inputs
   */
  onChange: PropTypes.func,
  /**
   * Radio group theme
   */
  theme: PropTypes.object,
  /**
   * Specifies the selected value from the radio group
   */
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.bool,
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ]),
};

RadioGroup.defaultProps = {
  children: null,
  isHorizontal: false,
  name: '',
  theme: {},
  value: '',
  onChange: () => false,
};

export { RadioGroupContext, RadioGroup };

export default withTheme(RadioGroup, 'radioGroup');
