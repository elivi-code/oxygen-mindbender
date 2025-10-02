var _excluded = ["children", "isHorizontal", "name", "onChange", "theme", "value"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@8x8/oxygen-config';
import { RadioGroupWrapper } from '../styled';
var RadioGroupContext = /*#__PURE__*/createContext(null);
var RadioGroup = function RadioGroup(props) {
  var children = props.children,
    isHorizontal = props.isHorizontal,
    name = props.name,
    onChange = props.onChange,
    theme = props.theme,
    value = props.value,
    rest = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(RadioGroupContext.Provider, {
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    value: {
      selectedValue: value,
      name: name,
      onChange: onChange
    }
  }, /*#__PURE__*/React.createElement(RadioGroupWrapper, _extends({
    theme: theme,
    isHorizontal: isHorizontal
  }, rest), children));
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
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool, PropTypes.shape({
    id: PropTypes.string.isRequired
  })])
};
RadioGroup.defaultProps = {
  children: null,
  isHorizontal: false,
  name: '',
  theme: {},
  value: '',
  onChange: function onChange() {
    return false;
  }
};
export { RadioGroupContext, RadioGroup };
export default withTheme(RadioGroup, 'radioGroup');