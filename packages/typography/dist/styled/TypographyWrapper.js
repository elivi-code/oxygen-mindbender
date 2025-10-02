function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import styled from 'styled-components';
import { ellipsis } from 'polished';
import * as config from '@8x8/oxygen-config';
import { getSize, getWeight, getParagraph } from '../utils';
var TypographyWrapper = styled.div.attrs(function (_ref) {
  var testId = _ref.testId;
  return _objectSpread({}, config.getTestAttributes(testId));
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", ";\n  display: ", ";\n  text-align: ", ";\n  ", ";\n  ", ";\n  color: ", ";\n  ", ";\n"])), function (_ref2) {
  var weight = _ref2.weight,
    theme = _ref2.theme;
  return weight ? getWeight(weight) : getWeight(theme.typographyFontWeight);
}, function (props) {
  return props.display;
}, function (props) {
  return props.align;
}, function (_ref3) {
  var size = _ref3.size,
    theme = _ref3.theme;
  return size ? getSize(size) : getSize(theme.typographyFontSize);
}, function (props) {
  return !props.shouldWrap && ellipsis();
}, function (_ref4) {
  var theme = _ref4.theme,
    color = _ref4.color;
  return color || theme.typographyColor;
}, function (_ref5) {
  var isParagraph = _ref5.isParagraph,
    theme = _ref5.theme;
  return getParagraph(isParagraph, theme);
});
export default TypographyWrapper;