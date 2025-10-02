function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import styled from 'styled-components';
var AvatarWrapper = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  margin-right: 8px;\n"])));
var IconContainer = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  align-items: center;\n  background: ", ";\n  display: flex;\n  flex-shrink: 0;\n  justify-content: center;\n  width: 40px;\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.iconBackground;
});
var Text = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  ", "\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-grow: 1;\n  flex-shrink: 1;\n  overflow: hidden;\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return _objectSpread({}, theme.text);
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.textColor;
});
var TextOverflow = styled.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"])));
var Title = styled.b(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  ", "\n  color: ", ";\n"])), function (_ref4) {
  var theme = _ref4.theme;
  return _objectSpread({}, theme.title);
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.titleColor;
});
export { AvatarWrapper, IconContainer, Text, TextOverflow, Title };