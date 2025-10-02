var _excluded = ["icon", "avatars", "title", "text", "theme", "testId"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
// @ts-check
import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { withTheme, getTestAttributes } from '@8x8/oxygen-config';
import { AvatarStack } from '@8x8/oxygen-avatar';
import { AvatarWrapper, IconContainer, Text, TextOverflow, Title } from '../styled/Content';
import { Layout, Wrapper } from '../styled/Layout';
var EventCard = function EventCard(_ref) {
  var Icon = _ref.icon,
    avatars = _ref.avatars,
    title = _ref.title,
    text = _ref.text,
    theme = _ref.theme,
    testId = _ref.testId,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(Wrapper, _extends({}, getTestAttributes(testId), rest), /*#__PURE__*/React.createElement(Layout, null, /*#__PURE__*/React.createElement(IconContainer, getTestAttributes("".concat(testId, "_ICON")), Icon && /*#__PURE__*/React.createElement(Icon, {
    size: 20,
    color: theme.iconColor
  })), /*#__PURE__*/React.createElement(Text, null, /*#__PURE__*/React.createElement(TextOverflow, null, title && /*#__PURE__*/React.createElement(Title, getTestAttributes("".concat(testId, "_TITLE")), title), title && text && /*#__PURE__*/React.createElement(React.Fragment, null, "\xA0\u2022\xA0"), text && /*#__PURE__*/React.createElement("span", getTestAttributes("".concat(testId, "_TEXT")), text))), avatars && /*#__PURE__*/React.createElement(AvatarWrapper, null, /*#__PURE__*/React.createElement(AvatarStack, {
    avatars: avatars
  })))));
};
var typographyPropTypes = PropTypes.shape({
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  lineHeight: PropTypes.string,
  fontWeight: PropTypes.number,
  letterSpacing: PropTypes.string
});
EventCard.propTypes = {
  avatars: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    src: PropTypes.string,
    isGroup: PropTypes.bool
  })),
  icon: PropTypes.node,
  testId: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  theme: PropTypes.shape({
    background: PropTypes.string,
    backgroundHover: PropTypes.string,
    borderColor: PropTypes.string,
    borderFocusColor: PropTypes.string,
    gap: PropTypes.string,
    iconBackground: PropTypes.string,
    iconColor: PropTypes.string,
    shadow: PropTypes.string,
    text: typographyPropTypes,
    textColor: PropTypes.string,
    title: typographyPropTypes,
    titleColor: PropTypes.string
  })
};
EventCard.defaultProps = {
  avatars: undefined,
  icon: undefined,
  testId: 'EVENT_CARD',
  text: undefined,
  theme: {},
  title: undefined
};
export default withTheme(EventCard, 'eventCard');