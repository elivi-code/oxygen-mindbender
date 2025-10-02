function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import styled from 'styled-components';
import { getTestAttributes } from '@8x8/oxygen-config';
var alignMap = {
  left: 'flex-start',
  right: 'flex-end'
};
function getModalFooterPadding(_ref) {
  var theme = _ref.theme,
    isSmall = _ref.isSmall,
    modalHasContent = _ref.modalHasContent;
  if (isSmall) {
    if (theme.footerPaddingSmall) {
      return theme.footerPaddingSmall;
    }

    // deprecated, should remain with `footerPaddingSmall` (might also deprecate with Novo in v2)
    return "".concat(theme.footerPaddingVertical, " ").concat(theme.footerPaddingSmallHorizontal);
  }
  if (!modalHasContent && theme.footerPaddingNoContent) {
    return theme.footerPaddingNoContent;
  }
  if (theme.footerPadding) {
    return theme.footerPadding;
  }

  // deprecated, should remain with only `footerPadding`
  return "".concat(theme.footerPaddingVertical, " ").concat(theme.footerPaddingHorizontal);
}
var FooterContainer = styled.div.attrs(function (_ref2) {
  var testId = _ref2.testId;
  return _objectSpread({}, getTestAttributes(testId));
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-flow: wrap;\n  justify-content: ", ";\n  gap: ", ";\n  padding: ", ";\n  box-shadow: ", ";\n"])), function (_ref3) {
  var align = _ref3.align;
  return alignMap[align] || align;
}, function (_ref4) {
  var theme = _ref4.theme,
    hasButtonSpacing = _ref4.hasButtonSpacing;
  return hasButtonSpacing ? theme.footerButtonSpacing : '0';
}, function (props) {
  return getModalFooterPadding(props);
}, function (_ref5) {
  var hasBorderTop = _ref5.hasBorderTop,
    theme = _ref5.theme;
  return hasBorderTop ? "inset ".concat(theme.footerShadowSize, " ").concat(theme.footerShadowColor) : 'none';
});
export default FooterContainer;