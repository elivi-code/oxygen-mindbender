var _excluded = ["theme", "isSelectable", "isSelected", "children"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@8x8/oxygen-config';
import { ThemeProvider } from 'styled-components';
import THEME_NAME from '../constants';
import * as Styled from '../styled';
var TableRowFlex = function TableRowFlex(_ref) {
  var theme = _ref.theme,
    isSelectable = _ref.isSelectable,
    isSelected = _ref.isSelected,
    children = _ref.children,
    otherProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(Styled.TableRowFlex, _extends({
    enableHover: isSelectable,
    isSelected: isSelected
  }, otherProps), children));
};
TableRowFlex.propTypes = {
  /** Theme object */
  theme: PropTypes.object,
  /** Set custom styling when hovering */
  isSelectable: PropTypes.bool,
  /** Set the selected custom styles */
  isSelected: PropTypes.bool,
  /** Content */
  children: PropTypes.node.isRequired
};
TableRowFlex.defaultProps = {
  isSelectable: false,
  isSelected: false
};
export default withTheme(TableRowFlex, THEME_NAME);