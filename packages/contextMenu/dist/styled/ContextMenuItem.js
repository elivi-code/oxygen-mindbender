var _templateObject, _templateObject2, _templateObject3;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import styled, { css } from 'styled-components';
var ContextMenuItem = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: ", ";\n  box-sizing: border-box;\n  outline: none;\n\n  ", "\n\n  cursor: ", ";\n  color: ", ";\n\n  &:focus,\n  &:hover,\n  &:active {\n    background-color: ", ";\n    color: ", ";\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.contextMenuItemPadding;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.isClassic ? css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n          width: ", ";\n\n          font-family: ", ";\n          font-size: ", ";\n        "])), theme.contextMenuItemWidth, theme.contextMenuFontFamily, theme.contextMenuFontSize) : css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n          min-height: 40px;\n          display: flex;\n          align-items: center;\n\n          font-family: ", ";\n          font-size: ", ";\n          font-weight: ", ";\n          letter-spacing: ", ";\n          line-height: ", ";\n        "])), theme.fontFamily, theme.fontSize, theme.fontWeight, theme.letterSpacing, theme.lineHeight);
}, function (_ref3) {
  var isDisabled = _ref3.isDisabled;
  return isDisabled && 'not-allowed';
}, function (_ref4) {
  var theme = _ref4.theme,
    isDisabled = _ref4.isDisabled;
  return isDisabled ? theme.contextMenuItemDisabledColor : theme.contextMenuItemColor;
}, function (_ref5) {
  var isDisabled = _ref5.isDisabled,
    theme = _ref5.theme;
  return isDisabled ? theme.contextMenuItemDisabledHoverColor : theme.contextMenuItemHoverColor;
}, function (_ref6) {
  var theme = _ref6.theme,
    isDisabled = _ref6.isDisabled;
  return isDisabled ? theme.contextMenuItemDisabledColor : theme.contextMenuItemColorActive;
});
export default ContextMenuItem;