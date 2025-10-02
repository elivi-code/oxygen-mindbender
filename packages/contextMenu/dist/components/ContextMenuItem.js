var _excluded = ["theme", "children", "testId", "isDisabled"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, getTestAttributes } from '@8x8/oxygen-config';
import { THEME_NAME } from '../constants';
import * as Styled from '../styled';
var ContextMenuItem = function ContextMenuItem(_ref) {
  var theme = _ref.theme,
    children = _ref.children,
    testId = _ref.testId,
    isDisabled = _ref.isDisabled,
    otherProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(Styled.ContextMenuItem, _extends({
    tabIndex: isDisabled ? undefined : '0',
    isDisabled: isDisabled
  }, getTestAttributes(testId), otherProps), children);
};
ContextMenuItem.propTypes = {
  theme: PropTypes.object,
  children: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool,
  testId: PropTypes.string
};
ContextMenuItem.defaultProps = {
  isDisabled: false,
  testId: 'CONTEXT_MENU_ITEM'
};
export default withTheme(ContextMenuItem, THEME_NAME);