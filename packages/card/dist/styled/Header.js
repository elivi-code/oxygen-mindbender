var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import styled from 'styled-components';
var Header = styled.div.attrs(function (_ref) {
  var testId = _ref.testId;
  return {
    'data-test-id': testId
  };
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  justify-content: center;\n  font-weight: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  color: ", ";\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.cardHeaderFontWeight;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.cardHeaderFontSize;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.cardHeaderLineHeight;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.cardHeaderColor;
});
export default Header;