var _excluded = ["children", "title", "isDisabled", "isActive", "shouldWrapText", "onClick"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash.noop';
import { withTheme } from '@8x8/oxygen-config';
import { isEnterEvent, isSpaceEvent } from '@8x8/oxygen-utils';
import THEME_NAME from '../constants/themeName';
import ListItemStyled from '../styled/ListItemStyled';
export var ListItem = function ListItem(_ref) {
  var children = _ref.children,
    title = _ref.title,
    isDisabled = _ref.isDisabled,
    isActive = _ref.isActive,
    shouldWrapText = _ref.shouldWrapText,
    onClick = _ref.onClick,
    otherProps = _objectWithoutProperties(_ref, _excluded);
  function handleClick(e) {
    if (isDisabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    onClick(e);
  }
  var handleOnKeyDown = function handleOnKeyDown(ev) {
    if (isEnterEvent(ev) || isSpaceEvent(ev)) {
      handleClick(ev);
    }
  };
  return /*#__PURE__*/React.createElement(ListItemStyled, _extends({
    tabIndex: "0",
    title: title,
    isDisabled: isDisabled,
    isActive: isActive,
    shouldWrapText: shouldWrapText
    // eslint-disable-next-line react/jsx-no-bind
    ,
    onClick: handleClick
  }, otherProps, isDisabled && {
    'aria-disabled': true
  }, !isDisabled && {
    onKeyDown: handleOnKeyDown
  }), children);
};
ListItem.propTypes = {
  /**
   * Rendered text inside list item
   */
  children: PropTypes.node.isRequired,
  /**
   * Add title attribute to list item
   */
  title: PropTypes.string,
  /**
   * Tell when list item is disabled
   */
  isDisabled: PropTypes.bool,
  /**
   * Tell when list item is active
   */
  isActive: PropTypes.bool,
  /**
   * Tell when list item should wrap text
   */
  shouldWrapText: PropTypes.bool,
  /**
   * Callback when clicking the item
   */
  onClick: PropTypes.func
};
ListItem.defaultProps = {
  title: undefined,
  isDisabled: false,
  isActive: false,
  shouldWrapText: false,
  onClick: noop
};
export default withTheme(ListItem, THEME_NAME);