var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import styled from 'styled-components';
var ContextMenu = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  z-index: ", ";\n\n  width: ", ";\n  padding: ", ";\n  border-radius: ", ";\n  margin: 1px;\n  border: ", ";\n\n  background-color: ", ";\n  box-shadow: ", ";\n"])), function (_ref) {
  var isDisabled = _ref.isDisabled;
  return isDisabled && 'cursor: not-allowed;';
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.contextMenuZIndex;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.contextMenuWidth;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.contextMenuPadding;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.contextMenuBorderRadius;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.contextMenuBorder;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.contextMenuBackground;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.contextMenuBoxShadow;
});
export default ContextMenu;