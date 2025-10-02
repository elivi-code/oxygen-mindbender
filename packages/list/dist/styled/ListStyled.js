var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import styled from 'styled-components';
export var ListStyled = styled.ul(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: ", ";\n  margin: ", ";\n  list-style: ", ";\n  max-width: ", ";\n  border-bottom: ", " solid\n    ", ";\n  background: ", ";\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.listPadding;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.listMargin;
}, function (_ref3) {
  var isOrdered = _ref3.isOrdered,
    theme = _ref3.theme;
  return isOrdered ? 'decimal' : theme.listStyle;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.listMaxWidth;
}, function (props) {
  return props.isGroup ? '1px' : '0';
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.listGroupBorderColor;
}, function (_ref6) {
  var withBackground = _ref6.withBackground,
    theme = _ref6.theme;
  return withBackground ? theme.listBackground : 'transparent';
});
export default ListStyled;