var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import styled from 'styled-components';
var TextFieldDescription = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  color: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  font-style: ", ";\n  font-weight: ", ";\n  line-height: ", ";\n  text-align: left;\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.descriptionColor;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.descriptionFontFamily;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.descriptionFontSize;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.descriptionFontStyle;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.descriptionFontWeight;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.descriptionLineHeight;
});
export default TextFieldDescription;