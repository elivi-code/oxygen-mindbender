var _excluded = ["isVisible", "hasShadow", "shouldCloseOnEsc", "allowOutsideClick", "shouldCloseOnOverlayClick", "size", "width", "height", "onClose", "children", "shouldUseFocusTrap", "testId", "theme", "initialFocus", "title", "disableAutoFocus", "modalProps", "portalRef", "focusAfterCloseItemRef"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/* eslint-disable no-underscore-dangle */
import React, { useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import FocusTrap from 'focus-trap-react';
import { withTheme } from '@8x8/oxygen-config';
import Overlay from '@8x8/oxygen-overlay';
import { useId, useGlobalActionKeyHandler, EventKey } from '@8x8/oxygen-utils';
import { propTypes, defaultProps } from './Modal.props';
import { Container, Content, PortalNode, ModalInnerWrapper } from '../styled';
var ModalPortal = function ModalPortal(_ref) {
  var isVisible = _ref.isVisible,
    hasShadow = _ref.hasShadow,
    shouldCloseOnEsc = _ref.shouldCloseOnEsc,
    allowOutsideClick = _ref.allowOutsideClick,
    shouldCloseOnOverlayClick = _ref.shouldCloseOnOverlayClick,
    size = _ref.size,
    width = _ref.width,
    height = _ref.height,
    onClose = _ref.onClose,
    children = _ref.children,
    _ref$shouldUseFocusTr = _ref.shouldUseFocusTrap,
    shouldUseFocusTrap = _ref$shouldUseFocusTr === void 0 ? true : _ref$shouldUseFocusTr,
    testId = _ref.testId,
    theme = _ref.theme,
    initialFocus = _ref.initialFocus,
    title = _ref.title,
    disableAutoFocus = _ref.disableAutoFocus,
    modalProps = _ref.modalProps,
    portalRef = _ref.portalRef,
    focusAfterCloseItemRef = _ref.focusAfterCloseItemRef,
    rest = _objectWithoutProperties(_ref, _excluded);
  /**
   * Request close action if the overlay is clicked and CloseOnOverlayClick is enabled
   */
  var onOverlayClick = useCallback(function () {
    if (shouldCloseOnOverlayClick) {
      var _focusAfterCloseItemR;
      onClose();
      focusAfterCloseItemRef === null || focusAfterCloseItemRef === void 0 || (_focusAfterCloseItemR = focusAfterCloseItemRef.current) === null || _focusAfterCloseItemR === void 0 || _focusAfterCloseItemR.focus();
    }
  }, [shouldCloseOnOverlayClick, onClose, focusAfterCloseItemRef]);
  var handleCloseOnEscape = useCallback(function () {
    var _focusAfterCloseItemR2;
    if (!shouldCloseOnEsc) {
      return;
    }
    onClose();
    focusAfterCloseItemRef === null || focusAfterCloseItemRef === void 0 || (_focusAfterCloseItemR2 = focusAfterCloseItemRef.current) === null || _focusAfterCloseItemR2 === void 0 || _focusAfterCloseItemR2.focus();
  }, [shouldCloseOnEsc, onClose, focusAfterCloseItemRef]);
  useGlobalActionKeyHandler({
    actionKeyHandler: handleCloseOnEscape,
    fireEvents: [EventKey.Escape]
  });
  var randomId = useId();
  var manualLabelId = modalProps === null || modalProps === void 0 ? void 0 : modalProps['aria-labelledby'];
  var modalHeadingId = manualLabelId || randomId;
  var setContentRef = function setContentRef(ref) {
    if (ref && !disableAutoFocus) {
      ref.focus();
    }
  };
  if (!isVisible) {
    return null;
  }

  // true if Modal has any other children other than ModalHeader & ModalFooter
  var modalHasContent = React.Children.toArray(children).some(function (child) {
    var _child$props, _child$props2;
    return (child === null || child === void 0 || (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.__TYPE) !== 'ModalHeader' && (child === null || child === void 0 || (_child$props2 = child.props) === null || _child$props2 === void 0 ? void 0 : _child$props2.__TYPE) !== 'ModalFooter';
  });
  var focusTrapOptions = {
    allowOutsideClick: allowOutsideClick !== null && allowOutsideClick !== void 0 ? allowOutsideClick : shouldCloseOnOverlayClick,
    fallbackFocus: window.document.activeElement,
    initialFocus: initialFocus
  };
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(Container, rest, /*#__PURE__*/React.createElement(Overlay, {
    onClick: onOverlayClick,
    tabIndex: "0"
  }), /*#__PURE__*/React.createElement(FocusTrap, {
    active: shouldUseFocusTrap,
    focusTrapOptions: focusTrapOptions
  }, /*#__PURE__*/React.createElement(ModalInnerWrapper, null, /*#__PURE__*/React.createElement(Content, _extends({
    size: size,
    width: width,
    height: height,
    hasShadow: hasShadow,
    ref: setContentRef,
    testId: testId,
    role: "dialog",
    "aria-modal": true,
    "aria-labelledby": modalHeadingId
  }, modalProps), React.Children.map(children, function (item) {
    var _item$props, _item$props2;
    // Pass in the modalHasContent prop only to ModalHeader & ModalFooter
    // Pass in the modalHeadingId as titleProps.id so there is
    // an association between aria-labelledby and headerTitle.id
    if ((item === null || item === void 0 || (_item$props = item.props) === null || _item$props === void 0 ? void 0 : _item$props.__TYPE) === 'ModalHeader' || (item === null || item === void 0 || (_item$props2 = item.props) === null || _item$props2 === void 0 ? void 0 : _item$props2.__TYPE) === 'ModalFooter') {
      var _item$props3;
      var updatedProps = {
        modalHasContent: modalHasContent
      };
      if (!manualLabelId && (item === null || item === void 0 || (_item$props3 = item.props) === null || _item$props3 === void 0 ? void 0 : _item$props3.__TYPE) === 'ModalHeader') {
        updatedProps.titleProps = {
          id: modalHeadingId
        };
      }
      return /*#__PURE__*/React.cloneElement(item, updatedProps);
    }
    return item;
  })), /*#__PURE__*/React.createElement(PortalNode, {
    ref: portalRef
  })))));
};
ModalPortal.propTypes = propTypes;
ModalPortal.defaultProps = defaultProps;
export default withTheme(ModalPortal, 'modal');
export { ModalPortal };