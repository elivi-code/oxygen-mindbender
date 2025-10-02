var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import styled from 'styled-components';
var BreadcrumbsSeparator = styled.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  font-size: ", ";\n  font-weight: ", ";\n  padding: ", ";\n  color: ", ";\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.separatorFontSize;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.separatorFontWeight;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.separatorPadding;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.separatorTextColor;
});
export default BreadcrumbsSeparator;