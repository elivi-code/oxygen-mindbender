var _excluded = ["theme", "children", "href", "title", "target", "isActive", "onClick"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import PropTypes from 'prop-types';
import TextLink from '@8x8/oxygen-text-link';
import { withTheme } from '@8x8/oxygen-config';
import { THEME_NAME } from '../constants/themeName';
import * as Target from '../constants/targets';
var Breadcrumb = function Breadcrumb(_ref) {
  var theme = _ref.theme,
    children = _ref.children,
    href = _ref.href,
    title = _ref.title,
    target = _ref.target,
    isActive = _ref.isActive,
    onClick = _ref.onClick,
    otherProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(TextLink, _extends({
    theme: theme.textLink,
    href: href,
    target: target,
    title: title,
    isDisabled: isActive,
    onClick: onClick
  }, otherProps), children);
};
Breadcrumb.propTypes = {
  /**
   * Breadcrumbs theme
   */
  theme: PropTypes.object,
  /**
   * Renders children element
   */
  children: PropTypes.node.isRequired,
  /**
   * The url or path which the breadcrumb should act as a link to
   */
  href: PropTypes.string,
  /**
   * Shows HTML title text
   */
  title: PropTypes.string,
  /**
   * The target of the link
   */
  target: PropTypes.oneOf(Object.values(Target)),
  /**
   * Tell when breadcrumb is active. Usually is the last element
   */
  isActive: PropTypes.bool,
  /**
   * Handler to be called on click
   */
  onClick: PropTypes.func
};
Breadcrumb.defaultProps = {
  href: undefined,
  title: undefined,
  target: Target.SELF,
  isActive: false,
  onClick: undefined
};
export default withTheme(Breadcrumb, THEME_NAME);