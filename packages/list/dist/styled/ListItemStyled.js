var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import styled, { css } from 'styled-components';
var textOverflow = function textOverflow(_ref) {
  var shouldWrapText = _ref.shouldWrapText;
  return !shouldWrapText && css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  "])));
};
var ListItemStyled = styled.li(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n\n  outline: none;\n  padding: ", ";\n  box-sizing: border-box;\n  list-style-position: inside;\n  ", ";\n\n  color: ", ";\n\n  ", "\n\n  ", "\n\n  &:focus-visible {\n    box-shadow: ", ";\n  }\n\n  cursor: ", ";\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.isClassic ? css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n          font-family: ", ";\n          font-size: ", ";\n          font-weight: ", ";\n          line-height: ", ";\n        "])), theme.listItemFontFamily, theme.listItemFontSize, theme.listItemFontWeight, theme.listItemLineHeight) : css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n          font-family: ", ";\n          font-size: ", ";\n          font-weight: ", ";\n          line-height: ", ";\n          letter-spacing: ", ";\n\n          min-height: 40px;\n        "])), theme.fontFamily, theme.fontSize, theme.fontWeight, theme.lineHeight, theme.letterSpacing);
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.listItemPadding;
}, textOverflow, function (_ref4) {
  var isDisabled = _ref4.isDisabled,
    theme = _ref4.theme;
  return isDisabled ? theme.listItemColorDisabled : theme.listItemColor;
}, function (_ref5) {
  var isActive = _ref5.isActive,
    theme = _ref5.theme;
  return isActive && "\n    background: ".concat(theme.listItemActiveBackgroundColor, ";\n    color: ").concat(theme.listItemColorActive, ";\n  ");
}, function (_ref6) {
  var isDisabled = _ref6.isDisabled,
    theme = _ref6.theme;
  return !isDisabled && "\n    &:hover {\n      background: ".concat(theme.listItemHoverColor, "; \n    }\n    &:active {\n      background: ").concat(theme.listItemActiveBackgroundColor, ";\n      color: ").concat(theme.listItemColorActive, ";\n    }\n  ");
}, function (_ref7) {
  var theme = _ref7.theme;
  return "0 0 0 2px inset ".concat(theme.listItemFocusBorderColor);
}, function (_ref8) {
  var isDisabled = _ref8.isDisabled;
  return isDisabled ? 'not-allowed' : 'pointer';
});
export default ListItemStyled;