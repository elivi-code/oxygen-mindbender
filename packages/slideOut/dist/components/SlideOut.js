function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) { ; } } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { withTheme, getTestAttributes } from '@8x8/oxygen-config';
import noop from 'lodash.noop';
import clamp from 'lodash.clamp';
import * as Styled from '../styled';
var slideOutOnResizeStyle = {
  cursor: 'col-resize',
  userSelect: 'none'
};
function SlideOut(_ref) {
  var theme = _ref.theme,
    testId = _ref.testId,
    children = _ref.children,
    className = _ref.className,
    isVisible = _ref.isVisible,
    isResizable = _ref.isResizable,
    hasAnimation = _ref.hasAnimation,
    defaultWidth = _ref.defaultWidth,
    minWidth = _ref.minWidth,
    maxWidth = _ref.maxWidth,
    onResize = _ref.onResize;
  var containerRef = useRef(null);
  var width = useRef(defaultWidth);
  var initialWidth = useRef();
  var initialSplitterPosition = useRef();
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    resizeInProgress = _useState2[0],
    setResizeInProgress = _useState2[1];
  var initialParentStyles = useRef({});
  useEffect(function () {
    if (!defaultWidth) {
      return;
    }
    updateWidth();
  }, [defaultWidth]);
  function updateWidth() {
    if (!containerRef.current) {
      return;
    }
    var newWidth = clamp(defaultWidth, minWidth, maxWidth);
    width.current = newWidth;
    containerRef.current.style.width = "".concat(newWidth, "px");
  }
  function storeInitialElementStyles(element) {
    if (element) {
      Object.keys(slideOutOnResizeStyle).forEach(function (key) {
        initialParentStyles.current[key] = element.style[key];
      });
    }
  }
  function onDragStart(e) {
    if (!isResizable && !containerRef.current) {
      return;
    }
    if (e.nativeEvent.which !== 1) {
      return;
    }
    var parentContainer = containerRef.current.parentNode;
    if (!parentContainer) {
      return;
    }
    initialSplitterPosition.current = e.clientX;
    initialWidth.current = width.current;
    setResizeInProgress(true);
    storeInitialElementStyles(parentContainer);
    if (parentContainer && parentContainer.style) {
      Object.keys(slideOutOnResizeStyle).forEach(function (key) {
        parentContainer.style[key] = slideOutOnResizeStyle[key];
      });
    }
    window.addEventListener('mousemove', onDrag);
    window.addEventListener('mouseup', onDragEnd);
  }
  function onDrag(e) {
    setElementWidth(initialSplitterPosition.current, e.clientX);
  }
  function onDragEnd(e) {
    if (!containerRef.current) {
      return;
    }
    setElementWidth(initialSplitterPosition.current, e.clientX);
    initialSplitterPosition.current = undefined;
    initialWidth.current = undefined;
    setResizeInProgress(false);
    var parentContainer = containerRef.current.parentNode;
    if (parentContainer && parentContainer.style) {
      Object.keys(initialParentStyles.current).forEach(function (key) {
        parentContainer.style[key] = initialParentStyles.current[key];
      });
    }
    window.removeEventListener('mousemove', onDrag);
    window.removeEventListener('mouseup', onDragEnd);
  }
  function setElementWidth(initialPosition, currentPosition) {
    if (!containerRef.current) {
      return;
    }
    var newWidth = initialWidth.current + (initialPosition - currentPosition);
    newWidth = clamp(newWidth, minWidth, maxWidth);
    width.current = newWidth;
    containerRef.current.style.width = "".concat(newWidth, "px");
    onResize(newWidth);
  }
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(Styled.Container, _extends({
    className: className,
    ref: containerRef,
    isVisible: isVisible,
    hasAnimation: hasAnimation,
    resizeInProgress: resizeInProgress,
    minWidth: minWidth,
    maxWidth: maxWidth
  }, getTestAttributes("".concat(testId, "_CONTAINER"))), isResizable && /*#__PURE__*/React.createElement(Styled.Splitter, _extends({}, getTestAttributes("".concat(testId, "_SPLITTER")), {
    // eslint-disable-next-line react/jsx-no-bind
    onMouseDown: onDragStart
  })), /*#__PURE__*/React.createElement(Styled.Content, getTestAttributes("".concat(testId, "_CONTENT")), children)));
}
SlideOut.propTypes = {
  theme: PropTypes.object,
  testId: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isVisible: PropTypes.bool,
  isResizable: PropTypes.bool,
  hasAnimation: PropTypes.bool,
  defaultWidth: PropTypes.number,
  minWidth: PropTypes.number,
  maxWidth: PropTypes.number,
  onResize: PropTypes.func
};
SlideOut.defaultProps = {
  testId: 'SLIDE_OUT',
  className: undefined,
  isVisible: false,
  isResizable: true,
  hasAnimation: true,
  defaultWidth: 400,
  minWidth: undefined,
  maxWidth: undefined,
  onResize: noop
};
export { SlideOut };
export default withTheme(SlideOut, 'slideOut');