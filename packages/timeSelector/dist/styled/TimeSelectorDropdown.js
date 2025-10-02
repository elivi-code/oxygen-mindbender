var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import styled, { keyframes, css } from 'styled-components';
var getContainerAnimationName = function getContainerAnimationName() {
  return keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  from {\n    opacity: 0; transform: translateY(-5px);\n  }\n  to {\n    opacity: 1; transform: translateY(0);\n  }\n"])));
};
var getContainerAnimation = function getContainerAnimation(_ref) {
  var theme = _ref.theme;
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  animation-name: ", ";\n  animation-duration: ", ";\n  animation-timing-function: ease-in;\n"])), getContainerAnimationName, theme.dropdownAnimationDuration);
};
var PopperContainer = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  z-index: ", ";\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return "".concat(theme.dropdownZIndex);
});
var DropdownContainer = styled.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  background: ", ";\n  border: ", ";\n  border-radius: ", ";\n  box-sizing: border-box;\n  box-shadow: ", ";\n  ", ";\n  font-family: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  max-height: ", ";\n  overflow: auto;\n  padding: ", ";\n  min-width: ", ";\n"])), function (_ref3) {
  var theme = _ref3.theme;
  return theme.listItemBackground;
}, function (_ref4) {
  var theme = _ref4.theme;
  return "".concat(theme.dropdownBorderSize, " solid ").concat(theme.dropdownBorderColor);
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.dropdownBorderRadius;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.dropdownShadow ? theme.dropdownShadow : "0 0 ".concat(theme.dropdownShadowBlurRadius, " 0 ").concat(theme.dropdownShadowColor);
}, getContainerAnimation, function (_ref7) {
  var theme = _ref7.theme;
  return "".concat(theme.dropdownFontFamily);
}, function (_ref8) {
  var theme = _ref8.theme;
  return "".concat(theme.dropdownFontSize);
}, function (_ref9) {
  var theme = _ref9.theme;
  return "".concat(theme.dropdownLineHeight);
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.dropdownMaxHeight;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.dropdownPadding;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.dropdownWidth;
});
var ListItem = styled.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  padding: ", ";\n  cursor: pointer;\n  background: ", ";\n  color: ", ";\n  text-align: left;\n\n  &:hover {\n    background: ", ";\n  }\n"])), function (_ref13) {
  var theme = _ref13.theme;
  return "".concat(theme.listItemPadding);
}, function (_ref14) {
  var theme = _ref14.theme,
    isSelected = _ref14.isSelected;
  return isSelected ? theme.listItemBackgroundSelected : theme.listItemBackground;
}, function (_ref15) {
  var theme = _ref15.theme;
  return "".concat(theme.listItemColor);
}, function (_ref16) {
  var theme = _ref16.theme;
  return "".concat(theme.listItemBackgroundHover);
});
export { PopperContainer, DropdownContainer, ListItem };