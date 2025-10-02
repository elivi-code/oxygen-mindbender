var _excluded = ["children", "theme", "forwardedRef"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import { withTheme } from '@8x8/oxygen-config';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import TypographyWrapper from '../styled/TypographyWrapper';
import { sizes, weights, THEME_NAME } from '../constants';
var Typography = function Typography(_ref) {
  var children = _ref.children,
    theme = _ref.theme,
    forwardedRef = _ref.forwardedRef,
    pasThroughProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(TypographyWrapper, _extends({}, pasThroughProps, {
    ref: forwardedRef
  }), children));
};
Typography.propTypes = {
  /**
   * Theme object
   */
  theme: PropTypes.object,
  /**
   * Rendered elements
   */
  children: PropTypes.node,
  /**
   * Color
   */
  color: PropTypes.string,
  /**
   * Predefined font weights(default, attention, max) or pass any possible CSS value
   */
  weight: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf(Object.keys(weights))]),
  /**
   * CSS display
   */
  display: PropTypes.string,
  /**
   * Define if text should wrap or truncate with ellipsis
   */
  shouldWrap: PropTypes.bool,
  /**
   * CSS text-align
   */
  align: PropTypes.string,
  /**
   * HTML element type
   */
  as: PropTypes.string,
  /**
   * Add extra bottom padding
   */
  isParagraph: PropTypes.bool,
  /**
   * Typography ref
   */
  ref: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  /**
   * Predefined font sizes(small, default, medium, large, attention, max) or pass any possible CSS value
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf(Object.keys(sizes))]),
  /**
   * Test id
   */
  testId: PropTypes.string,
  /**
   * Forwarded ref
   */
  forwardedRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};
Typography.defaultProps = {
  children: null,
  color: undefined,
  weight: undefined,
  display: undefined,
  shouldWrap: true,
  align: undefined,
  as: undefined,
  isParagraph: false,
  ref: null,
  size: undefined,
  testId: 'TYPOGRAPHY',
  forwardedRef: null
};
export default withTheme(Typography, THEME_NAME);