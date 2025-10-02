var _templateObject, _templateObject2, _templateObject3;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import styled from 'styled-components';
import { ellipsis } from 'polished';
var getListItemSelectedDisplay = function getListItemSelectedDisplay(_ref) {
  var isSelected = _ref.isSelected;
  return "\n  display: ".concat(isSelected ? 'block' : 'none', "\n");
};
var PredefinedList = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: ", ";\n  border-right: ", ";\n  width: ", ";\n  box-sizing: border-box;\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.listBackgroundColor;
}, function (_ref3) {
  var theme = _ref3.theme;
  return "".concat(theme.listBorderRightSize, " solid ").concat(theme.listBorderRightColor);
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.listWidth;
});
var PredefinedListItem = styled.button(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  all: unset;\n  width: 100%;\n  font-size: ", ";\n  line-height: ", ";\n  ", ";\n  padding: ", ";\n  box-sizing: border-box;\n  overflow: hidden;\n  color: ", ";\n  cursor: ", ";\n  position: relative;\n  display: block;\n  text-align: left;\n\n  &:focus-visible {\n    box-shadow: inset 0 0 0 2px ", ";\n  }\n\n  &::after {\n    content: '';\n    position: absolute;\n    background: ", ";\n    width: ", ";\n    top: 0;\n    right: 0;\n    height: 100%;\n    ", ";\n  }\n"])), function (_ref5) {
  var theme = _ref5.theme;
  return theme.listItemFontSize;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.listItemLineHeight;
}, ellipsis(), function (_ref7) {
  var theme = _ref7.theme;
  return "".concat(theme.listItemPaddingVertical, " ").concat(theme.listItemPaddingHorizontal);
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.listItemColor;
}, function (props) {
  return props.onClick ? 'pointer' : 'default';
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.listItemSelectedColor;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.listItemSelectedColor;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.listItemSelectedWidth;
}, getListItemSelectedDisplay);
var PredefinedListInputWrapper = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: ", ";\n  display: inline-flex;\n  margin: ", ";\n  text-align: center;\n  position: relative;\n"])), function (_ref12) {
  var theme = _ref12.theme;
  return theme.listInputWidth;
}, function (_ref13) {
  var theme = _ref13.theme;
  return "".concat(theme.listInputMarginTop, " ").concat(theme.listInputMarginRight, "\n  ").concat(theme.listInputMarginBottom, " ").concat(theme.listInputMarginLeft);
});
export { PredefinedList, PredefinedListItem, PredefinedListInputWrapper };