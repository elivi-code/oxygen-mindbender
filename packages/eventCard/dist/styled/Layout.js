var _templateObject, _templateObject2;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
// @ts-check
import styled from 'styled-components';
var Wrapper = styled.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: ", ";\n  border-radius: 6px;\n  border: 0;\n  box-shadow: 0 0 0 1px ", ",\n    ", ";\n  outline: none;\n  overflow: hidden;\n  width: 100%;\n  padding: 0;\n  &:hover {\n    background: ", ";\n  }\n  &:focus-visible {\n    background: ", ";\n    box-shadow: 0 0 0 2px ", ",\n      ", ";\n  }\n  transition: 200ms ease-out;\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.background;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.borderColor;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.shadow;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.backgroundHover;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.backgroundHover;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.borderFocusColor;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.shadow;
});
var Layout = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  gap: ", ";\n  height: 48px;\n"])), function (_ref8) {
  var theme = _ref8.theme;
  return theme.gap;
});
export { Layout, Wrapper };