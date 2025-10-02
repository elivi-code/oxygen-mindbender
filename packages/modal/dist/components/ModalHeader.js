var _excluded = ["alignTitle", "children", "hasBorderBottom", "modalHasContent", "iconCloseTitle", "buttonCloseRef", "onClose", "testId", "theme", "title", "titleProps"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import isFunction from 'lodash.isfunction';
import { withTheme } from '@8x8/oxygen-config';
import { CloseLargeIcon } from '@8x8/oxygen-icon';
import { HeaderContainer, HeaderCloseIcon, HeaderTitle, HeaderTitleWrapper, HeaderSubtitle } from '../styled';
import { MODAL_HEADER_ALIGN_TITLE } from '../constants';
var ModalHeader = function ModalHeader(_ref) {
  var alignTitle = _ref.alignTitle,
    children = _ref.children,
    hasBorderBottom = _ref.hasBorderBottom,
    modalHasContent = _ref.modalHasContent,
    iconCloseTitle = _ref.iconCloseTitle,
    buttonCloseRef = _ref.buttonCloseRef,
    onClose = _ref.onClose,
    testId = _ref.testId,
    theme = _ref.theme,
    title = _ref.title,
    titleProps = _ref.titleProps,
    props = _objectWithoutProperties(_ref, _excluded);
  var rendersCloseButton = isFunction(onClose);
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(HeaderContainer, _extends({
    hasBorderBottom: hasBorderBottom,
    modalHasContent: modalHasContent,
    onClose: onClose,
    testId: testId
  }, props), (title || rendersCloseButton) && /*#__PURE__*/React.createElement(HeaderTitleWrapper, null, title && /*#__PURE__*/React.createElement(HeaderTitle, _extends({
    alignTitle: alignTitle
  }, titleProps), title), rendersCloseButton && /*#__PURE__*/React.createElement(HeaderCloseIcon, {
    ref: buttonCloseRef,
    title: iconCloseTitle,
    onClick: onClose
  }, /*#__PURE__*/React.createElement(CloseLargeIcon, {
    role: "presentation"
  }))), children && /*#__PURE__*/React.createElement(HeaderSubtitle, null, children)));
};
ModalHeader.propTypes = {
  alignTitle: PropTypes.oneOf(Object.values(MODAL_HEADER_ALIGN_TITLE)),
  children: PropTypes.node,
  hasBorderBottom: PropTypes.bool,
  modalHasContent: PropTypes.bool,
  iconCloseTitle: PropTypes.string,
  onClose: PropTypes.func,
  testId: PropTypes.string,
  theme: PropTypes.object,
  title: PropTypes.string,
  buttonCloseRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  titleProps: PropTypes.object,
  __TYPE: PropTypes.string
};
ModalHeader.defaultProps = {
  alignTitle: MODAL_HEADER_ALIGN_TITLE.LEFT,
  children: null,
  hasBorderBottom: false,
  modalHasContent: true,
  onClose: undefined,
  iconCloseTitle: 'Close',
  testId: 'MODAL_HEADER',
  title: '',
  buttonCloseRef: undefined,
  titleProps: {
    // Use if manually setting the title id for Modal aria-labelledby
    id: undefined
  },
  __TYPE: 'ModalHeader'
};
export default withTheme(ModalHeader, 'modal');
export { ModalHeader, MODAL_HEADER_ALIGN_TITLE };