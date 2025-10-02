var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import styled, { keyframes, css } from 'styled-components';
var getContainerAnimationName = function getContainerAnimationName() {
  return keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  from {\n    opacity: 0; transform: translateY(-5px);\n  }\n  to {\n    opacity: 1; transform: translateY(0);\n  }\n"])));
};
var getContainerAnimation = function getContainerAnimation(_ref) {
  var theme = _ref.theme;
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  animation-name: ", ";\n  animation-duration: ", ";\n  animation-timing-function: ease-in;\n"])), getContainerAnimationName, theme.containerAnimationDuration);
};
var DropdownContainer = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  overflow: hidden;\n\n  border: ", ";\n  box-sizing: border-box;\n  box-shadow: ", ";\n  background: ", ";\n  padding: 0 ", ";\n  border-radius: ", ";\n\n  ", ";\n\n  line-height: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  letter-spacing: ", ";\n  font-weight: ", ";\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return "".concat(theme.containerBorderSize, " solid ").concat(theme.containerBorderColor);
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.isClassic ? "0 0 ".concat(theme.containerShadowBlurRadius, " 0 ").concat(theme.containerShadowColor) : "0 1px 2px ".concat(theme.containerShadowColor);
}, function (_ref4) {
  var theme = _ref4.theme;
  return "".concat(theme.containerBackgroundColor);
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.containerPadding;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.containerBorderRadius;
}, getContainerAnimation, function (_ref7) {
  var theme = _ref7.theme;
  return theme.lineHeight;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.fontFamily;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.fontSize;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.letterSpacing;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.fontWeight;
});
var PopperContainer = styled.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  max-width: 100%;\n  z-index: ", ";\n"])), function (_ref12) {
  var theme = _ref12.theme;
  return "".concat(theme.containerZIndex);
});
var DropdownFooter = styled.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  justify-content: flex-end;\n  padding: ", ";\n  border-top: ", ";\n  display: flex;\n  width: 100%;\n"])), function (_ref13) {
  var theme = _ref13.theme;
  return theme.footerPadding;
}, function (_ref14) {
  var theme = _ref14.theme;
  return "".concat(theme.footerBorderSize, " solid ").concat(theme.footerBorderColor);
});
export { DropdownContainer, DropdownFooter, PopperContainer };