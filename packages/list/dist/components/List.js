var _excluded = ["theme", "children", "isOrdered", "isGroup", "withBackground"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { withTheme } from '@8x8/oxygen-config';
import THEME_NAME from '../constants/themeName';
import ListStyled from '../styled/ListStyled';
export var List = function List(_ref) {
  var theme = _ref.theme,
    children = _ref.children,
    isOrdered = _ref.isOrdered,
    isGroup = _ref.isGroup,
    withBackground = _ref.withBackground,
    otherProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(ListStyled, _extends({
    isGroup: isGroup,
    isOrdered: isOrdered,
    withBackground: withBackground
  }, otherProps), children));
};
List.propTypes = {
  /**
   * List theme
   */
  theme: PropTypes.object,
  /**
   * Rendered item content should be `ListItem` component
   */
  children: PropTypes.node.isRequired,
  /**
   * Tell when list is styled as a group
   */
  isGroup: PropTypes.bool,
  /**
   * Tell when list is ordered
   */
  isOrdered: PropTypes.bool,
  /**
   * Tell when list has background
   */
  withBackground: PropTypes.bool
};
List.defaultProps = {
  isOrdered: false,
  isGroup: false,
  withBackground: false
};
export default withTheme(List, THEME_NAME);